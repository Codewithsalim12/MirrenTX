import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, feedback } = await req.json();

    if (!name || !email || !feedback) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    if (feedback.length > 300) {
      return Response.json(
        { success: false, message: "Feedback must be under 300 characters." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password from Google
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Feedback from MirrenTX",
      text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Feedback submitted successfully!",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong. Try again!" },
      { status: 500 }
    );
  }
}
