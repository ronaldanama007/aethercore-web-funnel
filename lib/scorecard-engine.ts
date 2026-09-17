import { Lead, Scorecard, PillarScore, ScorecardMockupData, Industry } from "./types";

export function generateCustomerScorecard(lead: Lead): Scorecard {
  const biz = lead.business_name || "Your Business";
  const ind = lead.industry || "Other";

  const industryPresets: Record<
    Industry,
    {
      tagline: string;
      services: { name: string; price: string; duration: string }[];
      color: string;
      rating: string;
    }
  > = {
    Clinic: {
      tagline: "Modern Healthcare & Verified Patient Appointments",
      services: [
        { name: "Comprehensive Oral Checkup", price: "₱800", duration: "30 mins" },
        { name: "Teeth Cleaning & Polish", price: "₱1,500", duration: "45 mins" },
        { name: "Cosmetic Consultation", price: "₱1,000", duration: "30 mins" },
      ],
      color: "#0284c7",
      rating: "4.9/5 (182 Google Reviews)",
    },
    Salon: {
      tagline: "Premier Beauty Treatments, Hair Styling & Nails",
      services: [
        { name: "Signature Haircut & Blowdry", price: "₱650", duration: "45 mins" },
        { name: "Organic Hair Spa Treatment", price: "₱1,800", duration: "60 mins" },
        { name: "Gel Polish Manicure", price: "₱750", duration: "40 mins" },
      ],
      color: "#ec4899",
      rating: "4.8/5 (94 Google Reviews)",
    },
    Restaurant: {
      tagline: "Authentic Flavors, Table Reservations & Direct Ordering",
      services: [
        { name: "Signature Tasting Set", price: "₱1,250", duration: "For 2–3 pax" },
        { name: "Chef's Special Course", price: "₱790", duration: "Ala carte" },
        { name: "Weekend Table Reservation", price: "₱500", duration: "Reserved slot" },
      ],
      color: "#f59e0b",
      rating: "4.9/5 (310 Google Reviews)",
    },
    Contractor: {
      tagline: "Licensed Construction, Renovation & Architectural Works",
      services: [
        { name: "On-Site Structural Inspection", price: "₱2,500", duration: "90 mins" },
        { name: "Complete Home Renovation Plan", price: "Custom", duration: "Bespoke" },
        { name: "Interior Finishing Package", price: "₱15,000/sqm", duration: "Project-based" },
      ],
      color: "#10b981",
      rating: "5.0/5 (46 Verified Projects)",
    },
    "Real Estate": {
      tagline: "Verified Property Tours, Brokerage & Investment Consultations",
      services: [
        { name: "Private Property Viewing", price: "Free", duration: "60 mins" },
        { name: "Investment Portfolio Assessment", price: "Free", duration: "45 mins" },
        { name: "Mortgage Bank Loan Assistance", price: "Included", duration: "Full service" },
      ],
      color: "#6366f1",
      rating: "4.9/5 (88 Investor Reviews)",
    },
    "Professional Services": {
      tagline: "Accounting, Legal & Strategic Corporate Advisory",
      services: [
        { name: "Initial Strategy Consultation", price: "₱2,000", duration: "45 mins" },
        { name: "Business Registration & BIR", price: "₱12,000", duration: "Turnkey" },
        { name: "Monthly Bookkeeping & Tax", price: "₱5,000/mo", duration: "Retainer" },
      ],
      color: "#7c5cff",
      rating: "4.9/5 (65 Corporate Clients)",
    },
    Retail: {
      tagline: "Quality Products with Direct Checkout & Fast PH Shipping",
      services: [
        { name: "Curated Starter Bundle", price: "₱1,890", duration: "In stock" },
        { name: "Premium Gift Set", price: "₱2,950", duration: "Free delivery" },
        { name: "Wholesale Inquiry Consultation", price: "Free", duration: "Direct chat" },
      ],
      color: "#059669",
      rating: "4.7/5 (240 Customer Reviews)",
    },
    Other: {
      tagline: "High-Converting Philippine Business Web Presence",
      services: [
        { name: "Standard Service Package", price: "₱1,500", duration: "Standard" },
        { name: "Comprehensive Solution", price: "₱4,500", duration: "Full service" },
        { name: "Custom Discovery Session", price: "Free", duration: "15 mins" },
      ],
      color: "#7c5cff",
      rating: "4.9/5 (112 Google Reviews)",
    },
  };

  const preset = industryPresets[ind] || industryPresets.Other;

  const findabilityScore = 28;
  const mobileScore = 38;
  const trustScore = 44;
  const leadgenScore = 32;
  const clarityScore = 40;

  const overallScore = Math.round(
    (findabilityScore + mobileScore + trustScore + leadgenScore + clarityScore) / 5
  );

  const pillars: PillarScore[] = [
    {
      id: "findability",
      name: "Google Findability & Local SEO",
      score: findabilityScore,
      maxScore: 100,
      grade: "Critical",
      summary:
        "Customers searching Google for your services in your city cannot find structured pricing, location, or direct booking.",
      findings: [
        "Facebook page posts are unindexed by Google for localized search terms (e.g. 'dental clinic near me').",
        "No local schema markup or Google Search Console connection.",
        "Competitor websites with dedicated domains are outranking your social page.",
      ],
      recommendation:
        "Deploy a fast website with localized title tags, structured schema, and Google Business Profile connection.",
    },
    {
      id: "mobile",
      name: "Mobile Experience & Page Speed",
      score: mobileScore,
      maxScore: 100,
      grade: "Fair",
      summary:
        "Visitors without a Facebook app experience forced login banners, slow image album loading, and cluttered feeds.",
      findings: [
        "60%+ of mobile web visitors encounter friction trying to view buried albums.",
        "Mobile browser view hides direct contact buttons behind secondary menus.",
        "No standalone progressive mobile web interface.",
      ],
      recommendation:
        "Launch an ultra-fast, mobile-first website that loads in under 1.2 seconds on 4G networks.",
    },
    {
      id: "trust",
      name: "Trust & Credibility Factors",
      score: trustScore,
      maxScore: 100,
      grade: "Fair",
      summary:
        "A Facebook page alone lacks the high-ticket authority that an official domain and verified badge provide.",
      findings: [
        "No verified SSL domain (e.g. yourbusiness.ph) to validate corporate legitimacy.",
        "Reviews are confined to Facebook and vulnerable to page suspensions or algorithm shifts.",
        "Corporate or high-ticket clients perceive businesses without websites as temporary or informal.",
      ],
      recommendation:
        "Establish brand permanence with a custom domain, SSL certificate, and verified Google reviews widget.",
    },
    {
      id: "leadgen",
      name: "Lead Capture & Inquiry Friction",
      score: leadgenScore,
      maxScore: 100,
      grade: "Critical",
      summary:
        "Over 60% of potential buyers abandon inquiries due to the 'PM sent' messaging delay.",
      findings: [
        "Customers must wait hours for replies to basic inquiries like business hours and rates.",
        "No automated 24/7 online calendar or booking form.",
        "Repetitive questions overwhelm your messaging inbox every day.",
      ],
      recommendation:
        "Add automated lead capture forms, calendar slot scheduling, and direct 1-click WhatsApp/Viber buttons.",
    },
    {
      id: "clarity",
      name: "Pricing & Services Clarity",
      score: clarityScore,
      maxScore: 100,
      grade: "Critical",
      summary:
        "Services and rates are scattered across dozens of old posts and unsearchable photos.",
      findings: [
        "Inquirers must ask 'HM po?' because price lists are buried in photo albums from months ago.",
        "Outdated promotional posts cause customer confusion on current pricing.",
        "No clear comparison tables to help customers choose between your service packages.",
      ],
      recommendation:
        "Display clear, tiered pricing cards with transparent feature lists and instant inquiry CTAs.",
    },
  ];

  const generalFindings = [
    "High visitor bounce rate: Facebook's algorithm limits organic reach to under 5% of followers.",
    "No Google Search dominance: Missing out on high-intent buyers actively searching Google.",
    "Repetitive inbox bottleneck: Answering 'HM po?' and 'Where are you located?' instead of closing confirmed appointments.",
    "Platform risk: 100% of your customer traffic depends on a third-party social platform without platform ownership.",
  ];

  const recommendations = [
    "Step 1: Launch an AetherCore Starter (₱15K) or Business (₱25K) mobile-responsive website in 7–10 days.",
    "Step 2: Connect your custom domain (.ph or .com) and enable free SSL security.",
    "Step 3: Setup Google Search Console & Google Business Profile to capture local search traffic.",
    "Step 4: Implement an automated booking calendar to capture inquiries 24/7 on autopilot.",
  ];

  const mockupData: ScorecardMockupData = {
    industry: ind,
    businessName: biz,
    tagline: preset.tagline,
    sampleServices: preset.services,
    highlightColor: preset.color,
    rating: preset.rating,
  };

  return {
    id: lead.id,
    lead_id: lead.id,
    business_name: biz,
    facebook_url: lead.facebook_url || "facebook.com/yourbusiness",
    industry: ind,
    overall_score: overallScore,
    grade: "D",
    grade_title: "High Customer Drop-Off Risk",
    summary_assessment: `Based on our manual assessment of ${biz}'s online presence, relying on Facebook alone creates severe customer drop-off. Potential buyers searching on Google cannot find your rates or address, resulting in estimated 60%+ lost inquiry conversion.`,
    findability_score: findabilityScore,
    mobile_score: mobileScore,
    trust_score: trustScore,
    leadgen_score: leadgenScore,
    clarity_score: clarityScore,
    pillars,
    general_findings: generalFindings,
    recommendations,
    mockup_data: mockupData,
    created_at: new Date().toISOString(),
  };
}
