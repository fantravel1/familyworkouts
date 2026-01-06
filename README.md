# 🏃‍♀️👨‍👩‍👧‍👦 FamilyWorkouts.com

## The World's Free Family Fitness Platform

**Mission**: Make family fitness accessible to every family on Earth — free, mobile-first, multilingual, and joyful.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://familyworkouts.com)
[![Mobile First](https://img.shields.io/badge/Design-Mobile%20First-green)](/)
[![Languages](https://img.shields.io/badge/Languages-7+-orange)](/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](/LICENSE)

---

## 🎯 Project Vision

FamilyWorkouts.com is a **free, mobile-first mega-site** delivering thousands of family workout videos, guides, and resources across 7+ languages. Built entirely on GitHub Pages for maximum performance, zero hosting costs, and global CDN delivery.

### Core Differentiators
- **100% Free** — No paywalls, no subscriptions, no equipment required
- **True Multi-Generational** — Workouts for toddlers through grandparents, together
- **Mobile-First** — Designed for the 80% of families who access fitness via smartphone
- **Global** — 7 languages serving 3+ billion potential users
- **SEO/AEO Dominant** — Engineered to own "family workout" search globally

---

## 🏗️ Technical Architecture

### Stack Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    FamilyWorkouts.com                       │
├─────────────────────────────────────────────────────────────┤
│  Static Site Generator: Astro 4.x                           │
│  Styling: Tailwind CSS 3.x + Custom Design System           │
│  Animations: GSAP + Lottie (lightweight)                    │
│  Video: YouTube Embeds + Lite-YouTube-Embed                 │
│  Search: Pagefind (static search)                           │
│  Analytics: Plausible (privacy-first)                       │
│  Forms: Formspree / Netlify Forms                           │
│  i18n: Astro i18n + Custom Routing                          │
├─────────────────────────────────────────────────────────────┤
│  Hosting: GitHub Pages (CDN: Cloudflare)                    │
│  CI/CD: GitHub Actions                                      │
│  Domain: Cloudflare DNS + SSL                               │
└─────────────────────────────────────────────────────────────┘
```

### Why Astro?
- **Partial Hydration** — JavaScript only where needed (interactive components)
- **Static Output** — Pure HTML/CSS for GitHub Pages compatibility
- **Content Collections** — Perfect for 10,000+ workout pages
- **Built-in i18n** — Native multilingual routing
- **Island Architecture** — Fun interactive elements without bloat
- **Image Optimization** — Automatic responsive images

### Performance Targets
| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **LCP** | < 1.5s | Mobile users on 3G/4G |
| **FID** | < 50ms | Instant tap response |
| **CLS** | < 0.05 | No layout shifts |
| **TTI** | < 2.5s | Usable immediately |
| **Page Size** | < 200KB | Emerging market data costs |
| **Lighthouse** | 95+ | SEO ranking factor |

---

## 📁 Project Structure

```
familyworkouts.com/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml              # GitHub Pages deployment
│   │   ├── lighthouse-ci.yml       # Performance monitoring
│   │   └── link-checker.yml        # Broken link detection
│   └── CODEOWNERS
│
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileNav.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   └── SearchModal.astro
│   │   │
│   │   ├── workout/
│   │   │   ├── WorkoutCard.astro
│   │   │   ├── WorkoutGrid.astro
│   │   │   ├── WorkoutVideo.astro      # Lite YouTube embed
│   │   │   ├── WorkoutTimer.astro      # Interactive island
│   │   │   ├── DifficultyBadge.astro
│   │   │   ├── AgeRangeBadge.astro
│   │   │   └── EquipmentList.astro
│   │   │
│   │   ├── fun/
│   │   │   ├── ConfettiButton.astro    # Celebration animations
│   │   │   ├── StreakCounter.astro     # Gamification
│   │   │   ├── FamilyAvatar.astro      # Character selection
│   │   │   ├── ProgressRing.astro      # Visual progress
│   │   │   ├── ChallengeCard.astro     # Weekly challenges
│   │   │   └── AchievementPopup.astro  # Reward moments
│   │   │
│   │   ├── seo/
│   │   │   ├── SchemaMarkup.astro      # JSON-LD structured data
│   │   │   ├── BreadcrumbSchema.astro
│   │   │   ├── VideoSchema.astro
│   │   │   ├── FAQSchema.astro
│   │   │   ├── HowToSchema.astro
│   │   │   └── OrganizationSchema.astro
│   │   │
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Badge.astro
│   │       ├── Accordion.astro
│   │       ├── Tabs.astro
│   │       └── Modal.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro            # Core HTML shell
│   │   ├── WorkoutLayout.astro         # Individual workout pages
│   │   ├── CategoryLayout.astro        # Listing pages
│   │   ├── GuideLayout.astro           # Long-form content
│   │   └── LandingLayout.astro         # Marketing pages
│   │
│   ├── pages/
│   │   ├── index.astro                 # Homepage
│   │   ├── workouts/
│   │   │   ├── index.astro             # All workouts hub
│   │   │   ├── [category]/
│   │   │   │   ├── index.astro         # Category listing
│   │   │   │   └── [slug].astro        # Individual workout
│   │   │   └── [...slug].astro         # Dynamic catch-all
│   │   │
│   │   ├── ages/
│   │   │   ├── toddlers.astro          # Ages 1-3
│   │   │   ├── preschool.astro         # Ages 3-5
│   │   │   ├── kids.astro              # Ages 5-12
│   │   │   ├── teens.astro             # Ages 13-17
│   │   │   ├── adults.astro            # Ages 18-59
│   │   │   └── seniors.astro           # Ages 60+
│   │   │
│   │   ├── challenges/
│   │   │   ├── index.astro             # Challenge hub
│   │   │   ├── 7-day-family.astro
│   │   │   ├── 30-day-dance.astro
│   │   │   └── seasonal/
│   │   │
│   │   ├── guides/
│   │   │   ├── index.astro
│   │   │   ├── getting-started.astro
│   │   │   ├── workout-for-beginners.astro
│   │   │   └── [slug].astro
│   │   │
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── 404.astro
│   │   │
│   │   └── [lang]/                     # i18n routes (es, pt, hi, ar, zh, fr)
│   │       └── [...slug].astro
│   │
│   ├── content/
│   │   ├── workouts/                   # Workout content collections
│   │   │   ├── en/
│   │   │   │   ├── dance/
│   │   │   │   │   ├── family-dance-party.md
│   │   │   │   │   ├── toddler-freeze-dance.md
│   │   │   │   │   └── ...
│   │   │   │   ├── yoga/
│   │   │   │   ├── hiit/
│   │   │   │   ├── strength/
│   │   │   │   ├── sports/
│   │   │   │   ├── outdoor/
│   │   │   │   └── adaptive/
│   │   │   ├── es/
│   │   │   ├── pt/
│   │   │   ├── hi/
│   │   │   ├── ar/
│   │   │   ├── zh/
│   │   │   └── fr/
│   │   │
│   │   ├── guides/
│   │   │   ├── en/
│   │   │   └── .../
│   │   │
│   │   ├── challenges/
│   │   │   ├── en/
│   │   │   └── .../
│   │   │
│   │   └── faqs/
│   │       ├── en/
│   │       └── .../
│   │
│   ├── data/
│   │   ├── navigation.json
│   │   ├── categories.json
│   │   ├── age-groups.json
│   │   ├── equipment.json
│   │   └── achievements.json
│   │
│   ├── i18n/
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── pt.json
│   │   ├── hi.json
│   │   ├── ar.json
│   │   ├── zh.json
│   │   └── fr.json
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── fonts.css
│   │   ├── animations.css
│   │   └── print.css
│   │
│   └── scripts/
│       ├── search.ts
│       ├── timer.ts
│       ├── confetti.ts
│       ├── streak.ts
│       └── analytics.ts
│
├── public/
│   ├── fonts/
│   │   ├── inter-var.woff2
│   │   └── noto-sans-[lang].woff2
│   │
│   ├── images/
│   │   ├── heroes/
│   │   ├── categories/
│   │   ├── characters/
│   │   ├── badges/
│   │   └── og/
│   │
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── apple-touch-icon.png
│   │
│   ├── animations/
│   │   └── lottie/
│   │
│   ├── robots.txt
│   ├── sitemap-index.xml
│   ├── manifest.json
│   └── _headers                        # Cloudflare headers
│
├── scripts/
│   ├── generate-sitemap.ts
│   ├── generate-og-images.ts
│   ├── validate-content.ts
│   └── build-search-index.ts
│
├── tests/
│   ├── seo.test.ts
│   ├── accessibility.test.ts
│   └── performance.test.ts
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 Design System

### Brand Identity

```
Primary Colors (Energetic & Welcoming)
├── Sunshine Yellow    #FFD93D  — Primary CTA, joy
├── Coral Energy      #FF6B6B  — Secondary accent, warmth  
├── Ocean Blue        #4ECDC4  — Trust, calm
├── Forest Green      #2ECC71  — Health, nature
└── Purple Play       #9B59B6  — Fun, creativity

Neutrals
├── Deep Navy         #1A1A2E  — Text, headers
├── Soft Gray         #6B7280  — Secondary text
├── Cloud White       #F8FAFC  — Backgrounds
└── Pure White        #FFFFFF  — Cards, containers

Gradients
├── Sunrise           linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)
├── Ocean Breeze      linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)
└── Playful           linear-gradient(135deg, #9B59B6 0%, #FF6B6B 100%)
```

### Typography

```css
/* Font Stack - Variable fonts for performance */
--font-display: 'Inter var', system-ui, sans-serif;
--font-body: 'Inter var', system-ui, sans-serif;

/* Scale - Mobile-first fluid typography */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
--text-hero: clamp(2.5rem, 2rem + 3vw, 4.5rem);
```

### Spacing System

```css
/* 4px base unit, mobile-optimized */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */

/* Touch targets - minimum 44px for accessibility */
--touch-target: 2.75rem; /* 44px */
```

### Component Patterns

#### Workout Card (Mobile-First)
```
┌────────────────────────────────┐
│  ┌──────────────────────────┐  │
│  │                          │  │
│  │     Video Thumbnail      │  │
│  │        (16:9)            │  │
│  │    ▶ Play Indicator      │  │
│  │                          │  │
│  └──────────────────────────┘  │
│                                │
│  🏃 Dance  •  ⏱ 12 min        │
│                                │
│  Family Dance Party            │
│  Get moving together!          │
│                                │
│  👶 2+  👧 5+  👨 All Ages     │
│                                │
│  ┌──────────────────────────┐  │
│  │     ▶ Start Workout      │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

#### Mobile Navigation
```
┌────────────────────────────────┐
│ 🏠  🏃  🎯  📖  👤            │  ← Bottom tab bar
│ Home Workouts Challenges Guides Me │
└────────────────────────────────┘

Touch targets: 64px height, full-width tap zones
Active state: Filled icon + label color change
```

---

## 🔍 SEO/AEO Strategy

### Search Engine Optimization

#### URL Architecture
```
Hierarchical, keyword-rich URLs:

/workouts/                              → Hub page
/workouts/dance/                        → Category
/workouts/dance/family-dance-party/     → Individual workout
/workouts/yoga/kids-animal-yoga/        → Individual workout

/ages/toddlers/                         → Age segment hub
/ages/kids/dance-workouts/              → Age + category intersection

/challenges/7-day-family-fitness/       → Challenge program
/guides/how-to-start-family-workouts/   → Evergreen guide

/es/entrenamientos/baile/               → Spanish equivalent
/pt/treinos/danca/                      → Portuguese equivalent
```

#### Title Tag Templates
```
Homepage:
Family Workouts: Free Exercise Videos for All Ages | FamilyWorkouts.com

Category:
{Category} Workouts for Families | Free {Category} Videos | FamilyWorkouts

Individual Workout:
{Workout Title} | {Duration} Min Family {Category} Workout | Free Video

Age Segment:
{Age Group} Workouts | Exercise Videos for {Age Description} | FamilyWorkouts

Challenge:
{Challenge Name} | Free {Duration} Family Fitness Challenge | FamilyWorkouts

Localized:
{Translated Title} | {Translated Tagline} | FamilyWorkouts.com
```

#### Meta Description Templates
```
Homepage (155 chars):
Free family workout videos for all ages. Dance, yoga, HIIT & more. 
No equipment needed. Exercise together—toddlers to grandparents! 🏃‍♀️👨‍👩‍👧‍👦

Category (155 chars):
Free {category} workouts for the whole family. {X}+ videos for kids, 
parents & grandparents. No equipment. Start your family fitness journey today!

Individual Workout (155 chars):
{Workout title} - A {duration}-minute {category} workout perfect for 
{age groups}. Free video, no equipment needed. Get your family moving! ▶️
```

#### Structured Data (JSON-LD)

```json
// Organization Schema (site-wide)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FamilyWorkouts",
  "url": "https://familyworkouts.com",
  "logo": "https://familyworkouts.com/images/logo.png",
  "sameAs": [
    "https://youtube.com/@familyworkouts",
    "https://instagram.com/familyworkouts",
    "https://tiktok.com/@familyworkouts"
  ],
  "description": "Free family fitness platform with workout videos for all ages"
}

// VideoObject Schema (each workout)
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Family Dance Party - 15 Minute Workout",
  "description": "Get the whole family moving with this fun dance workout...",
  "thumbnailUrl": "https://familyworkouts.com/images/workouts/dance-party.jpg",
  "uploadDate": "2025-01-15",
  "duration": "PT15M",
  "contentUrl": "https://youtube.com/watch?v=...",
  "embedUrl": "https://youtube.com/embed/...",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/WatchAction",
    "userInteractionCount": 150000
  }
}

// HowTo Schema (workout guides)
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Start Family Workouts",
  "description": "A step-by-step guide to beginning your family fitness journey",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose age-appropriate activities",
      "text": "Select workouts that work for your youngest family member..."
    }
  ]
}

