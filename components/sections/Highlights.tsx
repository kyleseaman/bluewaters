import { highlights } from "@/content/cottages";

export function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="container">
        <h2>Why guests choose Blue Waters</h2>
        <div className="grid-3">
          {highlights.map((h) => (
            <article key={h.title} className="card">
              <h3>{h.title}</h3>
              <p>{h.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
