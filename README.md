# Ahamad Groups - Corporate Portal

A modern, responsive corporate website built with Next.js and Tailwind CSS for Ahamad Groups, showcasing their two companies and their respective Tata product offerings.

## Overview

Ahamad Groups is a diversified business conglomerate with two specialized companies:

1. **Ahamad & Co** - Specializing in Tata roofing sheets and coils for construction
2. **AHAMAD Agencies** - Distributing Tata Agrigo products for agricultural solutions

## Features

### Main Landing Page (`/`)
- Modern hero section with company overview and typing animation
- Company showcase with product highlights
- About section with animated statistics
- Contact form with company selection
- Responsive navigation with mobile hamburger menu
- Professional footer with social links

### Ahamad & Co Page (`/ahamad-co`)
- Dedicated page for construction materials
- Product showcase for Tata roofing sheets and coils
- Application examples (commercial, residential, industrial)
- Why choose us section with key benefits
- Contact form for quote requests

### AHAMAD Agencies Page (`/ahamad-agencies`)
- Dedicated page for agricultural products
- Comprehensive Tata Agrigo product range
- Services including farmer training and soil testing
- Agricultural applications across different crop types
- Contact form for product information requests

## Technical Features

- **Next.js 14**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework with custom green/blue theme
- **TypeScript**: Type-safe development
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, form validation
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Built-in SEO with Next.js metadata
- **Accessibility**: Proper contrast ratios and keyboard navigation

## File Structure

```
ahamad/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Main landing page
│   ├── ahamad-co/         # Ahamad & Co page
│   │   └── page.tsx
│   └── ahamad-agencies/   # AHAMAD Agencies page
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Companies.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Google Fonts**: Inter font family

## Key Sections

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Company logo linking to home page

### Hero Sections
- Gradient backgrounds with company branding
- Key statistics and value propositions
- Call-to-action buttons

### Product Showcases
- Detailed product information
- Feature lists and specifications
- Application examples

### Contact Forms
- Company-specific contact forms
- Form validation and submission handling
- Professional styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

The website is designed to be easily customizable:

1. **Colors**: Update CSS custom properties for brand colors
2. **Content**: Modify HTML content for company information
3. **Images**: Replace placeholder content with actual product images
4. **Contact Info**: Update phone numbers, emails, and addresses
5. **Social Links**: Add actual social media URLs

## Future Enhancements

- Add actual product images and galleries
- Implement backend form processing
- Add blog/news section
- Include customer testimonials
- Add multi-language support
- Implement analytics tracking

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Navigate through the different sections and test the responsive design

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Color Theme

The website uses a custom green and blue color scheme:
- **Primary (Blue)**: Used for construction/industrial elements
- **Secondary (Green)**: Used for agricultural/natural elements
- **Accent (Gray)**: Used for neutral text and backgrounds

## Contact Information

For questions about this corporate portal, please contact the development team or update the contact information in the respective company pages.
