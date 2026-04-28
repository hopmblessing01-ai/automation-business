import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = json.name?.trim();
  const email = json.email?.trim();
  const message = json.message?.trim();

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please add a short message (10+ characters)." },
      { status: 400 },
    );
  }

  // Hook: forward to CRM, email provider, or Slack — placeholder logs in dev.
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", { name, email, company: json.company, message });
  }

  return NextResponse.json({ ok: true });
}
