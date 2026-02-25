import React, { useState, useEffect, useRef } from 'react';
import { processSteps } from '../data/data'; // Import centralized data

export default function CreativeProcess() {
  // Animation State Management
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once when scrolled into view
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
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
            Our Creative Process
          </h2>
          <div className={`w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-gray-600 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            A structured, transparent workflow designed to turn your vision into reality seamlessly.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Base Background Line (Visible on md and up) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

          {/* Animated Connecting Progress Line (Visible on md and up) */}
          <div 
            className="hidden md:block absolute top-8 left-0 h-0.5 bg-teal-500 transform -translate-y-1/2 z-0 transition-all duration-[2000ms] ease-out"
            style={{ width: isVisible ? '100%' : '0%' }}
          ></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center text-center relative group transform transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Staggered animation based on index
              >
                
                {/* Number Circle with Hover Expansion */}
                <div className="w-16 h-16 bg-white border-2 border-teal-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-teal-500 group-hover:bg-teal-50 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative z-10">
                  <span className="text-xl font-extrabold text-teal-600 group-hover:text-teal-700 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">
                  {step.description}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}