import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { pricingTiers } from '../data/data'; // Import centralized data

export default function PricingTable() {
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
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Transparent Pricing
          </h2>
          <div className={`w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-gray-600 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            High-quality design solutions tailored to fit businesses of all sizes. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-center">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`relative bg-white rounded-2xl p-8 flex flex-col h-full transform transition-all duration-700 ease-out group ${
                tier.highlighted 
                  ? 'border-2 border-teal-500 shadow-2xl md:-translate-y-4' 
                  : 'border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2'
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Staggered entry animation
            >
              
              {/* Highlight Badge */}
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-teal-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center text-gray-900">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.interval && (
                    <span className="text-xl text-gray-500 ml-1 font-medium">
                      {tier.interval}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-teal-500 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Functional CTA Button (React Router Link) */}
              <div className="mt-auto pt-4">
                <Link 
                  to="/contact" // Routes user to contact page to fulfill the order
                  className={`w-full flex items-center justify-center py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg'
                      : 'bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white'
                  }`}
                >
                  {tier.buttonText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}