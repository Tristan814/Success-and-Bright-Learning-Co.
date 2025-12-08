const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourcompany@gmail.com",   // your company email
      pass: "your_app_password"        // Gmail App Password (not your real password)
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "yourcompany@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).send("Email sent!");
  } catch (err) {
    res.status(500).send("Email sending failed");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
