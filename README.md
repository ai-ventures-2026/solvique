# Solvique – Strategic Business Solutions

A professional corporate website for **Solvique**, a business consulting and solutions firm. Built with React, Vite, and React Router.

## Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool and dev server
- **React Router DOM v6** – Client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css    # Sticky responsive navigation
│   └── Footer.jsx / Footer.css   # Corporate footer with newsletter
├── pages/
│   ├── Home.jsx / Home.css        # Landing page with hero, services, testimonials
│   ├── About.jsx / About.css      # Firm history, methodology, leadership
│   ├── Services.jsx / Services.css # 6 service areas with deliverables
│   └── Contact.jsx / Contact.css  # Contact form + office locations
├── App.jsx                         # Route definitions
├── App.css                         # App-level layout
├── index.css                       # Global design tokens and utilities
└── main.jsx                        # React entry point
```

## Pages

| Route       | Page     | Description                                         |
|-------------|----------|-----------------------------------------------------|
| `/`         | Home     | Hero, services overview, differentiators, case study results, industries, testimonials, CTA |
| `/about`    | About    | Firm history, methodology, leadership bios, awards  |
| `/services` | Services | 6 practice areas with detailed descriptions and deliverables |
| `/contact`  | Contact  | Consultation request form + 3 office locations      |

## Brand Colors

| Token        | Value     | Usage                  |
|--------------|-----------|------------------------|
| `--navy`     | `#1a3c5e` | Primary brand, headers |
| `--gold`     | `#c5922a` | Accents, CTAs          |
| `--light-gray`| `#f4f6f8`| Section backgrounds    |
| `--dark`     | `#2c3e50` | Body text              |
| `--white`    | `#ffffff` | Cards, backgrounds     |
