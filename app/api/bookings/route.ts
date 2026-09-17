import { NextRequest, NextResponse } from "next/server";
import { saveBooking } from "@/lib/supabase";
import { Booking } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { business_name, email, date, time_slot, lead_id, scorecard_id } = body;

    if (!business_name || !email || !date || !time_slot) {
      return NextResponse.json(
        { error: "Missing required booking fields (business_name, email, date, time_slot)" },
        { status: 400 }
      );
    }

    const booking: Booking = {
      id: crypto.randomUUID(),
      lead_id: lead_id || undefined,
      scorecard_id: scorecard_id || undefined,
      business_name,
      email,
      date,
      time_slot,
      timezone: "Asia/Manila (PHT)",
      status: "confirmed",
      google_meet_link: "https://meet.google.com/aet-her-core",
      created_at: new Date().toISOString(),
    };

    const saved = await saveBooking(booking);

    return NextResponse.json(
      {
        success: true,
        booking: saved,
        message: "Your 15-minute Website Strategy Session is confirmed.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Booking creation error:", err);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
