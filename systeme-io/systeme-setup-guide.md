# Systeme.io Funnel Setup & Implementation Guide

This guide details how to build and configure the **AetherCore Squeeze Page Funnel** inside the **Systeme.io** platform.

---

## Step 1: Create Custom Contact Fields in Systeme.io

Before building the funnel steps, create the custom contact attributes so the qualification form fields are saved to the contact's profile:

1. In Systeme.io, go to **Contacts** ➔ **Custom Fields** (or **Settings** ➔ **Custom Fields**).
2. Click **+ Add Custom Field** and create the following 5 fields:
   - **Business Name** (Field name: `business_name` | Type: `Text`)
   - **Facebook Page URL** (Field name: `facebook_page_url` | Type: `Text`)
   - **Industry** (Field name: `industry` | Type: `Text` or `Dropdown`)
   - **Primary Goal** (Field name: `primary_goal` | Type: `Text` or `Dropdown`)
   - **Approximate Budget** (Field name: `approx_budget` | Type: `Text` or `Dropdown`)
3. Note: The `Email` field is a default system field in Systeme.io and does not need to be created.

---

## Step 2: Create the Funnel

1. In your Systeme.io dashboard, click **Funnels** ➔ **+ Create**.
2. **Name:** `AetherCore - Free Website Assessment Funnel`
3. **Goal:** Select **Build an audience** (or **Custom**).
4. **Currency:** Select **PHP - Philippine Peso (₱)**.
5. Click **Save**.

---

## Step 3: Configure Step 1 - The Squeeze Landing Page

1. In the funnel steps list, click **+ Add Step**:
   - **Name:** `Landing Page (Squeeze)`
   - **Type:** `Squeeze Page`
2. Choose a blank or minimal template, then click **Edit page** (the wand icon).
3. Replicate the sections using Systeme.io drag-and-drop elements (or embed the provided HTML/CSS via a **Raw HTML** block):
   - **Section 1 (Hero):**
     - Headline: *Is Your Business Still Relying on Facebook Alone?*
     - Sub-headline: *Your customers are searching online. Give them a professional website they can trust. AetherCore creates fast, modern, mobile-friendly websites for Philippine SMEs.*
     - CTA Button: Set action to **Open Pop-up**.
     - Micro-copy: *No obligation • Free initial assessment • Built for your business*
   - **Section 2 (The Problem):**
     - Two-column layout.
     - Left: Upload the provided smartphone comparison graphic (`assets/facebook-vs-web.svg`).
     - Right: Headline *Your Facebook Page Isn't Your Website* + 3 friction points.
   - **Section 3 (The Transformation):**
     - Side-by-side comparison table or 2-column cards (*The Facebook Reality* vs *The AetherCore Website Advantage*).
   - **Section 4 (Core Offer Pricing):**
     - 3 pricing columns:
       - **Starter (₱15,000)**
       - **Business (₱25,000)** [Add badge: "Most Popular for PH SMEs"]
       - **Business Pro (₱40,000+)**
     - Buttons on each tier: Action ➔ **Open Pop-up**.
   - **Section 5 (Final CTA):**
     - Headline: *Ready to see what your business could look like online?*
     - Button: Action ➔ **Open Pop-up**.

---

## Step 4: Configure Step 2 - The Pop-up Qualification Form

1. In the Systeme.io Page Editor, click **Pop-ups** in the top bar ➔ **Add pop-up**.
2. Customize the pop-up settings:
   - **Show close button:** Checked.
   - **Open pop-up automatically:** Disabled (triggered only on button click).
3. Add form input elements and map each to the respective contact attribute:
   - Input 1: Map to `business_name` (Placeholder: "e.g. Lumina Dental Clinic")
   - Input 2: Map to `facebook_page_url` (Placeholder: "facebook.com/yourpage")
   - Input 3 (Select/Dropdown): Map to `industry` (Options: Clinic, Salon, Restaurant, Contractor, Real Estate, Professional Services, Retail, Other)
   - Input 4 (Select/Dropdown): Map to `primary_goal` (Options: Get more inquiries, Show my services, Accept bookings, Sell products, Improve visibility)
   - Input 5 (Select/Dropdown): Map to `approx_budget` (Options: ₱15,000, ₱25,000, ₱40,000+)
   - Input 6: Map to default `Email` field.
4. **Submit Button Settings:**
   - **Action when button clicked:** `Send form`
   - **Do you want to redirect users after registration?:** `To the next step`
   - **Button text:** `Show Me What AetherCore Can Build ➔`
5. Click **Save changes** and exit the editor.

---

## Step 5: Configure Step 3 - The Thank You / Booking Page

1. In the Funnel Steps list, add or select the second step:
   - **Name:** `Thank You / Booking Fast-Track`
   - **Type:** `Thank you page`
2. Click **Edit page**:
   - **Headline:** *Assessment Requested! We're reviewing your online presence.*
   - **Sub-headline:** *Within the next 48 hours, we will send your Free Website Scorecard and a custom concept directly to your email.*
   - **Fast-Track Booking Widget:**
     - Option A: Insert a **Raw HTML** block and paste an embed code from Calendly, TidyCal, or the interactive calendar script in `js/booking.js`.
     - Option B: Add a high-converting button linking directly to your booking calendar URL: *“Book 15-Minute Discovery Chat Now ➔”*
3. Click **Save changes**.

---

## Step 6: Configure the Automation Rule & Email Campaign

1. Go to your funnel, select the **Landing Page (Squeeze)** step, and click the **Automation rules** tab.
2. Click **+ Add rule**:
   - **Trigger:** `Funnel step form subscribed`
3. Click on the created rule to add actions:
   - **Action 1:** `Add a tag` ➔ Select or create tag: `AetherCore Web Design Leads`.
   - **Action 2:** `Subscribe to campaign` ➔ Select campaign: `AetherCore Web Design Leads`.
4. Create the campaign under **Emails** ➔ **Campaigns** ➔ **+ Create** (`AetherCore Web Design Leads`).
5. Add the 4 automated nurture emails from `systeme-io/automation-sequence.md`:
   - **Email 1:** Send immediately (0 minutes delay).
   - **Email 2:** 2 days (48 hours) after Email 1.
   - **Email 3:** 3 days after Email 2 (Day 5 overall).
   - **Email 4:** 3 days after Email 3 (Day 8 overall).
6. Activate each email in the campaign.

---

## Step 7: Testing & Verification Checklist

- [ ] Open the live Squeeze Page URL in an incognito window.
- [ ] Verify that clicking the Hero CTA, Pricing Card CTAs, and Final CTA all open the qualification pop-up.
- [ ] Submit a test lead with a real test email.
- [ ] Confirm automatic redirection to the Thank You / Booking page.
- [ ] Confirm receipt of Email 1 within 60 seconds in your inbox.
- [ ] Verify that custom contact fields (`business_name`, `facebook_page_url`, `industry`, `approx_budget`) are populated in **Contacts**.
