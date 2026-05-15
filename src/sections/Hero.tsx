import { HeroScene } from "../three/HeroScene";
import { Button } from "../components/Button";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingBlock: 0,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <HeroScene />
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "max(120px, 18vh)",
          paddingBottom: "max(80px, 10vh)",
        }}
      >
        <div style={{ maxWidth: 880 }}>
          <span className="eyebrow">For teens with ADHD</span>
          <h1
            className="h-display"
            style={{ marginTop: 22, marginBottom: 22 }}
          >
            Turn off the noise.
            <br />
            <span style={{ color: "var(--vira-lila)" }}>Find your direction.</span>
          </h1>
          <p className="lead" style={{ marginBottom: 36 }}>
            Vira is the first app built for how ADHD teens actually think — time,
            emotions, focus, and motivation, all in one place.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button as="a" href="#waitlist" variant="primary">
              Join the waitlist →
            </Button>
            <Button as="a" href="#product" variant="ghost">
              See how it works
            </Button>
          </div>

          <div
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--vira-ink-soft)",
              opacity: 0.85,
            }}
          >
            <span>★ Built with Fundació Adana</span>
            <span>★ Research-backed</span>
            <span>★ iOS · Android</span>
          </div>
        </div>
      </div>

      <a
        href="#why"
        aria-label="Scroll"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "var(--vira-ink-soft)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ width: 24, height: 1, background: "currentColor", display: "inline-block" }} />
        Scroll
      </a>
    </section>
  );
}
