import Link from "next/link";
import { getSession } from "@/lib/auth/session";

export default async function AdminForbiddenPage() {
  const user = await getSession();

  return (
    <div className="admin-forbidden-box">
      <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }} aria-hidden="true">
        🚫
      </div>
      <h1 className="admin-forbidden-title">403 // ДОСТУП ОГРАНИЧЕН</h1>
      <p className="admin-forbidden-text">
        Ваша текущая роль <strong>{user?.role ?? "ГОСТЬ"}</strong> не обладает
        правами для совершения этой операции или просмотра данного раздела.
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link href="/admin" className="admin-btn admin-btn--primary">
          На дашборд
        </Link>
        <Link href="/admin/login" className="admin-btn admin-btn--secondary">
          Сменить аккаунт
        </Link>
      </div>
    </div>
  );
}
