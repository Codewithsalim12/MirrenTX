import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, message, subscribeEmail } =
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

  const getHtmlTemplate = (title, content, badge = "Contact") => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #fdfaff; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { background-color: #fdfaff; padding: 40px 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 32px; overflow: hidden; border: 1px solid #f3e8ff; box-shadow: 0 40px 80px -20px rgba(139, 92, 246, 0.08); }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 50%, #10b981 100%); padding: 60px 40px; text-align: center; position: relative; }
        .header-overlay { position: absolute; inset: 0; background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png'); opacity: 0.05; }
        .logo { width: 85px; height: 85px; margin-bottom: 24px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); position: relative; z-index: 1; }
        .badge { background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); color: white; padding: 8px 18px; border-radius: 100px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; display: inline-block; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.3); }
        .header-title { color: white; font-size: 34px; font-weight: 800; margin: 0; letter-spacing: -1.5px; line-height: 1.1; position: relative; z-index: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        
        .content { padding: 50px 45px; }
        .section-title { color: #8b5cf6; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 28px; display: block; opacity: 0.7; }
        .data-card { background: #faf5ff; border-radius: 24px; padding: 10px; border: 1px solid #f3e8ff; }
        .data-row { display: flex; padding: 18px 20px; border-bottom: 1px solid #f3e8ff; }
        .data-row:last-child { border-bottom: none; }
        .data-label { color: #6b7280; font-size: 13px; font-weight: 600; width: 130px; flex-shrink: 0; }
        .data-value { color: #1e1b4b; font-size: 15px; font-weight: 700; }
        
        .message-box { background: #faf5ff; padding: 32px; border-radius: 24px; border: 1px solid #f3e8ff; font-size: 16px; line-height: 1.8; color: #4b5563; white-space: pre-wrap; position: relative; }
        .message-box::before { content: '“'; font-size: 80px; color: rgba(139, 92, 246, 0.1); position: absolute; top: -10px; left: 10px; font-family: serif; line-height: 1; }
        
        .footer { background: #faf5ff; padding: 45px; text-align: center; border-top: 1px solid #f3e8ff; }
        .footer-logo { font-size: 22px; font-weight: 900; color: #d8b4fe; letter-spacing: 4px; margin-bottom: 20px; display: block; opacity: 0.8; }
        .footer-links { margin-bottom: 30px; }
        .footer-link { color: #8b5cf6; font-size: 14px; text-decoration: none; margin: 0 15px; font-weight: 600; }
        .copyright { color: #a1a1aa; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="header-overlay"></div>
            <div class="badge">${badge}</div>
            <img src="${logoUrl}" alt="MirrenTX" class="logo" />
            <h1 class="header-title">${title}</h1>
          </div>
          <div class="content">
            ${content}
          </div>
          <div class="footer">
            <span class="footer-logo">MIRRENTX</span>
            <div class="footer-links">
              <a href="${baseUrl}" class="footer-link">Website</a>
              <a href="mailto:mirrentx@gmail.com" class="footer-link">Support</a>
              <a href="${baseUrl}/rentals" class="footer-link">Rentals</a>
            </div>
            <p class="copyright">© ${new Date().getFullYear()} MirrenTX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  let mailOptions;
  if (subscribeEmail) {
    const htmlContent = `
      <span class="section-title">Subscription Request</span>
      <div style="background: rgba(59,130,246,0.05); padding: 32px; border-radius: 20px; border: 1px dashed rgba(59,130,246,0.2); text-align: center;">
        <div style="font-size: 11px; color: #3b82f6; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">Target Audience</div>
        <div style="font-size: 20px; color: white; font-weight: 700; margin-bottom: 8px;">${subscribeEmail}</div>
        <div style="color: #94a3b8; font-size: 13px;">Market: Newsletter Base</div>
      </div>
      <p style="color: #64748b; font-size: 14px; margin-top: 24px; text-align: center;">A new user has requested to join the MirrenTX priority mailing list.</p>
    `;

    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `✨ New Subscriber: ${subscribeEmail}`,
      html: getHtmlTemplate("Newsletter Growth", htmlContent, "System Event"),
    };
  } else {
    const htmlContent = `
      <span class="section-title">Inquiry Details</span>
      <div class="data-card">
        <div class="data-row">
          <div class="data-label">Sender</div>
          <div class="data-value">${firstName} ${lastName}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Email</div>
          <div class="data-value">${email}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Phone</div>
          <div class="data-value">${phone}</div>
        </div>
      </div>

      <div style="margin-top: 40px;">
        <span class="section-title">Message Content</span>
        <div class="message-box">${message}</div>
      </div>
    `;

    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📬 New Contact: ${firstName} ${lastName}`,
      replyTo: email,
      html: getHtmlTemplate("Inbound Inquiry", htmlContent, "Priority Message"),
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
