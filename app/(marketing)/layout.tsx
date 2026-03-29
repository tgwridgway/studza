import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-sa-green">Studza</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-8 items-center rounded-lg bg-sa-green px-3 text-sm font-medium text-white hover:bg-sa-green/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Studza. Built for South African students.</p>
      </footer>
    </div>
  );
}
