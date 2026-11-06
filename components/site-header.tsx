import Link from "next/link";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#get-started", label: "Get started" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo />
          <span>Emergent</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-muted transition-colors hover:text-foreground sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="rounded-full bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-85"
          >
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}
