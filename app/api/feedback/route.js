import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";
import Feedback from "@/models/Feedback";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return Response.json(
        { success: false, message: "You must be signed in to provide feedback." },
        { status: 401 }
      );
    }

    const { feedback, rating } = await req.json();
    const { name, email, image: userImage } = session.user;
    
    if (!feedback || !rating) {
      return Response.json(
        { success: false, message: "Feedback and rating are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Create new feedback entry
    const newFeedback = await Feedback.create({
      name,
      email,
      feedback,
      rating,
      userImage: session?.user?.image || "",
    });

    // NodeMailer logic (Keeping it as requested)
    const emojis = ["😞", "😐", "😊", "😁", "🤩"];
    const emojiRating = typeof rating === "number" && rating > 0 ? emojis[rating - 1] : "Not rated";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const baseUrl = process.env.NEXTAUTH_URL || "https://mirrentx.com";
    const logoUrl = `${baseUrl}/logo-modern.svg`;

    const getHtmlTemplate = (title, content, isAdmin = false) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
          .wrapper { background-color: #f9fafb; padding: 60px 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); padding: 40px; border: 1px solid #f3f4f6; }
          .logo { display: block; margin: 0 auto 40px; width: 60px; height: auto; }
          .header-title { color: #000000; font-size: 32px; font-weight: 800; margin: 0 0 24px; letter-spacing: -1.5px; line-height: 1.1; text-align: left; }
          .content-text { color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 32px; }
          .data-block { border-top: 1px solid #f3f4f6; padding-top: 32px; margin-top: 32px; }
          .data-label { color: #000000; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; display: block; }
          .data-value { color: #4b5563; font-size: 16px; font-weight: 500; margin-bottom: 24px; }
          .rating-badge { display: inline-block; background-color: #f5f3ff; color: #5e4ae3; padding: 12px 20px; border-radius: 12px; font-weight: 800; font-size: 14px; margin-bottom: 24px; }
          .message-box { background: #f9fafb; padding: 32px; border-radius: 20px; border: 1px solid #f3f4f6; font-style: italic; color: #1f2937; position: relative; font-size: 16px; line-height: 1.7; }
          .footer { border-top: 1px solid #f3f4f6; margin-top: 48px; padding-top: 40px; clear: both; }
          .footer-signoff { color: #1a1a1a; font-size: 16px; font-weight: 700; margin-bottom: 32px; }
          .help-title { color: #000000; font-size: 18px; font-weight: 800; margin-bottom: 12px; }
          .help-text { color: #6b7280; font-size: 14px; line-height: 1.5; }
          .help-link { color: #5e4ae3; text-decoration: none; font-weight: 600; }
          .admin-alert { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 24px; margin-top: 32px; }
          
          @media only screen and (max-width: 600px) {
            .wrapper { padding: 20px 10px !important; }
            .container { padding: 24px !important; border-radius: 16px !important; }
            .header-title { font-size: 26px !important; }
            .message-box { padding: 20px !important; font-size: 15px !important; }
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <img src="${logoUrl}" alt="MirrenTX" class="logo" />
            <h1 class="header-title">${title}</h1>
            <div class="content">
              ${content}
            </div>
            <div class="footer">
              ${isAdmin ? `
                <div class="admin-alert">
                  <h3 class="help-title" style="color: #166534; margin-top: 0;">Administrative Update</h3>
                  <p class="help-text" style="color: #166534; font-weight: 600; margin-bottom: 0;">
                    Customer feedback has been recorded in the platform database.
                  </p>
                </div>
              ` : `
                <p class="footer-signoff">Best,<br/>The MirrenTX Team</p>
                <div class="w-full h-px bg-gray-100 my-8"></div>
                <h3 class="help-title">Need help?</h3>
                <p class="help-text">
                  If you have any questions, please contact our support team at 
                  <a href="mailto:mirrentx@gmail.com" class="help-link">mirrentx@gmail.com</a>.
                </p>
              `}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const htmlContent = `
      <p class="content-text">
        Great news! We've received a new customer testimonial. Your platform is growing through real community trust.
      </p>
      
      <div class="data-block">
        <span class="data-label">User Impression</span>
        <div class="rating-badge">Rating: ${rating} Stars ${emojiRating}</div>
        
        <span class="data-label">Testimonial</span>
        <div class="message-box">"${feedback}"</div>
        
        <div style="margin-top: 32px;">
           <span class="data-label">Customer Details</span>
           <p class="data-value"><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `⭐ New Feedback: ${name}`,
      replyTo: email,
      html: getHtmlTemplate("User Feedback", htmlContent, true),
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Feedback submitted successfully!",
      data: newFeedback
    });
  } catch (error) {
    console.error("Feedback Error:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Try again!" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    
    await connectToDatabase();
    
    let query = Feedback.find().sort({ createdAt: -1 });
    if (limit) {
      query = query.limit(parseInt(limit));
    }
    
    const testimonials = await query;
    const totalCount = await Feedback.countDocuments();

    return Response.json({
      success: true,
      testimonials,
      totalCount
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