// FAQPage Schema (FAQ sections)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age can kids start working out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Children can start structured physical activity as early as..."
      }
    }
  ]
}

// BreadcrumbList Schema (all pages)
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://familyworkouts.com"},
    {"@type": "ListItem", "position": 2, "name": "Workouts", "item": "https://familyworkouts.com/workouts/"},
    {"@type": "ListItem", "position": 3, "name": "Dance", "item": "https://familyworkouts.com/workouts/dance/"}
  ]
}
```

### Answer Engine Optimization (AEO)

#### Featured Snippet Targeting

```markdown
## Question-Based H2s (triggers featured snippets)

### What is a family workout?
A family workout is a physical activity session designed for multiple 
family members of different ages to exercise together. These workouts 
include modifications so toddlers, kids, teens, parents, and grandparents 
can all participate at appropriate intensity levels.

### How long should a family workout be?
The ideal family workout length depends on your youngest participant:
- **Toddlers (1-3):** 10-15 minutes with frequent breaks
- **Preschoolers (3-5):** 15-20 minutes
- **School-age kids (5-12):** 20-30 minutes  
- **Teens and adults:** 30-45 minutes

### What equipment do you need for family workouts?
Most family workouts require no equipment at all. For variety, you can add:
- Resistance bands (light)
- Yoga mats
- Small hand weights (1-3 lbs)
- Jump ropes
- Hula hoops
```

#### People Also Ask (PAA) Content Strategy

```
Primary PAA Clusters to Target:

