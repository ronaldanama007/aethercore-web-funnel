export type Industry =
  | "Clinic"
  | "Salon"
  | "Restaurant"
  | "Contractor"
  | "Real Estate"
  | "Professional Services"
  | "Retail"
  | "Other";

export type PrimaryGoal =
  | "Get more inquiries"
  | "Show my services"
  | "Accept bookings"
  | "Sell products"
  | "Improve visibility";

export type BudgetTier = "₱15,000" | "₱25,000" | "₱40,000+";

export interface Lead {
  id: string;
  business_name: string;
  facebook_url: string;
  industry: Industry;
  primary_goal: PrimaryGoal;
  approx_budget: BudgetTier;
  email: string;
  status?: string;
  created_at?: string;
}

export interface PillarScore {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  grade: "Good" | "Fair" | "Critical";
  summary: string;
  findings: string[];
  recommendation: string;
}

export interface ScorecardMockupData {
  industry: Industry;
  businessName: string;
  tagline: string;
  sampleServices: { name: string; price: string; duration: string }[];
  highlightColor: string;
  rating: string;
}

export interface Scorecard {
  id: string;
  lead_id?: string;
  business_name: string;
  facebook_url: string;
  industry: Industry;
  overall_score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  grade_title: string;
  summary_assessment: string;
  findability_score: number;
  mobile_score: number;
  trust_score: number;
  leadgen_score: number;
  clarity_score: number;
  pillars: PillarScore[];
  general_findings: string[];
  recommendations: string[];
  mockup_data: ScorecardMockupData;
  created_at?: string;
}

export interface Booking {
  id?: string;
  lead_id?: string;
  scorecard_id?: string;
  business_name: string;
  email: string;
  date: string;
  time_slot: string;
  timezone?: string;
  status?: string;
  google_meet_link?: string;
  created_at?: string;
}
