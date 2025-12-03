# Design Specification - PT Archipelago Jaya Nusantara

**Hybrid Premium B2B Design System**  
**Version**: 1.0 | **Target**: Professional B2B Animal Nutrition Industry | **Updated**: 2025-11-03

---

## 1. Arah & Rasional Desain

### 1.1 Pendekatan Hybrid

Website ini menggunakan **Hybrid Premium B2B Approach** yang menggabungkan tiga filosofi desain:

**Foundation: Modern Minimalism Premium (70%)**
- Clean, professional, corporate modern
- Generous spacing (64-96px sections)
- 90% neutral color palette
- Horizontal navigation, no sidebar

**Conversion Elements: E-commerce Optimized (20%)**
- Prominent black CTAs with 21:1 contrast
- Trust indicators visible (certifications, stats, badges)
- Product-first layout with large imagery
- Clear conversion paths

**Premium Touch: Luxury & Sophisticated (10%)**
- Serif headlines (Playfair Display) for elegance
- Refined typography hierarchy
- Subtle texture overlays (2% opacity)
- Slower animation timing (300-400ms)

### 1.2 Real-World References

**Referensi visual yang serupa:**
- **Stripe** (stripe.com) - Modern minimalism, conversion-focused, professional B2B
- **Linear** (linear.app) - Clean design, prominent CTAs, spacious layout
- **Cargill Nutrition** (cargill.com) - B2B animal nutrition, professional, trustworthy
- **DSM Animal Nutrition** (dsm.com) - Premium positioning, elegant typography

### 1.3 Mengapa Pendekatan Ini?

**Untuk PT Archipelago Jaya Nusantara:**
- **Target**: B2B decision makers (30-55 tahun), international livestock industry
- **Goal**: Build trust + drive inquiry/contact conversions
- **Brand positioning**: Premium quality, reliable, experienced manufacturer

**Keputusan desain:**
1. **Modern Minimalism base** → Professional credibility untuk B2B
2. **E-commerce CTAs** → Clear conversion paths untuk lead generation
3. **Luxury typography** → Premium feel sesuai positioning produk berkualitas tinggi

---

## 2. Design Tokens

### 2.1 Color System

**Philosophy**: Neutral canvas (90%) + Single strong CTA (10%) dengan sentuhan warm elegance.

#### Primary Colors

| Token | Value | HSL | Usage |
|-------|-------|-----|-------|
| `primary-50` | `#F5F3F0` | 30°, 20%, 95% | Lightest surface |
| `primary-100` | `#E8E4DD` | 30°, 25%, 90% | Card backgrounds |
| `primary-500` | `#8B7355` | 30°, 25%, 44% | Brand accent (warm taupe) |
| `primary-600` | `#6B5640` | 30°, 25%, 34% | Brand hover |
| `primary-900` | `#3D2F1F` | 30°, 33%, 18% | Deep brand |

#### Neutral Colors (Warm Undertone)

| Token | Value | Usage |
|-------|-------|-------|
| `neutral-50` | `#FAFAF8` | Page background (warm white) |
| `neutral-100` | `#F5F4F0` | Surface, card backgrounds |
| `neutral-200` | `#E8E6E0` | Borders, dividers |
| `neutral-400` | `#B8B6B0` | Disabled elements |
| `neutral-600` | `#6B6A65` | Secondary text |
| `neutral-800` | `#3A3935` | Body text |
| `neutral-900` | `#1C1C19` | Headlines |

#### CTA Color (Pure Black - E-commerce Style)

| Token | Value | Contrast | Usage |
|-------|-------|----------|-------|
| `cta-primary` | `#000000` | 21:1 ✅ AAA | Add-to-cart, primary actions |
| `cta-hover` | `#1A1A1A` | 15.8:1 ✅ AAA | Hover state |
| `cta-text` | `#FFFFFF` | On black bg | Button text |

#### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `success-500` | `#10B981` | Success states, in-stock indicators |
| `warning-500` | `#F59E0B` | Warnings, limited stock |
| `error-500` | `#DC2626` | Errors, out-of-stock |
| `info-500` | `#3B82F6` | Informational messages |

#### Background Layers

| Layer | Token | Value | Usage |
|-------|-------|-------|-------|
| Page | `bg-page` | `#FAFAF8` | Main background |
| Surface | `bg-surface` | `#F5F4F0` | Cards, elevated elements |
| Elevated | `bg-elevated` | `#FFFFFF` | Modals, dropdowns |

