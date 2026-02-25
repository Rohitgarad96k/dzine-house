import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioCategories } from '../data/data';
import ReadyToStart from '../components/ReadyToStart';

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

const processSteps = [
  { num: '01', title: 'Discovery & Brief', desc: 'We dive deep into your brand, target audience, and market positioning to establish a rock-solid foundation.' },
  { num: '02', title: 'Conceptualization', desc: 'Our creative team brainstorms and crafts multiple unique concepts tailored specifically to your strategic goals.' },
  { num: '03', title: 'Refinement', desc: 'We collaborate closely with you to refine the chosen direction, polishing every pixel until it aligns perfectly with your vision.' },
  { num: '04', title: 'Final Handoff', desc: 'You receive a comprehensive, high-resolution package with all necessary source files and usage guidelines.' }
];

export default function ServiceDetailPage() {
  const { categorySlug } = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timeout);
  }, [categorySlug]);

  const categoryData = portfolioCategories.find(cat => cat.slug === categorySlug);

  if (!categoryData) {
    return <Navigate to="/our-work" replace />;
  }

  return (
    <main className="font-sans bg-gray-50 min-h-screen relative">
      
      {/* 1. Hero Section */}
      <section className="relative bg-teal-600 pt-40 pb-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/30 to-teal-600"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <Link to="/our-work" className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs tracking-widest uppercase mb-10 hover:bg-white hover:text-teal-700 transition-colors shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Portfolio
          </Link>
          
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight uppercase drop-shadow-xl transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {categoryData.title} <br className="hidden md:block"/> Gallery
          </h1>
          
          <p className={`mt-8 text-teal-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* 2. Core Deliverables */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-bold tracking-widest uppercase text-sm">What You Get</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 uppercase tracking-tight">Core Deliverables</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.features.map((feature, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-teal-400 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 border border-gray-100">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{feature}</h3>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Masonry Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">Recent Work</h2>
              <p className="text-gray-500 mt-4 text-lg">Click on any project to view details.</p>
            </div>
          </FadeInView>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {categoryData.gallery?.map((imgUrl, index) => (
              <div 
                key={index} 
                className={`group relative w-full break-inside-avoid bg-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 ease-out transform border-4 border-white ${
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={imgUrl} 
                  alt={`${categoryData.title} sample ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* UPDATED: Overlay with Link to Project Page */}
                <div className="absolute inset-0 bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="text-teal-100 font-bold tracking-widest uppercase text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">View Project</span>
                  
                  <Link 
                    to={`/project/${categoryData.slug}/${index}`}
                    className="w-16 h-16 rounded-full bg-white text-teal-600 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl hover:bg-teal-600 hover:text-white"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process & CTA Section (Same as before) */}
      <section className="py-24 bg-white border-t border-gray-100">
        {/* ... (Process mapping code remains the same) ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-teal-100 -z-10"></div>
                {processSteps.map((step, index) => (
                    <FadeInView key={index} delay={index * 150} direction="up">
                        <div className="flex flex-col items-center text-center relative z-10 group">
                        <div className="w-24 h-24 bg-white rounded-full border-4 border-teal-100 flex items-center justify-center shadow-sm mb-6 group-hover:border-teal-500 group-hover:bg-teal-50 transition-all duration-500">
                            <span className="text-3xl font-extrabold text-teal-300 group-hover:text-teal-600 transition-colors duration-500">{step.num}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm px-2">{step.desc}</p>
                        </div>
                    </FadeInView>
                ))}
            </div>
            <div className="mt-24 text-center">
                <Link 
                to={`/contact?service=${encodeURIComponent(categoryData.title)}`}
                className="inline-flex items-center px-10 py-5 bg-teal-600 text-white font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-teal-700 hover:shadow-xl transition-all duration-300 group shadow-md"
                >
                Start Your {categoryData.title} Project
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
                </Link>
            </div>
        </div>
      </section>

      <ReadyToStart />
    </main>
  );
}