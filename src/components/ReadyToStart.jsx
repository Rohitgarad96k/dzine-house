import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ReadyToStart() {
  // Animation State Management
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animations when the user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="relative bg-teal-600 py-16 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Animated Text Content */}
        <div 
          className={`mb-8 md:mb-0 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-sm">
            Ready to Start Your Project?
          </h2>
          <p className="text-teal-100 text-base md:text-lg max-w-xl font-medium">
            Share your requirements and request a custom quote for your project. Our creative team is ready to bring your vision to life.
          </p>
        </div>

        {/* Functional CTA Button (React Router Link) */}
        <div 
          className={`transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-extrabold rounded-full shadow-lg hover:bg-teal-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap uppercase tracking-wide group"
          >
            Start A New Project
            {/* Animated Hover Arrow */}
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </Link>
        </div>
        
      </div>
    </section>
  );
}