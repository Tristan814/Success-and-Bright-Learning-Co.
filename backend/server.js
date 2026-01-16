const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { generateEmailContent } = require("./emailtemplate");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
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
      user: "tristanaquino814@gmail.com",
      pass: "jojlcxfdpjozzvcx", // Gmail App Password
    },
  });

  const { html, text } = generateEmailContent(req.body);

  const mailOptions = {
    from: `"Success & Bright Learning" <tristanaquino814@gmail.com>`,
    to: "tristanaquino814@gmail.com",
    replyTo: email,
    subject: `New Quotation Request – ${companyName}`,
    html,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Email failed to send",
    });
  }
});

app.listen(3005, () => {
  console.log("🚀 Server running on http://localhost:3005");
});
