import { mongoDBConnection } from "@/database/mongoDBConnection";
import { hedayetunnahuModel } from "@/models/hedayetunnahu-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Establish database connection
    await mongoDBConnection();

    // Fetch all projects
    const hedayetunnahu = await hedayetunnahuModel.find({});

    // Return success response with projects data
    return NextResponse.json({
      success: true,
      data: hedayetunnahu,
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching hedayetunnahu:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch hedayetunnahu. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
