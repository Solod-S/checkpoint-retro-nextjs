import { RetroFrame } from "@/components/ui/RetroFrame";

export default function AdminPage() {
  return (
    <main className="page-shell page-main">
      <h1 className="display-title">Admin</h1>
      <RetroFrame className="admin-note">
        <p>Admin route shell.</p>
        <p className="muted">
          До реализации auth этот route нельзя считать production-ready. На Phase 4 он должен быть
          защищен server-side authorization.
        </p>
      </RetroFrame>
    </main>
  );
}
