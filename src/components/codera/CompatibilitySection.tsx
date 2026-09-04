import { compatibilityItems } from "./content";

export default function CompatibilitySection() {
  return (
    <section className="codera-compatibility" id="compatibility">
      <div className="codera-compatibility-content">
        <h2>Compatible with your business.</h2>
        <div className="codera-compatibility-list">
          {compatibilityItems.map((item) => (
            <article key={item.title}>
              <span className="codera-compatibility-icon">
                <img alt="" src={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        aria-label="Fleet manager working with Codera integrations"
        className="codera-compatibility-visual"
        role="img"
      >
        <img alt="" src="/assets/codera/compatibility/background.jpg" />
        <img alt="" src="/assets/codera/compatibility/foreground.jpg" />
      </div>
    </section>
  );
}
