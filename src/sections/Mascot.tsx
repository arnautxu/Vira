import { useEffect, useRef } from "react";
import { MascotScene } from "../three/MascotScene";

export function Mascot() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height - vh;
        const passed = Math.min(Math.max(-rect.top, 0), total);
        progressRef.current = total > 0 ? passed / total : 0;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="mascot"
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #f4ebff 0%, #e8d5ff 100%)",
        height: "240vh",
        paddingBlock: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          overflow: "hidden",
        }}
        className="mascot-sticky"
      >
        <div
          className="container"
          style={{
            paddingBlock: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gridColumn: 1,
          }}
        >
          <span className="eyebrow">Meet Viri</span>
          <h2 className="h-section" style={{ marginTop: 18, marginBottom: 22 }}>
            Your daily <br />
            <span style={{ color: "var(--vira-lila-deep)" }}>companion.</span>
          </h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Viri isn't a chatbot. Viri is a presence, a small character who
            cheers, prompts, and rests with you. Six moods. Endless skins.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              maxWidth: 460,
            }}
          >
            {[
              ["Cheers", "when you finish"],
              ["Prompts", "when you stall"],
              ["Breathes", "when you spiral"],
              ["Rests", "when you do"],
            ].map(([h, b]) => (
              <li
                key={h}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  borderRadius: 18,
                  padding: "14px 16px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 16 }}>{h}</div>
                <div style={{ fontSize: 13, color: "var(--vira-ink-soft)" }}>{b}</div>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ gridColumn: 2, position: "relative", height: "100%" }}>
          <MascotScene progressRef={progressRef} />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .mascot-sticky { grid-template-columns: 1fr; }
          .mascot-sticky > div:first-child { padding-top: 60px; }
          .mascot-sticky > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
