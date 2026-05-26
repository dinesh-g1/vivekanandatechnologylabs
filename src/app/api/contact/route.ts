import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, organization } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Rate limiting safety: reject messages that look like spam
    const spamKeywords = [
      "viagra",
      "casino",
      "seo services",
      "buy now",
      "click here",
    ];
    const fullText = `${subject} ${message}`.toLowerCase();
    if (spamKeywords.some((kw) => fullText.includes(kw))) {
      return NextResponse.json(
        { error: "Message flagged as spam" },
        { status: 400 }
      );
    }

    // In production, this would:
    // 1. Store in database
    // 2. Send email notification
    // 3. Maybe trigger Slack/Discord webhook
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      organization,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We will get back to you soon. 🙏",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
