import { mongoDBConnection } from "@/database/mongoDBConnection";
import { blogModel } from "@/models/blog-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Establish database connection
    await mongoDBConnection();

    // Fetch all blogs
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });

    // Return success response with blogs data
    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching blogs:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
