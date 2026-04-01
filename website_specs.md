# LEADIYA — Website Brief v3
> Platform-first. Correct product hierarchy. Ready to build.
> Hand to any developer or agent. Everything is here.

---

## What Leadiya actually is

**Lead intelligence platform for Kazakhstan.**

Collects business leads from 2GIS and official KZ sources,
stores them in a single database, enriches them automatically,
and surfaces them through a dashboard with CRM and outreach.

```
Not: "a Chrome extension with extras"
Yes: "a platform — dashboard + API + workers + database + optional extension"
```

---

## Design Language

### Feeling
Professional data platform. Serious but approachable.
Not enterprise bloat. Not a weekend side project.
Reference: Linear, Retool, Hex — dark, dense with real data, fast.

### Colors
```
--bg:       #0A0A0A    /* base background */
--bg-2:     #111111    /* cards, sections */
--bg-3:     #161616    /* elevated surfaces */
--border:   #1E1E1E    /* subtle dividers */
--border-2: #2A2A2A    /* visible borders */
--teal:     #0D6B5A    /* brand primary */
--pulse:    #00E5A0    /* accent — CTAs, live signals */
--white:    #F2F0EB    /* primary text */
--muted:    #555555    /* secondary text */
--amber:    #F5A623    /* intent signals, hot leads */
```

### Typography
```
Display:  Syne — all headings
Mono:     JetBrains Mono — labels, data, tags, code
Body:     Syne 400 — paragraphs

H1:  72–88px · 800 · tracking -3px · leading 0.93
H2:  48–60px · 800 · tracking -2px · leading 0.97
H3:  24px · 700 · tracking -0.3px
Body: 16–18px · 400 · leading 1.65
Tag: 11px · mono · uppercase · tracking 0.08em
```

---

## Page Structure

```
1.  NAV
2.  HERO               ← platform headline + dashboard screenshot
3.  LOGOS STRIP        ← data sources + integrations
4.  THE PROBLEM
5.  PRODUCT OVERVIEW   ← the four layers explained simply
6.  HOW IT WORKS       ← data flow, step by step
7.  FEATURES           ← dashboard + workers + extension
8.  WHO IT'S FOR
9.  PRICING
10. FAQ
11. FINAL CTA
12. FOOTER
```

---

## Section 1 — NAV

```
Left:   Logo mark (28px) + "leadiya" wordmark (Syne 700, lowercase)

Right:
  Links:  Product · Sources · Pricing
  CTA:    "Get Access"
          bg #00E5A0 · color #0A0A0A · weight 700
          padding 10px 22px · border-radius 4px

Scroll:   Transparent → rgba(10,10,10,0.92) + blur(16px)
          border-bottom 1px solid #1E1E1E
```

---

## Section 2 — HERO

### Layout
Centered headline. Dashboard screenshot below.
Full-width dark section. Stars/grid texture optional but subtle.

### Copy

**Eyebrow** (mono, teal, 11px):
```
// Kazakhstan Lead Intelligence Platform
```

**H1:**
```
Every KZ business.
One dashboard.
Always fresh.
```

**Sub** (18px, muted, max-width 580px, centered):
```
Leadiya collects leads from 2GIS and official KZ government sources,
enriches them automatically with director names, phone numbers,
and procurement signals — and puts them in a dashboard your
whole team can work from.
```

**CTAs** (centered):
```
Primary:    "Get Access →"
            bg #00E5A0 · color #0A0A0A · 18px · weight 700
            padding 16px 44px

Secondary:  "// see how it works"
            mono · muted · links to #how
```

