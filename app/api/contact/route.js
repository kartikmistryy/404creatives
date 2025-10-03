import nodemailer from 'nodemailer';

export async function POST(req) { 
  try {
    const { to, subject, text } = await req.json();

    // Check if Gmail app password is configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_APP_PASSWORD environment variable is not set');
      return new Response(JSON.stringify({ 
        message: 'Email service not configured. Please contact the administrator.' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '404creative.co@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: '404creative.co@gmail.com',
      to,
      subject,
      text,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ 
      message: 'Error sending email', 
      error: error.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
