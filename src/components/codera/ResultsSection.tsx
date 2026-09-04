"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { resultsClients } from "./content";

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeClientIndex, setActiveClientIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const [resultValue, setResultValue] = useState(100);
  const activeClient = resultsClients[activeClientIndex];
  const resultBottom = Math.round(64 + (1 - activeClient.curveDepth) * 242);

  const animateResult = useCallback((target: number) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setResultValue(target);
      return;
    }

    setResultValue(100);
    const duration = 1200;
    let startedAt: number | null = null;
    const animate = (now: number) => {
      if (startedAt === null) startedAt = now;
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setResultValue(Math.round(100 - (100 - target) * eased));
      if (progress < 1) animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        setIsVisible(true);
        observer.disconnect();
        animateResult(resultsClients[1].result);
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animateResult]);

  const selectClient = (index: number) => {
    if (index === activeClientIndex) return;
    setActiveClientIndex(index);
    setAnimationKey((key) => key + 1);
    animateResult(resultsClients[index].result);
  };

  return (
    <section
      className={`codera-results ${isVisible ? "is-visible" : ""}`}
      id="results"
      ref={sectionRef}
    >
      <header className="codera-results-header">
        <h2>Results that speak for themselves.</h2>
        <p>Learn how we help companies around the world.</p>
      </header>

      <article className="codera-results-card" key={activeClient.id}>
        <blockquote>
          {activeClient.quoteBefore}
          <em>Codera</em>
          {activeClient.quoteAfter}
          <strong>{activeClient.highlight}</strong>
        </blockquote>

        <div className="codera-results-person">
          <span
            aria-label={activeClient.person}
            className={`codera-results-avatar ${
              activeClient.avatarPosition === "scan"
                ? "is-scan-avatar"
                : "is-generated-avatar"
            }`}
            role="img"
            style={
              activeClient.avatarPosition === "scan"
                ? undefined
                : ({
                    "--avatar-position": activeClient.avatarPosition,
                  } as CSSProperties)
            }
          />
          <span>
            <strong>{activeClient.person}</strong>
            <small>{activeClient.role}</small>
          </span>
        </div>

        <div
          aria-label={`${activeClient.label} performance indicator improved from 100 percent to ${activeClient.result} percent`}
          className="codera-results-chart"
          key={animationKey}
          style={
            {
              "--curve-depth": activeClient.curveDepth,
              "--result-bottom": `${resultBottom}px`,
            } as CSSProperties
          }
        >
          <span className="codera-chart-value codera-chart-start-value">100%</span>
          <span className="codera-chart-value codera-chart-result-value">
            {resultValue}%
          </span>
          <img
            alt=""
            className="codera-chart-axis codera-chart-axis-top"
            src="/assets/codera/results/chart-axis.svg"
          />
          <img
            alt=""
            className="codera-chart-axis codera-chart-axis-bottom"
            src="/assets/codera/results/chart-axis.svg"
          />
          <div aria-hidden="true" className="codera-chart-grid">
            {[0, 1, 2, 3, 4].map((line) => (
              <span key={line} />
            ))}
          </div>
          <div className="codera-chart-curve-wrap">
            <img
              alt=""
              className="codera-chart-curve"
              src="/assets/codera/results/chart-curve.svg"
            />
          </div>
          <img
            alt=""
            className="codera-chart-start-marker"
            src="/assets/codera/results/chart-start.svg"
          />
          <div className="codera-chart-months">
            <span>March</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
          </div>
        </div>
      </article>

      <div
        aria-label="Codera customer stories"
        className="codera-client-logos"
        role="tablist"
      >
        <button
          aria-selected={activeClientIndex === 0}
          className={`codera-client-logo codera-xpo-logo ${
            activeClientIndex === 0 ? "is-active" : ""
          }`}
          onClick={() => selectClient(0)}
          role="tab"
          type="button"
        >
          <span className="codera-client-logo-art codera-xpo-art">
            <img alt="" src="/assets/codera/results/xpo-mark-v2.svg" />
            <img
              alt="XPO Logistics"
              src="/assets/codera/results/xpo-word-v2.svg"
            />
          </span>
        </button>
        <button
          aria-selected={activeClientIndex === 1}
          className={`codera-client-logo codera-scan-logo ${
            activeClientIndex === 1 ? "is-active" : ""
          }`}
          onClick={() => selectClient(1)}
          role="tab"
          type="button"
        >
          <span className="codera-client-logo-art codera-scan-art">
            <img
              alt="Scan Global Logistics"
              src="/assets/codera/results/scan-top-v2.svg"
            />
            <img alt="" src="/assets/codera/results/scan-bottom-v2.svg" />
          </span>
        </button>
        <button
          aria-selected={activeClientIndex === 2}
          className={`codera-client-logo codera-fedex-logo ${
            activeClientIndex === 2 ? "is-active" : ""
          }`}
          onClick={() => selectClient(2)}
          role="tab"
          type="button"
        >
          <span className="codera-client-logo-art codera-fedex-art">
            <img alt="FedEx" src="/assets/codera/results/fedex-left-v2.svg" />
            <img alt="" src="/assets/codera/results/fedex-right-v2.svg" />
          </span>
        </button>
        <button
          aria-selected={activeClientIndex === 3}
          className={`codera-client-logo codera-amazon-logo ${
            activeClientIndex === 3 ? "is-active" : ""
          }`}
          onClick={() => selectClient(3)}
          role="tab"
          type="button"
        >
          <span className="codera-client-logo-art codera-amazon-art">
            <img alt="Amazon" src="/assets/codera/results/amazon-v2.svg" />
          </span>
        </button>
        <button
          aria-selected={activeClientIndex === 4}
          className={`codera-client-logo codera-exxon-logo ${
            activeClientIndex === 4 ? "is-active" : ""
          }`}
          onClick={() => selectClient(4)}
          role="tab"
          type="button"
        >
          <span className="codera-client-logo-art codera-exxon-art">
            <img
              alt="ExxonMobil"
              src="/assets/codera/results/exxonmobil-v2.svg"
            />
          </span>
        </button>
      </div>
    </section>
  );
}
