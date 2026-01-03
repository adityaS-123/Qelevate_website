import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contactus@qelevate.in',
    pass: 'jjai yshc sctn suhb',
  },
});

// Contact form endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email to admin
    const adminMailOptions = {
      from: 'contactus@qelevate.in',
      to: 'contactus@qelevate.in',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: 'contactus@qelevate.in',
      to: email,
      subject: 'We received your message - QElevate',
      html: `
        <h2>Thank you for contacting QElevate!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message Details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Our team will review your inquiry and respond within 24 hours.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>QElevate Team</strong></p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
