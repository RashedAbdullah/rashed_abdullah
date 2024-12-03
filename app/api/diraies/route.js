import { mongoDBConnection } from "@/database/mongoDBConnection";
import { dirayModel } from "@/models/diary-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Establish database connection
    await mongoDBConnection();

    // Fetch all diraies
    const diraies = await dirayModel.find({});

    // Return success response with diraies data
    return NextResponse.json({
      success: true,
      data: diraies,
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching diraies:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch diraies. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
