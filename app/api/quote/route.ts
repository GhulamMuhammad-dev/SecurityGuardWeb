import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // GoDaddy SMTP
      port: 465,
      secure: true,
      auth: {
        user: "hassan@crossfrontservices.com",
        pass: "Cfs-Hassan123",
      },
    });

    const servicesList = body.services?.length ? body.services.join(", ") : "None";
    const daysList = body.days?.length
      ? body.days.map((d: any) => `${d.day}: ${d.hours} hrs`).join("<br/>")
      : "None";

    await transporter.sendMail({
      from: `"Quotation Form" <hassan@crossfrontservices.com>`,
      to: "hassan@crossfrontservices.com",
      subject: "New Quotation Request",
      html: `
        <h2>New Quotation Request</h2>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
        <p><b>Position:</b> ${body.position || "N/A"}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Company:</b> ${body.company || "N/A"}</p>
        <p><b>Services Required:</b> ${servicesList}</p>
        <p><b>Days & Hours:</b><br/>${daysList}</p>
        <p><b>Start Date:</b> ${body.startDate.day}-${body.startDate.month}-${body.startDate.year}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Quotation request sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send quotation request." }, { status: 500 });
  }
}
