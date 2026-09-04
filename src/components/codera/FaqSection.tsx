"use client";

import { useState } from "react";
import { faqItems } from "./content";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="codera-faq" id="faq">
      <div className="codera-faq-intro">
        <h2>Frequently Asked Questions.</h2>
        <p>
          Didn’t find an answer to your question?{" "}
          <a href="mailto:info@codera-fleet.com">Contact us</a>, and we’ll be happy
          to help!
        </p>
      </div>
      <div className="codera-faq-list">
        {faqItems.map(([question, answer], index) => {
          const isOpen = openFaq === index;
          return (
            <article
              className={`codera-faq-item ${isOpen ? "is-open" : ""}`}
              key={question}
            >
              <button
                aria-expanded={isOpen}
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                type="button"
              >
                <span className="codera-faq-plus">
                  <img alt="" src="/assets/codera/faq-plus.svg" />
                </span>
                <span>{question}</span>
              </button>
              <div className="codera-faq-answer">
                <div>
                  <p>{answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
