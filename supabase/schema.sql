-- ==========================================================================
-- AetherCore Funnel & Customer Website Scorecard Database Schema
-- Supabase / PostgreSQL Migration Script
-- ==========================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. LEADS TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name TEXT NOT NULL,
    facebook_url TEXT NOT NULL,
    industry TEXT NOT NULL,
    primary_goal TEXT NOT NULL,
    approx_budget TEXT NOT NULL,
    email TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new', -- 'new', 'scorecard_viewed', 'call_booked', 'converted'
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for querying recent leads and emails
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- 2. SCORECARDS TABLE
CREATE TABLE IF NOT EXISTS public.scorecards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    business_name TEXT NOT NULL,
    facebook_url TEXT NOT NULL,
    industry TEXT NOT NULL,
    overall_score INTEGER NOT NULL CHECK (overall_score >= 0 AND overall_score <= 100),
    grade TEXT NOT NULL, -- 'A', 'B', 'C', 'D', 'F'
    findability_score INTEGER NOT NULL,
    mobile_score INTEGER NOT NULL,
    trust_score INTEGER NOT NULL,
    leadgen_score INTEGER NOT NULL,
    clarity_score INTEGER NOT NULL,
    findings JSONB NOT NULL DEFAULT '[]'::jsonb,
    recommendations JSONB NOT NULL DEFAULT '[]'::jsonb,
    mockup_data JSONB NOT NULL DEFAULT '{}'::jsonb,
    viewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_scorecards_lead_id ON public.scorecards(lead_id);

-- 3. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    scorecard_id UUID REFERENCES public.scorecards(id) ON DELETE SET NULL,
    business_name TEXT NOT NULL,
    email TEXT NOT NULL,
    date DATE NOT NULL,
    time_slot TEXT NOT NULL,
    timezone TEXT NOT NULL DEFAULT 'Asia/Manila (PHT)',
    status TEXT NOT NULL DEFAULT 'confirmed', -- 'confirmed', 'completed', 'canceled'
    google_meet_link TEXT DEFAULT 'https://meet.google.com/aethercore-discovery',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_bookings_lead_id ON public.bookings(lead_id);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON public.bookings(date);

-- ==========================================================================
-- Row Level Security (RLS) Policies
-- ==========================================================================

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scorecards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous submissions via the landing page
CREATE POLICY "Allow public insert to leads" 
ON public.leads FOR INSERT 
WITH CHECK (true);

-- Allow public viewing of scorecards by their unique UUID token
CREATE POLICY "Allow public read scorecards by id" 
ON public.scorecards FOR SELECT 
USING (true);

-- Allow public insert to scorecards via API
CREATE POLICY "Allow public insert to scorecards" 
ON public.scorecards FOR INSERT 
WITH CHECK (true);

-- Allow public creation of 15-minute booking slots
CREATE POLICY "Allow public insert to bookings" 
ON public.bookings FOR INSERT 
WITH CHECK (true);

-- Allow public reading bookings for slot confirmation
CREATE POLICY "Allow public read bookings" 
ON public.bookings FOR SELECT 
USING (true);
