export function Backed() {
  return (
    <section id="team" style={{ background: "var(--vira-cream)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 60,
            alignItems: "center",
          }}
          className="backed-grid"
        >
          <div>
            <span className="eyebrow">Backed by</span>
            <h2 className="h-section" style={{ marginTop: 18, marginBottom: 22 }}>
              Built with the people <br />
              who know ADHD best.
            </h2>
          </div>

          <div>
            <p className="lead" style={{ marginBottom: 28 }}>
              Vira is being developed alongside <strong>US-licensed ADHD
              clinicians</strong>, child psychiatrists, school counselors, and
              the teens themselves. Research came first. Design followed.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              {["14 ADHD clinicians", "3 child psychiatrists", "CHADD-aligned", "n=200+ US teens"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 999,
                      background: "white",
                      border: "1px solid var(--vira-line)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--vira-ink-soft)",
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <blockquote
              style={{
                marginTop: 36,
                paddingLeft: 22,
                borderLeft: "3px solid var(--vira-lila)",
                fontSize: "clamp(20px, 2.4vw, 26px)",
                lineHeight: 1.35,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--vira-ink)",
                maxWidth: "32ch",
              }}
            >
              "Technology can act as a bridge between the difficulties and the
              learning opportunities for ADHD teens."
              <footer
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 0,
                  color: "var(--vira-ink-soft)",
                }}
              >
               , Cabas-Hoyos et al., 2021
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .backed-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
