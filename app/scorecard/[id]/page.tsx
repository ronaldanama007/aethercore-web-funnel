import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getScorecardById } from "@/lib/supabase";
import { Scorecard, Lead } from "@/lib/types";
import { generateCustomerScorecard } from "@/lib/scorecard-engine";
import ScorecardPillarCard from "@/components/ScorecardPillarCard";
import MockupComparisonSlider from "@/components/MockupComparisonSlider";
import BookingCalendarWidget from "@/components/BookingCalendarWidget";
import {
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  ExternalLink,
  ChevronLeft,
  Zap,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ScorecardPage({ params }: PageProps) {
  const { id } = await params;
  let scorecard: Scorecard | null = await getScorecardById(id);

  if (!scorecard) {
    const fallbackLead: Lead = {
      id: id || "demo",
      business_name: "Apex Dental & Wellness Clinic",
      facebook_url: "facebook.com/apexdentalph",
      industry: "Clinic",
      primary_goal: "Get more inquiries",
      approx_budget: "₱25,000",
      email: "inquiries@apexdental.ph",
    };
    scorecard = generateCustomerScorecard(fallbackLead);
  }

  const {
    business_name,
    facebook_url,
    industry,
    overall_score,
    grade,
    grade_title,
    summary_assessment,
    pillars,
    general_findings,
    recommendations,
    mockup_data,
    created_at,
  } = scorecard;

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString("en-PH", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-PH", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

  return (
    <div className="min-h-screen bg-obsidian text-silver-text selection:bg-violet-accent selection:text-white pb-24">
      {/* Top Notification Bar */}
      <div className="bg-violet-950/40 border-b border-violet-500/20 py-2.5 px-4 text-center">
        <p className="text-xs font-mono text-violet-light flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            Confidential SME Website Assessment Prepared for <strong>{business_name}</strong>
          </span>
        </p>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-white/[0.08]">
        <Link href="/" className="flex items-center gap-2 text-xs font-mono text-silver-muted hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-accent to-indigo-600 flex items-center justify-center shadow-glow-sm">
            <span className="font-display font-bold text-sm text-white">A</span>
          </div>
          <span className="font-display font-bold text-base text-white">
            AetherCore Scorecard
          </span>
        </div>

        <a
          href="#schedule"
          className="nocturne-btn-primary text-xs py-2 px-4 hidden sm:inline-flex"
        >
          Book 15-Min Walkthrough
        </a>
      </header>

      {/* Main Scorecard Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* Section 1: Executive Overview Card */}
        <div className="nocturne-card p-6 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="nocturne-glow-orb w-96 h-96 -top-20 -right-20 bg-violet-600/20"></div>

          {/* Business Meta Details */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="nocturne-badge text-xs">
                  {industry} Industry Benchmark
                </span>
                <span className="text-xs font-mono text-silver-dim">
                  Audit Date: {formattedDate}
                </span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                {business_name}
              </h1>
              <div className="flex items-center gap-2 text-xs font-mono text-silver-muted mt-1">
                <span>Facebook Target:</span>
                <span className="text-violet-light underline">{facebook_url}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-4 rounded-2xl bg-obsidian-elevated border border-white/10 text-center shrink-0">
                <span className="text-[10px] font-mono text-silver-dim uppercase block">
                  Overall Grade
                </span>
                <span className="font-display font-bold text-4xl text-red-400">
                  {grade}
                </span>
              </div>
            </div>
          </div>

          {/* Scores Breakdown Hero Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 items-center border-b border-white/[0.08]">
            {/* Score Radial Visual */}
            <div className="p-6 rounded-2xl bg-obsidian-elevated/80 border border-white/10 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-mono uppercase text-silver-dim mb-2">
                Your Online Presence Score
              </span>
              <div className="relative flex items-center justify-center my-3">
                <div className="w-32 h-32 rounded-full border-8 border-red-500/20 border-t-red-500 flex flex-col items-center justify-center shadow-glow-sm">
                  <span className="font-display font-bold text-4xl text-white">
                    {overall_score}
                  </span>
                  <span className="text-[11px] font-mono text-silver-dim">/ 100</span>
                </div>
              </div>
              <span className="text-xs font-bold text-red-400 font-mono mt-1">
                {grade_title}
              </span>
            </div>

            {/* Compared with AetherCore Baseline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-silver-muted">
                <TrendingDown className="w-4 h-4 text-red-400" />
                <span>Estimated Inquiry Abandonment: ~60% to 75%</span>
              </div>

              <h3 className="font-display font-bold text-xl text-white">
                Executive Audit Summary
              </h3>

              <p className="text-sm text-silver-muted leading-relaxed">
                {summary_assessment}
              </p>

              {/* Stat Comparison Bars */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-red-400">Current Facebook-Only Performance</span>
                    <span className="text-red-400">{overall_score}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${overall_score}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-emerald-400">With AetherCore High-Converting Website</span>
                    <span className="text-emerald-400">94%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Findings Bullet Points */}
          <div className="pt-6">
            <span className="text-xs font-mono text-silver-dim uppercase tracking-wider block mb-3">
              Top Diagnostic Findings:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {general_findings.map((finding, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-silver-muted p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: 5 Pillars Detailed Breakdown */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-accent/10 border border-violet-accent/30 text-violet-light text-xs font-mono uppercase tracking-wider mb-2">
              <Zap className="w-3 h-3" />
              Comprehensive 5-Pillar Analysis
            </div>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-2">
              The 5 Conversion Pillars
            </h2>
            <p className="text-sm text-silver-muted">
              Here is how your current online presence scores across each vital customer touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <ScorecardPillarCard key={pillar.id} pillar={pillar} index={idx} />
            ))}
          </div>
        </div>

        {/* Section 3: Interactive Mockup Comparison */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="nocturne-badge text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-2">
              Live Mockup Preview
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-2">
              Interactive Website Mockup
            </h2>
            <p className="text-sm text-silver-muted">
              Toggle between your current social experience and the proposed AetherCore website tailored for {business_name}.
            </p>
          </div>

          <MockupComparisonSlider
            mockupData={mockup_data}
            businessName={business_name}
          />
        </div>

        {/* Section 4: Recommended Action Plan */}
        <div className="nocturne-card p-8 sm:p-10 border border-violet-500/30 bg-gradient-to-b from-violet-950/10 to-obsidian-elevated">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-light block mb-2">
              Strategic Roadmap
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Recommended 4-Step Action Plan
            </h3>
            <p className="text-sm text-silver-muted mt-1">
              To eliminate inquiry drop-off and start capturing customers on Google Search:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-obsidian border border-white/10 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-violet-accent/20 border border-violet-accent/40 flex items-center justify-center shrink-0 text-violet-light font-mono text-xs font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-silver-text leading-relaxed">
                  {rec}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-silver-muted">
              Ready to execute? Packages start at <strong>₱15,000</strong> with a 7-day turnaround.
            </div>
            <a
              href="#schedule"
              className="nocturne-btn-primary text-sm py-3 px-6 whitespace-nowrap"
            >
              <span>Schedule Strategy Call to Discuss</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section 5: Schedule 15-Min Strategy Session */}
        <div id="schedule" className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="nocturne-badge text-xs mb-2">
              Next Step
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-2">
              Book Your 15-Minute Strategy Call
            </h2>
            <p className="text-sm text-silver-muted">
              We&apos;ll walk you through this scorecard, answer any questions, and confirm how quickly we can launch your website.
            </p>
          </div>

          <BookingCalendarWidget
            scorecardId={scorecard.id}
            defaultBusinessName={business_name}
            defaultEmail={scorecard.lead_id ? "" : ""}
          />
        </div>
      </main>
    </div>
  );
}
