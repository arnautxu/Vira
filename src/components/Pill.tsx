/** Vira's logo wordmark, served from /logo.svg */
export function Pill({ height = 36 }: { height?: number }) {
  return (
    <img
      src="/logo.svg"
      alt="Vira"
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
