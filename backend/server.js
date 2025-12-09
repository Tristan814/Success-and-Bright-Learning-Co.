const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
// 👈 Import the email template function
const { generateEmailContent } = require('../src/emailtemplate'); 

const app = express();
// Middleware setup
app.use(cors()); 
app.use(express.json()); 

// ============================================
// POST route for sending email
// ============================================
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Server-side Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "All fields are required" 
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: "Invalid email address" 
    });
  }


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tristanaquino814@gmail.com", 
      pass: "jojlcxfdpjozzvcx",            
    },
  });


  const { html, text } = generateEmailContent({ name, email, message });


  const mailOptions = {
    from: '"Success and Bright Learning Co." <tristanaquino814@gmail.com>',
    to: "edwin.cordenete@gmail.com",     
    replyTo: `"${name}" <${email}>`,
    subject: `New Contact Form Message from ${name}`,
    

    html: html,
    text: text,
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(" Email sent successfully:", info.messageId);
    console.log(` Sender Name: ${name}`);
    console.log(` Sender Email: ${email}`);
    console.log(` Receiver: edwin.cordenete@gmail.com`);
    

    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  } catch (err) {
    console.error("❌ Email error:", err);

    res.status(500).json({ 
      success: false, 
      error: "Failed to send email. Check server logs." 
    });
  }
});


app.get("/", (req, res) => {
  res.send("Server is running! ✅");
});


const PORT = 4002;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});