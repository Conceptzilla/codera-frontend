"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from "react";
import { solutionTerms, type SolutionTermKey } from "./content";

type SolutionTermProps = {
  isActive: boolean;
  term: SolutionTermKey;
  onFocus: (event: FocusEvent<HTMLSpanElement>, term: SolutionTermKey) => void;
  onPointerEnter: (
    event: PointerEvent<HTMLSpanElement>,
    term: SolutionTermKey,
  ) => void;
  onPointerLeave: () => void;
  onPointerMove: (event: PointerEvent<HTMLSpanElement>) => void;
};

function SolutionTerm({
  isActive,
  term,
  onFocus,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
}: SolutionTermProps) {
  const item = solutionTerms[term];

  return (
    <span
      className={`codera-solution-term ${isActive ? "is-active" : ""}`}
      onBlur={onPointerLeave}
      onFocus={(event) => onFocus(event, term)}
      onPointerEnter={(event) => onPointerEnter(event, term)}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      role="button"
      tabIndex={0}
    >
      {item.label}
    </span>
  );
}

export default function SolutionsStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeTerm, setActiveTerm] = useState<SolutionTermKey | null>(null);
  const [hintPosition, setHintPosition] = useState({ left: 0, top: 0 });

  const cancelHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = null;
  }, []);

  const scheduleHide = useCallback(() => {
    cancelHide();
    hideTimer.current = setTimeout(() => setActiveTerm(null), 180);
  }, [cancelHide]);

  const moveHint = useCallback((clientX: number, clientY: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const bounds = section.getBoundingClientRect();
    const cardWidth = 286;
    const cardHeight = 304;
    const left = Math.min(
      bounds.width - cardWidth / 2 - 16,
      Math.max(cardWidth / 2 + 16, clientX - bounds.left),
    );
    const pointerY = clientY - bounds.top;
    const top =
      pointerY + cardHeight + 28 > bounds.height
        ? pointerY - cardHeight - 20
        : pointerY + 20;
    setHintPosition({ left, top: Math.max(16, top) });
  }, []);

  const handleTermEnter = useCallback(
    (event: PointerEvent<HTMLSpanElement>, term: SolutionTermKey) => {
      cancelHide();
      setActiveTerm(term);
      moveHint(event.clientX, event.clientY);
    },
    [cancelHide, moveHint],
  );

  const handleTermFocus = useCallback(
    (event: FocusEvent<HTMLSpanElement>, term: SolutionTermKey) => {
      cancelHide();
      setActiveTerm(term);
      const bounds = event.currentTarget.getBoundingClientRect();
      moveHint(bounds.left + bounds.width / 2, bounds.bottom);
    },
    [cancelHide, moveHint],
  );

  const termProps = {
    onFocus: handleTermFocus,
    onPointerEnter: handleTermEnter,
    onPointerLeave: scheduleHide,
    onPointerMove: (event: PointerEvent<HTMLSpanElement>) =>
      moveHint(event.clientX, event.clientY),
  };

  const activeItem = solutionTerms[activeTerm ?? "tracking"];

  return (
    <section
      className="codera-solutions-statement"
      id="solutions-statement"
      ref={sectionRef}
    >
      <p>
        Our fleet management solutions include{" "}
        <SolutionTerm
          isActive={activeTerm === "tracking"}
          term="tracking"
          {...termProps}
        />{" "}
        for real-time updates and tools for{" "}
        <SolutionTerm
          isActive={activeTerm === "safety"}
          term="safety"
          {...termProps}
        />{" "}
        to prevent breakdowns. We streamline operations with{" "}
        <SolutionTerm
          isActive={activeTerm === "workflow"}
          term="workflow"
          {...termProps}
        />{" "}
        and ensure{" "}
        <SolutionTerm
          isActive={activeTerm === "compliance"}
          term="compliance"
          {...termProps}
        />
        . Additionally, we support{" "}
        <SolutionTerm
          isActive={activeTerm === "sustainability"}
          term="sustainability"
          {...termProps}
        />{" "}
        while optimizing costs through efficient{" "}
        <SolutionTerm
          isActive={activeTerm === "administration"}
          term="administration"
          {...termProps}
        />
        .
      </p>
      <aside
        aria-hidden={!activeTerm}
        className={`codera-solution-hint ${activeTerm ? "is-visible" : ""}`}
        onPointerEnter={cancelHide}
        onPointerLeave={scheduleHide}
        role="tooltip"
        style={
          {
            "--hint-left": `${hintPosition.left}px`,
            "--hint-top": `${hintPosition.top}px`,
          } as CSSProperties
        }
      >
        <img
          alt="Trucks travelling on a highway"
          src="/assets/codera/solutions/tracking-hover.png"
        />
        <span className="codera-solution-hint-copy">
          <span>{activeItem.description}</span>
          <strong>
            Show more
            <img alt="" src="/assets/codera/solutions/arrow.svg" />
          </strong>
        </span>
      </aside>
    </section>
  );
}
