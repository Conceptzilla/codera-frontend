"use client";

import { useEffect, useRef, useState } from "react";
import { businessMetrics } from "./content";

export default function BusinessMetrics() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);
  const [values, setValues] = useState<number[]>(businessMetrics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValues(businessMetrics.map((metric) => metric.value));
          return;
        }

        const duration = 1100;
        let startedAt: number | null = null;
        const animate = (now: number) => {
          if (startedAt === null) startedAt = now;
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValues(
            businessMetrics.map((metric) => Math.round(metric.value * eased)),
          );
          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        animationRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="codera-business" id="business-impact" ref={sectionRef}>
      <div className="codera-business-header">
        <h2>Useful for business.</h2>
        <p>Our technologies enhance business efficiency and driver safety.</p>
      </div>
      <div className="codera-metrics">
        {businessMetrics.map((metric, index) => (
          <article className="codera-metric-card" key={metric.category}>
            <span className="codera-metric-tag">{metric.category}</span>
            <div className="codera-metric-value">
              <strong aria-label={`${metric.value} percent`}>{values[index]}%</strong>
              <h3>{metric.label}</h3>
            </div>
            <p>{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
