import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Rental from "@/models/Rental";

export async function PUT(request, { params }) {
  try {
    const awaitedParams = await params;
    const id = awaitedParams.id;
    const body = await request.json();
    const { status, totalAmount } = body;

    await connectToDatabase();

    const updateData = {};
    if (status) updateData.status = status;
    if (totalAmount !== undefined) updateData.totalAmount = Number(totalAmount);

    const updatedRental = await Rental.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedRental) {
      return NextResponse.json({ error: "Rental not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: updatedRental
    }, { status: 200 });

  } catch (error) {
    console.error("Update Rental API Error:", error);
    return NextResponse.json({ error: "Failed to update rental" }, { status: 500 });
  }
}
