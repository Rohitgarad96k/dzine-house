import React, { useState, useEffect, useRef } from 'react';
import ReadyToStart from '../components/ReadyToStart';
import { aboutSkills, aboutWorkSteps } from '../data/data'; // <-- Import centralized data

export default function AboutPage() {
  // --- SCROLL ANIMATION STATE ---
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Trigger animation when the skills section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-sans bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 py-24 overflow-hidden">
        {/* Decorative background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase drop-shadow-md">
            About Us
          </h1>
          <div className="inline-block bg-white text-teal-600 font-bold px-6 py-2 rounded-full text-sm md:text-lg tracking-widest uppercase shadow-lg transform hover:scale-105 transition-transform duration-300">
            Dzine House
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-teal-600 mb-2 uppercase tracking-wide">
            About Dzine House
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-12 uppercase tracking-wider">
            Graphics, Logos, Designing and much more
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Who we are.</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Dzine House is the inception of a dynamic agenda in the arena of visual branding. It is born of absolute intent that sets out to visually appeal to potential audiences and provide form to identity. There have been times when we reflect on redesign, and recreate as we surface again scaled with an upgraded overall real-time design edge.
          </p>
        </div>
      </section>

      {/* 3. Dark Split Section: History & Skills */}
      <section className="py-24 bg-gray-900 text-gray-300 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Timeline */}
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-teal-500 mr-4 group-hover:w-12 transition-all duration-300"></span>
                  Our History
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 pl-12 border-l border-gray-700">
                  We are rooted in the belief that every design has a language unique to its information. Since our humble start, we focused on learning various facets of visual language to reach our current phase of establishing our core services and providing an ideal platform for creative potential.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-teal-500 mr-4 group-hover:w-12 transition-all duration-300"></span>
                  Our Present
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 pl-12 border-l border-gray-700">
                  We are well established and constantly looking for new creative heights. Dzine House stands for creativity, design, brand presence, and visual communication. We strive to provide custom and unique results for every project.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-1 bg-teal-500 mr-4 group-hover:w-12 transition-all duration-300"></span>
                  Our Future
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 pl-12 border-l border-teal-500">
                  To continue defining boundaries in the aesthetic space, direct more focus to functional UI/UX developments, and continue building long-term sustainable brand presence for businesses across the globe.
                </p>
              </div>
            </div>

            {/* Right Column: Skills Progress Bars (Animated) */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-bold text-white mb-10">Our Expertise</h3>
              <div className="space-y-6">
                {aboutSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-white tracking-wider">{skill.name}</span>
                      <span className="text-xs font-bold text-teal-400">
                        {skillsVisible ? `${skill.level}%` : '0%'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 shadow-inner overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-teal-400 to-teal-600 h-full rounded-full transition-all duration-1500 ease-out" 
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Us & Founder Note */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 uppercase">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8 rounded"></div>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg italic">
              "What separates Dzine House from other Design Agencies is our Great customer service and resources that we have made available for you to interact with us. We treat each client as the most important and no demands are out of bounds."
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              "We make very reasonable efforts to answer emails and return calls in step with design studios. I want to assure not the cheapest creative partners, but our priority is to add impeccable value to your business within set Indian market."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Letter */}
            <div className="text-base text-gray-600 leading-relaxed space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-bold text-gray-900 text-lg">Hello Readers,</p>
              <p>
                Welcome to Dzine House! I am the founder here. Over the past few years, the evolving landscape of graphic design has shifted from traditional print media to advanced digital UI/UX spaces. Seeing the growth of young creative minds exploring design is fantastic.
              </p>
              <p>
                Creative designing is about translating the vision of an entity into visual elements that reflect core values. Time is changing rapidly and the current business landscape demands more than just basic visuals; they require strategic design that tells a story and converts.
              </p>
              <p>
                We look forward to an opportunity to welcome you. Our dedicated team of designing heads is determined to meet and exceed all expectations regarding your graphic design needs when you align with us.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-bold text-gray-900">Sincerely,</p>
                <p className="text-teal-600 font-bold text-lg mt-1">[Founder Name]</p>
                <p className="text-sm uppercase tracking-wide">Founder & CEO</p>
                <p className="text-sm uppercase tracking-wide">Dzine House</p>
              </div>
            </div>

            {/* Founder Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white border-[12px] border-teal-50 shadow-2xl overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-teal-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <span className="text-gray-400 font-medium text-sm text-center px-4 z-0">
                   [Founder Portrait Image Placeholder]
                 </span>
                 {/* Replace with real image: */}
                 {/* <img src="/assets/founder.jpg" alt="Founder of Dzine House" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" /> */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight">How we work</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {aboutWorkSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-teal-100">
                <div className="w-16 h-16 bg-teal-600 text-white font-extrabold text-2xl flex items-center justify-center rounded-2xl mb-6 transform -translate-y-12 shadow-xl shadow-teal-500/30 ring-4 ring-white">
                  {step.num}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed -mt-6">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Passionate Closing Text */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">We work passionately to provide you with best work possible</h3>
          <p className="text-sm leading-relaxed mb-6">
            What separates Dzine House from other Designing firms is our great customer service, our estimates are how we accurately cost the works we base both them on. We have an unwritten rule: if we are over the baseline we never charge cost out of allowances.
          </p>
          <p className="text-sm leading-relaxed border-t border-gray-700 pt-6 mt-6">
            Please take very reasonable time to contact us. I personally will assure you everything from graphic identity to online. We want to ensure that those programs we run there are no bounds which are beyond bounds... <strong className="text-teal-400 font-semibold">our job is making you stand out with best design!</strong>
          </p>
        </div>
      </section>

      {/* 7. Re-used CTA Bar matching "Start your project today!" */}
      <ReadyToStart />
      
    </main>
  );
}