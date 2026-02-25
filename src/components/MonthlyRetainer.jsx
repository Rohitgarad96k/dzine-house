import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MonthlyRetainer() {
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

  // Quick benefits to display above the button
  const benefits = [
    'Dedicated Design Team',
    'Unlimited Revisions',
    'Fixed Monthly Fee'
  ];

  return (
    <section 
      className="relative py-20 bg-teal-50 border-y border-teal-100 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Headline */}
        <h2 
          className={`text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 uppercase transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Need Design Support <span className="text-teal-600 block sm:inline mt-2 sm:mt-0">on a Monthly Basis?</span>
        </h2>
        
        {/* Animated Sub-headline */}
        <p 
          className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          Our retainership plans are designed to be your plug-and-play design team, offering dedicated support for all your ongoing creative needs without the overhead of hiring in-house.
        </p>

        {/* Benefits List */}
        <div 
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-10 transform transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-teal-700 font-semibold text-sm md:text-base bg-white px-4 py-2 rounded-full shadow-sm border border-teal-100">
              <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </div>
          ))}
        </div>
        
        {/* Functional CTA Button (React Router Link) */}
        <div 
          className={`transform transition-all duration-1000 delay-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-teal-600 border-2 border-teal-600 text-white font-extrabold rounded-full shadow-lg hover:bg-white hover:text-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide group"
          >
            Explore Retainer Plans
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </Link>
        </div>
        
      </div>
    </section>
  );
}