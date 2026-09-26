import Link from "next/link";
import { deletePostAction } from "@/lib/cms/actions";
import { getAdminPostsList } from "@/lib/cms/store";
import { PostKind, PostStatus } from "@/lib/cms/types";
import { hasPermission } from "@/lib/auth/types";
import { requireSession } from "@/lib/auth/session";

export default async function AdminPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string; status?: string; q?: string }>;
}) {
  const user = await requireSession();
  const params = await searchParams;

  const selectedKind = params.kind as PostKind | undefined;
  const selectedStatus = params.status as PostStatus | undefined;
  const query = params.q;

  const posts = await getAdminPostsList({
    kind: selectedKind,
    status: selectedStatus,
    query,
  });

  const canDelete = hasPermission(user.role, "content:delete");

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Материалы ({posts.length})</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Управление новостями, статьями и лонгридами с поддержкой мультиязычности.
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/admin/posts/new" className="admin-btn admin-btn--primary">
            + Создать материал
          </Link>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="admin-filters-bar">
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Link
            href="/admin/posts"
            className={`admin-btn admin-btn--sm ${
              !selectedKind ? "admin-btn--primary" : "admin-btn--secondary"
            }`}
          >
            Все типы
          </Link>
          <Link
            href="/admin/posts?kind=NEWS"
            className={`admin-btn admin-btn--sm ${
              selectedKind === PostKind.NEWS
                ? "admin-btn--primary"
                : "admin-btn--secondary"
            }`}
          >
            Новости
          </Link>
          <Link
            href="/admin/posts?kind=ARTICLE"
            className={`admin-btn admin-btn--sm ${
              selectedKind === PostKind.ARTICLE
                ? "admin-btn--primary"
                : "admin-btn--secondary"
            }`}
          >
            Статьи
          </Link>
          <Link
            href="/admin/posts?kind=STORY"
            className={`admin-btn admin-btn--sm ${
              selectedKind === PostKind.STORY
                ? "admin-btn--primary"
                : "admin-btn--secondary"
            }`}
          >
            Истории
          </Link>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link
            href="/admin/posts?status=PUBLISHED"
            className={`admin-btn admin-btn--sm ${
              selectedStatus === PostStatus.PUBLISHED
                ? "admin-btn--primary"
                : "admin-btn--secondary"
            }`}
          >
            Опубликовано
          </Link>
          <Link
            href="/admin/posts?status=DRAFT"
            className={`admin-btn admin-btn--sm ${
              selectedStatus === PostStatus.DRAFT
                ? "admin-btn--primary"
                : "admin-btn--secondary"
            }`}
          >
            Черновики
          </Link>
        </div>
      </div>

      {/* Posts Table */}
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Тип</th>
              <th>Статус</th>
              <th>Переводы</th>
              <th>Автор</th>
              <th>Дата публикации</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              const statusClass =
                post.status === PostStatus.PUBLISHED
                  ? "admin-status-badge--published"
                  : "admin-status-badge--draft";

              return (
                <tr key={post.id}>
                  <td>
                    <Link
                      href={`/admin/posts/${post.id}`}
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {post.title}
                    </Link>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-mono)",
                        marginTop: "0.2rem",
                      }}
                    >
                      /{post.slug}
                    </div>
                  </td>
                  <td>
                    <span className="admin-status-badge">{post.kind}</span>
                  </td>
                  <td>
                    <span className={`admin-status-badge ${statusClass}`}>
                      {post.status}
                    </span>
                  </td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    <span
                      style={{
                        color: post.localeCoverage.ru
                          ? "var(--accent-active)"
                          : "var(--text-secondary)",
                        marginRight: "0.4rem",
                      }}
                    >
                      RU {post.localeCoverage.ru ? "✓" : "—"}
                    </span>
                    <span
                      style={{
                        color: post.localeCoverage.uk
                          ? "var(--accent-active)"
                          : "var(--text-secondary)",
                        marginRight: "0.4rem",
                      }}
                    >
                      UK {post.localeCoverage.uk ? "✓" : "—"}
                    </span>
                    <span
                      style={{
                        color: post.localeCoverage.en
                          ? "var(--accent-active)"
                          : "var(--text-secondary)",
                      }}
                    >
                      EN {post.localeCoverage.en ? "✓" : "—"}
                    </span>
                  </td>
                  <td style={{ fontSize: "0.85rem" }}>{post.authorName}</td>
                  <td
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("ru", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }).format(new Date(post.publishedAt))
                      : "—"}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="admin-btn admin-btn--secondary admin-btn--sm"
                      >
                        Править
                      </Link>

                      {canDelete ? (
                        <form action={deletePostAction}>
                          <input type="hidden" name="postId" value={post.id} />
                          <button
                            type="submit"
                            className="admin-btn admin-btn--secondary admin-btn--sm"
                            style={{ color: "#ff3b25", borderColor: "rgba(255, 59, 37, 0.4)" }}
                          >
                            Удалить
                          </button>
                        </form>
                      ) : null}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
