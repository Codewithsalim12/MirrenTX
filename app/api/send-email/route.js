import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, company, address, message, subscribeEmail } =
    await req.json();

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address (the one sending the email)
      pass: process.env.EMAIL_PASS, // Your email password (use app-specific password for Gmail)
    },
  });

  // Setup email data
  const baseUrl = process.env.NEXTAUTH_URL || "https://mirrentx.com";
  const logoUrl = `${baseUrl}/logo-modern.svg`;

    const getHtmlTemplate = (title, content) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
          .wrapper { background-color: #f9fafb; padding: 60px 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); padding: 40px; }
          .logo { display: block; margin: 0 auto 40px; width: 60px; height: auto; }
          .header-title { color: #000000; font-size: 32px; font-weight: 800; margin: 0 0 24px; letter-spacing: -1.5px; line-height: 1.1; text-align: left; }
          .content-text { color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 32px; }
          .data-block { border-top: 1px solid #f3f4f6; padding-top: 32px; margin-top: 32px; }
          .data-label { color: #000000; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block; }
          .data-value { color: #4b5563; font-size: 16px; font-weight: 500; margin-bottom: 24px; }
          .button { display: inline-block; padding: 16px 32px; background-color: #5e4ae3; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; margin: 20px 0; font-size: 14px; }
          .message-box { background: #f9fafb; padding: 32px; border-radius: 20px; border: 1px solid #f3f4f6; color: #1f2937; position: relative; font-size: 16px; line-height: 1.7; margin-top: 12px; }
          .footer { border-top: 1px solid #f3f4f6; margin-top: 48px; padding-top: 40px; }
          .footer-signoff { color: #1a1a1a; font-size: 16px; font-weight: 700; margin-bottom: 32px; }
          .help-title { color: #000000; font-size: 18px; font-weight: 800; margin-bottom: 12px; }
          .help-text { color: #6b7280; font-size: 14px; line-height: 1.5; }
          .help-link { color: #5e4ae3; text-decoration: none; font-weight: 600; }
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
              <p class="footer-signoff">Best,<br/>The MirrenTX Team</p>
              <div style="height: 1px; background-color: #f3f4f6; margin: 32px 0;"></div>
              <h3 class="help-title">Need help?</h3>
              <p class="help-text">
                If you have any questions, please contact our support team at 
                <a href="mailto:mirrentx@gmail.com" class="help-link">mirrentx@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

  let mailOptions;
  if (subscribeEmail) {
    const htmlContent = `
      <p class="content-text">
        Congratulations! You just grew your community. A new user is excited to stay updated with MirrenTX.
      </p>
      <div class="data-block">
        <span class="data-label">Subscriber Email</span>
        <p class="data-value" style="font-size: 20px; color: #1a1a1a;">${subscribeEmail}</p>
        
        <a href="${baseUrl}/admin" class="button">Manage Subscribers</a>
      </div>
    `;

    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `✨ New Subscriber: ${subscribeEmail}`,
      html: getHtmlTemplate("Newsletter Growth", htmlContent),
    };
  } else {
    const htmlContent = `
      <p class="content-text">
        You've received a new inbound inquiry. Please review the details below and respond to the customer at your earliest convenience.
      </p>
      
      <div class="data-block">
        <span class="data-label">Sender Details</span>
        <p class="data-value">
          <strong>Name:</strong> ${firstName} ${lastName}<br/>
          <strong>Company:</strong> ${company || "N/A"}<br/>
          <strong>Email:</strong> ${email}<br/>
          <strong>Phone:</strong> ${phone}<br/>
          <strong>Address:</strong> ${address || "N/A"}
        </p>
        
        <span class="data-label">Message</span>
        <div class="message-box">${message}</div>
      </div>
    `;

    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📬 New Contact: ${firstName} ${lastName}`,
      replyTo: email,
      html: getHtmlTemplate("Inbound Inquiry", htmlContent),
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
