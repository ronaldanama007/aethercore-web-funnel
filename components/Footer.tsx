"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian-dark border-t border-white/[0.08] text-silver-muted py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-accent to-indigo-600 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white">A</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                AetherCore
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-silver-dim max-w-md leading-relaxed">
              Empowering Philippine clinics, salons, contractors, and local businesses to transition from social media reliance into permanent, high-converting digital assets.
            </p>
            <div className="text-xs font-mono text-silver-dim">
              Based in Manila, Philippines • Serving Nationwide
            </div>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-white block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-silver-muted">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  Why Not Facebook Alone?
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-white transition-colors">
                  Before vs After
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Packages & Rates
                </a>
              </li>
              <li>
                <Link href="/scorecard/demo" className="hover:text-white transition-colors">
                  Sample Website Scorecard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-white block mb-4">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-xs text-silver-muted">
              <li>
                <span className="text-silver-dim block">Email Inquiries:</span>
                <span className="text-white font-mono">hello@aethercore.ph</span>
              </li>
              <li>
                <span className="text-silver-dim block">Viber / WhatsApp:</span>
                <span className="text-white font-mono">+63 (917) 800-CORE</span>
              </li>
              <li>
                <span className="text-silver-dim block">Strategy Consultations:</span>
                <span className="text-emerald-400 font-mono">Mon – Sat (9AM – 6PM PHT)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-dim">
          <div>
            &copy; {new Date().getFullYear()} AetherCore Systems Philippines. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with Next.js, Supabase & Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
