import { newsItems } from "./content";

export default function NewsSection() {
  return (
    <section className="codera-news" id="news">
      <header>
        <h2>News and updates.</h2>
        <p>
          Stay up-to-date with the latest developments and innovations in fleet
          management.
        </p>
      </header>
      <div className="codera-news-grid">
        {newsItems.map((item) => (
          <article className="codera-news-card" key={item.title}>
            <div className="codera-news-image">
              <div>
                <img alt="" src={item.image} />
              </div>
            </div>
            <div className="codera-news-copy">
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <time>{item.date}</time>
            </div>
          </article>
        ))}
      </div>
      <div className="codera-news-actions">
        <a href="mailto:info@codera-fleet.com?subject=Codera%20updates">Subscribe</a>
        <a href="#news">Show All</a>
      </div>
    </section>
  );
}
