# AetherCore Web Funnel & Customer Website Scorecard

A high-converting web design sales funnel and interactive **Customer Website Scorecard** engineered for Philippine SMEs transitioning from Facebook-only operations to high-performing digital storefronts.

Built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Supabase (PostgreSQL)**, and styled following the luxury obsidian aesthetic of the **Nocturne Fr** Framer design.

---

## 🌟 Key Features

1. **High-Converting Landing Page (`/`)**
   - **Hero Section**: Addresses the core pain point (*"Is Your Business Still Relying on Facebook Alone?"*) with electric violet glow badges, local SME trust proofs, and dual CTAs.
   - **Problem Breakdown (`#problem`)**: Highlights the hidden costs of social-only presence (Google search invisibility, "PM sent" drop-off, manual DM answering bottleneck, and zero platform ownership).
   - **Before vs After Transformation (`#transformation`)**: High-contrast side-by-side comparison of Facebook limitations vs AetherCore modern website benefits.
   - **Transparent SME Pricing (`#pricing`)**:
     - **Starter** (₱15,000) — 1–3 pages, 7-day launch, direct Viber/WhatsApp contact.
     - **Business** (₱25,000) — Up to 5 pages, 24/7 calendar booking, full Google SEO & reviews.
     - **Business Pro** (₱40,000+) — Custom features, GCash/Maya payment gateway, CRM sync.
   - **Interactive FAQ (`#faq`)**: Answers common Philippine business questions regarding copy, turnaround, and GCash payments.

2. **Interactive Customer Website Scorecard (`/scorecard/[id]`)**
   - **Executive Grade & Gauge**: Evaluates online presence (e.g. Grade D / 36/100) vs modern web baseline (94/100).
   - **5 Conversion Pillars**:
     - *Google Findability & Local SEO*
     - *Mobile Experience & Page Speed*
     - *Trust & Credibility Factors*
     - *Lead Capture & Inquiry Friction*
     - *Pricing & Services Clarity*
   - **Interactive Mockup Comparison**: Live tab switcher comparing the customer's current messy Facebook mobile experience against a bespoke AetherCore website mockup tailored with their business name, industry tagline, and service pricing.
   - **Embedded 15-Minute Strategy Booking**: Instant appointment scheduling synced with Philippine Time (PHT).

3. **Backend & Database (`/api` + Supabase)**
   - `POST /api/leads`: Saves qualified SME leads and computes 5-pillar scorecard metrics.
   - `GET /api/scorecard/[id]`: Returns audit metrics, findings, recommendations, and mockup data.
   - `POST /api/bookings`: Captures discovery strategy call appointments.
   - Graceful offline fallback in `lib/supabase.ts` for instant preview and development even before setting environment variables.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page, or [http://localhost:3000/scorecard/demo](http://localhost:3000/scorecard/demo) to test the customer scorecard directly.

---

## 🗄️ Supabase Database Setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Paste and run the complete schema script located in [`supabase/schema.sql`](supabase/schema.sql).
4. Retrieve your **Project URL** and **Anon Key** from `Project Settings > API`.
5. Add them to your `.env.local` or Vercel Environment Variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New Project** and import `aethercore-web-funnel`.
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**. Vercel will build and serve your funnel globally with Singapore edge routing (`sin1`) for minimum Philippine latency.
