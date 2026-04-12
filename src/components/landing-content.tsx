"use client";

import { useState, useEffect } from "react";
import BreathingOrb from "./breathing-orb";

export default function LandingContent() {
  const [loaded, setLoaded] = useState(false);
  const [showBreathing, setShowBreathing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      {/* Top accent line */}
      <div
        className="mb-10 transition-all duration-1200 ease-out"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-10px)",
          transitionDelay: "300ms",
        }}
        aria-hidden="true"
      >
        <div
          className="mx-auto"
          style={{
            width: 1,
            height: 60,
            background:
              "linear-gradient(to bottom, transparent, rgba(100,150,255,0.3), transparent)",
          }}
        />
      </div>

      {/* Symbol */}
      <div
        className="mb-8 text-4xl select-none"
        style={{
          color: "rgba(100, 150, 255, 0.2)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 0.5s",
          animation: loaded ? "subtlePulse 8s ease-in-out infinite" : "none",
        }}
        aria-hidden="true"
      >
        &#9678;
      </div>

      {/* Title */}
      <h1
        className="mb-2 text-center font-display font-light"
        style={{
          fontSize: "clamp(36px, 7vw, 72px)",
          letterSpacing: "0.08em",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 1.2s ease 0.7s",
          background:
            "linear-gradient(180deg, rgba(224,231,255,0.95) 0%, rgba(150,180,255,0.6) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        The OM Protocol
      </h1>

      {/* Subtitle */}
      <p
        className="mb-12 text-center font-body font-light uppercase"
        style={{
          fontSize: "clamp(12px, 1.8vw, 15px)",
          letterSpacing: "0.15em",
          color: "rgba(180, 210, 255, 0.4)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(15px)",
          transition: "all 1.2s ease 0.9s",
        }}
      >
        A guided meditation practice for the modern mind
      </p>

      {/* Divider */}
      <div
        className="mb-10"
        style={{
          width: 60,
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(100,150,255,0.25), transparent)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.1s",
        }}
        aria-hidden="true"
      />

      {/* Description */}
      <p
        className="mb-12 max-w-md text-center font-body font-light"
        style={{
          fontSize: "clamp(13px, 1.5vw, 15px)",
          lineHeight: 1.9,
          color: "rgba(200, 215, 255, 0.4)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(12px)",
          transition: "all 1.2s ease 1.3s",
        }}
      >
        Something is being built — a new way to practice, track, and deepen
        your meditation journey. Rooted in ancient frequencies. Powered by
        intention.
      </p>

      {/* Breathing interaction */}
      <div
        className="mb-14 flex flex-col items-center"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.5s",
        }}
      >
        {!showBreathing ? (
          <button
            onClick={() => setShowBreathing(true)}
            className="cursor-pointer rounded-full font-body text-[11px] font-normal uppercase transition-all duration-400"
            style={{
              background: "none",
              border: "1px solid rgba(100, 150, 255, 0.15)",
              color: "rgba(180, 210, 255, 0.5)",
              padding: "10px 28px",
              letterSpacing: 4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 150, 255, 0.35)";
              e.currentTarget.style.color = "rgba(180, 210, 255, 0.8)";
              e.currentTarget.style.background = "rgba(100, 150, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 150, 255, 0.15)";
              e.currentTarget.style.color = "rgba(180, 210, 255, 0.5)";
              e.currentTarget.style.background = "none";
            }}
          >
            Begin Breathing
          </button>
        ) : (
          <div style={{ animation: "fadeIn 1s ease" }}>
            <BreathingOrb />
          </div>
        )}
      </div>

      {/* Social links */}
      <nav
        className="flex flex-wrap justify-center gap-10"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.7s",
        }}
        aria-label="Social media links"
      >
        {[
          {
            label: "YouTube",
            href: "https://www.youtube.com/@theomprotocol",
          },
          { label: "Instagram", href: "https://instagram.com/theomprotocol" },
          { label: "X", href: "https://x.com/theomprotocol" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-normal uppercase no-underline transition-all duration-300"
            style={{
              color: "rgba(150, 180, 255, 0.5)",
              letterSpacing: 3,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(150, 180, 255, 0.9)";
              e.currentTarget.style.letterSpacing = "5px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(150, 180, 255, 0.5)";
              e.currentTarget.style.letterSpacing = "3px";
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Tagline */}
      <footer
        className="mt-16"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 2s ease 2s",
        }}
      >
        <p
          className="text-center font-display text-xs italic"
          style={{
            color: "rgba(180, 210, 255, 0.2)",
            lineHeight: 1.8,
          }}
        >
          Tune in. Flow deep. Heal fully.
        </p>
      </footer>
    </div>
  );
}