### Hero visual
```
Full dashboard screenshot mockup.
Shows the leads list view:
  - Left sidebar: filters (city, industry, ICP score, hot)
  - Main area: table of leads
    Columns: Company · City · Director · Phone · ICP Score · Tender · Updated
    3–4 rows visible, real KZ company names:
      ТОО «АлматыСтрой Плюс»  Алматы  Сейткали Д.  +7 701 ···  92  ₸84.5M  4m ago
      ТОО «КазМедПрибор»      Астана  Ахметов Р.   +7 702 ···  88  —       12m ago
      ИП Джаксыбеков          Шымкент Джаксыбеков  +7 705 ···  71  ₸12.1M  1h ago
  - Top right: "847 leads · 23 hot · Updated 4 min ago"
  - One row highlighted in amber (hot lead)

Style:
  Rounded corners 12px · subtle border #1E1E1E
  Slight perspective tilt (transform: perspective(1200px) rotateX(4deg))
  Fade out at bottom edge into page background
```

---

## Section 3 — LOGOS STRIP

```
Background: #111
Padding: 28px 48px
Border top + bottom: 1px solid #1E1E1E

Left (mono 11px muted): "data from"
Items: data.egov.kz · Goszakup · stat.gov.kz · FA-FA.kz · 2GIS · kgd.gov.kz

Separator (center): thin vertical line #1E1E1E

Right (mono 11px muted): "connect to"  
Items: Google Sheets · Zapier · Make · Webhook · CSV

All logos/names at 40% opacity, full on hover
```

---

## Section 4 — THE PROBLEM

### Copy

**Section tag:** `// why this exists`

**H2:**
```
The KZ lead problem
is not finding companies.
It's knowing which ones
matter right now.
```

**Three problem rows:**

```
Row 1:
  Label (mono, amber): STALE DATA
  Text: Every "lead provider" in Kazakhstan 
        sells the same 2GIS export from 2022. 
        Same file. Sold to 50 teams. 
        You're calling numbers your competitors 
        already called last week.

Row 2:
  Label (mono, amber): NO SIGNAL
  Text: A company name and phone number 
        tells you nothing. 
        Who is the director? 
        Did they just win a government contract? 
        Are they active or half-liquidated? 
        Nobody was answering these questions. 
        Until now.

Row 3:
  Label (mono, amber): MANUAL WORK
  Text: Sales teams spend hours on 2GIS 
        copying names into spreadsheets. 
        No enrichment. No scoring. 
        No way to prioritize. 
        Just a list and a phone.
```

---

## Section 5 — PRODUCT OVERVIEW

### Layout
Dark section. Four cards in a 2×2 grid.
Each card explains one layer of the product simply.

### Copy

**Section tag:** `// the product`

**H2:**
```
Four layers.
One platform.
```

**Cards:**

```
Card 1: The Database
  Icon: simple cylinder / stack
  Title: Single source of truth
  Body: Every KZ lead lives in one Postgres database —
        enriched, scored, and always up to date.
        Not a spreadsheet. Not a CSV.
        A real database your whole team queries.

Card 2: The Pipeline
  Icon: flow arrows
  Title: Automated enrichment
  Body: Workers run 24/7 — collecting from 
        data.egov.kz, Goszakup, stat.gov.kz, 
        and 2GIS. When a company wins a tender, 
        it surfaces in your dashboard within hours. 
        No manual updates.

Card 3: The Dashboard
  Icon: grid/table
  Title: Built to work from
  Body: Filter by city, industry, ICP score, 
        and tender activity. Reveal director name 
        and phone with one click. 
        Export or push to outreach directly. 
        Your team lives here.

Card 4: The Extension
  Icon: browser/puzzle piece
  Title: Capture in the field
  Body: On 2GIS? The extension captures 
        any company into the same database 
        your server runs fill. 
        One rep on 2GIS, one bulk discovery job — 
        same place. Same data.
```

---

## Section 6 — HOW IT WORKS

### Layout
Light section — #F2F0EB. Dark text. Creates contrast.

### Copy

**Section tag:** `// data flow`

**H2** (dark):
```
From 2GIS listing
to qualified lead —
automatically.
```

**Flow steps** (left column, 5 steps):

