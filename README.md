# Rises Healthcare AI Website

A modern, professional website for Rises Healthcare AI, built with Next.js, TypeScript, and Tailwind CSS. This website showcases healthcare AI solutions similar to Qure.ai's platform.

## Features

- **Modern Design**: Clean, professional healthcare-focused design
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Healthcare AI Focus**: Specialized content for medical imaging and diagnostic solutions
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rises-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with impact metrics
│   ├── Products.tsx         # Product showcase
│   ├── Impact.tsx           # Global impact stories
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Evidence.tsx         # Research and evidence
│   └── Footer.tsx           # Footer with navigation
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Key Sections

1. **Hero Section**: Impact metrics and main value proposition
2. **Products**: AI-powered healthcare solutions
3. **Impact**: Global healthcare impact stories
4. **Testimonials**: Client success stories
5. **Evidence**: Research studies and clinical evidence
6. **Footer**: Comprehensive navigation and contact information

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue gradient (#0ea5e9 to #0369a1)
- Healthcare: Green accent (#22c55e)
- Gray: Neutral grays for text and backgrounds

### Content
Update the content in each component file to match your specific healthcare AI offerings and company information.

### Styling
Modify `app/globals.css` for custom styles and component classes.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact: contact@rises.ai 