"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    formData.append("subject", "New inquiry from NexioHyper website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-teal-500 px-8 py-3 font-semibold text-slate-950 hover:bg-teal-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-teal-700">Thanks! We&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
