// server.js
require('dotenv').config(); // Load ENV variables
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter with ENV
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: test route for browser
app.get("/", (req, res) => {
  res.send("✅ Contact backend is running");
});

// POST API for sending email
// POST API for sending email + auto-reply
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1️⃣ You receive the form mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your email
      subject: "New Contact Form Message",
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false });
  }
});


// Use PORT from ENV or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

