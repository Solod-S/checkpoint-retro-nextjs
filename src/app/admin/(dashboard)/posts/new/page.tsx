import Link from "next/link";
import { PostEditorForm } from "@/components/admin/PostEditorForm";
import { requirePermission } from "@/lib/auth/session";

export default async function AdminNewPostPage() {
  await requirePermission("content:write");

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Новый материал</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            Создание языконезависимого поста и локализованных версий (RU / UK / EN).
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/admin/posts" className="admin-btn admin-btn--secondary">
            ← Ко всем материалам
          </Link>
        </div>
      </div>

      <PostEditorForm />
    </div>
  );
}
