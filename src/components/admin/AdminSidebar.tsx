import Link from "next/link";
import { canAccessAdminSection, type SessionUser } from "@/lib/auth/types";

interface NavItem {
  id: string;
  href: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", href: "/admin", label: "Дашборд", icon: "📊" },
  { id: "posts", href: "/admin/posts", label: "Материалы", icon: "📝" },
  { id: "homepage", href: "/admin/homepage", label: "Главная страница", icon: "🏠" },
  { id: "taxonomies", href: "/admin/taxonomies", label: "Таксономии", icon: "🏷️" },
  { id: "redirects", href: "/admin/redirects", label: "Редиректы", icon: "🔀" },
  { id: "audit", href: "/admin/audit", label: "Журнал аудита", icon: "🛡️" },
  { id: "settings", href: "/admin/settings", label: "Настройки", icon: "⚙️" },
];

export function AdminSidebar({
  user,
  currentPath = "/admin",
}: {
  user: SessionUser;
  currentPath?: string;
}) {
  return (
    <aside className="admin-sidebar" aria-label="Навигация панели управления">
      <nav className="admin-nav">
        {NAV_ITEMS.map((item) => {
          const isAllowed = canAccessAdminSection(user.role, item.id);
          const isActive =
            item.href === "/admin"
              ? currentPath === "/admin"
              : currentPath.startsWith(item.href);

          if (!isAllowed) {
            return (
              <span
                key={item.id}
                className="admin-nav__link admin-nav__link--disabled"
                title="Недостаточно прав для доступа к разделу"
              >
                <span className="admin-nav__icon" aria-hidden="true">
                  🔒
                </span>
                <span>{item.label}</span>
              </span>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`admin-nav__link ${
                isActive ? "admin-nav__link--active" : ""
              }`}
            >
              <span className="admin-nav__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
