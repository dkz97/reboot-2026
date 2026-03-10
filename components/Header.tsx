"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "BLOG", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "4px solid var(--pixel-green)",
        backgroundColor: "var(--bg-card)",
        padding: "20px 0 16px",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "14px",
            color: "var(--pixel-green)",
            textDecoration: "none",
          }}
        >
          &gt; REBOOT-2026_
        </Link>

        <nav style={{ display: "flex", gap: "48px" }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "12px",
                  color: isActive ? "var(--pixel-green)" : "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid var(--pixel-green)" : "2px solid transparent",
                  paddingBottom: "4px",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
