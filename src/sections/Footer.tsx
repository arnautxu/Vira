import { Pill } from "../components/Pill";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--vira-ink)",
        color: "rgba(255,255,255,0.7)",
        padding: "60px 0 40px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Pill height={28} />
          <p style={{ fontSize: 13, maxWidth: "32ch" }}>
            A TFG project by Arnau Piñol · ESDAPC 2025 · with Fundació Adana.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(120px, 1fr))",
            gap: 40,
            fontSize: 13,
          }}
          className="footer-cols"
        >
          <div>
            <div style={{ color: "white", fontWeight: 800, marginBottom: 12 }}>Product</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="#product">Features</a></li>
              <li><a href="#mascot">Viri</a></li>
              <li><a href="#waitlist">Waitlist</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 800, marginBottom: 12 }}>Project</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="https://vimeo.com/1084667945" target="_blank" rel="noreferrer">Video</a></li>
              <li><a href="#team">Backed by</a></li>
              <li><a href="#why">Research</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 800, marginBottom: 12 }}>Contact</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="mailto:hello@vira.app">hello@vira.app</a></li>
              <li><a href="https://github.com/arnautxu/Vira" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span>© {new Date().getFullYear()} Vira. All rights reserved.</span>
        <span>Made with ✺ in Barcelona.</span>
      </div>

      <style>{`
        footer a:hover { color: white; }
        @media (max-width: 640px) {
          .footer-cols { grid-template-columns: 1fr 1fr; gap: 24px; }
        }
      `}</style>
    </footer>
  );
}
