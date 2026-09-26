import { requirePermission } from "@/lib/auth/session";

export default async function AdminTaxonomiesPage() {
  await requirePermission("taxonomy:manage");

  const platforms = [
    { key: "pc", nameRu: "PC", nameUk: "PC", nameEn: "PC", color: "#f4df19" },
    { key: "playstation", nameRu: "PlayStation", nameUk: "PlayStation", nameEn: "PlayStation", color: "#27b7ff" },
    { key: "nintendo", nameRu: "Nintendo", nameUk: "Nintendo", nameEn: "Nintendo", color: "#ff3b25" },
    { key: "sega", nameRu: "SEGA", nameUk: "SEGA", nameEn: "SEGA", color: "#27b7ff" },
    { key: "arcade", nameRu: "Аркады", nameUk: "Аркади", nameEn: "Arcade", color: "#b7ff3c" },
    { key: "dreamcast", nameRu: "Dreamcast", nameUk: "Dreamcast", nameEn: "Dreamcast", color: "#27b7ff" },
  ];

  const categories = [
    { key: "dev-history", nameRu: "Истории создания", nameUk: "Історії створення", nameEn: "Dev History", sortOrder: 1 },
    { key: "consoles", nameRu: "Консоли", nameUk: "Консолі", nameEn: "Consoles", sortOrder: 2 },
    { key: "people", nameRu: "Люди", nameUk: "Люди", nameEn: "People", sortOrder: 3 },
    { key: "collections", nameRu: "Подборки", nameUk: "Добірки", nameEn: "Collections", sortOrder: 4 },
    { key: "culture", nameRu: "Культура", nameUk: "Культура", nameEn: "Culture", sortOrder: 5 },
  ];

  const eras = [
    { key: "1970s", period: "1970–1979", nameRu: "1970-е: Рождение индустрии", nameEn: "1970s: Birth of Gaming" },
    { key: "1980s", period: "1980–1989", nameRu: "1980-е: Домашние компьютеры", nameEn: "1980s: Home Micros" },
    { key: "1990s", period: "1990–1999", nameRu: "1990-е: 16 БИТ и 3D-революция", nameEn: "1990s: 16-Bit & 3D Era" },
    { key: "2000s", period: "2000–2009", nameRu: "2000-е: Онлайн и новые миры", nameEn: "2000s: Online Worlds" },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Таксономии</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Управление игровыми платформами, рубриками материалов и историческими эпохами.
          </p>
        </div>
      </div>

      {/* 1. Platforms */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontFamily: "var(--font-display, monospace)", color: "var(--accent-action)", marginBottom: "0.75rem" }}>
          🎮 Платформы ({platforms.length})
        </h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Ключ</th>
                <th>Название (RU)</th>
                <th>Назва (UK)</th>
                <th>Name (EN)</th>
                <th>Цветовой токен</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr key={p.key}>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{p.key}</td>
                  <td><strong>{p.nameRu}</strong></td>
                  <td>{p.nameUk}</td>
                  <td>{p.nameEn}</td>
                  <td>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "12px", height: "12px", background: p.color, borderRadius: "2px" }} />
                      <code style={{ fontSize: "0.75rem" }}>{p.color}</code>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Categories */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontFamily: "var(--font-display, monospace)", color: "var(--accent-active)", marginBottom: "0.75rem" }}>
          📁 Рубрики ({categories.length})
        </h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Порядок</th>
                <th>Ключ</th>
                <th>Название (RU)</th>
                <th>Назва (UK)</th>
                <th>Name (EN)</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.key}>
                  <td style={{ fontFamily: "var(--font-mono)" }}>#{c.sortOrder}</td>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{c.key}</td>
                  <td><strong>{c.nameRu}</strong></td>
                  <td>{c.nameUk}</td>
                  <td>{c.nameEn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Eras */}
      <section>
        <h2 style={{ fontSize: "1.1rem", fontFamily: "var(--font-display, monospace)", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          ⏳ Исторические эпохи ({eras.length})
        </h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Эпоха</th>
                <th>Период</th>
                <th>Название (RU)</th>
                <th>Title (EN)</th>
              </tr>
            </thead>
            <tbody>
              {eras.map((e) => (
                <tr key={e.key}>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{e.key}</td>
                  <td><span className="admin-status-badge">{e.period}</span></td>
                  <td><strong>{e.nameRu}</strong></td>
                  <td>{e.nameEn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
