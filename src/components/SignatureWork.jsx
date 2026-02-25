import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signatureWorkItems } from '../data/data'; // Import centralized data

export default function SignatureWork() {
  // 1. Animation State Management
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 2. Filtering State Management
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Dynamically extract unique categories from your data
  const categories = ['All', ...new Set(signatureWorkItems.map(item => item.category))];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? signatureWorkItems 
    : signatureWorkItems.filter(item => item.category === activeCategory);

  // Trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Signature Work
          </h2>
          <div className={`w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-gray-600 text-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            A glimpse into our portfolio of creative design solutions.
          </p>
        </div>

        {/* Dynamic Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3x3 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative w-full aspect-square overflow-hidden bg-gray-100 rounded-2xl cursor-pointer shadow-sm hover:shadow-2xl transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered entry
            >
              {/* Image */}
              <img 
                src={item.imgUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal-900/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <span className="text-teal-300 text-xs font-bold tracking-widest uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-extrabold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                
                {/* Decorative plus icon on hover */}
                <div className="mt-6 w-10 h-10 rounded-full border border-teal-400/50 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <svg className="w-5 h-5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Fully Functional React Router Link */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Link 
            to="/our-work" 
            className="inline-flex items-center px-10 py-4 bg-white border-2 border-teal-600 text-teal-600 font-extrabold uppercase tracking-widest rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300 group shadow-sm hover:shadow-xl"
          >
            View Full Portfolio
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}