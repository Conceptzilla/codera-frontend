import { languages } from "./content";

type Language = (typeof languages)[number];

type CoderaHeaderProps = {
  language: Language;
  onDemoOpen: () => void;
  onLanguageChange: (language: Language) => void;
  scrolled: boolean;
  visible: boolean;
};

export default function CoderaHeader({
  language,
  onDemoOpen,
  onLanguageChange,
  scrolled,
  visible,
}: CoderaHeaderProps) {
  return (
    <header
      className={`codera-header ${visible ? "is-visible" : "is-hidden"} ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav aria-label="Primary navigation" className="codera-nav">
        <div className="codera-menu">
          <button
            aria-haspopup="menu"
            className="codera-nav-trigger"
            type="button"
          >
            <span className="codera-trigger-label">Solutions</span>
            <img alt="" height="16" src="/assets/codera/caret.svg" width="16" />
          </button>
          <div className="codera-dropdown" role="menu">
            <a href="#solutions-statement" role="menuitem">
              <strong>Fleet visibility</strong>
              <span>See vehicles, routes, and live status in one view.</span>
            </a>
            <a href="#solutions-statement" role="menuitem">
              <strong>Operations analytics</strong>
              <span>Turn fleet activity into clear performance insights.</span>
            </a>
            <a href="#solutions-statement" role="menuitem">
              <strong>Driver safety</strong>
              <span>Support safer driving with actionable fleet signals.</span>
            </a>
          </div>
        </div>

        <div className="codera-menu">
          <button
            aria-haspopup="menu"
            className="codera-nav-trigger"
            type="button"
          >
            <span className="codera-trigger-label">Products</span>
            <img alt="" height="16" src="/assets/codera/caret.svg" width="16" />
          </button>
          <div className="codera-dropdown" role="menu">
            <a href="#results" role="menuitem">
              <strong>Control center</strong>
              <span>Monitor daily fleet operations from a shared workspace.</span>
            </a>
            <a href="#business-impact" role="menuitem">
              <strong>Mobile operations</strong>
              <span>Keep dispatchers and drivers connected on the move.</span>
            </a>
            <a href="#business-impact" role="menuitem">
              <strong>Fleet reports</strong>
              <span>Review utilization, costs, and operational trends.</span>
            </a>
          </div>
        </div>

        <a
          className="codera-nav-trigger codera-about-link"
          href="#solutions-statement"
        >
          <span className="codera-trigger-label">About</span>
        </a>
      </nav>

      <a aria-label="Codera home" className="codera-logo" href="#top">
        <img alt="" height="20" src="/assets/codera/logo-mark.svg" width="20" />
        <span>Codera</span>
      </a>

      <div className="codera-actions">
        <div className="codera-menu codera-language-menu">
          <button
            aria-haspopup="menu"
            className="codera-language-trigger"
            type="button"
          >
            <span className="codera-trigger-label">{language.code}</span>
            <img alt="" height="16" src="/assets/codera/caret.svg" width="16" />
          </button>
          <div className="codera-dropdown codera-language-dropdown" role="menu">
            {languages.map((option) => (
              <button
                aria-checked={language.code === option.code}
                className={language.code === option.code ? "is-selected" : ""}
                key={option.code}
                onClick={() => onLanguageChange(option)}
                role="menuitemradio"
                type="button"
              >
                <span>{option.label}</span>
                <small>{option.code}</small>
              </button>
            ))}
          </div>
        </div>
        <button className="codera-demo-button" onClick={onDemoOpen} type="button">
          Get a Demo
        </button>
      </div>
    </header>
  );
}
