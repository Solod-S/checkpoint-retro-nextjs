export function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {action}
    </div>
  );
}
