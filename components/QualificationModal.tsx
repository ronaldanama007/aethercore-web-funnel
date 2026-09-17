"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Sparkles, ArrowRight, Loader2, CheckCircle2, Shield } from "lucide-react";
import { Industry, PrimaryGoal, BudgetTier } from "@/lib/types";

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export default function QualificationModal({
  isOpen,
  onClose,
  defaultTier,
}: QualificationModalProps) {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [industry, setIndustry] = useState<Industry>("Clinic");
  const [primaryGoal, setPrimaryGoal] = useState<PrimaryGoal>("Get more inquiries");
  const [approxBudget, setApproxBudget] = useState<BudgetTier>(
    defaultTier === "Starter"
      ? "₱15,000"
      : defaultTier === "Business Pro"
      ? "₱40,000+"
      : "₱25,000"
  );
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !facebookUrl || !email) {
      setErrorMsg("Please provide your business name, Facebook URL, and email.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      setLoadingStep("Connecting to audit engine...");
      await new Promise((r) => setTimeout(r, 400));

      setLoadingStep("Evaluating Google searchability & mobile experience...");
      await new Promise((r) => setTimeout(r, 600));

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: businessName,
          facebook_url: facebookUrl,
          industry,
          primary_goal: primaryGoal,
          approx_budget: approxBudget,
          email,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to generate scorecard.");
      }

      setLoadingStep("Building custom interactive website mockup...");
      await new Promise((r) => setTimeout(r, 500));

      const targetId = data.scorecard?.id || data.scorecardId;
      router.push(`/scorecard/${targetId}`);
      onClose();
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-obsidian-surface border border-white/10 shadow-glow p-6 sm:p-8 text-silver-text">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-silver-muted hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-violet-accent/20 border-t-violet-accent animate-spin flex items-center justify-center"></div>
              <Sparkles className="w-6 h-6 text-violet-light absolute inset-0 m-auto animate-pulse" />
            </div>

            <div className="space-y-2 max-w-xs">
              <h3 className="text-lg font-display font-bold text-white">
                Generating Your Scorecard
              </h3>
              <p className="text-xs font-mono text-violet-light animate-pulse">
                {loadingStep}
              </p>
            </div>

            <div className="text-[11px] font-mono text-silver-dim max-w-sm">
              Calculating drop-off percentages, Google keyword benchmarks, and generating your custom mockup...
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-accent/10 border border-violet-accent/30 text-violet-light text-xs font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                Free Website Assessment
              </div>
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Get Your 5-Pillar Scorecard
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted mt-1">
                Tell us about your business to generate your tailored audit report and live mockup.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Dental & Wellness Clinic"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white placeholder-silver-dim text-sm focus:outline-none focus:border-violet-accent focus:ring-1 focus:ring-violet-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                  Facebook Page URL or Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. facebook.com/apexdentalph"
                  value={facebookUrl}
                  onChange={(e) => setFacebookUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white placeholder-silver-dim text-sm focus:outline-none focus:border-violet-accent focus:ring-1 focus:ring-violet-accent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value as Industry)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-violet-accent transition-all"
                  >
                    <option value="Clinic">Clinic / Healthcare</option>
                    <option value="Salon">Salon & Aesthetics</option>
                    <option value="Restaurant">Restaurant / Cafe</option>
                    <option value="Contractor">Construction / Renovation</option>
                    <option value="Real Estate">Real Estate Brokerage</option>
                    <option value="Professional Services">Legal / Accounting / Consulting</option>
                    <option value="Retail">Retail & E-Commerce</option>
                    <option value="Other">Other Philippine SME</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value as PrimaryGoal)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-violet-accent transition-all"
                  >
                    <option value="Get more inquiries">Get more inquiries</option>
                    <option value="Accept bookings">Accept bookings 24/7</option>
                    <option value="Show my services">Show clear service pricing</option>
                    <option value="Improve visibility">Rank on Google Search</option>
                    <option value="Sell products">Direct product checkout</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                    Target Budget
                  </label>
                  <select
                    value={approxBudget}
                    onChange={(e) => setApproxBudget(e.target.value as BudgetTier)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white text-sm focus:outline-none focus:border-violet-accent transition-all"
                  >
                    <option value="₱15,000">Starter — ₱15,000</option>
                    <option value="₱25,000">Business — ₱25,000</option>
                    <option value="₱40,000+">Business Pro — ₱40,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white placeholder-silver-dim text-sm focus:outline-none focus:border-violet-accent focus:ring-1 focus:ring-violet-accent transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full nocturne-btn-primary py-3.5 text-sm group"
                >
                  <Sparkles className="w-4 h-4 text-violet-light group-hover:rotate-12 transition-transform" />
                  <span>Generate My Free Scorecard</span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-silver-dim pt-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your information is strictly confidential. No spam guaranteed.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