CLUSTER: "family workout"
├── What is a good family workout?
├── How do you do a family workout?
├── What are fun exercise activities for families?
├── How can I exercise with my kids?
└── What is the best workout for parents?

CLUSTER: "exercise with kids"
├── How can I make exercise fun for kids?
├── What exercises can a 5 year old do?
├── How long should kids exercise per day?
├── What is the best exercise for a child?
└── Can kids do HIIT workouts?

CLUSTER: "workout videos for kids"
├── Are workout videos good for kids?
├── What is the best free workout app for kids?
├── How do I get my child interested in fitness?
└── What age can kids start working out?

→ Create dedicated content for each question
→ Structure answers in 40-60 word direct response format
→ Follow with expanded detail
→ Include relevant internal links
```

#### Voice Search Optimization

```
Voice Query Patterns to Target:

"Hey Google, find me a family workout video"
"Alexa, what's a good workout I can do with my kids"
"Siri, how do I exercise with a toddler"

Optimization Tactics:
1. Natural language in H1s and intros
2. Conversational meta descriptions  
3. FAQ schema on all relevant pages
4. Speakable schema for key content
5. Local language variations (multilingual)
```

### Technical SEO

#### Core Web Vitals Optimization

```javascript
// Largest Contentful Paint (LCP) < 1.5s
- Preload hero images: <link rel="preload" as="image" href="...">
- Use next-gen formats: WebP with AVIF fallback
- Implement responsive images with srcset
- Lazy load below-fold images
- Inline critical CSS

