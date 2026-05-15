import { useEffect, useState } from "react";
import { Pill } from "../components/Pill";
import { Button } from "../components/Button";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#why", label: "Why" },
  { href: "#mascot", label: "Viri" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
        padding: "16px 0",
        transition: "all 240ms var(--ease-out)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          width: "calc(100% - 32px)",
          maxWidth: 1200,
          padding: scrolled ? "8px 14px 8px 22px" : "10px 14px 10px 24px",
          borderRadius: 999,
          background: scrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.5)",
          backdropFilter: "saturate(180%) blur(18px)",
          WebkitBackdropFilter: "saturate(180%) blur(18px)",
          border: scrolled
            ? "1px solid rgba(187,119,255,0.18)"
            : "1px solid rgba(255,255,255,0.6)",
          boxShadow: scrolled ? "0 14px 36px -22px rgba(60,30,90,0.3)" : "none",
        }}
      >
        <a href="#top" aria-label="Vira home" style={{ display: "flex", alignItems: "center" }}>
          <Pill height={28} />
        </a>

        <ul
          style={{
            display: "flex",
            gap: 28,
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--vira-ink-soft)",
          }}
          className="nav-links"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ transition: "color 200ms" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button as="a" href="#waitlist" variant="primary" style={{ padding: "10px 18px", fontSize: 14 }}>
          Join waitlist →
        </Button>
      </nav>

      <style>{`
        .nav-links a:hover { color: var(--vira-lila-deep); }
        @media (max-width: 720px) { .nav-links { display: none; } }
      `}</style>
    </header>
  );
}
