export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Radial energy glow behind the wordmark — pure CSS, no image asset */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 42%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-accent">
        Energy · Intelligence · Shakti
      </p>

      <h1 className="text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
        KR<span className="text-accent">ī</span>Mentia
      </h1>

      <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
        Infinite capacity. Distributed everywhere.
      </p>

      <a
        href="mailto:hello@krimentia.com"
        className="mt-12 text-sm tracking-wide text-foreground underline decoration-accent decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
      >
        hello@krimentia.com
      </a>

      <span className="absolute bottom-6 text-[11px] tracking-wide text-muted">
        © {new Date().getFullYear()} KRīMentia Pvt. Ltd.
      </span>
    </section>
  );
}
