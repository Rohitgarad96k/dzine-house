import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { trustPoints } from '../data/data'; // Import centralized data

export default function WhyTrustUs() {
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
        
        {/* Animated Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Why Brands Trust Us
          </h2>
          <div className={`w-24 h-1 bg-teal-500 mx-auto mt-4 rounded transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Trust Points Grid */}
          <div className="flex flex-col space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {trustPoints.map((point, index) => (
                <div 
                  key={point.id} 
                  className={`flex flex-col group transform transition-all duration-700 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }} // Staggered entry
                >
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white text-teal-600 transition-colors duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transform">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Added Functional CTA Button */}
            <div className={`pt-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all duration-300 group uppercase tracking-wide text-sm"
              >
                Learn More About Us
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Illustration Area with continuous floating animation */}
          <div 
            className={`relative w-full aspect-video lg:aspect-square max-h-[500px] bg-gradient-to-br from-teal-50 to-gray-50 rounded-3xl flex items-center justify-center border border-teal-100 shadow-lg transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
             {/* Continuous subtle up-and-down floating effect */}
             <div className="animate-[bounce_6s_ease-in-out_infinite] flex flex-col items-center">
               <svg className="w-20 h-20 text-teal-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.118 3.121 8.036-8.036-1.06-1.06-6.971 6.972z"/>
               </svg>
               <span className="text-teal-600/50 font-bold uppercase tracking-widest text-sm text-center px-6">
                 [Insert Handshake or Partnership Graphic]
               </span>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="absolute top-10 left-10 w-24 h-24 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             
             {/* Real Image Tag Setup (Uncomment when you have the asset) */}
             {/* <img src="/assets/trust-illustration.png" alt="Partnership Illustration" className="w-full h-full object-contain p-8 animate-[bounce_6s_ease-in-out_infinite]" /> */}
          </div>

        </div>
      </div>
    </section>
  );
}