import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  // 1. State to trigger entrance animations on load
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animations slightly after the component mounts for a smooth effect
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // 2. Smooth Scroll Function for the "Explore" button
  const handleScrollToServices = () => {
    // This will scroll down by roughly the height of the hero section.
    // Alternatively, you can add id="services" to your CreativeServices component and use document.getElementById('services').scrollIntoView()
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white overflow-hidden pt-24 pb-32 flex items-center min-h-[75vh]">
      
      {/* Animated Background Map/Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        {/* The 'animate-pulse' or a custom floating animation gives it life */}
        <div 
          className="w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-30 transform -rotate-6 transition-transform duration-[10000ms]" 
          style={{ transform: isMounted ? 'rotate(0deg) scale(1.1)' : 'rotate(-5deg) scale(1)' }}
        />
      </div>

      {/* Decorative Glowing Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Small Eyebrow Text */}
        <div className={`transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 border border-teal-400/30 text-teal-100 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Welcome to Dzine House
          </span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Creative Graphic Design Company <span className="text-teal-100 relative inline-block">in India
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-300 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/>
            </svg>
          </span>
        </h1>
        
        {/* Sub-headline */}
        <h2 className={`text-xl md:text-3xl font-bold mb-8 text-teal-50 drop-shadow-md transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Creative Design <span className="text-teal-200">&bull;</span> Brand Identity <span className="text-teal-200">&bull;</span> Since 1990
        </h2>
        
        {/* Description Text */}
        <p className={`text-base md:text-xl text-teal-50 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          We are globally recognized as a top graphic design company in India, offering professional design services to elevate your brand presence from digital pixels to physical prints.
        </p>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Primary Button - Smooth Scrolls Down */}
          <button 
            onClick={handleScrollToServices}
            className="w-full sm:w-auto bg-white text-teal-700 px-8 py-4 rounded-full font-extrabold shadow-xl hover:bg-gray-50 hover:text-teal-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide flex items-center justify-center group"
          >
            Explore Our Services
            <svg className="w-5 h-5 ml-2 text-teal-500 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Secondary Button - Routes to Contact Page */}
          <Link 
            to="/contact"
            className="w-full sm:w-auto bg-transparent border-2 border-teal-100 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 hover:border-teal-700 hover:shadow-lg transition-all duration-300 uppercase tracking-wide flex items-center justify-center group"
          >
            Start A Project
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}