"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type DemoRequestModalProps = {
  onClose: () => void;
  open: boolean;
};

export default function DemoRequestModal({
  onClose,
  open,
}: DemoRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    nameInput.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [closeModal, open]);

  return (
    <div
      aria-hidden={!open}
      className={`codera-demo-modal ${open ? "is-open" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <section
        aria-labelledby="codera-demo-title"
        aria-modal="true"
        className="codera-demo-dialog"
        role="dialog"
      >
        <button
          aria-label="Close demo request form"
          className="codera-demo-close"
          onClick={closeModal}
          type="button"
        >
          <span />
        </button>

        {submitted ? (
          <div className="codera-demo-success" role="status">
            <span>Request received</span>
            <h2 id="codera-demo-title">Thanks — we’ll be in touch.</h2>
            <p>
              A Codera fleet specialist will contact you shortly to plan a tailored
              walkthrough.
            </p>
            <button onClick={closeModal} type="button">
              Back to Codera
            </button>
          </div>
        ) : (
          <>
            <header className="codera-demo-heading">
              <span>Book a tailored walkthrough</span>
              <h2 id="codera-demo-title">See Codera on your fleet.</h2>
              <p>
                Tell us a little about your operation, and we’ll focus the demo on
                your routes, vehicles, and goals.
              </p>
            </header>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label>
                Full name
                <input
                  autoComplete="name"
                  name="name"
                  ref={nameInput}
                  required
                  type="text"
                />
              </label>
              <label>
                Work email
                <input autoComplete="email" name="email" required type="email" />
              </label>
              <label>
                Company
                <input
                  autoComplete="organization"
                  name="company"
                  required
                  type="text"
                />
              </label>
              <label>
                Fleet size
                <select defaultValue="" name="fleetSize" required>
                  <option disabled value="">
                    Select fleet size
                  </option>
                  <option>1–25 vehicles</option>
                  <option>26–100 vehicles</option>
                  <option>101–500 vehicles</option>
                  <option>500+ vehicles</option>
                </select>
              </label>
              <label className="codera-demo-message">
                What would you like to improve?
                <textarea
                  name="message"
                  placeholder="Routing, fuel costs, safety, maintenance…"
                  rows={3}
                />
              </label>
              <button className="codera-demo-submit" type="submit">
                Request a Demo
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