// First Input Delay (FID) < 50ms  
- Defer non-critical JavaScript
- Use web workers for heavy computation
- Implement code splitting
- Minimize main thread work

// Cumulative Layout Shift (CLS) < 0.05
- Set explicit dimensions on images/videos
- Reserve space for dynamic content
- Avoid inserting content above viewport
- Use CSS aspect-ratio for embeds
```

#### XML Sitemap Strategy

```xml
<!-- sitemap-index.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://familyworkouts.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://familyworkouts.com/sitemap-workouts-en.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://familyworkouts.com/sitemap-workouts-es.xml</loc>
  </sitemap>
  <!-- Additional language sitemaps -->
  <sitemap>
    <loc>https://familyworkouts.com/sitemap-videos.xml</loc>
  </sitemap>
</sitemapindex>

<!-- Video sitemap for YouTube embeds -->
<url>
  <loc>https://familyworkouts.com/workouts/dance/family-dance-party/</loc>
  <video:video>
    <video:thumbnail_loc>...</video:thumbnail_loc>
    <video:title>Family Dance Party Workout</video:title>
    <video:description>...</video:description>
    <video:content_loc>https://youtube.com/watch?v=...</video:content_loc>
    <video:duration>900</video:duration>
    <video:family_friendly>yes</video:family_friendly>
  </video:video>
</url>
```

#### Hreflang Implementation

```html
<!-- On English page -->
<link rel="alternate" hreflang="en" href="https://familyworkouts.com/workouts/dance/" />
<link rel="alternate" hreflang="es" href="https://familyworkouts.com/es/entrenamientos/baile/" />
<link rel="alternate" hreflang="pt" href="https://familyworkouts.com/pt/treinos/danca/" />
<link rel="alternate" hreflang="hi" href="https://familyworkouts.com/hi/workouts/dance/" />
<link rel="alternate" hreflang="ar" href="https://familyworkouts.com/ar/workouts/dance/" />
<link rel="alternate" hreflang="zh" href="https://familyworkouts.com/zh/workouts/dance/" />
<link rel="alternate" hreflang="fr" href="https://familyworkouts.com/fr/entrainements/danse/" />
<link rel="alternate" hreflang="x-default" href="https://familyworkouts.com/workouts/dance/" />
```

#### robots.txt

```
User-agent: *
Allow: /

# Prevent crawling of utility pages
Disallow: /api/
Disallow: /_astro/
Disallow: /404

# Sitemap location
Sitemap: https://familyworkouts.com/sitemap-index.xml

# Crawl-delay for politeness (optional)
Crawl-delay: 1
```

---

## 🎮 Fun & Engagement Features

### Gamification System

#### Achievement Badges
```
🌟 First Steps          — Complete your first workout
🔥 Week Warrior         — 7 workouts in 7 days
👨‍👩‍👧‍👦 Family Team         — Complete a workout with 3+ family members
🌈 Rainbow Mover        — Try all 7 workout categories
🌍 World Traveler       — Complete workouts in 3 different languages
💪 Consistency King     — 30-day streak
🎯 Challenge Champion   — Complete a multi-day challenge
⭐ Super Star           — 100 total workouts

Storage: LocalStorage (no account required)
Display: Badge collection page + achievement popups
```

#### Streak System
```javascript
// Streak tracking (localStorage-based)
{
  "currentStreak": 7,
  "longestStreak": 14,
  "lastWorkoutDate": "2025-01-15",
  "totalWorkouts": 42,
  "favoriteCategory": "dance",
  "familyMembers": ["Mom", "Dad", "Emma", "Lucas"],
  "badges": ["first-steps", "week-warrior", "family-team"]
}

