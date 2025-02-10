import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, contact, district, streetAddress, screenshot } =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Rental Order Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Contact: ${contact}
      District: ${district}
      Street Address: ${streetAddress}
      Screenshot: ${screenshot ? "Attached" : "Not provided"}
    `,
    attachments: screenshot
      ? [{ filename: "screenshot.png", content: screenshot }]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
