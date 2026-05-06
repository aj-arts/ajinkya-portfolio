"use client";

import { useEffect, useState } from "react";

import { navItems } from "@/data/portfolio";

// Match Tailwind's default `md` breakpoint so JS gating tracks the same
// boundary as `md:hidden` / `md:flex`.
const DESKTOP_QUERY = "(min-width: 768px)";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Default to `false` so SSR markup matches the initial client render
  // (mobile-first); the effect below corrects the value after hydration.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track viewport via matchMedia so the mobile-only chrome can be gated in
  // JS as well as CSS. This is a belt-and-suspenders guard: a custom
  // `.link-grow { display: inline-block }` rule in globals.css can override
  // `md:hidden` due to source order, so we cannot rely on the utility alone.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setIsDesktop(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  // If the viewport crosses into desktop while the drawer is open (e.g. the
  // user rotates a tablet or resizes the window), close it so the
  // body-scroll lock is released and the user isn't trapped.
  useEffect(() => {
    if (isDesktop && open) setOpen(false);
  }, [isDesktop, open]);

  useEffect(() => {
    if (!open) return;
    // Hard guard: never lock body scroll on desktop, even if `open` is
    // somehow forced true (stale state, rogue click, devtools).
    if (isDesktop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, isDesktop]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-paper transition-[border-color,background-color] duration-300 ${
          scrolled ? "border-b border-rule/60" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 w-[var(--content)] items-center justify-between">
          <a
            href="#top"
            className="group inline-flex items-baseline gap-2 text-ink"
            aria-label="Ajinkya Gokule, back to top"
          >
            <span className="font-mono text-[13px] font-medium tracking-tight text-ink">
              ajinkya gokule
            </span>
            <span className="font-mono text-[13px] text-ink-faint">
              <span className="text-vermillion">/</span> 2026
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-grow font-mono text-[12px] tracking-wide text-ink-soft"
              >
                {item.label.toLowerCase()}
              </a>
            ))}
          </nav>

          {!isDesktop ? (
            <button
              type="button"
              className="md:hidden font-mono text-[12px] tracking-wide text-ink-soft link-grow"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "close" : "menu"}
            </button>
          ) : null}
        </div>
      </header>

      {open && !isDesktop ? (
        <div
          className="fixed inset-0 z-50 bg-paper md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mx-auto flex h-14 w-[var(--content)] items-center justify-between">
            <span className="font-mono text-[13px] text-ink">menu</span>
            <button
              type="button"
              className="font-mono text-[12px] tracking-wide text-ink-soft link-grow"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              close
            </button>
          </div>
          <ul className="mx-auto mt-12 flex w-[var(--content)] flex-col gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-5xl font-light tracking-tight text-ink hover:text-vermillion"
                >
                  {item.label}
                  <span className="ml-2 align-super font-mono text-xs text-ink-faint">
                    0{navItems.indexOf(item) + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