// Visual feedback
- Flame icon with streak count in header
- Streak milestone celebrations (7, 14, 30, 60, 90, 365)
- "Don't break your streak!" reminder on day 2+
```

#### Family Challenges
```
Weekly Challenge Examples:
├── "Dance Week" — Complete 5 dance workouts
├── "Outdoor Adventure" — 3 outdoor activities  
├── "Yoga Journey" — Try 7 different yoga poses
├── "Sports Sampler" — One workout from each sport
└── "No-Equipment Week" — Bodyweight only

Seasonal Challenges:
├── "Summer Shape-Up" — 30-day progressive program
├── "Holiday Hustle" — Stay active during holidays
├── "Back to School Boost" — Morning energy routines
└── "Spring into Fitness" — Outdoor transition program
```

### Interactive Elements

#### Workout Timer (Astro Island)
```typescript
// Interactive timer component (hydrates on visible)
<WorkoutTimer 
  client:visible
  workDuration={45}
  restDuration={15}
  rounds={8}
  sounds={true}
/>

Features:
- Visual countdown with progress ring
- Audio cues (optional, respect preferences)
- Pause/resume functionality
- Skip round option
- Celebration animation on completion
```

#### Confetti Celebrations
```typescript
// Trigger on workout completion
import confetti from 'canvas-confetti';

const celebrateCompletion = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FFD93D', '#FF6B6B', '#4ECDC4', '#9B59B6']
  });
};

// Trigger points:
// - Workout completion
// - Badge earned
// - Streak milestone
// - Challenge completion
```

#### Family Avatar Creator
```
Simple character builder:
├── Body type (4 options)
├── Skin tone (8 options)
├── Hair style (12 options)
├── Outfit color (8 options)
└── Accessories (optional)

Use cases:
- Family member identification
- Progress tracking per person
- Personalized workout cards
- Achievement displays
```

### Micro-Interactions

```css
/* Button hover/tap feedback */
.btn-primary {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}
.btn-primary:active {
  transform: translateY(0);
}

/* Card tap feedback */
.workout-card {
  transition: transform 0.2s ease;
}
.workout-card:active {
  transform: scale(0.98);
}

/* Loading skeletons */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Progress celebrations */
@keyframes pulse-success {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

---

## 🌍 Internationalization (i18n)

### Language Support

| Language | Code | Direction | Font | Priority |
|----------|------|-----------|------|----------|
| English | `en` | LTR | Inter | Launch |
| Spanish | `es` | LTR | Inter | Launch |
| Portuguese (BR) | `pt` | LTR | Inter | Phase 2 |
| Hindi | `hi` | LTR | Noto Sans Devanagari | Phase 2 |
| Arabic | `ar` | **RTL** | Noto Sans Arabic | Phase 3 |
| Mandarin | `zh` | LTR | Noto Sans SC | Phase 3 |
| French | `fr` | LTR | Inter | Phase 3 |

### Astro i18n Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'hi', 'ar', 'zh', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

### Translation File Structure

```json
// src/i18n/en.json
{
  "nav": {
    "home": "Home",
    "workouts": "Workouts",
    "challenges": "Challenges",
    "guides": "Guides",
    "about": "About"
  },
  "home": {
    "hero_title": "Free Family Workouts",
    "hero_subtitle": "Exercise together — toddlers to grandparents",
    "cta_start": "Start Your First Workout",
    "cta_browse": "Browse All Workouts"
  },
  "workout": {
    "duration": "Duration",
    "difficulty": "Difficulty",
    "ages": "Ages",
    "equipment": "Equipment",
    "none_needed": "None needed",
    "start_workout": "Start Workout",
    "similar_workouts": "Similar Workouts"
  },
  "difficulty": {
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced"
  },
  "ages": {
    "all": "All Ages",
    "toddlers": "Toddlers (1-3)",
    "preschool": "Preschool (3-5)",
    "kids": "Kids (5-12)",
    "teens": "Teens (13-17)",
    "adults": "Adults",
    "seniors": "Seniors (60+)"
  },
  "categories": {
    "dance": "Dance",
    "yoga": "Yoga",
    "hiit": "HIIT",
    "strength": "Strength",
    "sports": "Sports",
    "outdoor": "Outdoor",
    "adaptive": "Adaptive"
  },
  "gamification": {
    "streak": "Day Streak",
    "workouts_completed": "Workouts Completed",
    "badges_earned": "Badges Earned",
    "keep_going": "Keep going!"
  }
}
```

### RTL Support (Arabic)

```css
/* Base RTL styles */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* Flip directional icons */
[dir="rtl"] .icon-arrow-right {
  transform: scaleX(-1);
}

/* Adjust flexbox layouts */
[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

/* Mirror margins/paddings */
[dir="rtl"] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}
```

### Content Localization Strategy

```
Phase 1: Machine Translation + Human Review
├── Use DeepL API for initial translation
├── Native speaker review for accuracy
├── Cultural adaptation (exercise names, references)
└── SEO keyword research per language

Phase 2: Native Content Creation
├── Partner with local fitness creators
├── Region-specific workout types (Capoeira, Bollywood, Tai Chi)
├── Local celebrity/influencer collaborations
└── Regional challenge programs

Content Prioritization:
1. Homepage + navigation (immediate)
2. Top 50 workouts by engagement (week 1-2)
3. Category landing pages (week 2-3)
4. All workout content (ongoing)
5. Guides and educational content (phase 2)
```

---

## 📊 Content Collections

### Workout Content Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const workoutsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Core metadata
    title: z.string(),
    description: z.string().max(160),
    slug: z.string(),
    
    // Video
    youtubeId: z.string(),
    thumbnailUrl: z.string().url(),
    duration: z.number(), // minutes
    
    // Classification
    category: z.enum(['dance', 'yoga', 'hiit', 'strength', 'sports', 'outdoor', 'adaptive']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    
    // Age appropriateness
    ageGroups: z.array(z.enum(['toddlers', 'preschool', 'kids', 'teens', 'adults', 'seniors'])),
    minAge: z.number().optional(),
    
    // Equipment
    equipment: z.array(z.string()).default([]),
    noEquipmentNeeded: z.boolean().default(true),
    
    // Workout details
    calories: z.number().optional(),
    muscleGroups: z.array(z.string()).optional(),
    intensity: z.enum(['low', 'moderate', 'high']),
    
    // Accessibility
    hasModifications: z.boolean().default(true),
    isAdaptive: z.boolean().default(false),
    captionsAvailable: z.boolean().default(true),
    
    // SEO
    keywords: z.array(z.string()),
    
    // Publishing
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().default(false),
    
    // Related content
    relatedWorkouts: z.array(z.string()).optional(),
    partOfChallenge: z.string().optional(),
    
    // Localization
    language: z.string().default('en'),
    originalSlug: z.string().optional(), // for translations
  })
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.enum(['getting-started', 'tips', 'nutrition', 'safety', 'age-specific']),
    readingTime: z.number(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('FamilyWorkouts Team'),
    featured: z.boolean().default(false),
    language: z.string().default('en'),
  })
});

const challengesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    duration: z.number(), // days
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    workouts: z.array(z.object({
      day: z.number(),
      workoutSlug: z.string(),
      restDay: z.boolean().default(false),
    })),
    rewards: z.array(z.string()),
    startDate: z.date().optional(),
    seasonal: z.boolean().default(false),
    language: z.string().default('en'),
  })
});

export const collections = {
  'workouts': workoutsCollection,
  'guides': guidesCollection,
  'challenges': challengesCollection,
};
```

### Example Workout Entry

```markdown
---
# src/content/workouts/en/dance/family-dance-party.md

title: "Family Dance Party"
description: "A 15-minute high-energy dance workout perfect for the whole family. No equipment needed, just enthusiasm!"
slug: "family-dance-party"

youtubeId: "abc123xyz"
thumbnailUrl: "/images/workouts/dance/family-dance-party.jpg"
duration: 15

category: "dance"
difficulty: "beginner"

ageGroups: ["toddlers", "preschool", "kids", "teens", "adults", "seniors"]
minAge: 2

equipment: []
noEquipmentNeeded: true

calories: 150
muscleGroups: ["full-body", "cardio"]
intensity: "moderate"

hasModifications: true
isAdaptive: false
captionsAvailable: true

keywords: 
  - "family dance workout"
  - "dance with kids"
  - "fun family exercise"
  - "dance party at home"

publishDate: 2025-01-15
featured: true

relatedWorkouts:
  - "freeze-dance-game"
  - "kids-disco-workout"
  - "parent-child-dance"

language: "en"
---

## About This Workout

Get the whole family moving with this fun, energetic dance party! Perfect for rainy days, weekend mornings, or anytime you need to burn some energy together.

## What You'll Do

- Warm-up boogie (2 min)
- Follow-along dance moves (10 min)
- Freeze dance game (2 min)
- Cool-down stretches (1 min)

## Modifications

**For toddlers:** Focus on free movement and fun rather than following exact moves
**For seniors:** Chair-based option available, lower impact variations shown
**For limited mobility:** Upper body dance moves demonstrated throughout

## Tips for Success

1. Clear a space in your living room
2. Let everyone dance at their own level
3. Encourage silly moves!
4. Take water breaks as needed
```

---

## ⚡ Performance Optimization

### Image Strategy

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['img.youtube.com'],
    remotePatterns: [{ protocol: 'https' }],
  }
});
```

```astro
<!-- Responsive image component -->
<Picture
  src={workout.thumbnailUrl}
  widths={[320, 640, 960, 1280]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  formats={['avif', 'webp', 'jpg']}
  alt={workout.title}
  loading="lazy"
  decoding="async"
/>
```

### Video Embed Optimization

```typescript
// Lite YouTube Embed - loads YouTube player on click only
// Saves ~500KB initial page weight

// src/components/workout/WorkoutVideo.astro
---
interface Props {
  youtubeId: string;
  title: string;
}

const { youtubeId, title } = Astro.props;
---

<lite-youtube 
  videoid={youtubeId}
  playlabel={`Play: ${title}`}
  style="background-image: url('https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg');"
>
  <button type="button" class="lty-playbtn">
    <span class="sr-only">Play Video: {title}</span>
  </button>
</lite-youtube>

<script>
  import '@justinribeiro/lite-youtube';
</script>
```

### Critical CSS Inlining

