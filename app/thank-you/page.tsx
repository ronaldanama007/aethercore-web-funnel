"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, Sparkles, Calendar, MessageCircle, Home } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const scorecardId = searchParams.get("scorecard_id") || "demo";
  const businessName = searchParams.get("biz") || "Your Business";

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <span className="nocturne-badge text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-4">
        Assessment Prepared
      </span>

      <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
        Thank You! Your Assessment is Ready
      </h1>

      <p className="text-base text-silver-muted leading-relaxed mb-8 max-w-lg mx-auto">
        We&apos;ve completed the initial analysis for{" "}
        <strong className="text-white">{businessName}</strong>. Your custom 5-pillar scorecard and interactive website preview are ready for review.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Link
          href={`/scorecard/${scorecardId}`}
          className="nocturne-btn-primary w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2 group"
        >
          <Sparkles className="w-4 h-4 text-violet-light group-hover:rotate-12 transition-transform" />
          <span>View My Website Scorecard</span>
          <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href="https://wa.me/639178002673"
          target="_blank"
          rel="noopener noreferrer"
          className="nocturne-btn-secondary w-full sm:w-auto py-3.5 px-6 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Chat on WhatsApp / Viber</span>
        </a>
      </div>

      <div className="p-6 rounded-2xl bg-obsidian-surface border border-white/10 text-left space-y-3">
        <h3 className="text-sm font-display font-bold text-white flex items-center gap-2">
          <Calendar className="w-4 h-4 text-violet-accent" />
          What Happens Next?
        </h3>
        <p className="text-xs text-silver-muted leading-relaxed">
          1. <strong>Review your scorecard</strong> to understand where inquiries are dropping off and see your custom mockup.
        </p>
        <p className="text-xs text-silver-muted leading-relaxed">
          2. <strong>Book a 15-min strategy call</strong> right on the scorecard page to select your package and ask questions.
        </p>
        <p className="text-xs text-silver-muted leading-relaxed">
          3. <strong>Fast turnaround</strong>: Your website can be launched live on your custom domain in 7 to 10 days.
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="text-xs font-mono text-silver-dim hover:text-white inline-flex items-center gap-1.5 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-obsidian text-silver-text flex items-center justify-center">
      <Suspense fallback={<div className="text-sm text-silver-dim font-mono">Loading confirmation...</div>}>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}
