const STATS = [
  {
    figure: "82%",
    body: "of ADHD teens struggle to plan their time.",
    accent: "var(--sec-blue)",
  },
  {
    figure: "35%",
    body: "actually use any organization tool today.",
    accent: "var(--sec-pink)",
  },
  {
    figure: "60%+",
    body: "say a tool could help, if it were simple enough.",
    accent: "var(--sec-green)",
  },
];

export function Problem() {
  return (
    <section id="why" style={{ background: "var(--vira-paper)" }}>
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <span className="eyebrow">The gap</span>
          <h2 className="h-section" style={{ marginTop: 18 }}>
            Productivity apps weren't <br />built for an ADHD brain.
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            ADHD affects 5% of teenagers worldwide. Yet none of the apps in the
            stores are designed for the way they think, feel, or fall off.
            Vira fills that gap.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {STATS.map((s, i) => (
            <article
              key={i}
              style={{
                background: "var(--vira-cream)",
                border: "1px solid var(--vira-line)",
                borderRadius: "var(--r-card)",
                padding: "36px 30px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: s.accent,
                  opacity: 0.85,
                }}
              />
              <h3
                style={{
                  fontSize: "clamp(46px, 6vw, 72px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  marginBottom: 12,
                  color: "var(--vira-ink)",
                }}
              >
                {s.figure}
              </h3>
              <p style={{ fontSize: 16, color: "var(--vira-ink-soft)", maxWidth: "26ch" }}>
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <p
          style={{
            marginTop: 28,
            fontSize: 12,
            color: "var(--vira-ink-soft)",
            opacity: 0.7,
          }}
        >
          Source: Vira primary research, n = 56 adolescents 12–21 · Faraone, Asherson et al. 2015
        </p>
      </div>
    </section>
  );
}
