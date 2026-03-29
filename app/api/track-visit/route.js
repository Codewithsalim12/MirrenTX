import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import SiteStats from "@/models/SiteStats";

export async function POST() {
  try {
    await connectToDatabase();
    
    // Find aggregate stats or initialize if zero
    let stats = await SiteStats.findOne();
    
    if (!stats) {
      stats = new SiteStats({ visitors: 1 });
      await stats.save();
    } else {
      stats.visitors += 1;
      await stats.save();
    }
    
    return NextResponse.json({ success: true, visitors: stats.visitors });
  } catch (error) {
    console.error("Error tracking visit:", error);
    return NextResponse.json({ error: "Failed to track visit" }, { status: 500 });
  }
}
