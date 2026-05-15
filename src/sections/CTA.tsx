import { useState } from "react";
import { Button } from "../components/Button";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="waitlist"
      style={{
        background: "var(--vira-lila)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          left: "-220px",
          top: "-200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          right: "-160px",
          bottom: "-180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 60%)",
        }}
      />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <span
          className="eyebrow"
          style={{ color: "white", justifyContent: "center" }}
        >
          Coming soon · iOS & Android
        </span>
        <h2
          className="h-display"
          style={{
            marginTop: 22,
            marginBottom: 22,
            color: "white",
            maxWidth: 16 + "ch",
            marginInline: "auto",
          }}
        >
          Built for the way you think.
        </h2>
        <p
          className="lead"
          style={{
            color: "rgba(255,255,255,0.85)",
            marginInline: "auto",
            marginBottom: 36,
          }}
        >
          Drop your email. Be first when Vira hits the App Store and Google Play.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            window.location.href = `mailto:hello@vira.app?subject=Waitlist&body=${encodeURIComponent(
              `Add me to the Vira waitlist: ${email}`
            )}`;
          }}
          style={{
            display: "flex",
            gap: 8,
            maxWidth: 460,
            marginInline: "auto",
            background: "white",
            borderRadius: 999,
            padding: 6,
            boxShadow: "0 20px 60px -30px rgba(0,0,0,0.4)",
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="you@you.com"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "0 18px",
              fontFamily: "Satoshi, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "var(--vira-ink)",
              background: "transparent",
            }}
          />
          <Button variant="dark" type="submit" style={{ padding: "12px 20px" }}>
            Join waitlist →
          </Button>
        </form>

        <p
          style={{
            marginTop: 16,
            fontSize: 12,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          No spam. One launch email.
        </p>
      </div>
    </section>
  );
}
