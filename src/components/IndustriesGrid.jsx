import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/data'; // Import centralized data

export default function IndustriesGrid() {
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
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Industries We Work With
          </h2>
          <div className={`w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-gray-600 text-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Experience across diverse sectors, delivering designs that speak your industry's language.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {industries.map((industry, index) => (
            <Link 
              to={`/our-work?industry=${industry.slug}`} // Functional Route Link
              key={industry.id} 
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered cascade animation
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-teal-500">
                {industry.icon}
              </div>
              <span className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-teal-600 transition-colors duration-300 text-center">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}