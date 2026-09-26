import { revalidatePath } from "next/cache";
import { logAuditEvent } from "@/lib/audit/logger";
import { requireRole } from "@/lib/auth/session";
import { UserRole } from "@/lib/auth/types";

export default async function AdminSettingsPage() {
  const user = await requireRole([UserRole.ADMIN]);

  async function saveSettingsAction(formData: FormData) {
    "use server";
    const siteTitle = formData.get("siteTitle") as string;
    const contactEmail = formData.get("contactEmail") as string;

    await logAuditEvent({
      actorId: user.id,
      actorName: user.name,
      action: "SITE_SETTINGS_UPDATED",
      entity: "SiteSetting",
      details: { siteTitle, contactEmail },
    });

    revalidatePath("/admin/settings");
    revalidatePath("/ru");
    revalidatePath("/uk");
    revalidatePath("/en");
  }

  return (
    <div style={{ maxWidth: "720px" }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Настройки сайта</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Глобальная конфигурация портала Checkpoint Retro. Доступно только роли ADMIN.
          </p>
        </div>
      </div>

      <form action={saveSettingsAction} className="admin-login-form">
        {/* General Settings */}
        <div
          style={{
            background: "var(--background-surface)",
            border: "1px solid var(--border-color)",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "1rem", color: "var(--accent-action)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Основные параметры
          </h2>

          <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
            <label htmlFor="siteTitle" className="admin-form-label">
              Название портала
            </label>
            <input
              id="siteTitle"
              name="siteTitle"
              type="text"
              defaultValue="Checkpoint Retro"
              className="admin-form-input"
            />
          </div>

          <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
            <label htmlFor="contactEmail" className="admin-form-label">
              Контактный Email редакции
            </label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              defaultValue="editorial@checkpoint-retro.local"
              className="admin-form-input"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="footerText" className="admin-form-label">
              Текст футера
            </label>
            <input
              id="footerText"
              name="footerText"
              type="text"
              defaultValue="© 2024 Checkpoint Retro. Независимый ретро-игровой портал."
              className="admin-form-input"
            />
          </div>
        </div>

        {/* Social Accounts (Verified Production Set: X, FB, Threads, IG) */}
        <div
          style={{
            background: "var(--background-surface)",
            border: "1px solid var(--border-color)",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1rem", color: "var(--accent-active)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Социальные сети
          </h2>
          <p className="muted" style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
            Разрешенный продакшн-набор: X / Twitter, Facebook, Threads, Instagram.
          </p>

          <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
            <label htmlFor="socialX" className="admin-form-label">X / Twitter</label>
            <input id="socialX" name="socialX" type="url" defaultValue="https://x.com/checkpoint_retro" className="admin-form-input" />
          </div>

          <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
            <label htmlFor="socialFb" className="admin-form-label">Facebook</label>
            <input id="socialFb" name="socialFb" type="url" defaultValue="https://facebook.com/checkpointretro" className="admin-form-input" />
          </div>

          <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
            <label htmlFor="socialThreads" className="admin-form-label">Threads</label>
            <input id="socialThreads" name="socialThreads" type="url" defaultValue="https://threads.net/@checkpointretro" className="admin-form-input" />
          </div>

          <div className="admin-form-group">
            <label htmlFor="socialIg" className="admin-form-label">Instagram</label>
            <input id="socialIg" name="socialIg" type="url" defaultValue="https://instagram.com/checkpointretro" className="admin-form-input" />
          </div>
        </div>

        <button type="submit" className="admin-btn admin-btn--primary">
          Сохранить настройки
        </button>
      </form>
    </div>
  );
}
