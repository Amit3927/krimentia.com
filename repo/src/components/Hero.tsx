"use client";

import { useState } from "react";

type Audience = "Public" | "Investor" | "Partner" | "Government" | "Talent";

const CONTACT = "support@krimentia.com";

const ROUTES: Record<
  Audience,
  { cta: string; subject: string; help: string }
> = {
  Public: {
    cta: "Connect here",
    subject: "Hello from a curious mind",
    help: "We'll write back from the team — questions, ideas, or just curiosity about energy as a service.",
  },
  Investor: {
    cta: "Request the deck",
    subject: "Investor inquiry",
    help: "Reach the founder directly. We share the vision, the traction, and where the round stands.",
  },
  Partner: {
    cta: "Explore a partnership",
    subject: "Partnership inquiry",
    help: "Grid operators, OEMs, integrators — tell us where our sinewave fits into your stack.",
  },
  Government: {
    cta: "Open a dialogue",
    subject: "Government & policy",
    help: "Policy, pilots, and public infrastructure. We route you to the right desk.",
  },
  Talent: {
    cta: "Introduce yourself",
    subject: "Joining KRīMentia",
    help: "Engineers and builders who want power to arrive perfectly. Send us your work.",
  },
};

const AUDIENCES = Object.keys(ROUTES) as Audience[];

const NAV = ["What we do", "Vision", "Careers", "Updates"];

/* The sinewave. viewBox is cropped to the ink so the caption sits tight beneath it. */
function Sinewave() {
  return (
    <svg
      viewBox="0 62 900 336"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      className="block h-auto w-full overflow-visible"
    >
      <defs>
        <linearGradient id="sw-hero" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* ghost trace */}
      <path
        d="M-40 240 C 50 90,110 90,200 240 S 340 390,430 240 S 570 90,660 240 S 800 390,890 240"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      {/* the wave itself, fading at both ends */}
      <path
        d="M-40 230 C 50 70,110 70,200 230 S 340 390,430 230 S 570 70,660 230 S 800 390,890 230"
        fill="none"
        stroke="url(#sw-hero)"
        strokeWidth="2.6"
      />
      {/* travelling current */}
      <path
        d="M-40 230 C 50 70,110 70,200 230 S 340 390,430 230 S 570 70,660 230 S 800 390,890 230"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="10 16"
        strokeLinecap="round"
        className="wave-current"
      />
    </svg>
  );
}

export default function Hero() {
  const [audience, setAudience] = useState<Audience>("Public");
  const route = ROUTES[audience];

  const mailto = `mailto:${CONTACT}?subject=${encodeURIComponent(
    route.subject
  )}&body=${encodeURIComponent(
    `Hi KRīMentia team,\n\nI'm reaching out as: ${audience}\n\n`
  )}`;

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* ambient corner glow */}
      <div
        aria-hidden
        className="glow-drift pointer-events-none absolute -right-[150px] -top-[200px] -z-10 h-[760px] w-[760px] rounded-full blur-[12px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow-strong), transparent 68%)",
        }}
      />

      {/* ── nav ─────────────────────────────────────────────── */}
      <nav className="flex flex-wrap items-center gap-x-[clamp(16px,2.4vw,30px)] gap-y-4 border-b border-divider px-[clamp(28px,6vw,88px)] py-6">
        <span className="mr-auto text-[clamp(24px,3.4vw,33px)] font-semibold tracking-[-0.01em]">
          KR<span className="text-accent">ī</span>Mentia
        </span>
        <div className="hidden items-center gap-[clamp(16px,2.4vw,30px)] md:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${CONTACT}`}
          className="rounded-lg border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Contact
        </a>
      </nav>

      {/* ── hero body ───────────────────────────────────────── */}
      <main className="relative flex flex-1 flex-col justify-center px-[clamp(28px,6vw,88px)] py-[clamp(32px,4vw,64px)]">
        <div className="w-full max-w-[720px]">
          <div className="mb-[26px] flex items-center gap-4">
            <span className="h-px w-[52px] bg-accent" />
            <span className="text-[13px] uppercase tracking-[0.16em] text-accent">
              Energy as a service
            </span>
          </div>

          <h1 className="max-w-[12ch] text-[clamp(40px,7.6vw,89px)] font-semibold leading-[1.02] tracking-[-0.025em] text-balance">
            Perfect power,
            <br />
            end-to-end.
          </h1>

          <p className="mt-[30px] max-w-[46ch] text-[18px] leading-[1.62] text-foreground/80">
            KRīMentia delivers energy as a service — engineering every step from
            generation to use, so power arrives on a flawless sinewave. Infinite
            capacity, distributed everywhere.
          </p>

          {/* Wave + its caption travel as one unit: floated right on desktop,
              dropped into the flow (between subheading and picker) below 1024px. */}
          <div className="pointer-events-none z-0 my-[34px] flex w-full flex-col items-center gap-2.5 lg:absolute lg:right-0 lg:top-[52%] lg:my-0 lg:w-[min(620px,46vw)] lg:-translate-y-1/2">
            <Sinewave />
            <div className="text-center text-[clamp(14px,1.6vw,18px)] tracking-[0.01em] text-accent">
              Energy + Intelligence = Power
            </div>
          </div>

          <p className="mb-3 mt-[42px] text-[13px] text-muted">Connect as:</p>

          <div className="flex flex-wrap items-center gap-[18px]">
            <div
              role="radiogroup"
              aria-label="Connect as"
              className="flex max-w-full flex-wrap gap-1 rounded-lg border border-divider p-1 max-[560px]:w-full"
            >
              {AUDIENCES.map((a) => (
                <button
                  key={a}
                  type="button"
                  role="radio"
                  aria-checked={audience === a}
                  onClick={() => setAudience(a)}
                  className={`rounded-md px-3.5 py-2 text-sm transition-colors max-[560px]:flex-1 ${
                    audience === a
                      ? "bg-accent/15 text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            <a
              href={mailto}
              className="rounded-lg border border-accent px-5 py-2.5 text-center text-sm text-accent transition-colors hover:bg-accent/10 max-[560px]:w-full"
            >
              {route.cta}
            </a>
          </div>

          <p className="mt-3.5 min-h-[20px] max-w-[46ch] text-[13px] leading-[1.55] text-foreground/60 text-pretty">
            {route.help}
          </p>
        </div>
      </main>

      {/* ── footer ──────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-divider px-[clamp(28px,6vw,88px)] py-[22px]">
        <a
          href={`mailto:${CONTACT}`}
          className="text-sm text-accent hover:underline"
        >
          {CONTACT}
        </a>
        <span className="text-xs tracking-[0.04em] text-muted">
          © {new Date().getFullYear()} KRīMentia Pvt. Ltd.
        </span>
      </footer>
    </div>
  );
}