```astro
<!-- BaseLayout.astro -->
<head>
  <!-- Inline critical CSS -->
  <style is:inline>
    /* Critical above-fold styles */
    :root {
      --color-primary: #FFD93D;
      --color-secondary: #FF6B6B;
      --font-display: 'Inter var', system-ui, sans-serif;
    }
    
    body {
      margin: 0;
      font-family: var(--font-display);
      -webkit-font-smoothing: antialiased;
    }
    
    .header { /* critical header styles */ }
    .hero { /* critical hero styles */ }
  </style>
  
  <!-- Async load full stylesheet -->
  <link 
    rel="preload" 
    href="/styles/global.css" 
    as="style" 
    onload="this.onload=null;this.rel='stylesheet'"
  >
  <noscript>
    <link rel="stylesheet" href="/styles/global.css">
  </noscript>
</head>
```

### Font Loading Strategy

```css
/* Preload primary font */
<link 
  rel="preload" 
  href="/fonts/inter-var.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>

/* Font-face with font-display: swap */
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  src: url('/fonts/inter-var.woff2') format('woff2');
}

/* System font fallback stack */
body {
  font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
               Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

### Build Optimization

```javascript
// astro.config.mjs
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
    split: true,
    excludeMiddleware: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['@justinribeiro/lite-youtube'],
            'animations': ['canvas-confetti'],
          }
        }
      }
    }
  }
});
```

---

## 🚀 Deployment

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build site
        run: npm run build
        
      - name: Build search index
        run: npm run build:search
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Cloudflare DNS + SSL Setup

```
DNS Records:
├── A     @     185.199.108.153
├── A     @     185.199.109.153
├── A     @     185.199.110.153
├── A     @     185.199.111.153
├── AAAA  @     2606:50c0:8000::153
├── AAAA  @     2606:50c0:8001::153
├── AAAA  @     2606:50c0:8002::153
├── AAAA  @     2606:50c0:8003::153
└── CNAME www   familyworkouts.github.io

Cloudflare Settings:
├── SSL/TLS: Full (Strict)
├── Always Use HTTPS: On
├── Auto Minify: HTML, CSS, JS
├── Brotli: On
├── HTTP/3: On
├── 0-RTT: On
└── Caching Level: Standard
```

### _headers File (Cloudflare Pages)

```
# public/_headers

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.ytimg.com https://img.youtube.com; frame-src https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self' https://plausible.io

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable
```

---

## 📈 Analytics & Monitoring

### Plausible Analytics (Privacy-First)

```html
<!-- BaseLayout.astro -->
<script 
  defer 
  data-domain="familyworkouts.com" 
  src="https://plausible.io/js/script.js"
></script>
```

### Custom Event Tracking

```typescript
// src/scripts/analytics.ts

// Track workout starts
export const trackWorkoutStart = (workout: {
  title: string;
  category: string;
  duration: number;
  language: string;
}) => {
  if (window.plausible) {
    window.plausible('Workout Started', {
      props: {
        title: workout.title,
        category: workout.category,
        duration: workout.duration,
        language: workout.language
      }
    });
  }
};

// Track workout completions
export const trackWorkoutComplete = (workout: {
  title: string;
  category: string;
  duration: number;
}) => {
  if (window.plausible) {
    window.plausible('Workout Completed', {
      props: {
        title: workout.title,
        category: workout.category,
        duration: workout.duration
      }
    });
  }
};

// Track badge earned
export const trackBadgeEarned = (badge: string) => {
  if (window.plausible) {
    window.plausible('Badge Earned', {
      props: { badge }
    });
  }
};

// Track language switch
export const trackLanguageSwitch = (from: string, to: string) => {
  if (window.plausible) {
    window.plausible('Language Switch', {
      props: { from, to }
    });
  }
};
```

### Lighthouse CI

```yaml
# .github/workflows/lighthouse-ci.yml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - run: npm ci
      - run: npm run build
      
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://familyworkouts.com/
            https://familyworkouts.com/workouts/
            https://familyworkouts.com/workouts/dance/family-dance-party/
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

```json
// lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "largest-contentful-paint", "budget": 1500 },
      { "metric": "first-input-delay", "budget": 50 },
      { "metric": "cumulative-layout-shift", "budget": 0.05 },
      { "metric": "interactive", "budget": 2500 }
    ],
    "resourceSizes": [
      { "resourceType": "total", "budget": 500 },
      { "resourceType": "script", "budget": 150 },
      { "resourceType": "stylesheet", "budget": 50 },
      { "resourceType": "image", "budget": 200 }
    ]
  }
]
```

---

## 🧪 Testing

### SEO Testing

