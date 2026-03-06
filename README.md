# 🌐 Faecom Tech — Vite + React + TypeScript

A modern, responsive single-page application built with **React**, **TypeScript**, and **Vite**. This project features a component-driven architecture with reusable UI elements, smooth carousels, dynamic navigation, and a clean design system.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Dev Server](#running-the-dev-server)
  - [Building for Production](#building-for-production)
  - [Preview Production Build](#preview-production-build)
- [Architecture & Key Concepts](#architecture--key-concepts)
  - [Entry Point](#entry-point)
  - [App Component](#app-component)
  - [Components](#components)
  - [Constants](#constants)
  - [Layouts](#layouts)
  - [Pages](#pages)
  - [Types](#types)
- [Configuration Files](#configuration-files)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Linting](#linting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This is a feature-rich, single-page web application designed to showcase services, statistics, and other content in a polished and user-friendly interface. It includes:

- **Responsive Navbar** with dropdown support
- **Infinite Carousel** for showcasing content
- **Service Cards & Service Carousel** for presenting offerings
- **Stat Cards** for key metrics/statistics
- **Footer** with organized link sections
- **Bookmark** and **Back-to-Top** utilities for enhanced UX
- **Home page components** organized in a dedicated subfolder (Blog, Gallery, Portfolio, Testimonials, Training, Newsletter, Affiliations, Keywords)
- **Multiple Service Pages** — AWS, Salesforce, SAP, Zoho, Digital Marketing, QA, Unity, Web Development, Custom Services
- **Training Pages** — AWS, Salesforce, SAP, Zoho training detail pages
- **Informational Pages** — About Us, Contact, Blogs, FAQ, Privacy Policy, Terms & Conditions

---

## Tech Stack

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| React 18+     | UI library (component-based)   |
| TypeScript    | Static typing                  |
| Vite          | Build tool & dev server        |
| ESLint        | Code quality & linting         |
| CSS           | Styling (via `index.css`)      |
| Netlify       | Deployment (via `_redirects`)  |

---

## Project Structure

```
.
├── appscript                   # App script utilities
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── tsconfig.json               # Base TypeScript config
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── vite.config.ts              # Vite bundler configuration
├── public/
│   ├── _redirects              # Netlify SPA redirect rules
│   └── affiliation/            # Static affiliation assets
└── src/
    ├── App.tsx                 # Root application component (routing)
    ├── index.css               # Global styles
    ├── main.tsx                # Application entry point (ReactDOM render)
    ├── components/
    │   ├── Bookmark.tsx        # Bookmark/save functionality component
    │   ├── Button.tsx          # Reusable button component
    │   ├── Dropdown.tsx        # Dropdown menu component
    │   ├── Footer.tsx          # Site footer component
    │   ├── InfiniteCarousel.tsx# Auto-scrolling infinite carousel
    │   ├── Navbar.tsx          # Navigation bar component
    │   ├── ServiceCard.tsx     # Individual service display card
    │   ├── ServiceCarousel.tsx # Carousel of service cards
    │   ├── ServiceComponent.tsx# Service section wrapper/container
    │   ├── StatCard.tsx        # Statistics/metrics display card
    │   ├── Top.tsx             # Scroll-to-top component
    │   └── home/               # Home page-specific components
    │       ├── AffiliationBanner.tsx
    │       ├── BlogCard.tsx / BlogComponent.tsx
    │       ├── GalleryComponent.tsx
    │       ├── KeywordBanner.tsx
    │       ├── NewsLetterComponent.tsx
    │       ├── PortfolioCard.tsx / PortfolioCarousel.tsx / PortfolioComponent.tsx
    │       ├── TestimonialCard.tsx / TestimonialComponent.tsx
    │       └── TrainingCard.tsx / TrainingComponent.tsx
    ├── constants/
    │   ├── Footer.ts           # Footer links, text, and config data
    │   ├── HomePage.ts         # Home page content & configuration
    │   ├── Navbar.ts           # Navbar links & navigation config
    │   ├── Services.ts         # General services data
    │   ├── ServicesDetails/    # Per-service constant files
    │   │   ├── AWSConstants.ts
    │   │   ├── CustomConstants.ts
    │   │   ├── DigitalMarketingConstants.ts
    │   │   ├── QAConstants.ts
    │   │   ├── SalesforceConstants.ts
    │   │   ├── SAPConstants.ts
    │   │   ├── UnityConstants.ts
    │   │   ├── WebDevConstants.ts
    │   │   └── ZohoConstants.ts
    │   └── TrainingDetails/    # Per-training constant files
    │       ├── AWSTrainingDetails.ts
    │       ├── SalesforceTrainingDetails.ts
    │       ├── SAPTrainingDetails.ts
    │       └── ZohoTrainingDetails.ts
    ├── layouts/
    │   └── MainLayout.tsx      # Main layout wrapper (Navbar + content + Footer)
    ├── pages/
    │   ├── AboutUs.tsx         # About Us page
    │   ├── Blogs.tsx           # Blog listing page
    │   ├── Contact.tsx         # Contact page
    │   ├── FAQPage.tsx         # FAQ page
    │   ├── HomePage.tsx        # Home page
    │   ├── NotFound.tsx        # 404 page
    │   ├── Privacy_PolicyPage.tsx  # Privacy Policy page
    │   ├── Terms_ConditionPage.tsx # Terms & Conditions page
    │   ├── Services/           # Service detail pages
    │   │   ├── ServicesPage.tsx
    │   │   ├── AWSService.tsx
    │   │   ├── CustomService.tsx
    │   │   ├── DigitalMarketingService.tsx
    │   │   ├── QAService.tsx
    │   │   ├── SalesforceService.tsx
    │   │   ├── SAPService.tsx
    │   │   ├── UnityService.tsx
    │   │   ├── WebDevService.tsx
    │   │   └── ZohoService.tsx
    │   └── Trainings/          # Training detail pages
    │       ├── Trainings.tsx
    │       ├── AWSTraining.tsx
    │       ├── SalesforceTraining.tsx
    │       ├── SAPTraining.tsx
    │       └── ZohoTraining.tsx
    └── types/
        └── swiper.d.ts         # Swiper library type declarations
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **yarn** / **pnpm**)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd faecom-tech-main

# Install dependencies
npm install
```

### Running the Dev Server

```bash
npm run dev
```

This starts the Vite development server with hot module replacement (HMR). By default, the app is available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

This compiles TypeScript and bundles the application into the `dist/` folder using Vite's optimized production build.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

---

## Architecture & Key Concepts

### Entry Point

- **index.html** — The HTML shell that loads the app.
- **src/main.tsx** — The React entry point. Mounts the root `<App />` component to the DOM and imports global styles from `src/index.css`.

### App Component

- **src/App.tsx** — The root component that defines client-side routing and composes the overall application layout using components from `src/layouts/` and `src/pages/`.

### Components

All reusable UI components live in `src/components/`:

| Component | File | Description |
|-----------|------|-------------|
| **Navbar** | `Navbar.tsx` | Top navigation bar with links and responsive behavior. Consumes config from `Navbar.ts`. |
| **Dropdown** | `Dropdown.tsx` | Dropdown menu, typically used inside the Navbar for nested navigation. |
| **Footer** | `Footer.tsx` | Site-wide footer with links and info. Driven by data in `Footer.ts`. |
| **Button** | `Button.tsx` | Reusable, styled button component with variant support. |
| **ServiceCard** | `ServiceCard.tsx` | Displays an individual service with icon/image, title, and description. |
| **ServiceCarousel** | `ServiceCarousel.tsx` | Horizontally scrollable carousel of `ServiceCard` components. |
| **ServiceComponent** | `ServiceComponent.tsx` | Wrapper/section that composes the service display area. |
| **InfiniteCarousel** | `InfiniteCarousel.tsx` | Auto-scrolling infinite loop carousel for logos, testimonials, or featured content. |
| **StatCard** | `StatCard.tsx` | Displays a key metric/statistic (e.g., "500+ Clients Served"). |
| **Bookmark** | `Bookmark.tsx` | Bookmark/save interaction component. |
| **Top** | `Top.tsx` | Scroll-to-top floating button for improved navigation UX. |

#### Home Page Components (`src/components/home/`)

| Component | Description |
|-----------|-------------|
| **AffiliationBanner** | Displays affiliation/partner logos |
| **BlogCard / BlogComponent** | Blog post cards and blog section |
| **GalleryComponent** | Image gallery section |
| **KeywordBanner** | Keyword/tag banner display |
| **NewsLetterComponent** | Newsletter subscription section |
| **PortfolioCard / PortfolioCarousel / PortfolioComponent** | Portfolio showcase with carousel |
| **TestimonialCard / TestimonialComponent** | Client testimonials section |
| **TrainingCard / TrainingComponent** | Training offerings display |

### Constants

Data-driven configuration files in `src/constants/`:

| File | Description |
|------|-------------|
| `Footer.ts` | Footer section data: links, copyright text, social media URLs |
| `HomePage.ts` | Home page content: hero text, service data, stats, carousel items |
| `Navbar.ts` | Navigation items: menu links, dropdown entries, CTA buttons |
| `Services.ts` | General services listing data |
| `ServicesDetails/*.ts` | Per-service detail data (AWS, Salesforce, SAP, Zoho, Digital Marketing, QA, Unity, Web Dev, Custom) |
| `TrainingDetails/*.ts` | Per-training detail data (AWS, Salesforce, SAP, Zoho) |

This pattern **separates content from presentation**, making updates easy without touching component logic.

### Layouts

`src/layouts/` contains layout wrapper components that define the overall page structure (e.g., Navbar + main content area + Footer). Pages are rendered within these layouts for consistent structure across routes.

- **MainLayout.tsx** — Primary layout used for all pages.

### Pages

`src/pages/` contains route-level page components. Each file corresponds to a distinct page/route:

| Page | Route (typical) | Description |
|------|-----------------|-------------|
| `HomePage.tsx` | `/` | Landing page with all home sections |
| `AboutUs.tsx` | `/about` | Company information |
| `Contact.tsx` | `/contact` | Contact form / details |
| `Blogs.tsx` | `/blogs` | Blog listing |
| `FAQPage.tsx` | `/faq` | Frequently asked questions |
| `Privacy_PolicyPage.tsx` | `/privacy-policy` | Privacy policy |
| `Terms_ConditionPage.tsx` | `/terms-conditions` | Terms & conditions |
| `NotFound.tsx` | `*` | 404 page |
| `Services/ServicesPage.tsx` | `/services` | All services overview |
| `Services/<Name>Service.tsx` | `/services/<name>` | Individual service detail pages |
| `Trainings/Trainings.tsx` | `/trainings` | All trainings overview |
| `Trainings/<Name>Training.tsx` | `/trainings/<name>` | Individual training detail pages |

### Types

`src/types/` holds shared TypeScript type definitions:

- **swiper.d.ts** — Type declarations for the Swiper carousel library integration.

---

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite bundler configuration — plugins, aliases, server settings |
| `tsconfig.json` | Base TypeScript configuration (project references) |
| `tsconfig.app.json` | TypeScript config for the application source code |
| `tsconfig.node.json` | TypeScript config for Node-side files (Vite config, scripts) |
| `eslint.config.js` | ESLint flat config for code linting rules |
| `package.json` | Project metadata, dependencies, and npm scripts |

---

## Deployment

This project is configured for **Netlify** deployment:

- The `public/_redirects` file contains redirect rules to support client-side routing (SPA fallback):
  ```
  /*    /index.html   200
  ```
- Static assets in `public/affiliation/` are served as-is.

### Deploy Steps

1. Connect the repository to Netlify.
2. Set the build command: `npm run build`
3. Set the publish directory: `dist`
4. Configure environment variables in the Netlify dashboard (see below).

---

## Environment Variables

Environment variables are accessed using Vite's `import.meta.env` convention.

| Variable | Description |
|----------|-------------|
| `VITE_*` | All client-exposed env vars must be prefixed with `VITE_` |

> ⚠️ **Never commit secrets to `.env`.** Ensure `.env` is listed in `.gitignore`.

---

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

The linting configuration is defined in `eslint.config.js` using ESLint's flat config format.

---

## Contributing

1. **Fork** the repository.
2. **Create** a feature branch: `git checkout -b feature/your-feature`.
3. **Commit** with clear messages: `git commit -m "feat: add new component"`.
4. **Push** to your fork: `git push origin feature/your-feature`.
5. **Open** a Pull Request against `main`.

### Code Guidelines

- Use TypeScript for all source files.
- Place reusable components in `src/components/`.
- Place page-specific components in `src/components/<page-name>/`.
- Store all static content/data in `src/constants/`.
- Define shared types in `src/types/`.
- Follow the existing code style enforced by ESLint.

---

## License

This project is proprietary. See the repository owner for licensing details.
