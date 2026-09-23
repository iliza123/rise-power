import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  useCase?: string;
  message?: string;
  website?: string;
};

function isValidPhoneNumber(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/^[+\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (!isValidPhoneNumber(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  console.info("[contact]", {
    name,
    email,
    phone,
    company: body.company,
    role: body.role,
    useCase: body.useCase,
    message,
  });

  return NextResponse.json({ ok: true });
}
