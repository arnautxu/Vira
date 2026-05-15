import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "yellow" | "dark";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "a" | "button";
  href?: string;
  variant?: Variant;
};

const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--vira-lila)",
    color: "white",
    boxShadow: "0 10px 24px -10px rgba(187, 119, 255, 0.6)",
  },
  ghost: {
    background: "transparent",
    color: "var(--vira-ink)",
    border: "1.5px solid var(--vira-line)",
  },
  yellow: {
    background: "var(--sec-yellow)",
    color: "var(--vira-ink)",
  },
  dark: {
    background: "var(--vira-ink)",
    color: "white",
  },
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", as = "button", href, children, style, ...rest }, ref) => {
    const base: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 22px",
      borderRadius: "var(--r-pill)",
      fontFamily: "Satoshi, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-0.005em",
      transition: "transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      ...styles[variant],
      ...style,
    };

    if (as === "a") {
      return (
        <a
          href={href}
          style={base}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        {...rest}
        style={base}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
