import { areaGuide } from "@/content/area-guide";
import { fullAddress } from "@/content/site";

export function AreaGuide() {
  return (
    <section id="location" className="section">
      <div className="container">
        <h2>Location & area guide</h2>
        <p className="lead">{fullAddress}</p>
        <div className="grid-2">
          {areaGuide.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <a className="button button-secondary" target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}>
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
