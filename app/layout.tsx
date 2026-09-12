import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marathi Mate",
  description: "Learn practical Marathi from zero with guided beginner lessons and pronunciation practice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <header className="border-b border-black/5 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-display text-lg font-semibold text-ink">
              Marathi Mate
            </Link>
            <span className="text-xs font-medium text-muted sm:text-sm">
              Marathi from zero
            </span>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-8 sm:py-10">{children}</main>
      </body>
    </html>
  );
}
