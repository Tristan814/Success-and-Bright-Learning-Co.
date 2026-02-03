import nodemailer from "nodemailer";
import { generateEmailContent } from "../backend/emailtemplate.js";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    companyName,
    organizationDetails,
    name,
    designation,
    mobileNumber,
    email,
    serviceType,
    message,
  } = req.body;

  if (
    !companyName ||
    !organizationDetails ||
    !name ||
    !designation ||
    !mobileNumber ||
    !email ||
    !serviceType
  ) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { html, text } = generateEmailContent(req.body);

  try {
    await transporter.sendMail({
      from: `"Success & Bright Learning" <${process.env.EMAIL_USER}>`,
      to: "success.bright2020@gmail.com",
      replyTo: email,
      subject: `New Quotation Request – ${companyName}`,
      html,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: "Email failed to send",
    });
  }
}
