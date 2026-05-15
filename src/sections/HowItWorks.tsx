const STEPS = [
  {
    n: "01",
    title: "Open your day",
    body: "Greeted by Viri. Your top tasks, your med reminders, and a one-tap emotion check, all on the home screen.",
    accent: "var(--sec-blue)",
  },
  {
    n: "02",
    title: "Move through it",
    body: "Pomodoro for focus blocks. Mindfulness when it gets loud. A journal when you need to put it somewhere.",
    accent: "var(--sec-green)",
  },
  {
    n: "03",
    title: "Earn the win",
    body: "Every task earns XP. Every streak unlocks cards. Every level changes how Viri looks, and how you feel.",
    accent: "var(--sec-yellow)",
  },
];

export function HowItWorks() {
  return (
    <section style={{ background: "var(--vira-paper)" }}>
      <div className="container">
        <div style={{ maxWidth: 700, marginBottom: 64 }}>
          <span className="eyebrow">How it works</span>
          <h2 className="h-section" style={{ marginTop: 18 }}>
            One loop, <br />
            three steps.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                padding: "36px 30px",
                borderRadius: "var(--r-card)",
                background: "var(--vira-cream)",
                border: "1px solid var(--vira-line)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  color: "var(--vira-lila-deep)",
                  marginBottom: 22,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--vira-ink-soft)" }}>{s.body}</p>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: s.accent,
                  opacity: 0.15,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
