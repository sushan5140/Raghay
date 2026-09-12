import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marathi Mate",
  description: "Learn practical Marathi from zero through guided lessons, listening, grammar, and adaptive review",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <header className="border-b border-black/5 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="font-display text-lg font-semibold text-ink">
              Marathi Mate
            </Link>
            <nav className="flex items-center gap-4 text-xs font-medium sm:text-sm">
              <Link href="/" className="text-muted transition hover:text-ink">
                Learn
              </Link>
              <Link href="/review" className="text-primary transition hover:opacity-80">
                Review
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-8 sm:py-10">{children}</main>
      </body>
    </html>
  );
}
