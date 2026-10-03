import nodemailer from "nodemailer";

import { site } from "@/lib/content";

type MailEnv =
  | "SMTP_HOST"
  | "SMTP_PORT"
  | "SMTP_USER"
  | "SMTP_PASS"
  | "CONTACT_FROM_EMAIL"
  | "CONTACT_TO_EMAIL";

const BRAND = {
  sage: "#6e7f42",
  sageCta: "#849363",
  ink: "#101820",
  muted: "#66717d",
  border: "#e2e6e0",
  white: "#ffffff",
  messageBg: "#ffffff",
} as const;

function requireEnv(name: MailEnv): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name} environment variable.`);
  }
  return value;
}

/** SMTP2GO — auth via SMTP_USER/SMTP_PASS; From/To use CONTACT_* emails. */
function createTransporter() {
  const port = Number(requireEnv("SMTP_PORT"));
  return nodemailer.createTransport({
    host: requireEnv("SMTP_HOST"),
    port,
    // 465/8465/443 use implicit SSL; 2525/587 use STARTTLS.
    secure: port === 465 || port === 8465 || port === 443,
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: requireEnv("SMTP_PASS"),
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactEmailInput = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  role?: string;
  useCase?: string;
  message: string;
};

function optionalLine(label: string, value?: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return `${label}: ${trimmed}`;
}

function displayValue(value?: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "—";
}

function detailRow(
  label: string,
  valueHtml: string,
  isLast = false,
): string {
  const border = isLast ? "none" : `1px solid ${BRAND.border}`;
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:${border};vertical-align:top;width:140px;">
        <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.muted};">
          ${escapeHtml(label)}
        </span>
      </td>
      <td style="padding:14px 0 14px 16px;border-bottom:${border};vertical-align:top;">
        <span style="font-size:15px;line-height:1.5;color:${BRAND.ink};">
          ${valueHtml}
        </span>
      </td>
    </tr>
  `;
}

function buildContactEmailHtml(input: ContactEmailInput): string {
  const emailHref = `mailto:${encodeURIComponent(input.email)}`;
  const phoneHref = `tel:${input.phone.replace(/[^\d+]/g, "")}`;

  const details = [
    detailRow("Name", escapeHtml(input.name)),
    detailRow(
      "Email",
      `<a href="${emailHref}" style="color:${BRAND.sageCta};text-decoration:none;font-weight:600;">${escapeHtml(input.email)}</a>`,
    ),
    detailRow(
      "Phone",
      `<a href="${phoneHref}" style="color:${BRAND.sageCta};text-decoration:none;font-weight:600;">${escapeHtml(input.phone)}</a>`,
    ),
    detailRow("Organization", escapeHtml(displayValue(input.company))),
    detailRow("Role", escapeHtml(displayValue(input.role))),
    detailRow("Use case", escapeHtml(displayValue(input.useCase)), true),
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>New contact inquiry — ${escapeHtml(input.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.white};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    New inquiry from ${escapeHtml(input.name)}${input.company?.trim() ? ` · ${escapeHtml(input.company.trim())}` : ""} — reply from this email.
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${BRAND.white};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:8px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:${BRAND.ink};padding:28px 32px;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${BRAND.sageCta};">
                Rise Power · Website
              </p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-0.02em;color:${BRAND.white};">
                New contact inquiry
              </h1>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="height:4px;background-color:${BRAND.sageCta};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px 8px;font-family:Arial,Helvetica,sans-serif;background-color:${BRAND.white};">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${BRAND.muted};">
                A new briefing request was submitted on the contact form. Reply to this email to respond directly to the sender.
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${details}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:8px 32px 28px;font-family:Arial,Helvetica,sans-serif;background-color:${BRAND.white};">
              <p style="margin:16px 0 10px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.muted};">
                Message
              </p>
              <div style="padding:16px 18px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-left:3px solid ${BRAND.sageCta};border-radius:4px;">
                <p style="margin:0;font-size:15px;line-height:1.65;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(input.message)}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 32px;font-family:Arial,Helvetica,sans-serif;background-color:${BRAND.white};">
              <a href="${emailHref}"
                 style="display:inline-block;padding:12px 22px;background-color:${BRAND.sageCta};color:${BRAND.white};font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;border-radius:3px;">
                Reply to ${escapeHtml(input.name)}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid ${BRAND.border};background-color:${BRAND.white};font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.muted};">
                ${escapeHtml(site.name)}
                &nbsp;·&nbsp;
                <a href="mailto:${escapeHtml(site.email)}" style="color:${BRAND.sage};text-decoration:none;">${escapeHtml(site.email)}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail(input: ContactEmailInput) {
  const from = requireEnv("CONTACT_FROM_EMAIL");
  const to = requireEnv("CONTACT_TO_EMAIL");
  const transporter = createTransporter();

  const org = input.company?.trim();
  const textLines = [
    "New contact inquiry — Rise Power website",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    optionalLine("Organization", org),
    optionalLine("Role", input.role),
    optionalLine("Use case", input.useCase),
    "",
    "Message:",
    input.message,
  ].filter((line): line is string => line !== null);

  const subjectOrg = org ? ` (${org})` : "";

  await transporter.sendMail({
    from: `"${site.name} Website" <${from}>`,
    to,
    replyTo: `"${input.name}" <${input.email}>`,
    subject: `New inquiry — ${input.name}${subjectOrg}`,
    text: textLines.join("\n"),
    html: buildContactEmailHtml(input),
  });
}
