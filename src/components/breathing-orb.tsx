"use client";

import { useState, useEffect, useCallback } from "react";

type Phase = "inhale" | "hold" | "exhale";

const SEQUENCE: { phase: Phase; duration: number; label: string }[] = [
  { phase: "inhale", duration: 4000, label: "Breathe In" },
  { phase: "hold", duration: 2000, label: "Hold" },
  { phase: "exhale", duration: 6000, label: "Release" },
];

export default function BreathingOrb() {
  const [phase, setPhase] = useState<Phase>("inhale");
  const [count, setCount] = useState(4);

  const getTransition = useCallback((p: Phase) => {
    if (p === "inhale") return "transform 4s ease-in-out";
    if (p === "hold") return "transform 0.3s";
    return "transform 6s ease-in-out";
  }, []);

  useEffect(() => {
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;
    let countTimer: ReturnType<typeof setInterval>;

    const run = () => {
      const current = SEQUENCE[idx];
      setPhase(current.phase);
      let c = current.duration / 1000;
      setCount(c);

      countTimer = setInterval(() => {
        c--;
        if (c > 0) setCount(c);
      }, 1000);

      timer = setTimeout(() => {
        clearInterval(countTimer);
        idx = (idx + 1) % SEQUENCE.length;
        run();
      }, current.duration);
    };

    run();
    return () => {
      clearTimeout(timer);
      clearInterval(countTimer);
    };
  }, []);

  const scale = phase === "exhale" ? "scale(0.65)" : "scale(1)";

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 100,
          height: 100,
          border: "1px solid rgba(100, 150, 255, 0.2)",
          background:
            "radial-gradient(circle, rgba(100,150,255,0.08) 0%, transparent 70%)",
          transform: scale,
          transition: getTransition(phase),
        }}
      >
        <span
          className="font-display font-light"
          style={{
            fontSize: 24,
            color: "rgba(180, 210, 255, 0.6)",
          }}
        >
          {count}
        </span>
      </div>
      <span
        className="font-body text-[13px] font-normal uppercase"
        style={{
          letterSpacing: 4,
          color: "rgba(180, 210, 255, 0.35)",
        }}
      >
        {SEQUENCE.find((s) => s.phase === phase)?.label}
      </span>
    </div>
  );
}
