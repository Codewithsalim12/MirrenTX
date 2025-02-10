import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    // Get form data (including the file)
    const data = await req.formData();
    const file = data.get("screenshot"); // Get the uploaded file

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Get file extension and set the appropriate content type
    const fileExtension = path.extname(file.name).toLowerCase();
    let contentType = "application/octet-stream"; // Default content type for unknown files

    if (fileExtension === ".png") {
      contentType = "image/png";
    } else if (fileExtension === ".jpg" || fileExtension === ".jpeg") {
      contentType = "image/jpeg";
    } else if (fileExtension === ".gif") {
      contentType = "image/gif";
    }

    // Convert the file into a Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define upload path
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true }); // Create folder if not exists

    const filePath = path.join(uploadDir, file.name);
    await writeFile(filePath, buffer); // Save file

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mirrentx@gmail.com", // Use your actual email
      subject: "Payment Screenshot Received",
      text: "Here is the uploaded payment screenshot.",
      attachments: [
        {
          filename: file.name,
          path: filePath,
          contentType: contentType, // Dynamically set the content type
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Disable body parser for handling file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
