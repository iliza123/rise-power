"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const roles = [
  "Procurement / Contracting",
  "Program Manager",
  "Engineering / Technical",
  "Operations / Field Lead",
  "Executive / Leadership",
  "Integration Partner",
  "Investor",
  "Other",
];

const useCases = [
  "Military & Defence",
  "Commercial",
  "Consumer",
  "Municipalities & Public Works",
  "Drone / Inspection Power",
  "Clean-Energy Pilot / Trial",
  "Other",
];

const labelClass =
  "text-sm font-semibold tracking-[0.16em] text-[#66717d] uppercase sm:text-[11px]";

const fieldClass =
  "mt-2 block w-full rounded-sm border border-[#d9dfe3] bg-[#fbfaf7] px-4 py-3 text-base text-[#101820] placeholder:text-[#66717d]/50 focus:border-[#849363] focus:outline-none";

/** Digits only, 7–15 (E.164). Allows +, spaces, dashes, dots, and parentheses. */
export function isValidPhoneNumber(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/^[+\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function sanitizePhoneInput(value: string): string {
  return value.replace(/[^\d+\s().-]/g, "");
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [phone, setPhone] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phoneValue = String(data.get("phone") || phone || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!phoneValue) nextErrors.phone = "Phone number is required.";
    else if (!isValidPhoneNumber(phoneValue)) {
      nextErrors.phone =
        "Please enter a valid phone number (digits only; 7–15 digits).";
    }
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phoneValue,
          company: data.get("company"),
          role: data.get("role"),
          useCase: data.get("useCase"),
          message,
          website: data.get("website"),
        }),
      });

      if (response.ok) setSent(true);
      else {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setErrors({
          form: payload?.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-[#849363]/35 bg-[#fbfaf7] px-6 py-10 text-center sm:px-8">
        <div
          aria-hidden="true"
          className="mx-auto mb-5 h-px w-14 bg-[#849363]"
        />
        <h3 className="font-display text-2xl tracking-wide text-[#101820] uppercase sm:text-3xl">
          Message Received
        </h3>
        <p className="type-section-body mt-3 text-[#626e7a]">
          Thank you for reaching out. We will respond with specs, runtime data,
          and a deployment summary.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          className={fieldClass}
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name ? (
          <p className="mt-1.5 text-sm text-red-500 sm:text-xs">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@company.com"
          autoComplete="email"
        />
        {errors.email ? (
          <p className="mt-1.5 text-sm text-red-500 sm:text-xs">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder="+1 (604) 555-0123"
          value={phone}
          onChange={(event) => {
            setPhone(sanitizePhoneInput(event.target.value));
            if (errors.phone) {
              setErrors((prev) => {
                const next = { ...prev };
                delete next.phone;
                return next;
              });
            }
          }}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1.5 text-sm text-red-500 sm:text-xs">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Organization
        </label>
        <input
          id="company"
          name="company"
          className={fieldClass}
          placeholder="Department, agency, or company"
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            Role
          </label>
          <select id="role" name="role" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="useCase" className={labelClass}>
            Use Case
          </label>
          <select
            id="useCase"
            name="useCase"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Primary use case
            </option>
            {useCases.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Operating environment, runtime requirements, deployment timeline, integration needs."
        />
        {errors.message ? (
          <p className="mt-1.5 text-sm text-red-500 sm:text-xs">{errors.message}</p>
        ) : null}
      </div>

      {errors.form ? (
        <p className="text-sm text-red-500 sm:text-xs">{errors.form}</p>
      ) : null}

      <div className="pt-1">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending..." : "Request Briefing"}
          {!pending ? (
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          ) : null}
        </button>
      </div>
    </form>
  );
}
