"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import QualificationModal from "@/components/QualificationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenModal = (tier?: string) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-obsidian text-silver-text selection:bg-violet-accent selection:text-white">
      <Navbar onOpenModal={() => handleOpenModal()} />
      <HeroSection onOpenModal={() => handleOpenModal()} />
      <ProblemSection onOpenModal={() => handleOpenModal()} />
      <TransformationSection onOpenModal={() => handleOpenModal()} />
      <PricingSection onOpenModal={(tier) => handleOpenModal(tier)} />
      <FaqSection />
      <Footer />

      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTier={selectedTier}
      />
    </main>
  );
}
