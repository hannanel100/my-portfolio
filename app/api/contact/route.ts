import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
export async function POST(request: Request) {
  process.env.SENDGRID_API_KEY &&
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { fullname, email, message, subject } = await request.json();
  const body = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;
  const mail = {
    to: "me@hannanel.dev",
    from: "me@hannanel.dev",
    subject: subject,
    text: body,
  };

  try {
    const response = await sgMail.send(mail);
    console.log("🚀 ~ file: route.ts:22 ~ POST ~ response:", response);

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error("🚀 ~ file: route.ts:26 ~ POST ~ error:", error);
    if (error.response) {
      console.error(error.response.body);
    }
    return NextResponse.json({ error });
  }
}
