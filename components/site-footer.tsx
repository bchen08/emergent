import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="size-5" />
          <span className="font-medium text-foreground">Emergent</span>
        </div>
        <p>&copy; 2026 Emergent. All rights reserved.</p>
      </div>
    </footer>
  );
}
