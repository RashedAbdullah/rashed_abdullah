import { mongoDBConnection } from "@/database/mongoDBConnection";
import { dirayModel } from "@/models/diary-model";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    // Get the selected year from the query parameters
    const year = url.searchParams.get("year");

    // Validate the year parameter
    if (!year || isNaN(year) || year.length !== 4) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid year parameter. Please provide a valid year.",
        },
        { status: 400 }
      );
    }

    // Establish database connection
    await mongoDBConnection();

    // Fetch all diaries for the selected year, sorted by the latest date
    const diaries = await dirayModel
      .find({
        $expr: {
          $eq: [
            { $year: { $dateFromString: { dateString: "$date" } } },
            parseInt(year),
          ],
        },
      })
      .sort({ date: -1 }); // Sorting by latest date

    // Return success response with diaries data
    return NextResponse.json({
      success: true,
      data: diaries,
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching diaries:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch diaries. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
