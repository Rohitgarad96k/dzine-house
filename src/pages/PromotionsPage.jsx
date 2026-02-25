import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReadyToStart from '../components/ReadyToStart';
import { promotionServices } from '../data/data';

// --- Custom Reusable Component for Scroll Animations ---
function FadeInView({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const startTranslate = 
    direction === 'up' ? 'translate-y-16' : 
    direction === 'left' ? 'translate-x-12' : 
    direction === 'right' ? '-translate-x-12' : 'translate-y-0';

  return (
    <div
      ref={domRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${startTranslate}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- Local Data for New Features ---
const promoBundles = [
  {
    id: 'startup',
    name: 'Startup Launch Kit',
    price: '₹15,000',
    description: 'Everything a new business needs to make a physical and digital splash.',
    items: ['Logo Design (2 Concepts)', 'Business Card Design', 'Letterhead & Envelope', '2 Social Media Post Templates']
  },
  {
    id: 'event',
    name: 'Event Mega Bundle',
    price: '₹25,000',
    description: 'Dominate your next trade show or corporate event with cohesive branding.',
    items: ['3D Exhibition Stall Design', '2 Standee/Roll-up Banners', 'Event Flyer Design', 'Custom ID Badges/Lanyards']
  },
  {
    id: 'retail',
    name: 'Retail Booster Pack',
    price: '₹12,000',
    description: 'Drive foot traffic and boost in-store sales with striking promotional graphics.',
    items: ['Storefront Poster Design', 'Product Catalog (Up to 8 Pages)', 'Promotional Danglers', 'Packaging Label Refresh']
  }
];

const promoFaqs = [
  { question: "What is the typical turnaround time for promotional print designs?", answer: "Standard flyers and posters take 2-3 business days. Comprehensive exhibition stalls or multi-page catalogs may take 1-2 weeks depending on feedback." },
  { question: "Do you handle the actual printing?", answer: "We are a design agency. We provide you with 100% print-ready, high-resolution files (PDF, TIFF, AI) with proper bleed margins that you can take to any global printer." },
  { question: "Can we request custom dimensions for our banners?", answer: "Absolutely. Just provide us with the exact dimensions required by your vendor or event organizer, and we will scale the designs precisely to those specifications." }
];

// --- Main Page Component ---
export default function PromotionsPage() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Feature 1: Live Search State
  const [searchTerm, setSearchTerm] = useState('');
  
  // Feature 2: Active Bundle Tab State
  const [activeBundle, setActiveBundle] = useState(promoBundles[0].id);

  // Feature 3: FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.scrollTo(0, 0); // Ensure page loads at the top
    return () => clearTimeout(timeout);
  }, []);

  // Filter logic for the search bar
  const filteredServices = promotionServices.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // NEW: Smart routing logic to connect promotional services to specific portfolio galleries
  const getGallerySlug = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('brochure') || lowerTitle.includes('flyer') || lowerTitle.includes('catalog')) return '/our-work/brochure-design';
    if (lowerTitle.includes('packaging') || lowerTitle.includes('label')) return '/our-work/packaging-design';
    if (lowerTitle.includes('social') || lowerTitle.includes('digital') || lowerTitle.includes('banner')) return '/our-work/social-media-graphics';
    return '/our-work'; // Fallback to main portfolio
  };

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Dynamic Hero Banner */}
      <section className="relative bg-teal-600 py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/30 to-teal-600"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className={`text-4xl md:text-6xl font-black tracking-tight uppercase drop-shadow-xl transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Promotional <span className="text-teal-200">Design</span>
          </h1>
          <p className={`mt-8 text-teal-50 font-bold tracking-[0.2em] uppercase text-sm md:text-base transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2">/</span> Promotions
          </p>
        </div>
      </section>

      {/* 2. Intro & Live Search Section */}
      <section className="py-24 text-center bg-gray-50 border-b border-gray-200">
        <FadeInView delay={0}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Marketing Materials that <span className="text-teal-600">Convert</span>
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8 rounded"></div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Whether you are launching a new product, attending an international exhibition, or running a local print campaign, our promotional design services are engineered to capture attention and drive real business results.
            </p>

            {/* LIVE SEARCH FEATURE */}
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search promotional services (e.g., 'Flyer', 'Stall')..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-8 py-5 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 shadow-sm text-gray-700 font-medium"
              />
              <svg className="w-6 h-6 text-gray-400 absolute right-8 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* 3. Zig-Zag Services List (Filtered) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div key={service.id} className="mb-32 last:mb-0 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  
                  {/* Text Content */}
                  <FadeInView delay={100} direction={index % 2 === 0 ? 'right' : 'left'}>
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <span className="text-sm font-black text-teal-600 tracking-[0.2em] uppercase mb-4 block">
                        Service 0{index + 1}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight uppercase">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-4 mb-10">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-800 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-teal-300 transition-colors duration-300">
                            <svg className="w-6 h-6 text-teal-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* TWO FULLY FUNCTIONAL BUTTONS */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Button 1: Routes to Contact page */}
                        <Link 
                          to={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="inline-flex justify-center items-center px-8 py-4 bg-teal-600 text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-md"
                        >
                          Start Project
                          <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                          </svg>
                        </Link>

                        {/* Button 2: Routes to Dynamic Gallery */}
                        <Link 
                          to={getGallerySlug(service.title)} 
                          className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-extrabold text-sm uppercase tracking-widest rounded-xl hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
                        >
                          View Gallery
                        </Link>
                      </div>

                    </div>
                  </FadeInView>

                  {/* Image Mockup */}
                  <FadeInView delay={300} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative aspect-square lg:aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
                        <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </FadeInView>

                </div>

                {index !== filteredServices.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-teal-200 to-transparent"></div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-black text-gray-500 tracking-tight">No promotional services match "{searchTerm}"</h3>
              <button 
                onClick={() => setSearchTerm('')} 
                className="mt-6 inline-flex items-center px-8 py-3 bg-teal-50 text-teal-600 font-bold rounded-full hover:bg-teal-100 transition-colors uppercase tracking-widest text-sm"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Interactive Promo Bundles (Tabs) */}
      <section className="py-32 bg-gray-900 text-white border-t-8 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                Popular <span className="text-teal-400">Promo Bundles</span>
              </h2>
              <p className="mt-6 text-gray-400 text-lg font-light">Save money and maintain brand consistency by bundling your promotional designs.</p>
            </div>
          </FadeInView>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Tab Controls */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {promoBundles.map(bundle => (
                <button
                  key={bundle.id}
                  onClick={() => setActiveBundle(bundle.id)}
                  className={`px-8 py-6 text-left font-black rounded-2xl transition-all duration-300 text-lg uppercase tracking-wide ${
                    activeBundle === bundle.id 
                      ? 'bg-teal-600 text-white shadow-xl transform translate-x-2' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                  }`}
                >
                  {bundle.name}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="w-full md:w-2/3 bg-gray-800 p-8 md:p-14 rounded-[2rem] border border-gray-700 shadow-2xl min-h-[300px]">
              {promoBundles.map(bundle => (
                activeBundle === bundle.id && (
                  <div key={bundle.id} className="animate-[fadeIn_0.5s_ease-out]">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 border-b border-gray-700 pb-8">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">{bundle.name}</h3>
                        <p className="text-teal-400 mt-4 text-lg font-light">{bundle.description}</p>
                      </div>
                      <div className="text-5xl font-black text-white mt-6 xl:mt-0 tracking-tighter">{bundle.price}</div>
                    </div>
                    
                    <h4 className="font-black text-gray-400 mb-6 uppercase tracking-widest text-sm">What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {bundle.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-200 font-medium">
                          <svg className="w-6 h-6 text-teal-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Works perfectly: Routes to contact page with the bundle parameter */}
                    <Link 
                      to={`/contact?bundle=${encodeURIComponent(bundle.name)}`} 
                      className="w-full sm:w-auto inline-flex justify-center px-10 py-5 bg-teal-500 text-gray-900 font-black rounded-full hover:bg-teal-400 hover:shadow-lg transition-all duration-300 uppercase tracking-widest text-sm hover:-translate-y-1"
                    >
                      Request This Bundle
                    </Link>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Promotional FAQs (Accordion) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Promo Design FAQs</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {promoFaqs.map((faq, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div 
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-teal-500 shadow-md' : 'border-gray-200 shadow-sm hover:border-teal-300'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-8 ${openFaq === index ? 'text-teal-600' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400'}`}>
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 text-gray-600 border-t border-gray-100 pt-6 font-light leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ReadyToStart />
    </main>
  );
}