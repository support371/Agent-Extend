# TerraLegit Design Guidelines: Premium Institutional Platform

## Design Approach

**Enterprise Design System with Premium Refinement**
Drawing from Carbon Design and Gov.uk patterns, enhanced with modern premium aesthetics. Every element reinforces institutional credibility, regulatory compliance, and professional authority. Visual language balances warmth (forest greens) with precision (slate grays) to humanize complex regulatory processes.

---

## Color Palette

**Light Mode**:
- Primary: Deep Forest Green (#1B4332, #2D6A4F)
- Neutrals: Slate Gray scale (#1E293B, #475569, #64748B, #94A3B8)
- Backgrounds: Clean White (#FFFFFF, #F8FAFC)
- Accent: Muted Teal (#14B8A6) for CTAs
- Status: Success Green (#059669), Warning Amber (#D97706), Error Red (#DC2626)

**Dark Mode**:
- Primary: Sage Green (#52B788, #74C69D)
- Neutrals: Inverted slate (#0F172A background, #E2E8F0 text)
- Backgrounds: Deep charcoal (#0F172A, #1E293B)
- Maintain green accents with adjusted luminance for WCAG compliance

---

## Typography

**Font**: Inter (Google Fonts)
- Display (Headings): 600-700 weight, tight leading
- Body: 400-500 weight, relaxed leading (1.7)
- UI Elements: 500-600 weight
- Legal/Fine Print: 400 weight, size-reduced

**Scale**:
- Hero: text-5xl to text-6xl
- Page Titles: text-4xl
- Section Headers: text-3xl
- Subsections: text-2xl
- Card Titles: text-xl
- Body: text-base
- Metadata/Labels: text-sm
- Legal: text-xs to text-sm

---

## Layout & Spacing

**Primitives**: Tailwind units 2, 4, 6, 8, 12, 16, 20, 24, 32

**Containers**:
- Wide sections: max-w-7xl
- Standard content: max-w-6xl
- Forms: max-w-2xl
- Text blocks: max-w-prose

**Section Rhythm**:
- Desktop: py-24 to py-32
- Tablet: py-16 to py-20
- Mobile: py-12

**Elevation System**:
- Level 1: shadow-sm (subtle cards)
- Level 2: shadow-md (interactive elements)
- Level 3: shadow-lg (modals, dropdowns)
- Level 4: shadow-2xl (critical alerts)

---

## Component Library

### Navigation

**Top Utility Bar** (h-10):
- Compact strip with region/language selectors
- Dark mode toggle
- Text size: text-sm

**Main Header** (h-20):
- Sticky with backdrop blur
- Logo left, horizontal nav center, account/CTAs right
- "Verify Account" and "Request Quote" as elevated buttons
- Badge indicators for verified users

### Hero Section

**Structure**: Full-width, min-h-[700px]
- **Image**: Professional institutional photography showing modern animal care facilities, veterinary documentation review, or secure transport preparation—no cute animal photos
- Image treatment: Subtle gradient overlay (forest green to transparent) for text legibility
- Two-column content overlay: Headline + compliance statement left, stats/trust indicators right
- Three primary CTAs with blurred button backgrounds (rgba backdrop-blur-md): "Explore Species" | "Verify Eligibility" | "Get Shipping Quote"
- Floating trust badges: "500+ Verified Sellers" | "99.8% Compliance Rate" | "50+ Countries"

### Cards & Panels

**Elevated Card Pattern**:
- Rounded corners (rounded-xl)
- Subtle shadow (shadow-md)
- Hover lift effect (hover:shadow-lg transition)
- Padding: p-6 to p-8
- Border: 1px subtle accent in dark mode

**Species Cards** (h-auto, min-h-[400px]):
- 3:4 ratio image top
- Care level badge (top-right overlay, blurred background)
- Title + scientific name + origin region
- Compliance indicator bar
- "View Requirements" button (outline style)

**Listing Cards** (Marketplace):
- Enhanced with seller verification badge (top-left)
- Health documentation status timeline
- Origin flag icon + country
- "Initiate Eligibility Check" primary button

### Forms & Inputs

**Input Fields**:
- Generous height (h-12)
- Border-2 with focus ring
- Label above, helper text below
- Padding: px-4 py-3

**Multi-Step Workflows**:
- Progress stepper at top (numbered circles, connecting lines)
- Step indicators: Completed (checkmark), Active (pulsing), Upcoming (outlined)
- Section spacing: space-y-12
- Document upload zones: Dashed border, drag-hover state, file previews

### Trust Components

**Verification Badges**:
- Icon + text in bordered pill
- Sizes: Small (inline), Medium (profiles), Large (confirmations)
- Subtle glow effect in dark mode

**Compliance Banner**:
- Full-width sticky below header
- Icon left, message center, dismiss right
- Background: Tinted primary color

**Status Timeline**:
- Horizontal stepper (desktop), vertical (mobile)
- Connected dots with labels
- Current step highlighted with animated pulse

---

## Page Structures

### Home (8 Sections)

1. **Hero** (as described above)
2. **3-Pillar Value Grid** (grid-cols-3): "Regulated Marketplace" | "Verified Welfare" | "Global Compliance"
3. **Trust Metrics Strip** (4-column): Active sellers, species covered, welfare checkpoints, shipment success rate
4. **Featured Categories** (grid-cols-4, image cards with category overlays)
5. **Process Timeline** (9-step horizontal flow with expandable details)
6. **Institutional Solutions** (2-column: content left, visual checklist right)
7. **Social Proof** (grid-cols-3 testimonial cards from institutions)
8. **Comprehensive Footer** (4-column: About, Services, Legal, Support + newsletter signup)

### Explore Animals

- Sticky filter sidebar (w-72, shadow-lg)
- Grid-cols-3 species cards
- Search bar with autocomplete dropdown
- Filter chips showing active selections

### Marketplace (Gated)

- Persistent compliance alert banner
- Enhanced filters with destination country selector
- Grid-cols-3 listing cards with rich metadata
- "Available to You" toggle filter

### Shipping Portal

- Dashboard table with expandable rows
- Route map visualization per shipment
- Document checklist with upload progress
- Welfare checkpoint timeline

---

## Icons & Images

**Icons**: Heroicons (outline primary, solid for status)
- Navigation: w-5 h-5
- Hero/Feature: w-8 h-8
- Status indicators: w-4 h-4

**Images**:
- Hero: Wide institutional facility imagery
- Category cards: Species habitat/care environments
- Seller profiles: Facility photos, certification displays
- Process sections: Documentation, transport vehicles, veterinary care

---

## Interactions

- Minimal animations—trust through stability
- Loading: Skeleton screens
- Empty states: Actionable guidance
- Success: Modal confirmations with next steps
- Transitions: 200ms ease-in-out

---

## Dark Mode

- Automatically adjust all components
- Increase elevation shadows for depth
- Add subtle borders (1px) to cards
- Glow effects on interactive elements
- Maintain WCAG AAA contrast ratios
- Sage green primary maintains warmth