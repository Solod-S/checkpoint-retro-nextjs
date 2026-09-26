import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { requireSession } from "@/lib/auth/session";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Server-side security gate: unauthenticated access is immediately blocked
  const user = await requireSession();

  return (
    <div className="admin-layout">
      <AdminHeader user={user} />
      <div className="admin-body">
        <AdminSidebar user={user} />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
