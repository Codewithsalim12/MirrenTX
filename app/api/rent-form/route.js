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

    const finalDuration = rentDuration === 'Custom' ? customDuration : rentDuration;

    // Connect to database and check for duplicates to prevent duplicate emails
    await connectToDatabase();
    
    // 10-minute duplication check based on matching email, equipment, and dates
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const existingRental = await Rental.findOne({
      email: email,
      equipmentName: equipmentName,
      dates: dates,
      createdAt: { $gte: tenMinutesAgo }
    });

    if (existingRental) {
      console.log("Duplicate booking detected. Suppressing duplicate emails to maintain professionalism.");
      return new Response(JSON.stringify({ success: true, message: "Duplicate mitigated safely" }), { status: 200 });
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
          .data-label { color: #000000; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block; }
          .data-value { color: #4b5563; font-size: 16px; font-weight: 500; margin-bottom: 24px; }
          .item-featured { background: #f9fafb; border-left: 4px solid #5e4ae3; padding: 24px; border-radius: 12px; margin-bottom: 32px; }
          .item-name { color: #1a1a1a; font-size: 20px; font-weight: 800; margin-bottom: 4px; }
          .footer { border-top: 1px solid #f3f4f6; margin-top: 48px; padding-top: 40px; clear: both; }
          .footer-signoff { color: #1a1a1a; font-size: 16px; font-weight: 700; margin-bottom: 32px; }
          .help-title { color: #000000; font-size: 18px; font-weight: 800; margin-bottom: 12px; }
          .help-text { color: #6b7280; font-size: 14px; line-height: 1.5; }
          .help-link { color: #5e4ae3; text-decoration: none; font-weight: 600; }
          .admin-alert { background: #fffbeb; border: 1px solid #fde68a; border-radius: 16px; padding: 24px; margin-top: 32px; }
          
          @media only screen and (max-width: 600px) {
            .wrapper { padding: 20px 10px !important; }
            .container { padding: 24px !important; border-radius: 16px !important; }
            .header-title { font-size: 26px !important; margin-bottom: 20px !important; }
            .content-text { font-size: 15px !important; margin-bottom: 24px !important; }
            .item-featured { padding: 16px !important; }
            .item-name { font-size: 18px !important; }
            .data-value { font-size: 15px !important; }
            .footer { margin-top: 32px !important; padding-top: 32px !important; }
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
                  <h3 class="help-title" style="color: #b45309; margin-top: 0;">Action Required</h3>
                  <p class="help-text" style="color: #92400e; font-weight: 600; margin-bottom: 0;">
                    Please contact the customer in 15 or 30 minutes to finalize and place the order.
                  </p>
                </div>
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

    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    const htmlContent = `
      <p class="content-text">
        You've received a premium booking request. This requires admin review for availability and logistics confirmation.
      </p>
      
      <div class="item-featured">
        <span class="data-label" style="color: #5e4ae3; opacity: 1;">Equipment Requested</span>
        <div class="item-name">${equipmentName}</div>
        <div style="color: #6b7280; font-size: 13px; font-weight: 600;">Booking ID: #${orderNumber}</div>
      </div>

      <div class="data-block">
        <span class="data-label">Customer Contact</span>
        <p class="data-value">${name}<br/>${email}<br/>${contact}</p>
        
        <span class="data-label">Logistics Details</span>
        <p class="data-value">
          <strong>Location:</strong> ${district}, ${tehsilVillage}<br/>
          <strong>Address:</strong> ${streetAddress}<br/>
          <strong>Date:</strong> <span style="color: #5e4ae3;">${dates}</span><br/>
          <strong>Duration:</strong> ${finalDuration}
        </p>
      </div>

      </div>
    `;

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🛡️ Premium Booking: ${equipmentName} (${name})`,
      html: getHtmlTemplate("New Booking Request", htmlContent, true),
    };

    const customerHtmlContent = `
      <p class="content-text">
        Thank you for choosing MirRenTX. Your order details have been received successfully. Your order will be confirmed once the rates are finalized upon quotation.
      </p>
      
      <div class="item-featured">
        <span class="data-label" style="color: #5e4ae3; opacity: 1;">Items Requested</span>
        <div class="item-name">${equipmentName}</div>
        <div style="color: #6b7280; font-size: 13px; font-weight: 600;">Booking ID: #${orderNumber}</div>
      </div>

      <div class="data-block">
        <span class="data-label">Your Order Summary</span>
        <p class="data-value">
          <strong>Customer Name:</strong> ${name}<br/>
          <strong>Requested Date:</strong> ${dates}<br/>
          <strong>Rental Duration:</strong> ${finalDuration}<br/>
          <strong>Delivery Address:</strong> ${district}, ${tehsilVillage}, ${streetAddress}
        </p>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="${baseUrl}/rentals" class="button" style="display: inline-block; padding: 18px 48px; background-color: #5e4ae3; color: #ffffff; text-decoration: none; border-radius: 16px; font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 10px 20px -1px rgba(94, 74, 227, 0.25);">Explore Rentals</a>
        </div>
      </div>

      </div>
    `;

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmation: Your Rental Request for ${equipmentName}`,
      html: getHtmlTemplate("Order Received", customerHtmlContent, false),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    // Save to DataBase
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
