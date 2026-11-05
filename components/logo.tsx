export function Logo({ className = "size-6" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`${className} grid grid-cols-2 gap-0.5 rounded-md bg-accent p-1`}
    >
      <span className="rounded-[2px] bg-accent-foreground" />
      <span className="rounded-[2px] bg-accent-foreground/50" />
      <span className="rounded-[2px] bg-accent-foreground/50" />
      <span className="rounded-[2px] bg-accent-foreground" />
    </span>
  );
}
