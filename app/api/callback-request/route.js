import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      phone,
      district,
      tehsilVillage,
      rentDuration,
      equipmentName,
    } = data;

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

    const getHtmlTemplate = (title, content, isAdmin = true) => `
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
              ${isAdmin ? `
                <div style="height: 1px; background-color: #fde68a; margin: 32px 0;"></div>
                <h3 class="help-title" style="color: #b45309;">Action Required</h3>
                <p class="help-text" style="color: #92400e; font-weight: 600;">
                  Please contact the customer in 15 or 30 minutes to finalize and place the order.
                </p>
              ` : `
                <p class="footer-signoff">Best,<br/>The MirrenTX Team</p>
                <div style="height: 1px; background-color: #f3f4f6; margin: 32px 0;"></div>
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
        Urgent: A customer has requested a callback for quote finalization. Please review the details and reach out via phone as prioritized.
      </p>
      
      <div class="data-block">
        <span class="data-label">Customer Contact</span>
        <p class="data-value">
          <strong>Name:</strong> ${firstName} ${lastName}<br/>
          <strong>Phone:</strong> <span style="color: #5e4ae3; font-weight: 800;">${phone}</span><br/>
          <strong>Equipment:</strong> ${equipmentName}
        </p>
        
        <span class="data-label">Logistics & Preference</span>
        <p class="data-value">
          <strong>Location:</strong> ${district}, ${tehsilVillage}<br/>
          <strong>Duration:</strong> ${rentDuration}
        </p>
      </div>

      <div style="margin-top: 32px; padding: 24px; background: #e0f2fe; border-radius: 12px; border: 1px solid #bae6fd;">
        <p style="margin: 0; color: #0369a1; font-size: 14px; font-weight: 700; line-height: 1.5; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
          🚨 Action Required: High Priority Callback
        </p>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mirrentx@gmail.com", // Directed to business email as per previous updates
      subject: `🚨 Callback Requested: ${equipmentName} - ${firstName}`,
      html: getHtmlTemplate("Quote Finalization Request", htmlContent),
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Callback API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
