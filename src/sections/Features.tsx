import { FeatureScene } from "../three/FeatureScene";

const FEATURES = [
  {
    label: "Organize",
    title: "A calendar that won't overwhelm.",
    body: "Daily and weekly views. Habit tracker. Medication reminders. Visual, color-coded, and built for executive function — not against it.",
    color: "var(--sec-blue)",
    colorDeep: "var(--sec-blue-deep)",
    items: ["Visual calendar", "Habit streaks", "Med reminders"],
  },
  {
    label: "Feel",
    title: "Name what you feel. Move through it.",
    body: "One-tap emotion log. Guided mindfulness sessions. A private journal that asks the right questions — and only the right ones.",
    color: "var(--sec-pink)",
    colorDeep: "var(--sec-pink-deep)",
    items: ["Emotion check-ins", "Mindfulness", "Journal"],
  },
  {
    label: "Focus",
    title: "Pomodoro that respects your brain.",
    body: "Customizable focus modes. Pomodoro intervals tuned for ADHD attention spans. A focus mode for every task, every mood.",
    color: "var(--sec-green)",
    colorDeep: "var(--sec-green-deep)",
    items: ["Pomodoro timer", "Focus modes", "Task batching"],
  },
  {
    label: "Reward",
    title: "A loop that pulls you back.",
    body: "Levels, cards, and skins. Gamified motivation that turns the daily grind into something you actually want to come back to.",
    color: "var(--sec-yellow)",
    colorDeep: "var(--sec-yellow-deep)",
    items: ["XP & levels", "Collectible cards", "Mascot skins"],
  },
];

export function Features() {
  return (
    <section id="product" style={{ background: "var(--vira-ink)", color: "white", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
        <FeatureScene />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 720, marginBottom: 72 }}>
          <span className="eyebrow" style={{ color: "var(--vira-lila-soft)" }}>The product</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "white" }}>
            Four sections.
            <br />
            One brain in mind.
          </h2>
          <p className="lead" style={{ marginTop: 22, color: "rgba(255,255,255,0.75)" }}>
            Vira splits the day into four color-coded spaces. Each one is a tool
            built around a specific ADHD challenge, with the same calm, playful
            language throughout.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {FEATURES.map((f, i) => (
            <article
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--r-card)",
                padding: 32,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 300ms var(--ease-out), border-color 300ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = f.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: f.color,
                  color: "var(--vira-ink)",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                {f.label}
              </div>
              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  marginBottom: 14,
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 24 }}>
                {f.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {f.items.map((it) => (
                  <li
                    key={it}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: f.color }} />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
