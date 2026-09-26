import Link from "next/link";
import { notFound } from "next/navigation";
import { PostEditorForm } from "@/components/admin/PostEditorForm";
import { getAdminPost } from "@/lib/cms/store";
import { requirePermission } from "@/lib/auth/session";

export default async function AdminEditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requirePermission("content:write");
  const { id } = await params;

  const post = await getAdminPost(id);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Редактирование материала</h1>
          <p className="muted" style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem" }}>
            ID: {post.id} | Создано: {new Intl.DateTimeFormat("ru").format(post.createdAt)}
          </p>
        </div>

        <div className="admin-page-actions">
          <Link href="/admin/posts" className="admin-btn admin-btn--secondary">
            ← Ко всем материалам
          </Link>
        </div>
      </div>

      <PostEditorForm initialPost={post} />
    </div>
  );
}
