// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import fs from "fs/promises";
// import path from "path";
// import { writeFile } from "fs/promises";

// export async function POST(req) {
//   try {
//     // Get form data (including the file)
//     const data = await req.formData();
//     const file = data.get("screenshot"); // Get the uploaded file

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     // Get file extension and set the appropriate content type
//     const fileExtension = path.extname(file.name).toLowerCase();
//     let contentType = "application/octet-stream"; // Default content type for unknown files

//     if (fileExtension === ".png") {
//       contentType = "image/png";
//     } else if (fileExtension === ".jpg" || fileExtension === ".jpeg") {
//       contentType = "image/jpeg";
//     } else if (fileExtension === ".gif") {
//       contentType = "image/gif";
//     }

//     // Convert the file into a Buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Define upload path
//     const uploadDir = path.join(process.cwd(), "public/uploads");
//     await fs.mkdir(uploadDir, { recursive: true }); // Create folder if not exists

//     const filePath = path.join(uploadDir, file.name);
//     await writeFile(filePath, buffer); // Save file

//     // Email configuration
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Setup mail options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "mirrentx@gmail.com", // Use your actual email
//       subject: "Payment Screenshot Received",
//       text: "Here is the uploaded payment screenshot.",
//       attachments: [
//         {
//           filename: file.name,
//           path: filePath,
//           contentType: contentType, // Dynamically set the content type
//         },
//       ],
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in API:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

// // Disable body parser for handling file uploads
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// Initialize AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1", // Update to your AWS S3 region
});

// Set up Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Handle POST request for uploading screenshot
export async function POST(req) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error during file parsing", err);
      return new Response(
        JSON.stringify({ success: false, message: "Error parsing the form" }),
        { status: 500 }
      );
    }

    const file = files.screenshot[0]; // Assuming 'screenshot' is the name of the file input

    // Upload the file to AWS S3
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // Your S3 bucket name
      Key: `screenshots/${Date.now()}-${file.originalFilename}`, // File path in S3
      Body: fs.createReadStream(file.filepath), // File content
      ContentType: file.mimetype, // Set the correct content type
      ACL: "public-read", // Make the file publicly accessible
    };

    try {
      const uploadResult = await s3.upload(uploadParams).promise();

      // Send email with image URL from S3
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "recipient@example.com", // Replace with the email you want to send to
        subject: "Payment Screenshot Received",
        html: `
          <p>Payment screenshot received successfully.</p>
          <p>View the screenshot: <a href="${uploadResult.Location}" target="_blank">Click here</a></p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Screenshot uploaded and email sent successfully!",
        }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Upload to S3 failed:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to upload screenshot. Please try again.",
        }),
        { status: 500 }
      );
    }
  });
}
