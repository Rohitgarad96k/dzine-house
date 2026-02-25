import React from 'react';

// --- PRICING DATA ---
export const pricingTiers = [
  { name: 'Basic', price: '₹1500', interval: '/ page', features: ['1 Unique Flyer Option', 'Up to A4 Size', 'Jr. Designer', '2 Days Delivery'], buttonText: 'Select Basic', highlighted: false },
  { name: 'Standard', price: '₹2000', interval: '/ page', features: ['2 Unique Flyer Options', 'Up to A4 Size', 'Sr. Designer', 'Royalty Free Images'], buttonText: 'Select Standard', highlighted: true },
  { name: 'Premium', price: 'Custom', interval: '', features: ['Multiple Unique Options', 'Content Suggestions', 'Visualiser', 'Premium Stock Images'], buttonText: 'Get a Quote', highlighted: false },
];

// --- CONTACT FAQ DATA ---
export const faqs = [
  { question: "Do you offer custom pricing for startups?", answer: "Yes! We understand startups have unique needs. We offer tailored packages that scale with your growth. Mention you are a startup in your inquiry." },
  { question: "What is your typical turnaround time?", answer: "For basic flyers and logos, it takes 2-4 business days. Comprehensive UI/UX or full branding projects generally take 2-4 weeks depending on revisions." },
  { question: "Can we hire Dzine House on a monthly retainer?", answer: "Absolutely. We offer dedicated monthly retainer plans acting as your extended in-house design team. Select 'Monthly Design Retainer' in the form above." },
  { question: "Do you provide source files?", answer: "Yes, upon final approval and payment, we provide all high-resolution, print-ready, and editable source files (AI, PSD, Figma, etc.)." }
];

// --- ABOUT PAGE DATA ---
export const aboutSkills = [
  { name: 'GRAPHIC DESIGN', level: 95 },
  { name: 'WEB GRAPHICS / MOBILE APP DESIGN', level: 90 },
  { name: 'UI & UX CREATIVE DESIGN', level: 85 },
  { name: 'BRANDING', level: 90 },
  { name: 'LOGO DESIGN', level: 95 },
  { name: 'SOCIAL MEDIA PROMO', level: 80 },
  { name: 'UI/UX DESIGN', level: 70 },
  { name: 'PACKAGING GRAPHIC', level: 85 },
];

export const aboutWorkSteps = [
  { num: '1', text: 'Get real alternatives, rendering concepts created and bounds and customers unique requirements which makes enhanced outstanding results for every client generated.' },
  { num: '2', text: 'Our services are more additionally serving as second focused around customer target designing approach which matches to encourage genuine and thoughtful creations.' },
  { num: '3', text: 'Every accumulated element from researching profile you provided and delivered focuses client to highest level of what we can do. Our team begins visuals, details then make final campaign all just worked out for you.' }
];

