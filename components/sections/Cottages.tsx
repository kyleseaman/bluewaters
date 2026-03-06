import { cottageFeatures } from "@/content/cottages";

export function Cottages() {
  return (
    <section id="cottages" className="section section-alt">
      <div className="container">
        <h2>Cottage details</h2>
        <p className="lead">Everything you need for a comfortable and quiet PEI getaway.</p>
        <ul className="feature-list">
          {cottageFeatures.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </section>
  );
}
