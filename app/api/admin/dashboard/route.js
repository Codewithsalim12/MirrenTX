import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/user";
import Rental from "@/models/Rental";
import SiteStats from "@/models/SiteStats";

export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Aggregate KPIs
    const totalUsers = await User.countDocuments();
    // "On Rent" as per user request: Active, Pending Setup, Pending Pickup, and Completed/Confirmed
    const activeRentals = await Rental.countDocuments({ 
      status: { $in: ["Active", "Pending Setup", "Pending Pickup", "Completed", "Confirmed"] } 
    });
    
    // Calculate actual earnings from all rentals with a price set
    const earningsResult = await Rental.aggregate([
      { 
        $project: { 
          numericAmount: { 
            $convert: {
              input: "$totalAmount",
              to: "double",
              onError: 0.0,
              onNull: 0.0
            }
          } 
        } 
      },
      { 
        $group: { 
          _id: null, 
          total: { $sum: "$numericAmount" } 
        } 
      }
    ]);
    const totalEarningsVal = earningsResult.length > 0 ? earningsResult[0].total : 0;
    const totalEarnings = "₹" + Math.floor(totalEarningsVal).toLocaleString();
    
    // Fetch Global Visitors Count
    const stats = await SiteStats.findOne();
    const totalVisitors = stats ? stats.visitors.toString() : "0";
    
    const kpis = {
      totalUsers: totalUsers.toString(),
      activeRentals: activeRentals.toString(),
      totalEarnings,
      totalVisitors
    };
    
    // Fetch recent items for tables
    const recentRentalsRaw = await Rental.find().sort({ createdAt: -1 }).limit(10);
    const recentRentals = recentRentalsRaw.map(r => ({
      _id: r._id,
      id: "R-" + r._id.toString().substring(18, 24).toUpperCase(),
      user: r.name,
      email: r.email,
      contact: r.contact,
      item: r.equipmentName || r.equipment, 
      duration: r.rentDuration,
      status: r.status,
      dates: r.dates,
      price: r.totalAmount,
      address: {
        district: r.district,
        village: r.tehsilVillage,
        street: r.streetAddress
      }
    }));

    const recentUsersRaw = await User.find().sort({ _id: -1 }).limit(10);
    const recentUsers = recentUsersRaw.map(u => ({
      id: u._id.toString(),
      name: u.name,
      email: u.email,
      image: u.image,
      rentals: "N/A", // We could lookup rentals by email
      joined: u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "N/A",
      status: "Verified",
    }));

    return NextResponse.json({
      success: true,
      data: {
        kpis,
        recentRentals,
        recentUsers
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
  }
}
