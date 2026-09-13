import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marathi Mate",
  description: "Learn Marathi from zero to conversational independence through guided lessons, speaking, listening, conversation, and adaptive mastery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <header className="border-b border-black/5 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
            <Link href="/" className="shrink-0 font-display text-lg font-semibold text-ink">
              Marathi Mate
            </Link>
            <nav className="flex items-center gap-3 overflow-x-auto text-xs font-medium sm:text-sm">
              <Link href="/" className="whitespace-nowrap text-muted transition hover:text-ink">Learn</Link>
              <Link href="/speaking" className="whitespace-nowrap text-muted transition hover:text-ink">Speak</Link>
              <Link href="/listening" className="whitespace-nowrap text-muted transition hover:text-ink">Listen</Link>
              <Link href="/conversation" className="whitespace-nowrap text-muted transition hover:text-ink">Conversation</Link>
              <Link href="/mastery" className="whitespace-nowrap text-primary transition hover:opacity-80">Mastery</Link>
              <Link href="/review" className="whitespace-nowrap text-muted transition hover:text-ink">Review</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-8 sm:py-10">{children}</main>
      </body>
    </html>
  );
}
