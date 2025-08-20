"use client";
import { useEffect, useState } from "react";

export default function Spinner({ setActiveItem }) {
  const [phase, setPhase] = useState("circle");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("stretch"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const isCircle = phase === "circle";
  const isStretch = phase === "stretch";
  const isDone = phase === "done";

  return (
    <div className="flex items-center justify-center mt-5 select-none">
      <div
        className={[
          "relative flex items-center justify-center overflow-hidden",
          "transition-all duration-700 ease-out will-change-transform",
          isCircle && "w-11 h-11 rounded-full",
          isStretch && "w-48 h-11 rounded-full",
          isDone && "w-56 h-11 rounded-full",
          isCircle
            ? "bg-white/5"
            : "bg-white/6 backdrop-blur-sm border border-white/10",
          "shadow-[0_0_22px_rgba(255,255,255,0.35)]", // pure white glow
        ].join(" ")}
        aria-live="polite"
        aria-busy={!isDone}
        title={isDone ? "Ready" : "Loading"}
      >
        {/* PHASE 1: White ring spinner */}
        {isCircle && (
          <svg
            className="animate-spin"
            style={{ animationDuration: "1000ms" }}
            width="28"
            height="28"
            viewBox="0 0 44 44"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="4"
            />
            <path
              d="M40 22a18 18 0 0 0-18-18"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.6))",
              }}
            />
          </svg>
        )}

        {/* PHASE 2 & 3 */}
        {(isStretch || isDone) && (
          <div
            className={[
              "flex items-center gap-2 px-4",
              "transition-all duration-700",
              isStretch ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0",
            ].join(" ")}
          >
            {isStretch && (
              <svg
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "900ms" }}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="3"
                />
                <path
                  d="M21 12a9 9 0 0 0-9-9"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {isDone && (
              <>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5l4 4 10-10"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(255,255,255,0.7))",
                    }}
                  />
                </svg>

                <button
                  type="button"
                  onClick={() => setActiveItem("Portfolio")}
                  className={[
                    "group inline-flex items-center gap-2",
                    "text-[13px] font-semibold tracking-wide",
                    "text-white/90 hover:text-white",
                    "transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050607] rounded-md",
                  ].join(" ")}
                >
                  Explore More
                  <span
                    className="inline-block w-0 overflow-hidden group-hover:w-4 transition-all duration-300"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </>
            )}
          </div>
        )}

        {/* white glow edge */}
        {(isStretch || isDone) && (
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 26px rgba(255,255,255,0.25)",
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