```
01  Discovery
    Server-side workers scrape 2GIS by city 
    and category — or your team triggers a run 
    from the dashboard. 
    Thousands of companies ingested overnight.

02  Official enrichment
    Each company is cross-referenced by BIN 
    against data.egov.kz (director, legal status), 
    stat.gov.kz (employees, revenue), 
    and kgd.gov.kz (tax health).

03  Intent signals
    Goszakup API checks every BIN for 
    government contract wins. 
    A company that just won ₸50M gets 
    flagged HOT. You see it within 2 hours.

04  ICP scoring
    AI scores every lead 0–100 against 
    your ideal customer profile. 
    You filter to 80+ and start calling. 
    No manual qualification.

05  Act
    Work leads in the dashboard. 
    Export to CSV. 
    Push to WhatsApp outreach. 
    Or pull via API into your own tools.
```

**Right column — pipeline visual** (dark card on light bg):

```
Dark terminal card #0A0A0A, border #222, border-radius 8px

Header bar: three dots + "leadiya workers · live"

Flow items:
  🟢  2GIS discovery   →  2,847 companies queued
       ↓
  🟢  BIN enrichment   →  director + legal status resolved
       ↓
  🟡  Goszakup signal  →  ТОО АлматыСтрой won ₸84.5M
       ↓
  🟢  ICP score        →  92 / 100 · flagged HOT
       ↓
  ⚪  Dashboard        →  visible in your leads list · 4m ago

Dot colors:
  🟢 #00E5A0  (running / complete)
  🟡 #F5A623  (intent signal detected)
  ⚪ rgba(255,255,255,0.25)  (waiting)

Subtle staggered slide-in animation on each row
```

---

## Section 7 — FEATURES

### Layout
Dark. Three columns, two rows. 6 feature cards.

### Copy

**Section tag:** `// capabilities`

**H2:**
```
Everything a KZ
sales team needs.
```

**Feature cards:**

```
1.  Live database
    Leads auto-update. last_enriched_at tracked 
    per company. Stale records re-queued 
    automatically every 7 days.

2.  Director names
    From official egov registry — not scraped 
    from a website. The person who signs contracts. 
    By name, from first contact.

3.  Tender signals
    Every government procurement win 
    cross-referenced by BIN. 
    Companies with fresh budget 
    surface at the top.

4.  ICP filter
    Set your ideal customer profile once. 
    Dashboard filters to your score range. 
    No leads that don't match.

5.  Chrome extension
    Reps capture companies from 2GIS 
    directly into the database while browsing. 
    Field capture meets server discovery.

6.  Outreach built in
    WhatsApp sequences, reply classification, 
    conversation history — all inside the dashboard. 
    No separate tool.
```

---

## Section 8 — WHO IT'S FOR

### Copy

**Section tag:** `// who uses it`

**H2:**
```
Built for teams
that sell in Kazakhstan.
```

**Three cards:**

```
B2B Sales Teams
  You prospect by industry and city.
  You need director names, not receptionists.
  You need to know who has budget right now.
  Leadiya tells you all three before you dial.

Agencies & Consultants
  You build lead lists for clients.
  Deliver a live database, not a spreadsheet.
  Run discovery on demand.
  White-label the output.

Founders & Solo Operators
  You built this to sell your own services first.
  It works. Now others can use the same machine.
  No enterprise contract. No onboarding call.
  Just access.
```

---

## Section 9 — PRICING

### Copy

**Section tag:** `// pricing`

**H2:**
```
No free tier.
Just results.
```

**Sub:**
```
Every plan includes the dashboard, live data, 
director names, and BIN-verified profiles.
```

**Plans:**

