# QElevate Website - Contact Form Setup Guide

## Overview

The contact form functionality has been implemented with a backend email server. Users can now fill out a form directly on the website instead of using Google Forms.

## Features

✅ Contact form component with validation
✅ Email sending via SMTP (Gmail)
✅ Automatic confirmation emails to users
✅ Admin notifications for new inquiries
✅ Responsive form design
✅ Loading states and success/error messages

## How to Run

### Prerequisites
- Node.js installed on your system
- Internet connection (for Gmail SMTP)

### Running the Application

#### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```

This will start:
- React dev server on `http://localhost:5173/`
- Email server on `http://localhost:3001/`

#### Option 2: Run Servers Separately

**Terminal 1 - Start React Dev Server:**
```bash
npm run dev
```

**Terminal 2 - Start Email Server:**
```bash
npm run server
```

## Configuration

### Email Credentials
The email configuration is located in `server.js`:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aditya.sharma@qelevate.org',
    pass: 'jgyx jqup xefs uwgf',
  },
});
```

**Important:** These credentials are hardcoded for development. For production, consider using environment variables.

## File Structure

```
src/
├── components/
│   └── ContactForm.tsx       # Contact form component
├── pages/
│   └── Contact.tsx           # Contact page
└── App.tsx                   # Updated with /contact route

server.js                       # Backend email server
```

## Routes

- `/contact` - Contact page with form
- All other Google Forms links have been replaced with `/contact`

## Form Fields

1. **Full Name** (Required)
2. **Email Address** (Required)
3. **Phone Number** (Optional)
4. **Subject** (Required)
5. **Message** (Required)

## How It Works

1. User fills out the form on `/contact`
2. Form is submitted to `http://localhost:3001/api/send-email`
3. Server validates the data
4. Two emails are sent:
   - **Admin Email**: To aditya.sharma@qelevate.org with full inquiry details
   - **User Email**: Confirmation email to the user's provided email
5. Success or error message is displayed to the user

## Troubleshooting

### "Network error" when submitting form
- Make sure the email server is running (`npm run server`)
- Check that it's running on `http://localhost:3001`

### Emails not sending
- Verify Gmail credentials are correct
- Check that less secure apps are enabled for the Gmail account (if using regular Gmail)
- For Gmail with 2FA, use an [App Password](https://myaccount.google.com/apppasswords)

### CORS errors
- The server has CORS enabled for local development
- Make sure the email server is running on port 3001

## Production Deployment

For production deployment:

1. **Move credentials to environment variables:**
   ```javascript
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
     },
   });
   ```

2. **Set up environment variables on your hosting platform** (e.g., Vercel, Netlify, Heroku)

3. **Deploy the backend separately** or use a serverless function

4. **Update the API endpoint URL** in `ContactForm.tsx` to point to your production backend

## API Documentation

### POST /api/send-email

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "subject": "Consultation Request",
  "message": "I'm interested in healthcare consulting services..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message describing what went wrong"
}
```

## Security Notes

⚠️ **Important for Production:**
- Never commit credentials to version control
- Use environment variables for sensitive data
- Implement rate limiting on the backend
- Add CSRF protection
- Validate and sanitize all inputs on the server
- Consider using OAuth instead of storing passwords

## Support

For issues or questions, contact the development team or check the GitHub repository.
