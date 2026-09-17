import { NextRequest, NextResponse } from "next/server";
import { getScorecardById } from "@/lib/supabase";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json(
        { error: "Missing scorecard id parameter" },
        { status: 400 }
      );
    }

    const scorecard = await getScorecardById(id);
    if (!scorecard) {
      return NextResponse.json(
        { error: "Scorecard not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ scorecard }, { status: 200 });
  } catch (err: unknown) {
    console.error("Scorecard retrieval error:", err);
    return NextResponse.json(
      { error: "Failed to retrieve scorecard" },
      { status: 500 }
    );
  }
}
