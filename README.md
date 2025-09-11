# Personal Portfolio

A clean, minimalist personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Notion-inspired clean aesthetic with Inter font
- **Responsive Layout**: Mobile-first design with hamburger menu
- **Sticky Navigation**: Navbar with scroll effects and smooth transitions
- **Component Architecture**: Reusable Layout component with Navbar and Footer
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom color scheme

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React (Icons)
- Google Fonts (Inter)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

<!-- Contact form removed -->

## Project Structure

```
personal-portfolio/
├── app/
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
└── ...
```

## Design System

- **Colors**: White background (#ffffff), black text (#0D0D0D), gray secondary (#555555)
- **Typography**: Inter font family
- **Spacing**: Generous padding and margins for clean whitespace
- **Interactions**: Smooth transitions and hover effects

## Next Steps

- Add hero section to home page
- Implement project showcase
- Add about page content
- Add animations and micro-interactions
