"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact & availability</h2>
        <p className="lead">Call, email, or send a quick inquiry below.</p>
        <div className="grid-2">
          <div className="card">
            <p><strong>Email:</strong> <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a></p>
            <p><strong>Phone:</strong> <a href={`tel:${siteContent.contact.phonePrimary}`}>{siteContent.contact.phonePrimary}</a></p>
            <p><strong>Phone (alt):</strong> <a href={`tel:${siteContent.contact.phoneSecondary}`}>{siteContent.contact.phoneSecondary}</a></p>
            <p><strong>Season:</strong> {siteContent.seasonWindow}</p>
          </div>
          <form onSubmit={onSubmit} className="contact-form">
            <label>Name<input required name="name" /></label>
            <label>Email<input required type="email" name="email" /></label>
            <label>Dates<input name="dates" placeholder="Approximate dates" /></label>
            <label>Message<textarea required name="message" rows={5} /></label>
            <button type="submit" className="button">Send inquiry</button>
            {submitted && <p className="success">Thanks! Please also call or email for fastest response.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
