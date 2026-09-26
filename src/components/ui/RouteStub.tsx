import { RetroFrame } from "./RetroFrame";

export function RouteStub({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="page-shell page-main">
      <h1 className="display-title">{title}</h1>
      <RetroFrame className="route-stub">
        <p className="muted">{description}</p>
      </RetroFrame>
    </main>
  );
}
