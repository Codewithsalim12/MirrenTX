import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongodb";
import Rental from "@/models/Rental";

export async function POST(request) {
  try {
    const { name, email, contact, district, tehsilVillage, streetAddress, rentDuration, customDuration, equipmentName, dates } =
      await request.json();

    if (!name || !email || !contact || !district || !tehsilVillage || !streetAddress || !rentDuration || !equipmentName || !dates) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const baseUrl = process.env.NEXTAUTH_URL || "https://mirrentx.com";
    const logoUrl = `${baseUrl}/logo-modern.svg`;

    const getHtmlTemplate = (title, content, badge = "Booking") => `
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
          .header { background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 50%, #d8b4fe 100%); padding: 60px 40px; text-align: center; position: relative; }
          .header-overlay { position: absolute; inset: 0; background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png'); opacity: 0.05; }
          .logo { width: 85px; height: 85px; margin-bottom: 24px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); position: relative; z-index: 1; }
          .badge { background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); color: white; padding: 8px 18px; border-radius: 100px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; display: inline-block; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.3); }
          .header-title { color: white; font-size: 34px; font-weight: 800; margin: 0; letter-spacing: -1.5px; line-height: 1.1; position: relative; z-index: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.05); }
          
          .content { padding: 50px 45px; }
          .section-title { color: #a855f7; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 28px; display: block; opacity: 0.7; }
          .data-card { background: #faf5ff; border-radius: 24px; padding: 10px; border: 1px solid #f3e8ff; }
          .data-row { display: flex; padding: 18px 20px; border-bottom: 1px solid #f3e8ff; }
          .data-row:last-child { border-bottom: none; }
          .data-label { color: #6b7280; font-size: 13px; font-weight: 600; width: 130px; flex-shrink: 0; }
          .data-value { color: #1e1b4b; font-size: 15px; font-weight: 700; }
          .item-featured { background: linear-gradient(to right, #f5f3ff, #ffffff); border-left: 5px solid #8b5cf6; margin-top: 15px; padding: 24px; border-radius: 16px; box-shadow: 0 4px 15px rgba(139, 92, 246, 0.05); }
          .item-name { color: #7c3aed; font-size: 20px; font-weight: 800; margin-bottom: 4px; }
          
          .footer { background: #faf5ff; padding: 45px; text-align: center; border-top: 1px solid #f3e8ff; }
          .footer-logo { font-size: 22px; font-weight: 900; color: #d8b4fe; letter-spacing: 4px; margin-bottom: 20px; display: block; }
          .footer-links { margin-bottom: 30px; }
          .footer-link { color: #8b5cf6; font-size: 14px; text-decoration: none; margin: 0 15px; font-weight: 600; opacity: 0.8; transition: opacity 0.2s; }
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
              <p class="copyright">© ${new Date().getFullYear()} MirrenTX. Premium Equipment Rentals.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const finalDuration = rentDuration === 'Custom' ? customDuration : rentDuration;
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    const htmlContent = `
      <span class="section-title">Order Summary</span>
      <div class="item-featured">
        <div style="font-size: 11px; color: #3b82f6; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">Requested Equipment</div>
        <div class="item-name">${equipmentName}</div>
        <div style="color: #94a3b8; font-size: 13px;">Booking ID: #${orderNumber}</div>
      </div>

      <div style="margin-top: 40px;">
        <span class="section-title">Customer Details</span>
        <div class="data-card">
          <div class="data-row">
            <div class="data-label">Full Name</div>
            <div class="data-value">${name}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Email</div>
            <div class="data-value">${email}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Contact</div>
            <div class="data-value">${contact}</div>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px;">
        <span class="section-title">Logistics</span>
        <div class="data-card">
          <div class="data-row">
            <div class="data-label">Location</div>
            <div class="data-value">${district}, ${tehsilVillage}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Address</div>
            <div class="data-value">${streetAddress}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Selected Date</div>
            <div class="data-value" style="color: #3b82f6; font-weight: 800;">${dates}</div>
          </div>
          <div class="data-row">
            <div class="data-label">Duration</div>
            <div class="data-value" style="color: #8b5cf6;">${finalDuration}</div>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 24px; background: rgba(59,130,246,0.05); border-radius: 16px; border: 1px solid rgba(59,130,246,0.2); text-align: center;">
        <p style="margin: 0; color: #60a5fa; font-size: 14px; font-weight: 500; line-height: 1.5;">
          This request requires admin review. Please reach out to the customer within 2 hours to confirm availability and logistics.
        </p>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🛡️ Premium Booking: ${equipmentName} (${name})`,
      html: getHtmlTemplate("New Booking Request", htmlContent, "Priority Order"),
    };

    await transporter.sendMail(mailOptions);
    
    // Save to DataBase
    await connectToDatabase();
    await Rental.create({
      name,
      email,
      contact,
      district,
      tehsilVillage,
      streetAddress,
      equipmentName,
      rentDuration: finalDuration,
      dates: dates,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
