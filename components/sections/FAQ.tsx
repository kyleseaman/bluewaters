import { faqs } from "@/content/faqs";

export function FAQ() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
