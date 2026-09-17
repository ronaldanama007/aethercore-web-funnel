"use client";

import React from "react";
import { PillarScore } from "@/lib/types";
import { AlertCircle, CheckCircle, AlertTriangle, ArrowRight, Lightbulb } from "lucide-react";

interface ScorecardPillarCardProps {
  pillar: PillarScore;
  index: number;
}

export default function ScorecardPillarCard({ pillar, index }: ScorecardPillarCardProps) {
  const getGradeBadge = (grade: PillarScore["grade"]) => {
    switch (grade) {
      case "Critical":
        return (
          <span className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-medium flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            Critical Fix
          </span>
        );
      case "Fair":
        return (
          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Needs Improvement
          </span>
        );
      case "Good":
        return (
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            Optimized
          </span>
        );
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 40) return "text-red-400";
    if (score < 70) return "text-amber-400";
    return "text-emerald-400";
  };

  const getBarColor = (score: number) => {
    if (score < 40) return "bg-red-500";
    if (score < 70) return "bg-amber-500";
    return "bg-emerald-500";
  };

  return (
    <div className="nocturne-card p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono text-silver-dim uppercase">
            Pillar 0{index + 1}
          </span>
          {getGradeBadge(pillar.grade)}
        </div>

        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="font-display font-bold text-xl text-white tracking-tight">
            {pillar.name}
          </h4>
          <div className="text-right shrink-0">
            <span className={`font-display font-bold text-2xl ${getScoreColor(pillar.score)}`}>
              {pillar.score}
            </span>
            <span className="text-xs font-mono text-silver-dim"> / {pillar.maxScore}</span>
          </div>
        </div>

        <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden mb-6">
          <div
            className={`h-full rounded-full transition-all duration-700 ${getBarColor(pillar.score)}`}
            style={{ width: `${(pillar.score / pillar.maxScore) * 100}%` }}
          ></div>
        </div>

        <p className="text-sm text-silver-muted leading-relaxed mb-6">
          {pillar.summary}
        </p>

        <div className="space-y-2.5 mb-6">
          <span className="text-[11px] font-mono text-silver-dim uppercase tracking-wider block">
            Observed Vulnerabilities:
          </span>
          {pillar.findings.map((f, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-silver-muted leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5"></span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/[0.06] bg-violet-500/[0.04] -mx-6 -mb-6 p-6 rounded-b-[20px] border-violet-500/10">
        <div className="flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-violet-light shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-violet-light uppercase tracking-wider block mb-1">
              AetherCore Recommendation:
            </span>
            <p className="text-xs text-silver-text leading-relaxed">
              {pillar.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
