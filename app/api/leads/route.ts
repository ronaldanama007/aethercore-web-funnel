import { NextRequest, NextResponse } from "next/server";
import { saveLead, saveScorecard } from "@/lib/supabase";
import { generateCustomerScorecard } from "@/lib/scorecard-engine";
import { Lead } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { business_name, facebook_url, industry, primary_goal, approx_budget, email } = body;

    if (!business_name || !email) {
      return NextResponse.json(
        { error: "Business name and email are required" },
        { status: 400 }
      );
    }

    const leadId = crypto.randomUUID();
    const newLead: Lead = {
      id: leadId,
      business_name: business_name.trim(),
      facebook_url: (facebook_url || "").trim(),
      industry: industry || "Other",
      primary_goal: primary_goal || "Get more inquiries",
      approx_budget: approx_budget || "₱25,000",
      email: email.trim().toLowerCase(),
      status: "scorecard_generated",
      created_at: new Date().toISOString(),
    };

    // Save lead
    await saveLead(newLead);

    // Generate tailored scorecard audit
    const scorecard = generateCustomerScorecard(newLead);
    await saveScorecard(scorecard);

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      scorecardId: scorecard.id,
      scorecard: scorecard,
      redirectUrl: `/scorecard/${scorecard.id}`,
    });
  } catch (error: any) {
    console.error("Failed to process lead submission:", error);
    return NextResponse.json(
      { error: "Internal server error processing assessment" },
      { status: 500 }
    );
  }
}
