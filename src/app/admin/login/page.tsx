import { loginAction } from "@/lib/auth/actions";
import { PRESET_USERS, UserRole } from "@/lib/auth/types";

export default function AdminLoginPage() {
  return (
    <div className="admin-login-wrap">
      <div className="admin-login-box">
        <h1 className="admin-login-title">CHECKPOINT // ACCESS</h1>
        <p className="admin-login-subtitle">
          Вход в редакционную панель управления
        </p>

        <form
          action={async (formData: FormData) => {
            "use server";
            await loginAction(null, formData);
          }}
          className="admin-login-form"
        >
          <div className="admin-form-group">
            <label htmlFor="email" className="admin-form-label">
              Рабочий Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="editor@checkpoint-retro.local"
              className="admin-form-input"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="role" className="admin-form-label">
              Роль актора (для новых учетных записей)
            </label>
            <select id="role" name="role" className="admin-form-select">
              <option value={UserRole.ADMIN}>ADMIN (Главный редактор)</option>
              <option value={UserRole.EDITOR}>EDITOR (Редактор)</option>
              <option value={UserRole.AUTHOR}>AUTHOR (Автор)</option>
              <option value={UserRole.TRANSLATOR}>TRANSLATOR (Переводчик)</option>
            </select>
          </div>

          <button
            type="submit"
            className="admin-btn admin-btn--primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            Войти в систему
          </button>
        </form>

        {/* 1-Click Preset Logins for Dev / QA */}
        <div className="admin-preset-logins">
          <div className="admin-preset-title">
            Быстрый вход для тестирования ролей:
          </div>
          <div className="admin-preset-btns">
            {Object.entries(PRESET_USERS).map(([roleKey, preset]) => (
              <form
                key={roleKey}
                action={async () => {
                  "use server";
                  const fd = new FormData();
                  fd.set("email", preset.email);
                  fd.set("role", preset.role);
                  await loginAction(null, fd);
                }}
              >
                <button
                  type="submit"
                  className="admin-preset-btn"
                  style={{ width: "100%" }}
                >
                  <span>{preset.name}</span>
                  <span className="admin-role-badge">{preset.role}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
