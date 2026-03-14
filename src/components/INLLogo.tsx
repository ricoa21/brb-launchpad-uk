import { useEffect, useRef } from "react";

interface INLLogoProps {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
  onPulse?: (intensity: number) => void;
}

const INLLogo = ({ variant = "dark", size = 100, className = "", onPulse }: INLLogoProps) => {
  const arcRef = useRef<SVGCircleElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const inlRef = useRef<SVGTextElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  const isDark = variant === "dark";
  const R = 52;
  const CX = 70;
  const CY = 78;
  const CIRC = 2 * Math.PI * R;
  const SWEEP = 2400;
  const BEAT1_START = 0, BEAT1_PEAK = 120, BEAT1_END = 240;
  const BEAT2_START = 280, BEAT2_PEAK = 440, BEAT2_END = 620;
  const HEARTBEAT_TOTAL = 700;
  const LOOP_PAUSE = 1800;
  const TOTAL = SWEEP + HEARTBEAT_TOTAL + LOOP_PAUSE;
  const BASE_INL_SIZE = 38;

  function easeInOut(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function heartbeat(t: number) {
    if (t >= BEAT1_START && t < BEAT1_END) {
      const p = t < BEAT1_PEAK
        ? (t - BEAT1_START) / (BEAT1_PEAK - BEAT1_START)
        : 1 - (t - BEAT1_PEAK) / (BEAT1_END - BEAT1_PEAK);
      return p * 0.6;
    }
    if (t >= BEAT2_START && t < BEAT2_END) {
      const p = t < BEAT2_PEAK
        ? (t - BEAT2_START) / (BEAT2_PEAK - BEAT2_START)
        : 1 - (t - BEAT2_PEAK) / (BEAT2_END - BEAT2_PEAK);
      return p * 1.0;
    }
    return 0;
  }

  useEffect(() => {
    const arc = arcRef.current;
    const dot = dotRef.current;
    const inl = inlRef.current;
    const glow = glowRef.current;
    if (!arc || !dot || !inl || !glow) return;

    function run(ts: number) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % TOTAL;

      if (elapsed < SWEEP) {
        const progress = easeInOut(elapsed / SWEEP);
        arc.setAttribute("stroke-dashoffset", String(CIRC * (1 - progress)));
        arc.setAttribute("stroke", progress > 0.55 ? "#a78bfa" : "#7c3aed");
        arc.setAttribute("stroke-width", "2.5");
        const angle = -Math.PI / 2 + 2 * Math.PI * progress;
        dot.setAttribute("transform",
          `translate(${CX + R * Math.cos(angle)} ${CY + R * Math.sin(angle)})`);
        glow.setAttribute("opacity", "0");
        inl.setAttribute("font-size", String(BASE_INL_SIZE));
        inl.setAttribute("y", "90");
        onPulse?.(0);
      } else {
        const hElapsed = elapsed - SWEEP;
        const intensity = heartbeat(hElapsed);
        arc.setAttribute("stroke-dashoffset", "0");
        arc.setAttribute("stroke", "#a78bfa");
        arc.setAttribute("stroke-width", String(2.5 + intensity * 3.5));
        glow.setAttribute("opacity", String(intensity * 0.95));
        glow.setAttribute("stroke-width", String(4 + intensity * 5));
        const newSize = BASE_INL_SIZE * (1 + intensity * 0.18);
        inl.setAttribute("font-size", String(newSize));
        inl.setAttribute("y", String(90 + (newSize - BASE_INL_SIZE) * 0.3));
        dot.setAttribute("transform", `translate(${CX} ${CY - R})`);
        onPulse?.(intensity);
      }

      rafRef.current = requestAnimationFrame(run);
    }

    rafRef.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const filterId = `glow-${variant}-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <svg
      width={size}
      height={size * (160 / 140)}
      viewBox="0 0 140 160"
      className={className}
      aria-label="I Never Left — The Comeback Revolution"
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {isDark && <circle cx={CX} cy={CY} r={R} fill="#0f0a1e" />}
      <circle cx={CX} cy={CY} r={R} fill="none"
        stroke={isDark ? "#3b1d8a" : "#d4b8ff"} strokeWidth="2" />

      <circle ref={arcRef} cx={CX} cy={CY} r={R} fill="none"
        stroke="#7c3aed" strokeWidth="2.5"
        strokeDasharray={String(CIRC)}
        strokeDashoffset={String(CIRC)}
        strokeLinecap="round"
        transform={`rotate(-90 ${CX} ${CY})`} />

      <circle ref={glowRef} cx={CX} cy={CY} r={R} fill="none"
        stroke={isDark ? "#a78bfa" : "#7c3aed"}
        strokeWidth="4" opacity="0"
        filter={`url(#${filterId})`} />

      <text ref={inlRef} x={CX} y="90" textAnchor="middle"
        fontSize={BASE_INL_SIZE} fontWeight="900"
        fill={isDark ? "white" : "#7c3aed"}
        fontFamily="Outfit, system-ui, sans-serif"
        letterSpacing="-2">
        INL
      </text>

      <g ref={dotRef} transform={`translate(${CX} ${CY - R})`}>
        <circle r="4" fill="#a78bfa" />
      </g>

      <text x={CX} y="150" textAnchor="middle"
        fontSize="6.5" fontWeight="500"
        fill={isDark ? "#a78bfa" : "#7c3aed"}
        fontFamily="Outfit, system-ui, sans-serif"
        letterSpacing="2.5">
        THE COMEBACK REVOLUTION
      </text>
    </svg>
  );
};

export default INLLogo;