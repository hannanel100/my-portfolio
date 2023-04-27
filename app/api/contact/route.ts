import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";
import { env } from "@/app/env.mjs";

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, "1 m"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});
export async function POST(request: Request) {
  sgMail.setApiKey(env.SENDGRID_API_KEY);
  const { fullname, email, message, subject } = await request.json();
  if (!email || !message || !subject || !fullname) {
    return new Response("Missing required field", { status: 400 });
  }

  const body = `Name: ${fullname}\nEmail: ${email}\nSubject:${subject} \nMessage: ${message}`;
  const mail = {
    to: "me@hannanel.dev",
    from: "me@hannanel.dev",
    subject: "You have a new message from you'r portfolio site!",
    text: body,
  };

  try {
    const { success } = await ratelimit.limit(email);
    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    const response = await sgMail.send(mail);
    console.log("🚀 ~ file: route.ts:22 ~ POST ~ response:", response);
    return NextResponse.json({ response });
  } catch (error: any) {
    console.error("🚀 ~ file: route.ts:26 ~ POST ~ error:", error);
    if (error.response) {
      console.error(error.response.body);
    }
    return error;
  }
}
