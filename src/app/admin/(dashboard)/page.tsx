import Link from "next/link";
import { getRecentAuditEvents } from "@/lib/audit/logger";
import { requireSession } from "@/lib/auth/session";

export default async function AdminDashboardPage() {
  const user = await requireSession();
  const recentEvents = await getRecentAuditEvents(5);

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Редакционный дашборд</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Активная сессия: {user.name} ({user.role})
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/admin/posts" className="admin-btn admin-btn--primary">
            + Новый материал
          </Link>
          <Link href="/admin/homepage" className="admin-btn admin-btn--secondary">
            Управление главной
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="admin-metrics-grid">
        <div className="admin-metric-card">
          <div className="admin-metric-card__label">Опубликовано</div>
          <div className="admin-metric-card__value admin-metric-card__value--lime">
            18
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-card__label">Черновики</div>
          <div className="admin-metric-card__value">4</div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-card__label">Запланировано</div>
          <div className="admin-metric-card__value">1</div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-card__label">Требуют перевода</div>
          <div className="admin-metric-card__value admin-metric-card__value--orange">
            3
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-card__label">Без SEO / Alt</div>
          <div className="admin-metric-card__value">1</div>
        </div>
      </div>

      {/* Editorial Attention Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            fontFamily: "var(--font-display, monospace)",
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}
        >
          ⚠️ Требует внимания редакции
        </h2>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Материал</th>
                <th>Тип</th>
                <th>Покрытие локалями</th>
                <th>Проблема</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>SEGA Saturn 30 лет: Почему гениальная 2D-архитектура проиграла</strong>
                </td>
                <td><span className="admin-status-badge">ARTICLE</span></td>
                <td>
                  <span style={{ color: "var(--accent-active)" }}>RU ✓</span>{" "}
                  <span style={{ color: "var(--text-secondary)" }}>UK ✗</span>{" "}
                  <span style={{ color: "var(--text-secondary)" }}>EN ✗</span>
                </td>
                <td>
                  <span className="admin-status-badge admin-status-badge--warning">
                    Нет перевода на UK / EN
                  </span>
                </td>
                <td>
                  <Link href="/admin/posts" className="admin-btn admin-btn--secondary admin-btn--sm">
                    Перевести
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Найден неизвестный прототип игры для SNES</strong>
                </td>
                <td><span className="admin-status-badge">NEWS</span></td>
                <td>
                  <span style={{ color: "var(--accent-active)" }}>RU ✓</span>{" "}
                  <span style={{ color: "var(--accent-active)" }}>UK ✓</span>{" "}
                  <span style={{ color: "var(--text-secondary)" }}>EN ✗</span>
                </td>
                <td>
                  <span className="admin-status-badge admin-status-badge--warning">
                    Отсутствует SEO Description
                  </span>
                </td>
                <td>
                  <Link href="/admin/posts" className="admin-btn admin-btn--secondary admin-btn--sm">
                    Исправить
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Audit Trail Section */}
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              fontFamily: "var(--font-display, monospace)",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            🛡️ Последние события аудита
          </h2>
          <Link
            href="/admin/audit"
            className="admin-header__link"
            style={{ fontSize: "0.8rem" }}
          >
            Весь журнал аудита →
          </Link>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Время</th>
                <th>Актор</th>
                <th>Действие</th>
                <th>Сущность</th>
                <th>Детали</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((ev) => (
                <tr key={ev.id}>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    {new Intl.DateTimeFormat("ru", {
                      hour: "2-digit",
                      minute: "2-digit",
                      day: "numeric",
                      month: "short",
                    }).format(ev.createdAt)}
                  </td>
                  <td>{ev.actorName}</td>
                  <td>
                    <span className="admin-role-badge">{ev.action}</span>
                  </td>
                  <td>{ev.entity}</td>
                  <td style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    {ev.details ? JSON.stringify(ev.details) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
