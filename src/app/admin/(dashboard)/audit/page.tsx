import Link from "next/link";
import { getRecentAuditEvents } from "@/lib/audit/logger";
import { requireRole } from "@/lib/auth/session";
import { UserRole } from "@/lib/auth/types";

export default async function AdminAuditPage() {
  // Security gate: only ADMIN role can view the system audit trail
  const user = await requireRole([UserRole.ADMIN]);
  const events = await getRecentAuditEvents(50);

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Журнал аудита</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Аудитор: {user.name} | Фиксация критических действий: публикации, изменения ролей, редиректы, настройки.
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/admin" className="admin-btn admin-btn--secondary">
            ← На дашборд
          </Link>
        </div>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Время (UTC)</th>
              <th>Актор</th>
              <th>Действие</th>
              <th>Сущность</th>
              <th>ID Сущности</th>
              <th>Детали</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.id}>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                  {ev.id.slice(0, 14)}
                </td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                  {new Intl.DateTimeFormat("ru", {
                    dateStyle: "short",
                    timeStyle: "medium",
                  }).format(ev.createdAt)}
                </td>
                <td>
                  <strong>{ev.actorName}</strong>
                </td>
                <td>
                  <span className="admin-role-badge">{ev.action}</span>
                </td>
                <td>{ev.entity}</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                  {ev.entityId ?? "—"}
                </td>
                <td style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  {ev.details ? JSON.stringify(ev.details) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
