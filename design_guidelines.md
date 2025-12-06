# Design Guidelines: Regulated Animal Acquisition & Transport Platform

## Design Approach

**System-Based with Institutional Authority**
This platform draws from enterprise design systems (Carbon Design, Gov.uk patterns) to establish institutional credibility while maintaining accessibility. The visual language prioritizes trust, transparency, and regulatory compliance over consumer-facing polish.

**Key Principle**: Every interaction should reinforce legitimacy and careful process—this is not impulse commerce.

---

## Typography

**Font Stack**:
- Primary: Inter (CDN: Google Fonts) - clean, professional, excellent at small sizes
- Headings: 600-700 weight
- Body: 400-500 weight
- Legal/Disclaimers: 400 weight, slightly reduced size

**Hierarchy**:
- Page Titles: text-4xl to text-5xl, font-semibold
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-lg to text-xl, font-medium
- Body Text: text-base, leading-relaxed for readability
- Labels/Metadata: text-sm, font-medium
- Legal Notices: text-sm, leading-snug

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy**:
- Full-width sections with inner max-w-7xl for wide layouts
- Content sections: max-w-6xl for balanced reading
- Form containers: max-w-2xl for focused input
- Text content: max-w-prose for compliance/legal copy

**Section Padding**:
- Desktop: py-20 to py-32
- Tablet: py-16 to py-20
- Mobile: py-12 to py-16

---

## Component Library

### Navigation & Headers

**Top Utility Bar**:
- Compact (h-10) with language/region selectors
- Flex layout with justify-between
- Small text (text-sm)

**Main Navigation**:
- Sticky header with substantial height (h-20)
- Horizontal menu with clear separation between public/authenticated sections
- "Verify Account" and "Request Quote" as distinct CTA buttons
- Badge indicators for admin/seller roles

### Hero Section

**Structure**: Full-width hero with institutional imagery
- Height: min-h-[600px] to min-h-[700px]
- Two-column layout (text left, supporting visual right) for authority
- Headline + substantial subheadline + disclaimer text
- Three primary CTAs in horizontal arrangement: "Explore Animals" | "Verify Eligibility" | "Request Shipping Quote"
- Blurred background treatment behind text/CTAs for legibility

**Image**: Use professional imagery showing animal care facilities, veterinary documentation review, or transport preparation—NOT cute animal photos. Convey professionalism and care standards.

### Trust & Compliance Components

**Verification Badges**:
- Border-based design with icon + label
- Sizes: Small (for cards), Medium (for profiles), Large (for verification confirmations)
- Badge types: "Verified Seller", "Health Docs Complete", "Region Eligible", "Institutional Account"

**Compliance Banners**:
- Full-width alert-style components with icon
- Persistent positioning below main nav on marketplace pages
- Clear messaging: "All transactions require verification and legal eligibility"

**Document Status Indicators**:
- Timeline-style stepper component
- States: Draft → Submitted → Under Review → Approved/Needs Action
- Progress bar with labeled milestones

### Content Cards

**Species/Animal Cards** (Explore page):
- Consistent card height (h-96)
- Image top (2:3 ratio), content below
- Care level badge overlay (top-right of image)
- Species name (text-xl, font-semibold)
- "Eligibility varies by region" notice (text-sm, italic)
- "Login required to view acquisition pathways" footer

**Listing Cards** (Marketplace):
- Similar structure with additional compliance data
- Seller verification badge
- Origin country flag/label
- Health documentation status bar
- "Initiate Eligibility Check" button (not "Buy")

### Forms & Input

**Multi-Step Workflows**:
- Progress indicator at top showing current step (e.g., "Step 2 of 5: Upload Documents")
- Clear section headers within each step
- Generous spacing (space-y-8) between form groups
- Helper text below inputs for guidance
- Disabled state with explanation for gated fields

**Document Upload Center**:
- Drag-and-drop zone (border-2, dashed, hover states)
- File type requirements list
- Upload queue with status indicators
- Thumbnail previews for uploaded docs

### Data Display

**Information Panels**:
- Border-based cards with subtle shadow
- Icon + heading + description layout
- Use for "3-Pillar Panel" on homepage and feature explanations

**Status Tables**:
- Zebra striping for readability
- Sortable column headers
- Status badge column with color-coded indicators (designed by system, not specified here)
- Action column (right-aligned)

### Timeline & Process Flows

**How It Works Timeline**:
- Horizontal stepped layout (desktop), vertical (mobile)
- 9 distinct steps with numbering
- Expandable panels for detailed explanations
- Connecting lines between steps
- Icons for each milestone

---

## Page-Specific Layouts

### Home Page

**Section Flow** (8 sections):
1. Hero (described above)
2. 3-Pillar Panel (grid-cols-1 md:grid-cols-3, equal height cards)
3. Trust & Governance Strip (4-column stat grid showing verified sellers count, welfare checkpoints, compliant shipments, partner countries)
4. Featured Categories (grid-cols-2 lg:grid-cols-4 image cards with category labels)
5. How It Works (timeline preview with "Learn More" link)
6. Institutional Solutions Teaser (2-column: text left, visual/list right)
7. Testimonials (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, quotes from institutions/farms)
8. Footer with comprehensive legal/policy hub

### Explore Animals (Public)

- Sticky filter sidebar (left, w-64) with category checkboxes, region selector, care level filters
- Main content area (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Search bar above grid with autocomplete
- Pagination at bottom

### Marketplace (Gated)

- Persistent compliance banner at top
- Enhanced filter panel with destination country selector (auto-filters ineligible species)
- Listing grid similar to Explore but with verification and documentation indicators
- "Eligibility" filter showing only available-to-user species

### Shipping Portal

- Dashboard view with active shipments table
- "Create New Shipment" prominent CTA
- Each shipment row expandable to show:
  - Route map visualization
  - Document checklist with upload status
  - Welfare checkpoint timeline
  - Delivery confirmation section

### Welfare & Standards

- Single-column, text-heavy layout (max-w-4xl)
- Section anchors in sticky sidebar for navigation
- Downloadable PDF links for detailed protocols
- Partner network logo grid

### Coverage

- Interactive element: Country selector dropdown or map with clickable regions
- Selected country shows: Allowed categories list, Restricted categories list, Required documentation table
- "Species eligibility differs by destination" persistent notice

### Institutional Services

- Hero with institutional focus imagery
- Solutions grid (grid-cols-1 md:grid-cols-2): Zoos & Conservation | Research Facilities | Farms & Ranches | Government Programs
- Benefits comparison table
- Inquiry form (2-column: form left, contact info/response time right)

---

## Icons

**Library**: Heroicons (via CDN)
- Use outline style for navigation and secondary actions
- Use solid style for status indicators and primary CTAs
- Standard sizing: w-5 h-5 for inline, w-6 h-6 for standalone, w-8 h-8 for hero sections

---

## Interaction Patterns

- Minimal animations—trust comes from stability
- Loading states: Skeleton screens for data-heavy views
- Empty states: Helpful guidance, not playful illustrations
- Error states: Clear, actionable language with retry options
- Success confirmations: Modal overlays with next-step guidance

---

## Accessibility & Compliance UI

- All form fields with visible labels
- Required field indicators consistently placed
- High-contrast text on all backgrounds
- Focus indicators on all interactive elements
- Disclaimer text placed prominently near related CTAs, never buried in footers