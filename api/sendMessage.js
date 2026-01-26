import { Resend } from "resend";
import { connectDB } from "../utils/connectDB.js";
import Message from "../models/message.model.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();
    const { message } = req.body;
    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: "Message is required" });
    }
    // 1️⃣ Save to DB
    await Message.create({ message: message.trim() });
    // 2️⃣ Send email to YOU
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL,
      subject: "User Query",
      html: `
        <h3>New Message from My-Portfolio</h3>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("sendMessage error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
