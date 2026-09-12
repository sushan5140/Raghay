import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marathi Mate",
  description: "Learn Marathi — greetings, numbers, family, and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <header className="border-b border-black/5 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-display text-lg font-semibold text-ink">
              Marathi Mate
            </a>
            <span className="text-sm text-muted">Lessons in romanized Marathi</span>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
