import nodemailer from 'nodemailer';

export async function POST(req) { 
  try {
    const { to, subject, text } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '404creative.co@gmail.com',  // Use your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password (not your regular password)
      },
    });

    await transporter.sendMail({
      from: '404creative.co@gmail.com',
      to,
      subject,
      text,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
  }
}
