"use client";

import React, { useState } from "react";
import { ScorecardMockupData } from "@/lib/types";
import { CheckCircle2, Lock, Star, Calendar, MessageSquare, Phone, Globe, Smartphone, Clock } from "lucide-react";

interface MockupComparisonSliderProps {
  mockupData: ScorecardMockupData;
  businessName: string;
}

export default function MockupComparisonSlider({
  mockupData,
  businessName,
}: MockupComparisonSliderProps) {
  const [viewMode, setViewMode] = useState<"website" | "facebook">("website");

  const sanitizedSlug = businessName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 16) || "yourbusiness";

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mb-8">
        <div className="p-1 rounded-full bg-obsidian-elevated border border-white/10 inline-flex">
          <button
            onClick={() => setViewMode("website")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              viewMode === "website"
                ? "bg-violet-accent text-white shadow-glow-sm"
                : "text-silver-muted hover:text-white"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Proposed AetherCore Website</span>
          </button>

          <button
            onClick={() => setViewMode("facebook")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              viewMode === "facebook"
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "text-silver-muted hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Current Facebook-Only View</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
        <div className="rounded-[22px] bg-obsidian-surface border border-white/10 overflow-hidden">
          <div className="px-5 py-3 bg-obsidian-elevated border-b border-white/[0.08] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>

            <div className="flex-1 max-w-md mx-auto px-4 py-1.5 rounded-lg bg-obsidian border border-white/[0.06] text-xs font-mono text-silver-muted flex items-center justify-center gap-2 text-center">
              {viewMode === "website" ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white font-medium">
                    https://www.{sanitizedSlug}.ph
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    SSL SECURE
                  </span>
                </>
              ) : (
                <>
                  <span className="text-silver-dim">m.facebook.com/{sanitizedSlug}</span>
                  <span className="text-[10px] text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded">
                    3RD PARTY
                  </span>
                </>
              )}
            </div>

            <div className="text-[11px] font-mono text-silver-dim hidden sm:block">
              {viewMode === "website" ? "AetherCore Engine v2.0" : "Mobile Browser View"}
            </div>
          </div>

          {viewMode === "website" ? (
            <div className="p-6 sm:p-10 space-y-8 bg-obsidian text-silver-text">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-white shadow-md"
                    style={{ backgroundColor: mockupData.highlightColor || "#7c5cff" }}
                  >
                    {businessName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-white text-base sm:text-lg flex items-center gap-1.5">
                      {businessName}
                      <CheckCircle2 className="w-4 h-4 text-violet-light" />
                    </h5>
                    <span className="text-xs text-silver-muted">
                      {mockupData.industry} • Official Verified Site
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    {mockupData.rating}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-violet-900/20 via-obsidian-elevated to-indigo-950/20 border border-white/[0.08] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <span className="text-xs font-mono uppercase tracking-wider text-violet-light">
                    Welcome to our official booking portal
                  </span>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                    {mockupData.tagline}
                  </h4>
                  <p className="text-xs text-silver-muted">
                    Book verified sessions in under 60 seconds. Transparent pricing with zero hidden fees.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
                  <div className="px-5 py-2.5 rounded-full bg-violet-accent text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment Online</span>
                  </div>
                  <div className="px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-silver-muted text-xs font-medium flex items-center justify-center gap-2 cursor-pointer">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Viber / WhatsApp</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h6 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    Our Featured Services & Packages
                  </h6>
                  <span className="text-xs font-mono text-emerald-400">
                    No &ldquo;PM for price&rdquo; • 100% Upfront
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {mockupData.sampleServices.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-obsidian-elevated/70 border border-white/[0.06] flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono text-silver-dim mb-1">
                          {srv.duration}
                        </div>
                        <div className="text-sm font-bold text-white mb-2">
                          {srv.name}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="font-display font-bold text-base text-violet-light">
                          {srv.price}
                        </span>
                        <span className="text-[10px] font-mono text-silver-muted bg-white/[0.06] px-2 py-1 rounded">
                          Book Now
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs text-silver-dim">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Accepts GCash, Maya & Debit/Credit Cards
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-violet-accent" />
                  24/7 Automated Confirmation SMS & Email
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 bg-[#0b0e14] text-silver-text space-y-6">
              <div className="flex items-center justify-between bg-[#18191a] p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                    f
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{businessName}</div>
                    <div className="text-[10px] text-gray-400">Page • 342 followers</div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/30">
                  Organic reach: ~3.2%
                </div>
              </div>

              <div className="bg-[#1c1e21] p-5 rounded-xl border border-white/5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                  <div className="text-xs text-gray-300">
                    Posted 3 months ago (album contains 62 images)
                  </div>
                </div>

                <p className="text-xs text-gray-300">
                  &ldquo;For inquiries and appointments, please comment below or send us a PM! Due to high volume of messages, please allow 24-48 hours for our admin to reply...&rdquo;
                </p>

                <div className="pt-3 border-t border-gray-700/60 space-y-2 text-xs">
                  <div className="bg-[#242526] p-2.5 rounded-lg flex items-start justify-between">
                    <div>
                      <span className="font-bold text-blue-400 text-[11px] block">
                        Interested Customer (3 hours ago)
                      </span>
                      <span className="text-gray-300 text-xs">
                        &ldquo;HM po cleaning and what time po kayo open sa Sabado?&rdquo;
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500">Unanswered</span>
                  </div>

                  <div className="bg-[#242526] p-2.5 rounded-lg">
                    <span className="font-bold text-gray-400 text-[11px] block">
                      Page Admin (8 hours later)
                    </span>
                    <span className="text-yellow-400 font-mono text-xs">
                      &ldquo;PM sent sis check your spam folder po! 🙏&rdquo;
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center justify-between">
                <span>
                  Result: Over 60% of buyers abandon the chat before booking.
                </span>
                <button
                  onClick={() => setViewMode("website")}
                  className="px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-white font-medium text-xs transition-colors"
                >
                  Switch to Modern Web View &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
