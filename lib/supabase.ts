import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Lead, Scorecard, Booking } from "./types";
import { generateCustomerScorecard } from "./scorecard-engine";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes("your-project.supabase.co")
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// In-memory fallback repository for local offline development / preview
const memoryStore = {
  leads: new Map<string, Lead>(),
  scorecards: new Map<string, Scorecard>(),
  bookings: new Map<string, Booking>(),
};

export async function saveLead(lead: Lead): Promise<Lead> {
  if (supabase) {
    const { data, error } = await supabase
      .from("leads")
      .insert([lead])
      .select()
      .single();
    if (error) {
      console.warn("Supabase lead insert error, falling back to memory store:", error.message);
    } else if (data) {
      return data as Lead;
    }
  }
  memoryStore.leads.set(lead.id, lead);
  return lead;
}

export async function saveScorecard(scorecard: Scorecard): Promise<Scorecard> {
  if (supabase) {
    const { data, error } = await supabase
      .from("scorecards")
      .insert([
        {
          id: scorecard.id,
          lead_id: scorecard.lead_id,
          business_name: scorecard.business_name,
          facebook_url: scorecard.facebook_url,
          industry: scorecard.industry,
          overall_score: scorecard.overall_score,
          grade: scorecard.grade,
          findability_score: scorecard.findability_score,
          mobile_score: scorecard.mobile_score,
          trust_score: scorecard.trust_score,
          leadgen_score: scorecard.leadgen_score,
          clarity_score: scorecard.clarity_score,
          findings: scorecard.general_findings,
          recommendations: scorecard.recommendations,
          mockup_data: scorecard.mockup_data,
        },
      ])
      .select()
      .single();

    if (error) {
      console.warn("Supabase scorecard insert error, falling back to memory store:", error.message);
    } else if (data) {
      return scorecard;
    }
  }
  memoryStore.scorecards.set(scorecard.id, scorecard);
  return scorecard;
}

export async function getScorecardById(id: string): Promise<Scorecard | null> {
  if (supabase) {
    const { data, error } = await supabase
      .from("scorecards")
      .select("*")
      .eq("id", id)
      .single();

    if (!error && data) {
      const dummyLead: Lead = {
        id: data.id,
        business_name: data.business_name || "Your Business",
        facebook_url: data.facebook_url || "facebook.com",
        industry: data.industry || "Clinic",
        primary_goal: "Get more inquiries",
        approx_budget: "₱15,000",
        email: "",
      };
      const generated = generateCustomerScorecard(dummyLead);

      return {
        id: data.id,
        lead_id: data.lead_id,
        business_name: data.business_name,
        facebook_url: data.facebook_url,
        industry: data.industry,
        overall_score: data.overall_score || generated.overall_score,
        grade: data.grade || generated.grade,
        grade_title: generated.grade_title,
        summary_assessment: generated.summary_assessment,
        findability_score: data.findability_score ?? generated.findability_score,
        mobile_score: data.mobile_score ?? generated.mobile_score,
        trust_score: data.trust_score ?? generated.trust_score,
        leadgen_score: data.leadgen_score ?? generated.leadgen_score,
        clarity_score: data.clarity_score ?? generated.clarity_score,
        pillars: generated.pillars,
        general_findings: (data.findings as string[]) || generated.general_findings,
        recommendations: (data.recommendations as string[]) || generated.recommendations,
        mockup_data: data.mockup_data || generated.mockup_data,
        created_at: data.created_at,
      };
    }
  }

  const inMem = memoryStore.scorecards.get(id);
  if (inMem) return inMem;

  if (id === "demo" || id.startsWith("demo-")) {
    const demoLead: Lead = {
      id: id,
      business_name: "Apex Dental & Wellness Clinic",
      facebook_url: "facebook.com/apexdentalph",
      industry: "Clinic",
      primary_goal: "Get more inquiries",
      approx_budget: "₱25,000",
      email: "dr.santos@apexdental.ph",
    };
    const demoCard = generateCustomerScorecard(demoLead);
    memoryStore.scorecards.set(id, demoCard);
    return demoCard;
  }

  return null;
}

export async function saveBooking(booking: Booking): Promise<Booking> {
  if (supabase) {
    const { data, error } = await supabase
      .from("bookings")
      .insert([booking])
      .select()
      .single();

    if (error) {
      console.warn("Supabase booking insert error, falling back to memory store:", error.message);
    } else if (data) {
      return data as Booking;
    }
  }

  const id = booking.id || crypto.randomUUID();
  const saved = { ...booking, id };
  memoryStore.bookings.set(id, saved);
  return saved;
}