```typescript
// tests/seo.test.ts
import { test, expect } from '@playwright/test';

test.describe('SEO Requirements', () => {
  test('homepage has required meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Title
    const title = await page.title();
    expect(title).toContain('Family Workouts');
    expect(title.length).toBeLessThanOrEqual(60);
    
    // Meta description
    const description = await page.$eval(
      'meta[name="description"]',
      el => el.getAttribute('content')
    );
    expect(description).toBeTruthy();
    expect(description!.length).toBeLessThanOrEqual(160);
    
    // Canonical URL
    const canonical = await page.$eval(
      'link[rel="canonical"]',
      el => el.getAttribute('href')
    );
    expect(canonical).toBe('https://familyworkouts.com/');
    
    // Open Graph tags
    const ogTitle = await page.$eval(
      'meta[property="og:title"]',
      el => el.getAttribute('content')
    );
    expect(ogTitle).toBeTruthy();
    
    // Structured data
    const jsonLd = await page.$eval(
      'script[type="application/ld+json"]',
      el => el.textContent
    );
    expect(jsonLd).toBeTruthy();
    const schema = JSON.parse(jsonLd!);
    expect(schema['@type']).toBe('Organization');
  });
  
  test('workout pages have VideoObject schema', async ({ page }) => {
    await page.goto('/workouts/dance/family-dance-party/');
    
    const jsonLdElements = await page.$$('script[type="application/ld+json"]');
    let hasVideoSchema = false;
    
    for (const el of jsonLdElements) {
      const content = await el.textContent();
      const schema = JSON.parse(content!);
      if (schema['@type'] === 'VideoObject') {
        hasVideoSchema = true;
        expect(schema.name).toBeTruthy();
        expect(schema.thumbnailUrl).toBeTruthy();
        expect(schema.duration).toBeTruthy();
      }
    }
    
    expect(hasVideoSchema).toBe(true);
  });
  
  test('all pages have hreflang tags', async ({ page }) => {
    await page.goto('/workouts/dance/');
    
    const hreflangTags = await page.$$('link[rel="alternate"][hreflang]');
    expect(hreflangTags.length).toBeGreaterThanOrEqual(2);
    
    const xDefault = await page.$('link[hreflang="x-default"]');
    expect(xDefault).toBeTruthy();
  });
});
```

### Accessibility Testing

```typescript
// tests/accessibility.test.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage meets WCAG 2.1 AA', async ({ page }) => {
    await page.goto('/');
    
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(results.violations).toEqual([]);
  });
  
  test('workout page meets WCAG 2.1 AA', async ({ page }) => {
    await page.goto('/workouts/dance/family-dance-party/');
    
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(results.violations).toEqual([]);
  });
  
  test('mobile navigation is keyboard accessible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Tab to menu button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Open menu with Enter
    await page.keyboard.press('Enter');
    
    // Verify menu is open
    const nav = await page.$('[data-mobile-nav]');
    expect(await nav?.isVisible()).toBe(true);
    
    // Close with Escape
    await page.keyboard.press('Escape');
    expect(await nav?.isVisible()).toBe(false);
  });
});
```

### Performance Testing

```typescript
// tests/performance.test.ts
import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('homepage loads under budget', async ({ page }) => {
    await page.goto('/');
    
    const timing = await page.evaluate(() => ({
      lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
      fid: performance.getEntriesByType('first-input')[0]?.processingStart,
      cls: performance.getEntriesByType('layout-shift')
        .filter((entry: any) => !entry.hadRecentInput)
        .reduce((sum: number, entry: any) => sum + entry.value, 0),
    }));
    
    expect(timing.lcp).toBeLessThan(1500);
    expect(timing.cls).toBeLessThan(0.05);
  });
  
  test('no layout shifts on workout cards', async ({ page }) => {
    await page.goto('/workouts/');
    
    // Wait for all images to load
    await page.waitForLoadState('networkidle');
    
    const cls = await page.evaluate(() => {
      return performance.getEntriesByType('layout-shift')
        .filter((entry: any) => !entry.hadRecentInput)
        .reduce((sum: number, entry: any) => sum + entry.value, 0);
    });
    
    expect(cls).toBeLessThan(0.05);
  });
});
```

---

## 📋 Development Workflow

### Local Development

```bash
# Clone repository
git clone https://github.com/familyworkouts/familyworkouts.com.git
cd familyworkouts.com

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run linting
npm run lint

# Generate sitemap
npm run build:sitemap

# Build search index
npm run build:search
```

### Git Workflow

```
Branch Naming:
├── feature/[feature-name]     — New features
├── content/[content-type]     — Content additions
├── fix/[bug-description]      — Bug fixes
├── i18n/[language-code]       — Translation work
└── perf/[optimization]        — Performance improvements

Commit Convention:
├── feat: Add new workout category
├── content: Add 10 dance workouts
├── fix: Resolve mobile nav issue
├── i18n: Add Spanish translations
├── perf: Optimize image loading
├── docs: Update README
└── chore: Update dependencies
```

### Content Workflow

```
Adding New Workout:
1. Create markdown file in src/content/workouts/[lang]/[category]/
2. Fill in all frontmatter fields
3. Add workout description and tips
4. Upload thumbnail to public/images/workouts/
5. Create PR with preview link
6. Review SEO metadata
7. Merge and deploy

Translation Workflow:
1. Export English content as base
2. Machine translate with DeepL
3. Native speaker review
4. Cultural adaptation review
5. SEO keyword localization
6. Create PR for review
7. Merge and deploy
```

---

## 📞 Support & Contact

### Contributing
We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Reporting Issues
- **Bugs**: Open a GitHub issue with reproduction steps
- **Content errors**: Use the "Report Issue" link on any page
- **Feature requests**: Open a GitHub discussion

### Contact
- **Email**: hello@familyworkouts.com
- **Twitter/X**: [@familyworkouts](https://twitter.com/familyworkouts)
- **Instagram**: [@familyworkouts](https://instagram.com/familyworkouts)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  <strong>Made with ❤️ for families everywhere</strong><br>
  <em>Get moving together!</em>
</p>
