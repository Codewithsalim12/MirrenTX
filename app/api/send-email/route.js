import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, message, subscribeEmail } =
    await req.json();

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // or other service like SendGrid, Mailgun, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address (the one sending the email)
      pass: process.env.EMAIL_PASS, // Your email password (use app-specific password for Gmail)
    },
  });

  // Setup email data
  let mailOptions;
  if (subscribeEmail) {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send subscription email to your email address
      subject: "New Subscriber",
      text: `New subscriber: ${subscribeEmail}`,
    };
  } else {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send message to your email address
      subject: `Message from ${firstName} ${lastName}`,
      text: `Message from ${firstName} ${lastName} (${email}, ${phone}): \n\n ${message}`,
    };
  }

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again.",
      }),
      { status: 500 }
    );
  }
}
