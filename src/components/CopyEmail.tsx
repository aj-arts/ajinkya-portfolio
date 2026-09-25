"use client";
import { useEffect, useRef, useState } from "react";
export default function CopyEmail() {
  const [state, setState] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText("ajinkyagokule@gmail.com");
      setState("Copied!");
    } catch {
      setState("Use the email link");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("Copy email"), 2400);
  }
  return (
    <button className="copy-email" onClick={copy} aria-live="polite">
      {state}
      <svg
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 6V3h10v11h-3M3 6h11v11H3z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
