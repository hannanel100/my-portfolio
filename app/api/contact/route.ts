import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message, subject } = await request.json();
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const mail = {
    to: "hannanel.gersh@gmail.com",
    from: email,
    subject: subject,
    text: body,
  };
  //   FIXME: Sendgrid responding with 400
  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(mail),
    });
    console.log("🚀 ~ file: route.ts:22 ~ POST ~ response:", response);

    return NextResponse.json({ response });
  } catch (error) {
    console.log("🚀 ~ file: route.ts:26 ~ POST ~ error:", error);
    return NextResponse.json({ error });
  }
}
