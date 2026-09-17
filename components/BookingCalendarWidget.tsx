"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowRight, Video, Sparkles, AlertCircle } from "lucide-react";

interface BookingCalendarWidgetProps {
  scorecardId?: string;
  defaultBusinessName?: string;
  defaultEmail?: string;
}

export default function BookingCalendarWidget({
  scorecardId,
  defaultBusinessName = "",
  defaultEmail = "",
}: BookingCalendarWidgetProps) {
  const getAvailableDates = () => {
    const dates = [];
    let cur = new Date();
    while (dates.length < 5) {
      cur.setDate(cur.getDate() + 1);
      const day = cur.getDay();
      if (day !== 0) {
        dates.push({
          iso: cur.toISOString().split("T")[0],
          display: cur.toLocaleDateString("en-PH", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
        });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const timeSlots = [
    "10:00 AM – 10:15 AM",
    "11:30 AM – 11:45 AM",
    "02:00 PM – 02:15 PM",
    "03:30 PM – 03:45 PM",
    "05:00 PM – 05:15 PM",
  ];

  const [selectedDate, setSelectedDate] = useState(availableDates[0]?.iso || "");
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [businessName, setBusinessName] = useState(defaultBusinessName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !email || !selectedDate || !selectedSlot) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scorecard_id: scorecardId,
          business_name: businessName,
          email,
          phone,
          date: selectedDate,
          time_slot: selectedSlot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to confirm session.");
      }

      setIsConfirmed(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to book. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed) {
    return (
      <div className="nocturne-card p-8 text-center max-w-xl mx-auto border-emerald-500/30 bg-emerald-950/20 shadow-glow">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="nocturne-badge text-emerald-400 border-emerald-500/30 bg-emerald-500/10 mb-3">
          Session Confirmed
        </span>

        <h3 className="font-display font-bold text-2xl text-white mb-2">
          Your Strategy Session is Booked!
        </h3>

        <p className="text-sm text-silver-muted mb-6 leading-relaxed">
          We sent confirmation details and a calendar invite to{" "}
          <span className="text-white font-mono font-medium">{email}</span>.
        </p>

        <div className="p-4 rounded-xl bg-obsidian border border-white/10 text-left space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="text-silver-dim uppercase font-mono">Date:</span>
            <span className="text-white font-medium">{selectedDate}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-silver-dim uppercase font-mono">Time (PHT):</span>
            <span className="text-violet-light font-medium">{selectedSlot}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-silver-dim uppercase font-mono">Meeting Link:</span>
            <span className="text-emerald-400 font-mono text-[11px]">
              meet.google.com/aet-her-core
            </span>
          </div>
        </div>

        <a
          href="https://meet.google.com/aet-her-core"
          target="_blank"
          rel="noopener noreferrer"
          className="nocturne-btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
        >
          <Video className="w-4 h-4" />
          <span>Open Google Meet Room</span>
        </a>
      </div>
    );
  }

  return (
    <div className="nocturne-card p-6 sm:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-violet-accent/10 border border-violet-accent/30 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-violet-light" />
        </div>
        <div>
          <h4 className="font-display font-bold text-xl text-white">
            Schedule 15-Min Strategy Session
          </h4>
          <p className="text-xs text-silver-muted">
            Live 1-on-1 walkthrough of your scorecard recommendations & package selection.
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleBooking} className="space-y-6">
        <div>
          <label className="block text-xs font-mono uppercase text-silver-muted mb-2">
            Select Consultation Date
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {availableDates.map((d) => (
              <button
                type="button"
                key={d.iso}
                onClick={() => setSelectedDate(d.iso)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  selectedDate === d.iso
                    ? "bg-violet-accent border-violet-accent text-white shadow-glow-sm"
                    : "bg-obsidian-elevated border-white/10 text-silver-muted hover:border-white/20"
                }`}
              >
                <span className="block text-xs font-medium">{d.display}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-silver-muted mb-2">
            Select Time Slot (Manila PHT)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {timeSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-2.5 rounded-xl border text-left px-4 flex items-center justify-between text-xs transition-all ${
                  selectedSlot === slot
                    ? "bg-violet-accent/20 border-violet-accent text-white font-medium shadow-glow-sm"
                    : "bg-obsidian-elevated border-white/10 text-silver-muted hover:border-white/20"
                }`}
              >
                <span>{slot}</span>
                <Clock className="w-3.5 h-3.5 text-silver-dim" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
              Business Name *
            </label>
            <input
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Your Business"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white placeholder-silver-dim text-sm focus:outline-none focus:border-violet-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-silver-muted mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-elevated border border-white/10 text-white placeholder-silver-dim text-sm focus:outline-none focus:border-violet-accent transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full nocturne-btn-primary py-3.5 text-sm group"
        >
          {isSubmitting ? (
            <span>Securing Your Slot...</span>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-violet-light" />
              <span>Confirm 15-Minute Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] font-mono text-silver-dim">
          Free 15-min discovery call • No hard sales tactics • Direct strategy advice
        </p>
      </form>
    </div>
  );
}
