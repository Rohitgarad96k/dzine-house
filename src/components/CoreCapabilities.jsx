import React, { useState, useEffect, useRef } from 'react';
import { coreCapabilities } from '../data/data'; // Import centralized data

export default function CoreCapabilities() {
  // State to manage scroll animation visibility
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
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
    <section className="py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Heading and Infographic */}
          <div 
            className={`flex flex-col space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Our Core Capabilities
              </h2>
              <div className="w-16 h-1 bg-teal-500 rounded mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We bring over three decades of design excellence to the table. Our comprehensive suite of graphic design services is tailored to help your business establish a commanding visual presence in the market.
              </p>
            </div>

            {/* Placeholder for the complex circular infographic. 
                In a real project, you would export the SVG cluster from Figma 
                and place it here to ensure it scales perfectly without pixelation. */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 bg-gray-50 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200 group hover:border-teal-300 transition-colors duration-500">
              <span className="text-gray-400 text-sm font-medium group-hover:text-teal-600 transition-colors duration-300">
                [Insert Circular Infographic SVG]
              </span>
              {/* Example of how the image tag will look: 
              <img src="/assets/core-capabilities-graphic.svg" alt="Core Capabilities Infographic" className="w-full h-auto object-contain transform group-hover:rotate-12 transition-transform duration-700" /> 
              */}
            </div>
          </div>

          {/* Right Column: Capabilities List */}
          <div className="flex flex-col space-y-10">
            {coreCapabilities.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex group transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation effect
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white text-teal-600 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                    {item.icon}
                  </div>
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}