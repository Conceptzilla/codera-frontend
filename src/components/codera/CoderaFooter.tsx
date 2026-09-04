type CoderaFooterProps = {
  onDemoOpen: () => void;
};

export default function CoderaFooter({ onDemoOpen }: CoderaFooterProps) {
  return (
    <>
      <section className="codera-final-cta" id="contact">
        <div>
          <h2>
            Increase efficiency, reduce costs, and enhance safety with Codera’s
            solutions.
          </h2>
          <div>
            <button onClick={onDemoOpen} type="button">
              Get a Demo
            </button>
            <a href="mailto:info@codera-fleet.com">info@codera-fleet.com</a>
          </div>
        </div>
      </section>
      <footer className="codera-footer">
        <div className="codera-footer-main">
          <div className="codera-footer-brand">
            <a href="#top">
              <img alt="" src="/assets/codera/footer/logo-mark-v2.svg" />
              <strong>Codera</strong>
            </a>
            <div>
              <a href="https://x.com">x.com</a>
              <a href="https://facebook.com">facebook.com</a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <div>
              <a href="#solutions-statement">Solutions</a>
              <a href="#compatibility">Services</a>
              <a href="#business-impact">Products</a>
              <a href="#results">Case Studies</a>
              <a href="#contact">Pricing</a>
            </div>
            <div>
              <a href="#top">About Us</a>
              <a href="#news">Blog</a>
              <a href="#news">News</a>
              <a href="#faq">FAQ</a>
              <a href="mailto:info@codera-fleet.com">Support</a>
            </div>
            <div>
              <a href="#contact">Contact Us</a>
              <a href="#contact">Locations</a>
            </div>
            <div className="codera-footer-legal">
              <a href="#contact">Terms of Service</a>
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Cookies Policy</a>
            </div>
          </nav>
        </div>
        <div className="codera-footer-bottom">
          © 2026 Codera inc. All rights reserved.
        </div>
      </footer>
    </>
  );
}
