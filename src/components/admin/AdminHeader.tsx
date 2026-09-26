import Link from "next/link";
import { logoutAction, switchRoleAction } from "@/lib/auth/actions";
import { UserRole, type SessionUser } from "@/lib/auth/types";

export function AdminHeader({ user }: { user: SessionUser }) {
  const getBadgeClass = (role: UserRole) => {
    switch (role) {
      case UserRole.ADMIN:
        return "admin-role-badge admin-role-badge--admin";
      case UserRole.EDITOR:
        return "admin-role-badge admin-role-badge--editor";
      case UserRole.TRANSLATOR:
        return "admin-role-badge admin-role-badge--translator";
      default:
        return "admin-role-badge";
    }
  };

  return (
    <header className="admin-header">
      <div className="admin-header__brand">
        <Link href="/admin" className="admin-header__logo">
          <span>CHECKPOINT</span>
          <span className="admin-header__logo-sub">{"//"} ADMIN</span>
        </Link>
      </div>

      <div className="admin-header__actions">
        <Link href="/ru" className="admin-header__link" target="_blank">
          ← На сайт
        </Link>

        {/* Quick Role Switcher for local verification */}
        <form
          action={async (formData: FormData) => {
            "use server";
            const newRole = formData.get("role") as UserRole;
            if (newRole) await switchRoleAction(newRole);
          }}
          className="admin-role-switch-form"
        >
          <select
            name="role"
            defaultValue={user.role}
            onChange={(e) => e.target.form?.requestSubmit()}
            className="admin-form-select admin-btn--sm"
            aria-label="Сменить активную роль для тестирования"
            title="Тестовое переключение роли"
          >
            <option value={UserRole.ADMIN}>ADMIN (Главред)</option>
            <option value={UserRole.EDITOR}>EDITOR (Редактор)</option>
            <option value={UserRole.AUTHOR}>AUTHOR (Автор)</option>
            <option value={UserRole.TRANSLATOR}>TRANSLATOR (Переводчик)</option>
          </select>
        </form>

        <div className="admin-header__user">
          <span className={getBadgeClass(user.role)}>{user.role}</span>
          <span>{user.name}</span>
        </div>

        <form action={logoutAction}>
          <button
            type="submit"
            className="admin-btn admin-btn--secondary admin-btn--sm"
          >
            Выход
          </button>
        </form>
      </div>
    </header>
  );
}
