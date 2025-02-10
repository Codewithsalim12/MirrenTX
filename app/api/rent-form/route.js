import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, contact, district, streetAddress } =
      await request.json();

    if (!name || !email || !contact || !district || !streetAddress) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

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
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
