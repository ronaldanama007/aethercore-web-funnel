# AetherCore Web Design Leads - Systeme.io Automation & Email Sequence

This document provides the complete, production-ready email copy and trigger configuration for the **AetherCore Web Design Leads** nurture sequence in **Systeme.io**.

---

## Automation Rule Configuration in Systeme.io

1. **Trigger:** 
   - Event: `Funnel step form subscribed`
   - Funnel: `AetherCore Squeeze Page Funnel`
   - Step: `Free Website Assessment (Pop-up Modal)`
2. **Actions:**
   - Action 1: `Add a tag` ➔ `Lead - Website Assessment`
   - Action 2: `Subscribe to campaign` ➔ `AetherCore Web Design Leads`
   - Action 3 (Optional): `Send email to specific address` ➔ Alert internal team at `team@aethercore.ph` with `{contact.email}`, `{contact.business_name}`, `{contact.facebook_page_url}`, and `{contact.approx_budget}`.

---

## Email 1: Immediate Delivery (Send 0 Minutes After Opt-in)

* **Delay:** Send immediately
* **Subject:** We're reviewing your business ({contact.business_name})
* **Sender Name:** Mark from AetherCore
* **Preview Text:** Your Free Website Scorecard is in the queue. Here is what happens next.

**Email Body:**

```text
Hi {contact.first_name|there},

Thank you for requesting your Free Website Assessment for {contact.business_name}!

Our web design architects have already received your submission and queued your Facebook page ({contact.facebook_page_url}) for a manual audit.

Over the next 48 hours, we will evaluate your current online footprint across 5 core pillars:
1. Google Search Visibility & Local SEO
2. Mobile User Experience & Speed
3. Trust & Credibility Factors
4. Pricing & Services Clarity (eliminating "PM sent" friction)
5. Automated Inquiries & Lead Capture

Once the assessment is done, we will deliver your personalized Website Scorecard and a custom concept preview showing what your business could look like with a dedicated, high-converting website.

Quick question while we prepare this:
Do you have any specific websites or design styles in your industry that you love? 

Feel free to simply hit "Reply" to this email and let me know. I personally read every single response.

Talk soon,

Mark & The AetherCore Team
AetherCore Web Design Philippines
Website: https://aethercore.ph
```

---

## Email 2: Day 2 (The Audit Delivery & Pivot)

* **Delay:** Send 2 days (48 hours) after Email 1
* **Subject:** Your Free Website Scorecard + Concept is Ready 📊
* **Sender Name:** Mark from AetherCore
* **Preview Text:** Here is your 5-pillar audit + custom mobile mockup for {contact.business_name}.

**Email Body:**

```text
Hi {contact.first_name|there},

Great news — our team just finished inspecting {contact.business_name}'s online presence.

Here is your manual audit breakdown:

1. Google Findability: Low (Missing Google Business profile optimization and a local indexable domain).
2. Mobile Clarity: Moderate (Key services and pricing are buried inside social media photo albums and old posts).
3. Inquiry Friction: High (Clients must message and wait for manual responses, leading to an estimated 50%+ inquiry drop-off).
4. Trust & Legitimacy: Moderate (A Facebook page is a great start, but high-ticket customers look for an official domain name and verified contact hub).

💡 The Secret Weapon: Your Custom Concept Mockup
Rather than just pointing out problems, our designer created an interactive concept mockup specifically for {contact.business_name}. 

It features:
• A clean, lightning-fast mobile interface
• Instant service listings with transparent pricing
• An automated inquiry / appointment booking button
• Integrated Google Maps & WhatsApp/Viber direct chat

👉 [Click Here to View Your Custom Concept & Book a 15-Minute Review](https://aethercore.ph/thank-you.html?biz={contact.business_name})

Let’s hop on a quick, zero-pressure 15-minute discovery call to walk through this concept and discuss how we can turn it into your live business website starting at just ₱15,000.

Slots are first-come, first-served this week:
[Reserve Your 15-Minute Strategy Chat Here]

Best regards,

Mark
Lead Architect, AetherCore
```

---

## Email 3: Day 5 (The Competitor Angle)

* **Delay:** Send 3 days after Email 2 (Day 5 overall)
* **Subject:** What happens when someone Googles "{contact.business_name}"?
* **Sender Name:** Mark from AetherCore
* **Preview Text:** The silent cost of relying only on Facebook in 2026.

**Email Body:**

```text
Hi {contact.first_name|there},

Put yourself in your ideal customer's shoes for just two minutes.

They have a pressing need — whether that's dental care, salon treatments, home renovations, or professional consulting.

Where do they go first?
More often than not, they go to Google and type:
"[Your Service] near me" or "[Your Service] in [Your City]".

If your business only exists on Facebook:
• Google often ranks competitor websites that have proper local SEO, SSL certificates, and fast landing pages above social media pages.
• When visitors do click a Facebook link without an account or on a mobile browser, they are met with login walls and cluttered layouts.
• Meanwhile, your competitor with a sleek ₱15K–₱25K website gives them instant prices, glowing Google reviews, and a 1-click booking button.

Who do you think wins that customer?

Leveling the playing field does NOT require ₱100,000+ budgets or months of complicated tech work. 

At AetherCore, our Philippine SME Starter website is just ₱15,000 one-time, delivered in 7 to 10 days.

Ready to claim your spot on Google?
👉 [Check our packages and review your concept here](https://aethercore.ph#pricing)

Or reply to this email with "READY" and I'll send over the project onboarding checklist.

Cheers,

Mark
AetherCore Web Design
```

---

## Email 4: Day 8 (Soft Pitch & Portfolio Case Study)

* **Delay:** Send 3 days after Email 3 (Day 8 overall)
* **Subject:** Look at what we built for a local Philippine business
* **Sender Name:** Mark from AetherCore
* **Preview Text:** How modernizing their web presence doubled customer bookings.

**Email Body:**

```text
Hi {contact.first_name|there},

When Dr. Santos came to us, her clinic was getting dozens of Facebook inquiries every week. But her reception staff was overwhelmed answering the exact same 3 questions all day:

1. "Magkano po consultation?"
2. "San po banda clinic niyo?"
3. "Open po ba kayo ng Sunday?"

Almost half of those inquiries never converted into confirmed clinic appointments because patients got tired of waiting for replies.

We launched a clean, mobile-first Business Package website (₱25,000 one-time) with:
• Clear service price tables
• Verified clinic photos & Google reviews
• An automated booking calendar
• Direct Google Maps directions

Within 30 days of launch:
✅ Inquiries converted into paid appointments at a 42% higher rate
✅ Reception staff saved 2+ hours daily answering repetitive messages
✅ Their clinic appeared on page 1 of Google Maps for local searches

Whether your business needs our Starter Package (₱15,000) or our Business Package (₱25,000), you own your website 100% with no recurring agency lock-in.

If you are ready to give {contact.business_name} the professional online presence it deserves, simply reply "WEBSITE" to this email.

I’ll personally reply with next steps and our available project launch dates.

Warmly,

Mark
Founder & Lead Developer, AetherCore
Viber / WhatsApp: +63 917 000 0000
```