// --- PORTFOLIO (OUR WORK) DATA ---
export const portfolioCategories = [
  { 
    id: 1, 
    title: 'Logo Design', 
    slug: 'logo-design', // Generates the URL: /our-work/logo-design
    description: 'Your logo is the face of your brand. We create unique, memorable, and versatile logos that capture the essence of your business.', 
    features: ['Custom Vector Designs', 'Brand Color Palette Selection', 'Typography Guidelines', 'Multiple Revisions & Concepts'], 
    image: 'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    btnText: 'VIEW MORE LOGO DESIGN',
    gallery: [
      'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516862523118-a3724eb136d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'Brochure Design', 
    slug: 'brochure-design', // Generates the URL: /our-work/brochure-design
    description: 'Engage your clients with beautifully crafted brochures. We design physical and digital company profiles that communicate your value proposition clearly.', 
    features: ['Bifold & Trifold Layouts', 'Corporate Company Profiles', 'High-Resolution Print Ready Files', 'Digital PDF Formats'], 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    btnText: 'VIEW MORE BROCHURE DESIGN',
    gallery: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507238692062-5a042e9eb189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Packaging Design', 
    slug: 'packaging-design', // Generates the URL: /our-work/packaging-design
    description: 'Stand out on the retail shelf. Our packaging designs are not only visually striking but also comply with industry standards.', 
    features: ['Product Label Design', 'Box & Carton Layouts', 'FMCG & Healthcare Packaging', '3D Mockup Visualizations'], 
    image: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    btnText: 'VIEW MORE PACKAGING DESIGN',
    gallery: [
      'https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628424029235-961da8760081?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606165088190-c23d461cb28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533616688419-b7fa58556456?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  { 
    id: 4, 
    title: 'Social Media Graphics', 
    slug: 'social-media-graphics', // Generates the URL: /our-work/social-media-graphics
    description: 'Build a loyal online following with thumb-stopping social media content. We design posts, banners, and campaign graphics.', 
    features: ['Instagram & Facebook Posts', 'Festival & Event Greetings', 'Ad Campaign Creatives', 'Profile Banners & Covers'], 
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
    btnText: 'VIEW MORE SOCIAL MEDIA POSTS',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// --- SIGNATURE WORK GRID DATA ---
export const signatureWorkItems = [
  { id: 1, title: 'Corporate Branding', category: 'Identity', imgUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'FMCG Packaging', category: 'Packaging', imgUrl: 'https://images.unsplash.com/photo-1628424029235-961da8760081?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Architectural Logo', category: 'Logo Design', imgUrl: 'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Restaurant Menu', category: 'Print Media', imgUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Digital Campaign', category: 'Social Media', imgUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Company Profile', category: 'Brochure', imgUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Exhibition Stall', category: 'Event Design', imgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Typography Poster', category: 'Print Media', imgUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Product Label', category: 'Packaging', imgUrl: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

// --- CREATIVE PROCESS DATA ---
export const processSteps = [
  { id: 1, num: '01', title: 'Discover', description: 'Understanding your brand, target audience, and project goals.' },
  { id: 2, num: '02', title: 'Strategy', description: 'Defining the visual direction and core messaging.' },
  { id: 3, num: '03', title: 'Concept', description: 'Brainstorming and drafting initial design mockups.' },
  { id: 4, num: '04', title: 'Design', description: 'Crafting high-fidelity digital and print assets.' },
  { id: 5, num: '05', title: 'Review', description: 'Collaborative feedback and unlimited revisions.' },
  { id: 6, num: '06', title: 'Deliver', description: 'Final handover of source files and ready-to-print formats.' }
];

// --- BLOG DATA ---
export const blogInsights = [
  { id: 1, title: 'The Ultimate Social Media Festival / Days Calendar 2026 India', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Social Media', date: 'Feb 15, 2026' },
  { id: 2, title: 'How to Build Trust in Healthcare Products with Packaging', image: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Packaging', date: 'Feb 10, 2026' },
  { id: 3, title: 'Already Know What You Want in a Logo? Here\'s Why That\'s an Advantage', image: 'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Branding', date: 'Jan 28, 2026' },
  { id: 4, title: '10 Typography Rules Every Designer Should Know', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Branding', date: 'Jan 12, 2026' },
];

// --- CORE CAPABILITIES DATA ---
export const coreCapabilities = [
  {
    id: 1,
    title: 'Corporate Branding Solutions',
    description: 'We craft unique brand identities, including custom logos, typography, and visual guidelines that resonate with your target audience.',
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'B2B Marketing Collateral',
    description: 'Professional brochure design, company profiles, and visual aids tailored for B2B communications and sales enablement.',
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Product Packaging Design',
    description: 'Stand out on the shelves with innovative and compliant packaging designs for FMCG, healthcare, and retail products.',
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Digital & Web Solutions',
    description: 'Engaging UI/UX design, social media graphics, and digital banners that convert visitors into loyal customers.',
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// --- CREATIVE SERVICES DATA ---
// Add this to src/data/data.jsx if it's not there already
export const creativeServices = [
  {
    id: 1,
    slug: 'print-and-publication', // Added slug for routing
    title: 'Print & Publication',
    description: 'Tangible marketing materials that leave a lasting physical impression.',
    features: ['Brochure & Flyers', 'Magazine Layouts', 'Newspaper Ads', 'Menu Cards'],
    icon: (
      <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 2,
    slug: 'digital-ui-ux',
    title: 'Digital & UI/UX',
    description: 'User-centric digital interfaces designed for engagement and conversion.',
    features: ['Website Design', 'App Interfaces', 'Social Media Posts', 'Web Banners'],
    icon: (
      <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    slug: 'brand-identity',
    title: 'Brand Identity',
    description: 'Cohesive visual systems that define your brand\'s core DNA.',
    features: ['Custom Logo Design', 'Brand Naming', 'Corporate Profiles', 'Brand Guidelines'],
    icon: (
      <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    id: 4,
    slug: 'packaging-retail',
    title: 'Packaging & Retail',
    description: 'Striking structural and graphic design for consumer goods.',
    features: ['Product Packaging', 'Shopping Bags', 'Exhibition Stalls', 'Signage Design'],
    icon: (
      <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }
];

// --- INDUSTRIES DATA ---

export const industries = [
  {
    id: 1,
    name: 'Real Estate',
    slug: 'real-estate',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Healthcare',
    slug: 'healthcare',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Education',
    slug: 'education',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Retail & D2C',
    slug: 'retail-d2c',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Technology',
    slug: 'technology',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Automotive',
    slug: 'automotive',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    id: 7,
    name: 'Hospitality',
    slug: 'hospitality',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  },
  {
    id: 8,
    name: 'Corporate',
    slug: 'corporate',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// Add this to your src/data/data.jsx file
export const trustPoints = [
  {
    id: 1,
    title: '36+ Years of Experience',
    description: 'Delivering design excellence and brand growth since 1990.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Dedicated Account Managers',
    description: 'Single point of contact ensuring your project stays on track.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: '100% Custom Designs',
    description: 'No templates. Every pixel is crafted specifically for your brand.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Timely Delivery',
    description: 'We respect your deadlines and ensure rapid turnaround times.',
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// PROMOTIONS SERVICES DATA
export const promotionServices = [
  {
    id: 1,
    title: 'Budget Logo & Identity',
    description: 'Perfect for startups and small businesses needing a professional look without the enterprise price tag. We deliver crisp, versatile logos that make a strong first impression.',
    features: ['2 Custom Concepts', 'High-Resolution Files', 'Source Files Included', '3 Business Days Delivery'],
    image: 'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Request Logo Design'
  },
  {
    id: 2,
    title: 'B2B Marketing Collateral',
    description: 'Arm your sales team with professional visual aids. We design comprehensive company profiles, product catalogs, and presentation decks tailored for B2B communications.',
    features: ['Corporate Company Profiles', 'Sales Presentation Decks', 'Product Catalogs', 'Infographic Design'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Enhance B2B Sales'
  },
  {
    id: 3,
    title: 'Exhibition Stall Design',
    description: 'Make a massive impact at your next trade show. We design comprehensive 3D exhibition stalls, backdrops, and promotional standees that draw a crowd and generate leads.',
    features: ['3D Stall Renderings', 'Backdrop & Standee Graphics', 'Promotional Kiosks', 'Event Branding Guides'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Design My Exhibition'
  },
  {
    id: 4,
    title: 'Print Promotions & Flyers',
    description: 'Tangible marketing that converts. From high-impact newspaper advertisements to localized promotional flyers, we design print materials that demand attention.',
    features: ['Flyers & Leaflets', 'Newspaper & Magazine Ads', 'Menu Cards', 'Print-Ready Formats'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Start Print Campaign'
  }
];

// BRAND SERVICES DATA

// --- BRAND PAGE DATA ---
export const brandServices = [
  {
    id: 1,
    title: 'Custom Logo Design',
    description: 'Your logo is the face of your company. We design timeless, versatile, and memorable logos that capture your core values and instantly connect with your target audience.',
    features: ['Multiple Unique Concepts', 'Vector Source Files (AI, EPS)', 'Black & White Variants', 'Copyright Transfer'],
    image: 'https://images.unsplash.com/photo-1623018035782-b269248df596?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Start Logo Project'
  },
  {
    id: 2,
    title: 'Brand Guidelines & Rulebooks',
    description: 'Consistency is the key to trust. We create comprehensive brand rulebooks detailing your typography, color palettes, spacing, and tone of voice so your team never goes off-brand.',
    features: ['Color Palette Specification (CMYK/RGB/HEX)', 'Typography Hierarchy', 'Logo Usage Rules', 'Brand Voice & Tone'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Build My Guidelines'
  },
  {
    id: 3,
    title: 'Corporate Identity Setup',
    description: 'Equip your business with professional corporate collateral. From sleek business cards to official letterheads, we ensure your offline presence matches your online ambition.',
    features: ['Business Card Design', 'Letterhead & Envelopes', 'Email Signatures', 'ID Cards & Lanyards'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Design Corporate ID'
  }
];

export const brandPackages = [
  {
    name: 'Startup Logo',
    price: '₹8,000',
    description: 'Perfect for new businesses needing a professional mark quickly.',
    features: ['2 Custom Logo Concepts', '2 Rounds of Revisions', 'High-Res JPG & PNG', 'Vector Source File'],
    isPopular: false
  },
  {
    name: 'Brand Identity',
    price: '₹25,000',
    description: 'Our most requested package for serious businesses establishing a complete look.',
    features: ['4 Custom Logo Concepts', 'Unlimited Revisions', 'Complete Brand Guidelines PDF', 'Business Card & Letterhead', 'Social Media Profile Kit'],
    isPopular: true
  },
  {
    name: 'Enterprise Rebrand',
    price: 'Custom',
    description: 'A full strategic overhaul for established companies looking to pivot.',
    features: ['Brand Strategy & Naming', 'Extensive Logo System', 'Full Corporate Identity', 'Website UI/UX Design', 'Dedicated Art Director'],
    isPopular: false
  }
];

export const brandFaqs = [
  { question: "What is the difference between a logo and a brand identity?", answer: "A logo is just the visual symbol of your business. A brand identity is the entire system: your logo, color palette, typography, brand voice, and how they all work together across your marketing materials." },
  { question: "Do you trademark the logo for us?", answer: "We provide you with 100% original designs and full copyright transfer upon final payment. However, the legal registration of the trademark must be done by you or your legal counsel in your respective country." },
  { question: "What happens if I don't like any of the initial concepts?", answer: "Our discovery phase is highly detailed to prevent this, but if we miss the mark, we will jump on a call to realign and provide a completely new set of concepts at no extra charge within our standard revision policies." }
];

// --- DIGITAL PAGE DATA ---
export const digitalServices = [
  {
    id: 1,
    title: 'UI/UX App & Web Design',
    description: 'We design intuitive, user-centric interfaces that look stunning and function flawlessly. From wireframing complex user journeys to delivering pixel-perfect high-fidelity prototypes.',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Figma/Adobe XD Source Files', 'Interactive Design Systems'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Design My Interface'
  },
  {
    id: 2,
    title: 'Social Media Management & Creatives',
    description: 'Stop scrolling, start engaging. We create thumb-stopping social media graphics, carousels, and video assets that grow your audience and build extreme brand loyalty.',
    features: ['Custom Grid Layouts', 'Instagram Carousels', 'Animated Story Assets', 'Monthly Content Calendars'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Boost My Socials'
  },
  {
    id: 3,
    title: 'Website Development & Redesign',
    description: 'Your website is your 24/7 salesperson. We build responsive, lightning-fast, and SEO-optimized websites that convert traffic into paying customers.',
    features: ['Custom WordPress/Webflow', 'Mobile-First Responsive Design', 'SEO Optimization', 'E-commerce Integrations'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    btnText: 'Build My Website'
  }
];

export const digitalProcess = [
  { id: 1, step: '01', title: 'Discovery & UX Audit', desc: 'We analyze your current digital presence, map out user journeys, and identify exact drop-off points and conversion bottlenecks.' },
  { id: 2, step: '02', title: 'Wireframing', desc: 'Before making it pretty, we make it work. We sketch low-fidelity layouts to finalize the structure and information architecture.' },
  { id: 3, step: '03', title: 'UI Design & Prototyping', desc: 'We apply your brand identity to the wireframes, creating high-fidelity, clickable prototypes in Figma so you can feel the product.' },
  { id: 4, step: '04', title: 'Development & Handoff', desc: 'We write clean, optimized code (or hand off developer-ready assets) and launch your product after rigorous QA testing.' }
];

export const digitalPackages = [
  {
    name: 'Social Media Starter',
    price: '₹15,000 /mo',
    description: 'Perfect for brands looking to maintain an active, professional social presence.',
    features: ['12 Custom Static Posts', '3 Carousel Posts', 'Profile Optimization', 'Monthly Performance Report'],
    isPopular: false
  },
  {
    name: 'UI/UX App Design',
    price: '₹45,000+',
    description: 'Full interface design for SaaS, mobile apps, or complex digital platforms.',
    features: ['Up to 15 Unique Screens', 'Interactive Figma Prototype', 'Design System / UI Kit', 'Developer Handoff Session', 'Unlimited Revisions (2 Weeks)'],
    isPopular: true
  },
  {
    name: 'Custom Website',
    price: '₹35,000+',
    description: 'High-converting, multi-page website design and development.',
    features: ['Up to 5 Pages', 'Mobile Responsive Layout', 'Basic SEO Setup', 'CMS Integration', '1 Month Free Support'],
    isPopular: false
  }
];

export const digitalFaqs = [
  { question: "Do you build the website, or just design it?", answer: "Both! We offer end-to-end solutions. We can design the UI/UX in Figma and hand it over to your developers, or our in-house team can develop it using React, WordPress, or Webflow." },
  { question: "Do you manage social media posting?", answer: "Our core expertise is in content creation and design. We deliver a month's worth of highly engaging creative assets. While we don't handle daily community management (replying to comments), we can schedule the posts for you." },
  { question: "What if I need an app designed for both iOS and Android?", answer: "We use platform-agnostic design principles but adhere strictly to Apple's Human Interface Guidelines and Google's Material Design, ensuring your app looks native on both operating systems." }
];

// --- RETAINER PAGE DATA ---
export const retainerBenefits = [
  {
    id: 1,
    title: 'No HR Overhead',
    description: 'No salaries, no health insurance, no paid time off, and no hiring fees. Just a flat, predictable monthly rate.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 2,
    title: 'A Full Creative Team',
    description: 'When you hire one designer, you get one skill set. With our retainer, you get UI designers, print experts, and brand strategists.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 3,
    title: 'Pause or Cancel Anytime',
    description: 'Not enough design work this month? No problem. Pause your subscription and resume when your needs increase.',
    icon: 'M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 4,
    title: 'Lightning Fast Turnaround',
    description: 'Submit your design request to your dedicated board and get your files back within an average of 24 to 48 hours.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
];

export const retainerPackages = [
  {
    name: 'Part-Time Partner',
    price: '₹25,000 / mo',
    description: 'Ideal for small businesses needing ongoing social media and basic print support.',
    features: ['Up to 4 Active Requests at a time', 'Social Media & Print Graphics', 'Standard 48hr Turnaround', 'Dedicated Project Manager', 'Pause Anytime'],
    isPopular: false
  },
  {
    name: 'Dedicated Design Team',
    price: '₹50,000 / mo',
    description: 'Our most popular plan. Acts as a full replacement for a mid-level in-house designer.',
    features: ['Up to 8 Active Requests at a time', 'UI/UX & Web Design Included', 'Brand Identity & Packaging', 'Priority 24hr Turnaround', 'Slack/Teams Integration'],
    isPopular: true
  },
  {
    name: 'Enterprise Scale',
    price: 'Custom',
    description: 'For agencies or large corporations needing massive design output at scale.',
    features: ['Unlimited Concurrent Requests', 'Multiple Dedicated Designers', 'Motion Graphics & Video', 'Same-Day Turnarounds', 'White-labeling Options'],
    isPopular: false
  }
];

export const retainerFaqs = [
  { question: "How does the request process work?", answer: "Once subscribed, you will be invited to a dedicated Trello/Asana board. You can add as many design requests to the queue as you'd like, and we will work through them one by one." },
  { question: "What if I don't like the design?", answer: "We offer unlimited revisions on our retainer plans. We will continue to tweak and refine the design until you are 100% happy with it." },
  { question: "Is there a contract?", answer: "No. Our retainers are month-to-month. If you run out of design tasks, you can pause your subscription and hold onto your remaining days until you need us again." }
];