"use client";

import { useCallback, useRef, useState, type UIEvent } from "react";
import BusinessMetrics from "./BusinessMetrics";
import CoderaFooter from "./CoderaFooter";
import CoderaHeader from "./CoderaHeader";
import CompatibilitySection from "./CompatibilitySection";
import DemoRequestModal from "./DemoRequestModal";
import FaqSection from "./FaqSection";
import NewsSection from "./NewsSection";
import ResultsSection from "./ResultsSection";
import SolutionsStatement from "./SolutionsStatement";
import { languages } from "./content";

export default function CoderaLanding() {
  const lastScrollTop = useRef(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [language, setLanguage] =
    useState<(typeof languages)[number]>(languages[0]);
  const [demoOpen, setDemoOpen] = useState(false);

  const handlePageScroll = useCallback((event: UIEvent<HTMLElement>) => {
    const page = event.currentTarget;
    const scrollTop = page.scrollTop;
    const hero = page.querySelector<HTMLElement>(".codera-hero");
    const stage = page.querySelector<HTMLElement>("#fleet-view");
    if (!hero || !stage) return;

    const progress = Math.min(1, Math.max(0, scrollTop / hero.clientHeight));
    stage.style.setProperty("--image-scale", `${1 + progress * 0.25}`);

    setHeaderScrolled(scrollTop > 12);
    setHeaderVisible((visible) => {
      if (scrollTop <= 4 || scrollTop < lastScrollTop.current) return true;
      if (scrollTop > 80 && scrollTop > lastScrollTop.current) return false;
      return visible;
    });
    lastScrollTop.current = scrollTop;
  }, []);

  return (
    <main
      className={`codera-page ${demoOpen ? "is-demo-open" : ""}`}
      onScroll={handlePageScroll}
    >
      <section aria-labelledby="codera-title" className="codera-hero">
        <CoderaHeader
          language={language}
          onDemoOpen={() => setDemoOpen(true)}
          onLanguageChange={setLanguage}
          scrolled={headerScrolled}
          visible={headerVisible}
        />

        <div className="codera-hero-copy" id="top">
          <h1 id="codera-title">Control your fleet like never before.</h1>
          <p>
            Real-time tracking, advanced analytics, and seamless management – all
            in one powerful platform.
          </p>
        </div>
      </section>

      <section
        aria-label="Codera fleet preview"
        className="codera-image-stage"
        id="fleet-view"
      >
        <div className="codera-image-sticky">
          <div className="codera-image-frame">
            <img
              alt="A dark blue logistics truck parked in a wide desert landscape"
              src="/assets/codera/truck-hero.png"
            />
          </div>
        </div>
      </section>

      <BusinessMetrics />
      <SolutionsStatement />
      <ResultsSection />
      <CompatibilitySection />
      <NewsSection />
      <FaqSection />
      <CoderaFooter onDemoOpen={() => setDemoOpen(true)} />
      <DemoRequestModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
