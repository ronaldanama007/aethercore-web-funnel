"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-accent to-indigo-600 flex items-center justify-center shadow-glow-sm group-hover:scale-105 transition-transform">
            <span className="font-display font-bold text-lg text-white">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              AetherCore
              <span className="w-2 h-2 rounded-full bg-violet-accent inline-block animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-silver-muted">
              Web Systems • PH
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-silver-muted">
          <a href="#problem" className="hover:text-white transition-colors">
            Why Not FB Alone?
          </a>
          <a href="#transformation" className="hover:text-white transition-colors">
            Before vs After
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Packages
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="nocturne-btn-primary text-sm py-2.5 px-5 group"
          >
            <Sparkles className="w-4 h-4 text-violet-light group-hover:rotate-12 transition-transform" />
            <span>Free Scorecard Audit</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-obsidian-elevated border border-white/10 text-silver-muted hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-surface/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-silver-muted hover:text-white py-2"
          >
            Why Not FB Alone?
          </a>
          <a
            href="#transformation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-silver-muted hover:text-white py-2"
          >
            Before vs After
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-silver-muted hover:text-white py-2"
          >
            Packages & Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-silver-muted hover:text-white py-2"
          >
            FAQ
          </a>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full nocturne-btn-primary text-sm py-3"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Website Scorecard</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
