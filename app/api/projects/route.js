import { mongoDBConnection } from "@/database/mongoDBConnection";
import { projectModel } from "@/models/project-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Establish database connection
    await mongoDBConnection();

    // Fetch all projects
    const projects = await projectModel.find({});

    // Return success response with projects data
    return NextResponse.json({
      success: true,
      data: projects,
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching projects:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
