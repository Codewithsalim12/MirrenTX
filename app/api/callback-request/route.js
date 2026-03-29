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

    const getHtmlTemplate = (title, content, badge = "Callback Request") => `
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
          .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 60px 40px; text-align: center; position: relative; }
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
          
          .footer { background: #faf5ff; padding: 45px; text-align: center; border-top: 1px solid #f3e8ff; }
          .footer-logo { font-size: 22px; font-weight: 900; color: #d8b4fe; letter-spacing: 4px; margin-bottom: 20px; display: block; opacity: 0.8; }
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
              <p class="copyright">© ${new Date().getFullYear()} MirrenTX. Admin Notification.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const htmlContent = `
      <span class="section-title">Customer Details</span>
      <div class="data-card">
        <div class="data-row">
          <div class="data-label">Name</div>
          <div class="data-value">${firstName} ${lastName}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Phone</div>
          <div class="data-value">${phone}</div>
        </div>
        <div class="data-row">
          <div class="data-label">Equipment</div>
          <div class="data-value">${equipmentName}</div>
        </div>
      </div>

      <div style="margin-top: 40px;">
        <span class="section-title">Location & Duration</span>
        <div class="data-card">
          <div class="data-row">
            <div class="data-label">District</div>
            <div class="data-value">${district}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Village</div>
            <div class="data-value">${tehsilVillage}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Duration</div>
            <div class="data-value">${rentDuration}</div>
          </div>
        </div>
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
