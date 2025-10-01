import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: "hassan@crossfrontservices.com",
        pass:"Cfs-Hassan123", // ✅ use env var
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <hassan@crossfrontservices.com>`,
      to: "hassan@crossfrontservices.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
