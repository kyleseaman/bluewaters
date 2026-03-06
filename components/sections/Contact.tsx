"use client";

import { FormEvent, useState } from "react";
import { fullAddress, siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";

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
      setStatus({ type: "error", message: result.error || "Something went wrong. Please email us directly." });
      return;
    }

    setStatus({ type: "success" });
    form.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Contact & availability
        </h2>
        <p className="max-w-[65ch] text-lg text-muted-foreground">
          Email us or send a quick inquiry below.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <p><strong>Email:</strong> <a href={`mailto:${siteContent.contact.email}`} className="text-primary hover:underline">{siteContent.contact.email}</a></p>
            <p><strong>Address:</strong> {fullAddress}</p>
            <p><strong>Season:</strong> {siteContent.seasonWindow}</p>
          </div>
          <form onSubmit={onSubmit} className="grid gap-3" noValidate>
            <label htmlFor="name" className="grid gap-1 font-semibold">Name</label>
            <input id="name" required name="name" autoComplete="name" className="w-full rounded-md border border-input px-2.5 py-2" />

            <label htmlFor="email" className="grid gap-1 font-semibold">Email</label>
            <input id="email" required type="email" name="email" autoComplete="email" className="w-full rounded-md border border-input px-2.5 py-2" />

            <label htmlFor="dates" className="grid gap-1 font-semibold">Dates</label>
            <input id="dates" name="dates" placeholder="Approximate dates" className="w-full rounded-md border border-input px-2.5 py-2" />

            <label htmlFor="message" className="grid gap-1 font-semibold">Message</label>
            <textarea id="message" required minLength={10} name="message" rows={5} className="w-full rounded-md border border-input px-2.5 py-2" />

            <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <Button type="submit" size="lg" disabled={status.type === "loading"}>
              {status.type === "loading" ? "Sending..." : "Send inquiry"}
            </Button>

            {status.type === "success" && (
              <p className="font-semibold text-green-700" role="status">
                Thanks! Your request was sent. We'll get back to you as soon as possible.
              </p>
            )}

            {status.type === "error" && (
              <p className="font-semibold text-destructive" role="alert">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
