import Link from "next/link";
import { revalidatePath } from "next/cache";
import { logAuditEvent } from "@/lib/audit/logger";
import { requirePermission } from "@/lib/auth/session";
import { getAdminPostsList } from "@/lib/cms/store";
import { PostStatus } from "@/lib/cms/types";

// In-memory placements state for dev/testing when DB is offline
const currentPlacements = {
  heroPostId: "post-dreamcast-story",
  breakingPostIds: ["post-snes-proto"],
};

export default async function AdminHomepagePage() {
  const user = await requirePermission("homepage:manage");
  const publishedPosts = await getAdminPostsList({
    status: PostStatus.PUBLISHED,
  });

  async function updatePlacementsAction(formData: FormData) {
    "use server";
    const heroId = formData.get("heroPostId") as string;
    if (heroId) {
      currentPlacements.heroPostId = heroId;
    }

    await logAuditEvent({
      actorId: user.id,
      actorName: user.name,
      action: "HOMEPAGE_PLACEMENTS_UPDATED",
      entity: "HomepagePlacement",
      details: { heroPostId: heroId },
    });

    revalidatePath("/ru");
    revalidatePath("/uk");
    revalidatePath("/en");
    revalidatePath("/admin/homepage");
  }

  const currentHeroPost = publishedPosts.find(
    (p) => p.id === currentPlacements.heroPostId
  );

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Управление главной страницей</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Редакционное распределение позиций: Заглавная история (Hero), Срочные новости (Breaking Strip), Выбор редакции.
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/ru" target="_blank" className="admin-btn admin-btn--secondary">
            👁 Открыть сайт ↗
          </Link>
        </div>
      </div>

      <form action={updatePlacementsAction} style={{ maxWidth: "700px" }}>
        {/* Slot: Hero Story */}
        <div
          style={{
            background: "var(--background-surface)",
            border: "1px solid var(--border-color)",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontFamily: "var(--font-display, monospace)", color: "var(--accent-action)", margin: 0 }}>
              ★ Слот 1: Главная история (Hero Story)
            </h2>
            <span className="admin-role-badge">SLOT: HERO</span>
          </div>

          <p className="muted" style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
            Занимает главный визуальный баннер на всех трёх языках портала.
          </p>

          <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
            <label htmlFor="heroPostId" className="admin-form-label">
              Выбрать опубликованный материал:
            </label>
            <select
              id="heroPostId"
              name="heroPostId"
              defaultValue={currentPlacements.heroPostId}
              className="admin-form-select"
            >
              {publishedPosts.map((post) => (
                <option key={post.id} value={post.id}>
                  [{post.kind}] {post.title}
                </option>
              ))}
            </select>
          </div>

          {currentHeroPost ? (
            <div style={{ padding: "0.75rem", background: "rgba(255, 255, 255, 0.02)", border: "1px dashed var(--border-color)", fontSize: "0.85rem" }}>
              <div><strong>Активный материал:</strong> {currentHeroPost.title}</div>
              <div className="muted" style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
                Slug: /{currentHeroPost.slug} | Автор: {currentHeroPost.authorName}
              </div>
            </div>
          ) : null}
        </div>

        {/* Slot: Breaking News */}
        <div
          style={{
            background: "var(--background-surface)",
            border: "1px solid var(--border-color)",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontFamily: "var(--font-display, monospace)", color: "var(--accent-active)", margin: 0 }}>
              ⚡ Слот 2: Срочные новости (Breaking Strip)
            </h2>
            <span className="admin-role-badge">SLOT: BREAKING</span>
          </div>

          <p className="muted" style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
            Показывается в бегущей строке под заглавным блоком.
          </p>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Новость</th>
                  <th>Тип</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {publishedPosts
                  .filter((p) => p.kind === "NEWS")
                  .map((news) => (
                    <tr key={news.id}>
                      <td>{news.title}</td>
                      <td><span className="admin-status-badge">NEWS</span></td>
                      <td><span className="admin-status-badge admin-status-badge--published">В ротации</span></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <button type="submit" className="admin-btn admin-btn--primary">
          Сохранить расстановку на главной
        </button>
      </form>
    </div>
  );
}
