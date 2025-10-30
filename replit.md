# BuildMart - Home Improvement E-commerce Platform

## Overview

BuildMart is a modern e-commerce web application for home improvement products and services. Built with React, TypeScript, and Vite, it provides a comprehensive shopping experience for tools, building materials, paint supplies, and garden equipment. The application features product browsing, shopping cart functionality, service offerings, and company information pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **React Router** for client-side routing with dedicated pages for home, shop, cart, services, about, and contact

### UI Component System
- **shadcn/ui** components built on top of Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component library includes 40+ reusable UI components (buttons, cards, dialogs, forms, navigation, etc.)
- Design system defined in CSS variables for consistent theming (colors, shadows, transitions)
- **Lucide React** for icon system

### State Management
- **React Context API** for global cart state management
- **TanStack Query (React Query)** for server state management and data fetching
- Local storage persistence for shopping cart data
- Custom hooks for form handling and mobile detection

### Routing Architecture
- Single-page application with client-side routing
- Route structure:
  - `/` - Home page with hero section and category highlights
  - `/shop` - Product catalog with category filtering
  - `/cart` - Shopping cart management
  - `/services` - Service offerings display
  - `/about` - Company information
  - `/contact` - Contact form and information
  - `/*` - 404 error handling

### Cart System
- Context-based cart management with CRUD operations
- Persistent storage using browser localStorage
- Real-time cart item count and total price calculations
- Quantity management with stock validation
- Toast notifications for user feedback

### Product Architecture
- Static product data structure with TypeScript interfaces
- Product categories: Tools, Paint, Building Materials, Garden
- Each product includes: name, price, category, description, features, specifications, stock, and images
- Product detail dialog with tabs for description, features, and specifications

### Form Handling
- **React Hook Form** for form state management
- **Zod** integration via `@hookform/resolvers` for schema validation
- Controlled form components with validation feedback

### Styling System
- Tailwind CSS with custom configuration
- CSS custom properties for theming (HSL color values)
- Responsive design with mobile-first approach
- Dark mode support via `next-themes`
- Custom gradients, shadows, and transitions defined as CSS variables

### Build Configuration
- Base path set to `/` for root directory deployment
- Development server configured for host `0.0.0.0` and port `5000`
- Component tagging in development mode via `lovable-tagger`
- Path aliases configured (`@/` maps to `src/`)
- TypeScript strict mode disabled for flexibility

### Code Quality
- ESLint configuration with TypeScript support
- React hooks linting rules
- Unused variables warnings suppressed for development convenience

## External Dependencies

### UI & Styling
- **@radix-ui/* packages** - Primitive components for accessibility (accordion, dialog, dropdown, popover, etc.)
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Variant-based component styling
- **clsx** & **tailwind-merge** - Conditional className utilities
- **next-themes** - Theme management system

### Data & State
- **@tanstack/react-query** - Server state management
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod** - Schema validation (implied dependency)

### Routing & Navigation
- **react-router-dom** - Client-side routing

### Interactive Components
- **embla-carousel-react** - Carousel/slider functionality
- **cmdk** - Command menu component
- **react-day-picker** - Date picker component
- **date-fns** - Date utility functions
- **input-otp** - OTP input component

### Icons & Visual Elements
- **lucide-react** - Icon library

### Notifications
- **sonner** - Toast notification system

### Ads Integration
- **Google AdSense** - Integrated in HTML head with publisher ID `ca-pub-3557110887910101`
- Ad slot configured with auto format and responsive settings

### Deployment
- **GitHub Actions** workflow configured for automated deployment
- Target platform: GitHub Pages
- Build output from `dist/` directory