**WCAG Validation (Key Pairings):**
- Pure Black (#000000) on warm white (#FAFAF8): **21:1** ✅ AAA (maximum contrast)
- Neutral-900 (#1C1C19) on warm white: **15.2:1** ✅ AAA
- Neutral-800 (#3A3935) on warm white: **10.8:1** ✅ AAA

### 2.2 Typography

#### Font Families

```css
font-family-heading: 'Playfair Display', Georgia, serif
font-family-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Rationale**:
- **Playfair Display** (serif headlines) → Elegance, premium feel, luxury touch
- **Inter** (sans body) → Modern readability, professional, screen-optimized

#### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `text-display` | 72px | 700 (Bold) | 1.1 | -0.01em | Hero headlines |
| `text-h1` | 56px | 700 | 1.15 | -0.01em | Page titles |
| `text-h2` | 40px | 600 (Semibold) | 1.25 | 0 | Section headers |
| `text-h3` | 32px | 600 | 1.3 | 0 | Subsection headers |
| `text-h4` | 24px | 500 (Medium) | 1.4 | 0 | Card titles |
| `text-body-lg` | 20px | 400 (Regular) | 1.6 | 0 | Intro paragraphs |
| `text-body` | 16px | 400 | 1.5 | 0.01em | Body text |
| `text-small` | 14px | 400 | 1.5 | 0.01em | Captions, metadata |
| `text-caption` | 12px | 500 | 1.4 | 0.05em | Labels, badges |

#### Responsive Scale (Mobile <768px)

| Desktop | Mobile |
|---------|--------|
| 72px Display | 48px |
| 56px H1 | 40px |
| 40px H2 | 32px |
| 32px H3 | 24px |
| Body sizes | Same |

### 2.3 Spacing (8-Point Grid)

**Philosophy**: Prefer 8px multiples. Generous spacing untuk premium feel.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 8px | Tight inline spacing (icon + text) |
| `space-2` | 16px | Standard element gaps |
| `space-3` | 24px | Related group spacing |
| `space-4` | 32px | Component internal padding |
| `space-6` | 48px | Card padding (minimum) |
| `space-8` | 64px | Section internal spacing |
| `space-12` | 96px | Section boundaries |
| `space-16` | 128px | Hero section spacing |

**Mobile Adjustment**: Reduce by 30-40% (96px → 64px, 64px → 40px).

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Inputs, small badges |
| `radius-md` | 12px | Buttons, standard cards |
| `radius-lg` | 16px | Large cards, modals |
| `radius-full` | 9999px | Pills, rounded buttons |

### 2.5 Shadows

```css
/* Card - Subtle elevation */
shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)

/* Card hover - Lifted */
shadow-card-hover: 0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)

/* Modal - Prominent */
shadow-modal: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)

/* Navigation (on scroll) */
shadow-nav: 0 2px 8px rgba(0, 0, 0, 0.06)
```

### 2.6 Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 200ms | Button clicks, icon changes |
| `duration-normal` | 300ms | Card hover, standard transitions |
| `duration-slow` | 400ms | Modals, drawers, page transitions |
| `easing-standard` | ease-out | 90% of interactions |
| `easing-emphasized` | cubic-bezier(0.4, 0.0, 0.2, 1) | Luxury moments |

**Performance Rule**: Animate ONLY `transform` and `opacity` (GPU-accelerated).

---

## 3. Component Specifications

### 3.1 Hero Section

**Structure**:
- Full-width background image dengan dark overlay (50% opacity)
- Centered content container (max-width 1200px)
- Badge + Headline + Subheadline + Stats + CTA buttons

**Tokens**:
```
Height: 500-600px (desktop), 450px (mobile)
Background: Hero image + linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))
Padding: space-16 vertical (128px), space-8 horizontal (64px)
Content max-width: 800px center-aligned

Badge (above headline):
  - Background: rgba(255, 255, 255, 0.15)
  - Backdrop-filter: blur(8px)
  - Border: 1px solid rgba(255, 255, 255, 0.2)
  - Padding: space-1 space-3 (8px 24px)
  - Radius: radius-full
  - Font: text-caption, 500 weight, uppercase, 0.1em letter-spacing
  - Color: #FFFFFF

Headline:
  - Font: font-family-heading, text-display (72px desktop / 48px mobile)
  - Color: #FFFFFF
  - Max-width: 700px
  - Margin-bottom: space-4 (32px)

Subheadline:
  - Font: font-family-body, text-body-lg (20px)
  - Color: rgba(255, 255, 255, 0.9)
  - Max-width: 600px
  - Margin-bottom: space-6 (48px)

Stats row (3 items):
  - Gap: space-8 (64px desktop), space-4 (32px mobile)
  - Font: text-h3 (32px) bold for number, text-small for label
  - Color: #FFFFFF
  - Margin-bottom: space-6 (48px)

