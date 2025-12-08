// // server.js - Backend Email Service
// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors"); // Handles cross-origin requests from the frontend

// const app = express();
// // Middleware setup
// app.use(cors()); 
// app.use(express.json()); // Allows parsing JSON data from the fetch request

// // ============================================
// // POST route for sending email
// // ============================================
// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   // 1. Server-side Validation
//   if (!name || !email || !message) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "All fields are required" 
//     });
//   }

//   // Basic email format validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Invalid email address" 
//     });
//   }

//   // 2. Nodemailer Transporter Setup (The sending account)
//   // NOTE: You must use a Gmail App Password here, not your regular password.
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "tristanaquino814@gmail.com",    // The account that sends the email
//       pass: "jojlcxfdpjozzvcx",             // The App Password for that account
//     },
//   });

//   // 3. Email Configuration
//   const mailOptions = {
//     // FROM: Your email (the SMTP account that sends)
//     from: '"Success and Bright Learning Co." <tristanaquino814@gmail.com>',
    
//     // TO: Where you want to RECEIVE the message
//     to: "jaquino.jamcs@gmail.com",     
    
//     // REPLY-TO: User's email (allows you to reply directly to the sender)
//     replyTo: `"${name}" <${email}>`,
    
//     subject: `New Contact Form Message from ${name}`,
    
//     // HTML Email Body
//     html: `
//       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
//           <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
//             New Contact Form Submission
//           </h2>
//           <div style="margin: 20px 0;">
//             <p style="margin: 10px 0;">
//               <strong style="color: #333;">From:</strong> 
//               <span style="color: #555;">${name}</span>
//             </p>
//             <p style="margin: 10px 0;">
//               <strong style="color: #333;">Sender Email:</strong> 
//               <a href="mailto:${email}" style="color: #667eea;">${email}</a>
//             </p>
//           </div>
//           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
//             <p style="margin: 0 0 10px 0;">
//               <strong style="color: #333;">Message:</strong>
//             </p>
//             <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">
//               ${message}
//             </p>
//           </div>
//           <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
//           <p style="color: #999; font-size: 12px; text-align: center;">
//             This message was sent from your Success and Bright Learning Co.<br>
//             Click "Reply" to respond directly to ${email}
//           </p>
//         </div>
//       </div>
//     `,
    
//     // Plain Text Version (fallback)
//     text: `
// New Contact Form Message

// From: ${name}
// Sender Email: ${email}

// Message:
// ${message}

// ---
// This message was sent from your Success and Bright Learning Co.
// Reply to respond to ${email}
//     `,
//   };

//   // 4. Send Email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully:", info.messageId);
//     console.log(`📧 Sender Name: ${name}`);
//     console.log(`📧 Sender Email: ${email}`);
//     console.log(`📬 Receiver: jaquino.jamcs@gmail.com`);
    
//     // Send success response to frontend
//     res.status(200).json({ 
//       success: true, 
//       message: "Message sent successfully!" 
//     });
//   } catch (err) {
//     console.error("❌ Email error:", err);
//     // Send error response to frontend
//     res.status(500).json({ 
//       success: false, 
//       error: "Failed to send email. Check server logs." 
//     });
//   }
// });

// // Test route
// app.get("/", (req, res) => {
//   res.send("Server is running! ✅");
// });

// // Start server
// const PORT = 4002;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

// server.js - Backend Email Service
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

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: "Invalid email address" 
    });
  }

  // 2. Nodemailer Transporter Setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tristanaquino814@gmail.com", 
      pass: "jojlcxfdpjozzvcx",            
    },
  });

  // 👈 3. Generate Email Content using the separate module
  const { html, text } = generateEmailContent({ name, email, message });

  // 4. Email Configuration
  const mailOptions = {
    from: '"Success and Bright Learning Co." <tristanaquino814@gmail.com>',
    to: "jaquino.jamcs@gmail.com",     
    replyTo: `"${name}" <${email}>`,
    subject: `New Contact Form Message from ${name}`,
    
    // 👈 Use the generated HTML and Plain Text
    html: html,
    text: text,
  };

  // 5. Send Email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    console.log(`📧 Sender Name: ${name}`);
    console.log(`📧 Sender Email: ${email}`);
    console.log(`📬 Receiver: tristanaquino814@gmail.com`);
    
    // Send success response to frontend
    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  } catch (err) {
    console.error("❌ Email error:", err);
    // Send error response to frontend
    res.status(500).json({ 
      success: false, 
      error: "Failed to send email. Check server logs." 
    });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running! ✅");
});

// Start server
const PORT = 4002;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});