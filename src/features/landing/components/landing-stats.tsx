"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Businesses Trust Us" },
  { value: 15, suffix: "+", label: "Modules Built-in" },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { value: 24, suffix: "hr", label: "Support Response" },
];

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, decimals]);

  return value;
}

function StatItem({
  stat,
  active,
}: {
  stat: (typeof STATS)[0];
  active: boolean;
}) {
  const value = useCountUp(stat.value, active, stat.decimals ?? 0);
  return (
    <div className="text-center" data-animate>
      <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-white/80 sm:text-base">{stat.label}</p>
    </div>
  );
}

export function LandingStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0284c7] py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:gap-4">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
