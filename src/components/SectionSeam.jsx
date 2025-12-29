export default function SectionSeam({ from, to }) {
  return (
    <div
      aria-hidden
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden"
      style={{ height: "14rem" }}
    >
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              color-mix(in srgb, ${from} 90%, black 10%) 0%,
              color-mix(in srgb, ${from} 45%, ${to} 55%) 60%,
              ${to} 100%
            )
          `,
        }}
      />

      {/* soft fog */}
      <div
        className="absolute inset-0 opacity-[0.15] blur-3xl"
        style={{
          background: `radial-gradient(140% 90% at 50% 0%, ${from}, transparent 70%)`,
        }}
      />

      {/* texture */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/assets/textures/noise.png')",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
