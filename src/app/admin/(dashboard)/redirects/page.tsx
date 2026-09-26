import { revalidatePath } from "next/cache";
import { logAuditEvent } from "@/lib/audit/logger";
import { requirePermission } from "@/lib/auth/session";

interface StoredRedirect {
  id: string;
  fromPath: string;
  toPath: string;
  statusCode: number;
  reason: string;
  createdAt: Date;
}

const mockRedirects: StoredRedirect[] = [
  {
    id: "red-1",
    fromPath: "/ru/articles/dreamcast-ahead-of-time-old",
    toPath: "/ru/articles/pochemu-dreamcast-operedila-svoyo-vremya",
    statusCode: 301,
    reason: "Slug updated in CMS (Алексей Морозов)",
    createdAt: new Date("2024-08-14T10:05:00Z"),
  },
  {
    id: "red-2",
    fromPath: "/ru/news/snes-prototype-found-1993",
    toPath: "/ru/news/neizvestnyj-prototip-dlya-snes",
    statusCode: 301,
    reason: "Slug updated in CMS (Мария Ветрова)",
    createdAt: new Date("2024-08-15T15:00:00Z"),
  },
];

export default async function AdminRedirectsPage() {
  const user = await requirePermission("redirects:manage");

  async function addRedirectAction(formData: FormData) {
    "use server";
    const fromPath = formData.get("fromPath") as string;
    const toPath = formData.get("toPath") as string;
    const statusCode = parseInt((formData.get("statusCode") as string) || "301", 10);
    const reason = formData.get("reason") as string;

    if (!fromPath || !toPath) return;

    mockRedirects.unshift({
      id: `red-${Date.now()}`,
      fromPath,
      toPath,
      statusCode,
      reason: reason || `Manual redirect (${user.name})`,
      createdAt: new Date(),
    });

    await logAuditEvent({
      actorId: user.id,
      actorName: user.name,
      action: "REDIRECT_CREATED",
      entity: "Redirect",
      details: { fromPath, toPath, statusCode },
    });

    revalidatePath("/admin/redirects");
  }

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Редиректы ({mockRedirects.length})</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Управление правилами 301 / 302 перенаправлений. Создаются автоматически при смене slug или вручную.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem" }}>
        {/* Redirects Table */}
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Исходный URL (From)</th>
                <th>Целевой URL (To)</th>
                <th>Код</th>
                <th>Причина</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {mockRedirects.map((r) => (
                <tr key={r.id}>
                  <td>
                    <code style={{ fontSize: "0.8rem", color: "#ff5a1f" }}>
                      {r.fromPath}
                    </code>
                  </td>
                  <td>
                    <code style={{ fontSize: "0.8rem", color: "#b7ff3c" }}>
                      {r.toPath}
                    </code>
                  </td>
                  <td>
                    <span className="admin-status-badge">{r.statusCode}</span>
                  </td>
                  <td style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {r.reason}
                  </td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    {new Intl.DateTimeFormat("ru", { dateStyle: "short" }).format(r.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Redirect Form */}
        <div
          style={{
            background: "var(--background-surface)",
            border: "1px solid var(--border-color)",
            padding: "1.25rem",
          }}
        >
          <h2
            style={{
              fontSize: "0.95rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              marginBottom: "1rem",
              color: "var(--accent-action)",
            }}
          >
            + Новое перенаправление
          </h2>

          <form action={addRedirectAction} className="admin-login-form">
            <div className="admin-form-group">
              <label htmlFor="fromPath" className="admin-form-label">
                Исходный путь (From) *
              </label>
              <input
                id="fromPath"
                name="fromPath"
                type="text"
                required
                placeholder="/ru/articles/old-slug"
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="toPath" className="admin-form-label">
                Целевой путь (To) *
              </label>
              <input
                id="toPath"
                name="toPath"
                type="text"
                required
                placeholder="/ru/articles/new-slug"
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="statusCode" className="admin-form-label">
                HTTP Код
              </label>
              <select id="statusCode" name="statusCode" className="admin-form-select">
                <option value="301">301 (Permanent Redirect)</option>
                <option value="302">302 (Temporary Redirect)</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label htmlFor="reason" className="admin-form-label">
                Причина создания
              </label>
              <input
                id="reason"
                name="reason"
                type="text"
                placeholder="Миграция старого URL"
                className="admin-form-input"
              />
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn--primary"
              style={{ marginTop: "0.5rem" }}
            >
              Добавить 301 редирект
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
