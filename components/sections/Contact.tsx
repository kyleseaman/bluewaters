"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/site";

type FormStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      dates: String(formData.get("dates") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    setStatus({ type: "loading" });

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!response.ok || !result.ok) {
      setStatus({ type: "error", message: result.error || "Something went wrong. Please call or email us." });
      return;
    }

    setStatus({ type: "success" });
    form.reset();
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
          <form onSubmit={onSubmit} className="contact-form" noValidate>
            <label htmlFor="name">Name</label>
            <input id="name" required name="name" autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input id="email" required type="email" name="email" autoComplete="email" />

            <label htmlFor="dates">Dates</label>
            <input id="dates" name="dates" placeholder="Approximate dates" />

            <label htmlFor="message">Message</label>
            <textarea id="message" required minLength={10} name="message" rows={5} />

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="button" disabled={status.type === "loading"}>
              {status.type === "loading" ? "Sending..." : "Send inquiry"}
            </button>

            {status.type === "success" && (
              <p className="success" role="status">
                Thanks! Your request was sent. Please also call or email for the fastest response.
              </p>
            )}

            {status.type === "error" && (
              <p className="error" role="alert">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
