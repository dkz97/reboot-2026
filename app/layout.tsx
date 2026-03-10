import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "reboot-2026 | 个人博客",
  description: "dkz97 的个人博客与项目展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center py-8 mt-16" style={{ color: "var(--text-muted)", fontSize: "12px" }}>
          <p>© 2026 dkz97 · Made with ♥ & Next.js</p>
        </footer>
      </body>
    </html>
  );
}
