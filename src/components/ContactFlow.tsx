"use client";

import { useState } from "react";

// Swap this for hello@treezio.com once the domain email is set up.
const CONTACT_EMAIL = "pdipatrizio@gmail.com";

type Intent = {
  id: string;
  label: string;
  followUp: string;
  subject: string;
};

const intents: Intent[] = [
  {
    id: "new-site",
    label: "I need a new website",
    followUp:
      "Great, that’s my favorite kind of project. Tell me a little about your business and I’ll follow up with ideas and a plain-English quote.",
    subject: "New website for my business",
  },
  {
    id: "slow-site",
    label: "My site feels slow or outdated",
    followUp:
      "Slow pages quietly turn customers away. Send me your web address and I’ll take a free look before we even talk.",
    subject: "My site feels slow or outdated",
  },
  {
    id: "not-found",
    label: "I’m not showing up on Google",
    followUp:
      "That’s fixable more often than people think. Tell me what your customers search for and I’ll check where you stand.",
    subject: "Help me show up on Google",
  },
  {
    id: "no-leads",
    label: "I get visitors but not enough customers",
    followUp:
      "This is the work I love most. Small changes to pages and forms can make a real difference in calls and orders.",
    subject: "Turning my visitors into customers",
  },
  {
    id: "other",
    label: "Something else",
    followUp: "No problem. Tell me what’s on your mind and I’ll point you in the right direction, even if the answer isn’t me.",
    subject: "A question about my website",
  },
];

export default function ContactFlow() {
  const [selected, setSelected] = useState<Intent | null>(null);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    const body = [
      `Hi Philip,`,
      ``,
      message,
      ``,
      `From ${name}${business ? ` at ${business}` : ""}`,
    ].join("\n");
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      selected.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <fieldset>
        <legend className="sr-only">What brings you here</legend>
        <div className="flex flex-wrap justify-center gap-3">
          {intents.map((intent) => (
            <button
              key={intent.id}
              type="button"
              onClick={() => setSelected(intent)}
              aria-pressed={selected?.id === intent.id}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600 ${
                selected?.id === intent.id
                  ? "border-pine-900 bg-pine-900 text-paper"
                  : "border-moss-200 bg-white text-pine-900 hover:border-leaf-600"
              }`}
            >
              {intent.label}
            </button>
          ))}
        </div>
      </fieldset>

      {selected && (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <p className="text-center text-bark-600">{selected.followUp}</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-pine-900">
                Your name
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-moss-200 bg-white px-4 py-2.5 text-pine-950 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-leaf-600"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-pine-900">
                Your business
              </span>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full rounded-lg border border-moss-200 bg-white px-4 py-2.5 text-pine-950 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-leaf-600"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-pine-900">
              What should I know
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your website address, what you sell, and what you’d like to change."
              className="w-full rounded-lg border border-moss-200 bg-white px-4 py-2.5 text-pine-950 placeholder:text-bark-400 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-leaf-600"
            />
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="rounded-full bg-leaf-600 px-8 py-3 font-medium text-paper transition-colors hover:bg-pine-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600"
            >
              Send it my way
            </button>
            <p className="mt-4 text-sm text-bark-600">
              This opens an email in your own mail app, so you keep a copy too.
              Or write me directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-leaf-600 underline underline-offset-2 hover:text-pine-800"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