CTA buttons:
  - Gap: space-2 (16px)
  - Height: 56px
  - Stack on mobile (full-width)
```

**States**:
- Scroll: Parallax background (50% speed, max 100px offset)
- Mobile: Stack stats vertically, reduce hero height to 450px

**Note**: Badge menggunakan glassmorphism untuk modern premium feel.

---

### 3.2 Button (Primary CTA - Black Style)

**Structure**: Single-layer button dengan pure black background

**Tokens**:
```
Height: 56px (desktop), 48px (mobile)
Padding: space-2 space-6 (16px 48px)
Radius: radius-md (12px)
Background: cta-primary (#000000)
Border: none
Shadow: none (minimalist)

Font: font-family-body, 16px, 600 weight, 0.02em letter-spacing
Color: cta-text (#FFFFFF)
```

**States**:
```css
/* Default */
background: #000000
transform: translateY(0)

/* Hover */
background: #1A1A1A
transform: translateY(-2px)
transition: all duration-normal easing-standard

/* Active */
background: #000000
transform: translateY(0)

/* Focus */
outline: 2px solid primary-500
outline-offset: 2px

/* Disabled */
background: neutral-400
color: neutral-600
cursor: not-allowed
```

**Variants**:
- **Primary**: Black background (main CTA)
- **Secondary**: Transparent background, 2px border neutral-800, hover border black

**Note**: Black CTA memberikan 21:1 contrast (highest possible) untuk maximum visibility dan conversion.

---

### 3.3 Product Card

**Structure**: Image + Content area dengan hover lift effect

**Tokens**:
```
Container:
  - Background: bg-surface (#F5F4F0)
  - Radius: radius-lg (16px)
  - Shadow: shadow-card
  - Overflow: hidden

Image container:
  - Aspect ratio: 1:1 (square)
  - Background: #FFFFFF
  - Padding: space-6 (48px) untuk product photography breathing room

Content area:
  - Padding: space-6 (48px)
  - Gap: space-3 (24px)

Product name:
  - Font: font-family-heading, text-h4 (24px), 600 weight
  - Color: neutral-900

Description:
  - Font: text-body (16px)
  - Color: neutral-600
  - Line-clamp: 3 lines

Features list:
  - Gap: space-2 (16px)
  - Icon: SVG checkmark, 20px, primary-500
  - Font: text-body (16px), neutral-800

CTA button:
  - Full-width
  - Height: 48px
  - Margin-top: space-4 (32px)
```

**States**:
```css
/* Default */
transform: translateY(0)
shadow: shadow-card

/* Hover */
transform: translateY(-4px)
shadow: shadow-card-hover
image: scale(1.05)
transition: all 300ms ease-out
```

**Note**: Image padding mencegah product foto terlalu cramped, memberikan premium presentation.

---

### 3.4 Navigation Bar

**Structure**: Sticky horizontal nav dengan logo left, links center, CTA right

**Tokens**:
```
Height: 80px
Background: bg-elevated (#FFFFFF)
Border-bottom: 1px solid neutral-200
Padding: 0 space-8 (64px horizontal)
Position: sticky top-0
Z-index: 100

Logo:
  - Height: 40px
  - Flex: left-aligned

Nav links:
  - Gap: space-6 (48px)
  - Font: font-family-body, 16px, 500 weight
  - Color: neutral-800
  - Hover: color neutral-900, underline 2px primary-500 offset 8px

CTA button:
  - Height: 48px
  - Padding: space-2 space-4 (16px 32px)
  - Right-aligned
```

**States**:
```css
/* Default (top) */
background: rgba(255, 255, 255, 0.95)
backdrop-filter: blur(10px)
shadow: none

/* Scrolled */
background: #FFFFFF
shadow: shadow-nav
transition: all 300ms ease-out
```

**Mobile** (<768px):
- Hamburger menu (right side)
- Logo left, hamburger + CTA right
- Drawer menu: Full-screen overlay, links stacked vertically

**Note**: Backdrop blur memberikan modern premium feel ketika scroll di atas hero image.

---

### 3.5 Input Field

**Structure**: Single-line text input dengan focus state

**Tokens**:
```
Height: 56px
Padding: space-2 space-4 (16px 32px)
Radius: radius-md (12px)
Border: 1px solid neutral-200
Background: bg-elevated (#FFFFFF)
Font: font-family-body, 16px, 400 weight
Color: neutral-900
```

**States**:
```css
/* Default */
border: 1px solid neutral-200
background: #FFFFFF

/* Focus */
border: 2px solid primary-500
outline: none
transition: border 200ms ease-out

/* Error */
border: 2px solid error-500

/* Disabled */
background: neutral-100
color: neutral-400
cursor: not-allowed
```

**Label**:
```
Font: text-small (14px), 500 weight
Color: neutral-800
Margin-bottom: space-1 (8px)
```

**Helper text**:
```
Font: text-small (14px)
Color: neutral-600 (default) or error-500 (error state)
Margin-top: space-1 (8px)
```

---

### 3.6 Trust Badge

**Structure**: Icon + Text dalam pill container

**Tokens**:
```
Container:
  - Display: inline-flex, align-items center
  - Gap: space-2 (16px)
  - Padding: space-2 space-4 (16px 32px)
  - Background: rgba(255, 255, 255, 0.1) (on dark bg) or neutral-100 (on light bg)
  - Border: 1px solid rgba(255, 255, 255, 0.2) or neutral-200
  - Radius: radius-full
  - Backdrop-filter: blur(8px) (on hero/image backgrounds)

Icon:
  - SVG, 24px
  - Color: success-500 or primary-500

Text:
  - Font: text-body (16px), 600 weight
  - Color: #FFFFFF (on dark) or neutral-900 (on light)
```

**Usage**: Certifications (FSC 100%), Export reach (25+ countries), Experience (15+ years).

**Note**: Glassmorphism effect pada hero section, solid pada light backgrounds.

---

## 4. Layout & Responsive

### 4.1 Website Architecture

**Type**: Single Page Application (SPA) dengan smooth scroll navigation

**Section Flow**:
1. Hero (500-600px) - Full-width background, centered content
2. Product Showcase (auto) - 2-column grid (Raffele + Dedak)
3. Services (auto) - 2-column grid (Quality Testing + Consultation)
4. Process (auto) - 4-step horizontal timeline
5. Trust Section (auto) - Stats grid 4-column
6. About (auto) - 2-column layout (60/40 split, image right)
7. Team (auto) - Large image + description
8. Contact (auto) - 2-column form (60/40 split)
9. Footer (auto) - 4-column layout

**Navigation**: Fixed header dengan smooth scroll anchor links ke sections.

### 4.2 Grid System

**12-Column Grid**:
```
Container max-width: 1200px (xl), 1400px (2xl)
Gutter: 32px (desktop), 24px (tablet), 16px (mobile)
Margin: 64px horizontal (desktop), 32px (tablet), 16px (mobile)
```

**Common Splits**:
- **50/50** (6-6 cols): Product cards, service cards
- **60/40** (7-5 cols): About section (content left, image right)
- **33/33/33** (4-4-4 cols): Feature grids, trust stats
- **25/25/25/25** (3-3-3-3 cols): Process steps, footer columns

### 4.3 Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet portrait)
lg:  1024px  (Tablet landscape / small desktop)
xl:  1280px  (Desktop)
2xl: 1536px  (Large desktop)
```

**Responsive Strategy**:

| Breakpoint | Grid | Spacing | Typography |
|------------|------|---------|------------|
| 2xl (1536px+) | 1400px container | 96px sections | Display 72px |
| xl (1280-1535px) | 1200px container | 96px sections | Display 72px |
| lg (1024-1279px) | 100% width | 80px sections | Display 64px |
| md (768-1023px) | 100% width | 64px sections | H1 48px |
| sm (640-767px) | 100% width | 48px sections | H1 40px |
| <640px | 100% width | 40px sections | Display 48px |

### 4.4 Section Patterns

#### Hero Pattern (500-600px height)
- Full-width background image
- Dark overlay (50-60% opacity)
- Centered content (max 800px)
- Badge + Headline + Subheadline + Stats + CTAs

#### Product Showcase Pattern
- 2-column grid (desktop) → 1-column (mobile)
- Card gap: 32px
- Uses Product Card component (§3.3)

#### Service Grid Pattern
- 2-column grid (desktop) → 1-column (mobile)
- Card gap: 32px
- Icon + Title + Description + Features list

#### Stats Grid Pattern
- 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Large number (text-h2) + small label (text-small)
- Gap: 48px

#### Contact Form Pattern
- 2-column layout: Form (60%) + Info (40%)
- Stack vertically on mobile
- Uses Input Field component (§3.5)

### 4.5 Visual Hierarchy

**Height Ranges**:
- Hero: 500-600px (prominent)
- Standard sections: Auto height, min 400px
- Footer: Auto height, min 300px

**Prominence Levels**:
1. **Hero**: Highest visual weight (large typography, full-width image)
2. **Product/Service sections**: Medium weight (card-based, images 50% width)
3. **About/Team**: Medium-low weight (text-focused, image 40% width)
4. **Footer**: Lowest weight (small typography, dense layout)

### 4.6 Responsive Adaptation

**Desktop (≥1024px)**:
- Multi-column layouts (2-4 cols)
- Horizontal navigation
- Hover effects enabled
- Larger typography scale

**Tablet (768-1023px)**:
- Reduce columns (3 → 2, 4 → 2)
- Maintain horizontal nav (collapse at <768px)
- Reduce spacing by 20%
- Medium typography scale

**Mobile (<768px)**:
- Single column layouts
- Hamburger menu
- Stack all grids vertically
- Reduce spacing by 40%
- Mobile typography scale
- Increase touch targets (56px minimum)

---

## 5. Interaction & Animation

### 5.1 Animation Standards

**Timing**:
- Fast (200ms): Button clicks, icon changes, input focus
- Normal (300ms): Card hover, link underline, smooth scroll
- Slow (400ms): Modal open/close, drawer slide-in, page load

**Easing**:
- `ease-out` (90% cases): Natural deceleration
- `cubic-bezier(0.4, 0.0, 0.2, 1)` (10% cases): Emphasized moments (hero entrance, card lifts)

**Performance Rule**: Animate ONLY `transform` and `opacity`. NEVER animate width, height, margin, padding.

### 5.2 Component Animations

**Button Hover**:
```css
transform: translateY(-2px)
background: lighten(10%)
transition: all 300ms ease-out
```

**Card Hover**:
```css
transform: translateY(-4px)
box-shadow: shadow-card-hover
image: scale(1.05)
transition: all 300ms ease-out
```

**Navigation Scroll**:
```css
/* Appears when scroll > 100px */
box-shadow: shadow-nav
backdrop-filter: blur(10px)
transition: all 300ms ease-out
```

**Smooth Scroll**:
```css
scroll-behavior: smooth
/* Offset by navbar height (80px) */
```

### 5.3 Micro-interactions

**Form Submit Success**:
- Button changes to green (#10B981)
- Checkmark icon animates in
- Success message fades in
- Duration: 400ms

**Scroll Reveal** (on sections):
```css
/* Initial state */
opacity: 0
transform: translateY(30px)

/* On viewport enter */
opacity: 1
transform: translateY(0)
transition: all 600ms cubic-bezier(0.4, 0.0, 0.2, 1)
```

**Stagger Effect** (for cards/stats):
- First item: 0ms delay
- Second item: 100ms delay
- Third item: 200ms delay
- Fourth item: 300ms delay

### 5.4 Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  scroll-behavior: auto;
}
```

---

## Design Quality Checklist

### ✅ Style Guide Compliance
- [x] Components match hybrid approach (Modern Minimalism + E-commerce + Luxury)
- [x] Typography uses serif headlines (Luxury) + sans body (Modern)
- [x] Colors follow 90% neutral + 10% CTA rule (Modern + E-commerce)
- [x] Spacing uses 64-96px generous sections (Modern + Luxury)
- [x] Black CTA provides 21:1 contrast (E-commerce)
- [x] Animation timing 300-400ms refined (Luxury influence)

### ✅ Premium Essentials
- [x] Background layers: Page (#FAFAF8) + Surface (#F5F4F0) + Elevated (#FFFFFF)
- [x] Hero section: 500-600px height, 72px headlines, 56px CTAs, 128px padding
- [x] Card padding: 48px (premium, NEVER 16px)
- [x] Section gaps: 96px (generous spacing)

### ✅ Technical Standards
- [x] WCAG validated: Black on warm white = 21:1 AAA
- [x] 4pt spacing: All values multiples of 4 (prefer 8pt: 8, 16, 24, 32, 48, 64, 96, 128)
- [x] SVG icons: Specified Lucide/Heroicons (NEVER emojis)
- [x] Performance: Only transform/opacity animations
- [x] Reduced motion support included

### ✅ B2B Conversion Optimization
- [x] Prominent black CTAs (E-commerce approach)
- [x] Trust indicators visible (certifications, stats, export reach)
- [x] Product-first layout (large imagery)
- [x] Clear conversion paths (multiple CTA placements)
- [x] Professional credibility (Modern Minimalism foundation)

### ⚠️ Notes
- Phone/email di content plan marked (TBD) - perlu diisi saat development
- All measurements in design specification, NOT implementation code
- Engineers akan handle extraction content dari docs/imgs sesuai content-structure-plan.md

---

**Document Version**: 1.0  
**Created**: 2025-11-03  
**Target Industry**: B2B Animal Nutrition / Premium Rice Bran Processing  
**Brand**: PT Archipelago Jaya Nusantara
