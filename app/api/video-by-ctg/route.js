import { mongoDBConnection } from "@/database/mongoDBConnection";
import { videoModel } from "@/models/video-model";
import { fetchFromYoutube } from "@/utils/fetch-from-youtube";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("category");

    // Fetching:
    await mongoDBConnection();

    // Fetch all videos
    const videos = await videoModel.find({ category });

    const result = await Promise.all(
      videos.map(async (video) => {
        const newResult = await fetchFromYoutube(video.videoId);
        return newResult;
      })
    );

    // Return success response with videos data
    return NextResponse.json({
      success: true,
      data: result.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      ),
    });
  } catch (err) {
    // Log error for debugging purposes
    console.error("Error fetching videos:", err);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch videos. Please try again later.",
        error: err.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
};
