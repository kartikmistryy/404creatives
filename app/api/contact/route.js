// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   try {
//     const { name, email, phone, message } = await req.json();
//     console.log(email)
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       auth: {
//         user: "kartikmistry301@gmail.com",
//         pass: "ynzd zzpw dvkp lelu",
//       },
//       port: 587,
//       secure: false
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "kartikmistry301@gmail.com", // Your email
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     });

//     return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
//   }
// }

import { Resend } from 'resend';

const resend = new Resend(process.env.API_KEY);  // Use environment variable for security

export async function POST(req) {
  console.log(process.env.RESEND_API_KEY)
  try {
    const { to, subject, html } = await req.json();  // Get email details from the request body

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Keep this as your Resend sender email
      to: "fragshotmanagement@gmail.com",
      subject: "404 Website Reach Out",
      html,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}