```
STARTER — ₸25,000 / мес
  → Dashboard access
  → 2 cities
  → 500 lead views / month
  → 2 exports (50 leads each)
  → BIN + director + phone
  → ICP score filter
  → Email support

  Button: "Get Starter"
  Style: bg #111, border 1px solid #2A2A2A, color #F2F0EB


GROWTH — ₸65,000 / мес     ← FEATURED
  → Everything in Starter
  → All KZ cities
  → Unlimited lead views
  → 10 exports (200 leads each)
  → Goszakup tender signals
  → HOT lead alerts
  → Custom ICP config
  → Website enrichment
  → Chrome extension access
  → WhatsApp outreach (basic)
  → Priority support

  Badge: "Most popular"  mono · bg #00E5A0 · color #0A0A0A
  Button: "Get Growth"
  Style: bg #0D6B5A, color white, weight 700


AGENCY — ₸150,000 / мес
  → Everything in Growth
  → 5 team seats
  → Unlimited exports
  → Full outreach engine
  → API access
  → White-label option
  → Dedicated support

  Button: "Contact Us"
  Style: bg #161616, border 1px solid #2A2A2A
```

**Below cards** (mono 11px, centered, muted):
```
No annual contracts · Cancel anytime · Data live from day one
```

---

## Section 10 — FAQ

```
Q: Is this a Chrome extension or a platform?
A: Platform. Dashboard + API + automated workers + database.
   The Chrome extension is one way data enters the system —
   server-side scrapers are the primary scale path.

Q: Where does the data come from?
A: Six sources: data.egov.kz (official KZ company registry),
   Goszakup (government procurement), stat.gov.kz (company stats),
   kgd.gov.kz (tax status), FA-FA.kz (enrichment),
   and 2GIS (discovery + phones).

Q: How fresh is the data?
A: Companies are re-enriched every 7 days automatically.
   Tender signals update every 2 hours.
   New companies appear within 6 hours of 2GIS listing.

Q: Can I use it without the Chrome extension?
A: Yes. The extension is optional. Server-side discovery
   runs scheduled jobs. Most teams never touch the extension.

Q: Does it work outside Kazakhstan?
A: Built and optimized for Kazakhstan. Other 2GIS markets
   (Russia, Kyrgyzstan, etc.) may work but are not officially supported.

Q: What about privacy / compliance?
A: All data sourced from publicly visible listings and
   official government registries. You're responsible for
   outreach consent and local privacy laws.

Q: Can I self-host?
A: The stack is Hono + Postgres + Redis + Next.js.
   Contact us for self-hosted options.
```

---

## Section 11 — FINAL CTA

```
Background: #0A0A0A
Centered. Generous padding.
Giant "LEADIYA" watermark text behind at 3% opacity.

H2:
  Your competitors are still
  cold-calling a 2022 spreadsheet.

Sub (muted, centered, max-width 480px):
  While they guess, you know —
  the director's name, the phone,
  and that they won a ₸50M contract
  three days ago.

CTA:
  "Get Access →"
  bg #00E5A0 · color #0A0A0A · 18px · weight 700
  padding 20px 56px · border-radius 4px
```

---

## Section 12 — FOOTER

```
Left:    logo mark + "leadiya" + "© 2025 Leadiya"
Center:  hello@leadiya.com  (teal on hover)
Right:   Privacy · Terms

Mono 12px · muted · border-top 1px solid #1E1E1E
```

---

## Tone Rules

```
✓  Platform-first language — "platform", "dashboard", "pipeline"
✓  Short sentences. One idea per sentence.
✓  Specific numbers — 500,000 not "millions"
✓  Name the sources — data.egov.kz not "government data"
✓  Honest — "best-effort automation", not "bulletproof"
✗  No "powerful", "seamless", "game-changing", "unlock"
✗  No claiming official 2GIS partnership
✗  Extension is never the headline — it's "one of several inputs"
```

---

## Deliver

```
index.html    Single file · Google Fonts only external dependency
favicon.ico   Logo mark on #0A0A0A · 32×32
og-image.png  1200×630 · dark · logo + headline
```

---

*Leadiya Website Brief v3 · platform-first · correct hierarchy · ready to build*