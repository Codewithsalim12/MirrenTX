import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Rental from "@/models/Rental";
import Feedback from "@/models/Feedback";
import User from "@/models/user";
import SiteStats from "@/models/SiteStats";

export async function POST(request) {
  try {
    const { action } = await request.json();

    if (action !== "purge_all_test_data") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    await connectToDatabase();

    // Delete all records from specified collections
    const rentalResult = await Rental.deleteMany({});
    const feedbackResult = await Feedback.deleteMany({});
    const userResult = await User.deleteMany({});

    // Reset SiteStats
    await SiteStats.updateOne({}, { $set: { visitors: 0 } }, { upsert: true });

    return NextResponse.json({
      success: true,
      message: "Database purged successfully",
      details: {
        rentalsDeleted: rentalResult.deletedCount,
        feedbacksDeleted: feedbackResult.deletedCount,
        usersDeleted: userResult.deletedCount,
        statsReset: true
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Purge Data API Error:", error);
    return NextResponse.json({ error: "Failed to purge database" }, { status: 500 });
  }
}
