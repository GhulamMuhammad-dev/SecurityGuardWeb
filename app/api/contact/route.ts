import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Create Transporter (using GoDaddy SMTP in your case)
    const transporter = nodemailer.createTransport({
      host:"smtpout.secureserver.net",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user:"hassan@crossfrontservices.com", // from .env.local
        pass:"Cfs-Hassan123",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email options
    await transporter.sendMail({
      from: `"Contact Form" <hassan@crossfrontservices.com>`,
      to: "hassan@crossfrontservices.com", // can be same as MAIL_USER
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || "N/A"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
