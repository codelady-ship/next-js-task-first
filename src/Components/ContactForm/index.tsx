"use client";
import { useState } from "react";

/**
 * Demo form: it validates input in the browser but does not send anything,
 * because this project has no backend. The visitor is told so clearly.
 */
const ContactForm = () => {
  const [sentName, setSentName] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = String(new FormData(form).get("name") ?? "").trim();
    setSentName(name || "there");
    form.reset();
  };

  const field =
    "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
        Demo form: it checks your input but does not send it anywhere. Please use GitHub to get in touch.
      </p>
      <label className="block text-sm font-medium text-slate-700">
        Name
        <input name="name" required minLength={2} autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea name="message" required minLength={10} rows={5} className={field} />
      </label>
      <button type="submit" className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">
        Send message
      </button>
      {sentName && (
        <p role="status" className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Thanks, {sentName}! Your message looks good, but this is a demo, so nothing was sent.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
