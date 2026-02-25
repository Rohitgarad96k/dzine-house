import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReadyToStart from '../components/ReadyToStart';
import { brandServices, brandPackages, brandFaqs } from '../data/data';

// --- Custom Scroll Animation Wrapper ---
function FadeInView({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const startTranslate = 
    direction === 'up' ? 'translate-y-16' : 
    direction === 'left' ? 'translate-x-12' : 
    direction === 'right' ? '-translate-x-12' : 'translate-y-0';

  return (
    <div
      ref={domRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${startTranslate}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- Local Data for Interactive Sections ---
const anatomySteps = [
  { id: 1, title: 'Brand Strategy', subtitle: 'The Foundation', description: 'Before we draw a single pixel, we dive deep into your market. We define your target audience, analyze competitors, and establish your core brand positioning, mission, and voice.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 2, title: 'Visual Identity', subtitle: 'The Face', description: 'This is where strategy becomes art. We design your primary logo, secondary marks, select your exact typography pairings, and build a psychological color palette that evokes the right emotions.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 3, title: 'Brand Application', subtitle: 'The Experience', description: 'We map your new identity across real-world touchpoints. Business cards, letterheads, packaging, social media templates, and website UI mockups ensure the brand works flawlessly everywhere.', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
  { id: 4, title: 'The Rulebook', subtitle: 'The Guardian', description: 'We deliver a comprehensive Brand Guidelines PDF. This rulebook dictates exactly how your logo, colors, and fonts must be used, ensuring your team and future vendors never dilute your brand.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
];

const quizQuestions = [
  "Are you embarrassed to hand out your current business card?",
  "Has your business model, product line, or target audience changed?",
  "Does your brand blend in seamlessly with your competitors?",
  "Is your logo pixelated, hard to read, or lacking a transparent background?",
  "Do your social media, website, and print materials all look slightly different?"
];

export default function BrandPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Interactive States
  const [activeAnatomy, setActiveAnatomy] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState(new Array(quizQuestions.length).fill(false));

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.scrollTo(0, 0); // Ensure page loads at the top
    return () => clearTimeout(timeout);
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const handleQuizChange = (index) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = !newAnswers[index];
    setQuizAnswers(newAnswers);
  };

  const quizScore = quizAnswers.filter(Boolean).length;

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Bright Teal Hero Banner */}
      <section className="relative bg-teal-600 pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/30 to-teal-600"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className={`text-4xl md:text-6xl font-black tracking-tight uppercase drop-shadow-xl transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Brand Identity <span className="text-teal-200">&</span> Logo
          </h1>
          <p className={`mt-8 text-teal-50 font-bold tracking-[0.2em] uppercase text-sm md:text-base transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2">/</span> Branding
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Intro */}
      <section className="py-24 text-center bg-gray-50 border-b border-gray-200">
        <FadeInView delay={0}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight leading-tight">
              We Don't Just Design Logos.<br/> <span className="text-teal-600 border-b-4 border-teal-200">We Build Legacies.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              In a crowded market, a strong brand is your ultimate unfair advantage. We craft cohesive visual systems that capture your essence, establish immediate trust, and turn casual viewers into loyal advocates. Your brand is what people say about you when you're not in the room. Let's make sure they say the right things.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* 3. The Brand Anatomy (Interactive Blueprint) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
                The Brand <span className="text-teal-600">Anatomy</span>
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 mb-6 rounded"></div>
              <p className="text-gray-600 text-lg font-light">A world-class brand is more than a logo. Explore our four-step blueprint for building comprehensive market identities.</p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Timeline Tabs */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {anatomySteps.map((step, index) => (
                <FadeInView key={step.id} delay={index * 150} direction="right">
                  <button 
                    onClick={() => setActiveAnatomy(step.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group ${
                      activeAnatomy === step.id 
                        ? 'border-teal-500 bg-teal-50 shadow-md transform translate-x-2' 
                        : 'border-transparent bg-gray-50 hover:bg-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mr-5 transition-colors shadow-sm ${
                        activeAnatomy === step.id ? 'bg-teal-600 text-white' : 'bg-white text-gray-400 group-hover:text-teal-600 group-hover:border-teal-200 border border-transparent'
                      }`}>
                        0{step.id}
                      </div>
                      <div>
                        <h4 className={`font-black text-xl tracking-tight ${activeAnatomy === step.id ? 'text-teal-900' : 'text-gray-900'}`}>{step.title}</h4>
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-400">{step.subtitle}</span>
                      </div>
                    </div>
                  </button>
                </FadeInView>
              ))}
            </div>

            {/* Dynamic Content Display */}
            <div className="lg:col-span-7 h-full min-h-[400px]">
              {anatomySteps.map((step) => (
                activeAnatomy === step.id && (
                  <div key={step.id} className="bg-gray-900 text-white p-10 md:p-16 rounded-3xl h-full flex flex-col justify-center shadow-2xl relative overflow-hidden animate-[fadeIn_0.5s_ease-out]">
                    <div className="absolute -bottom-10 -right-10 opacity-10 text-teal-400">
                       <svg className="w-96 h-96" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={step.icon} />
                       </svg>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/30">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                        </svg>
                      </div>
                      <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">{step.title}</h3>
                      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Zig-Zag Services Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
             <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900">Our Core Deliverables</h2>
               <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
             </div>
          </FadeInView>
          
          {brandServices.map((service, index) => (
            <div key={service.id} className="mb-32 last:mb-0 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                <FadeInView delay={100} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-sm font-black text-teal-600 tracking-[0.2em] uppercase mb-4 block">
                      Deliverable 0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-800 font-bold bg-white shadow-sm p-4 rounded-xl border border-gray-100 hover:border-teal-300 transition-colors duration-300">
                          <svg className="w-6 h-6 text-teal-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* TWO FULLY FUNCTIONAL BUTTONS FOR EACH SERVICE */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Button 1: Routes to Contact page with parameter */}
                      <Link 
                        to={`/contact?service=${encodeURIComponent(service.title)}`} 
                        className="inline-flex justify-center items-center px-8 py-4 bg-teal-600 text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                      >
                        Start Project
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                        </svg>
                      </Link>

                      {/* Button 2: Dynamic route to the portfolio gallery */}
                      <Link 
                        to={service.title.toLowerCase().includes('logo') ? '/our-work/logo-design' : '/our-work'} 
                        className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-extrabold text-sm uppercase tracking-widest rounded-xl hover:border-teal-500 hover:text-teal-600 transition-all duration-300"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </FadeInView>

                <FadeInView delay={300} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-square lg:aspect-[4/3] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
                      <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </FadeInView>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive "Rebrand Health Check" Quiz */}
      <section className="py-24 bg-teal-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 drop-shadow-md">
                Is It Time For A Rebrand?
              </h2>
              <p className="text-teal-100 text-lg">Take our 10-second brand health check. Check the boxes that apply to your business.</p>
            </div>
          </FadeInView>

          <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-4 mb-10">
              {quizQuestions.map((question, index) => (
                <label 
                  key={index} 
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${quizAnswers[index] ? 'bg-teal-50 border-teal-500 shadow-sm' : 'bg-gray-50 border-gray-200 hover:border-teal-300'}`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center mr-4 mt-0.5 shrink-0 transition-colors ${quizAnswers[index] ? 'bg-teal-600 text-white' : 'bg-white border-2 border-gray-300'}`}>
                    {quizAnswers[index] && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={quizAnswers[index]} 
                    onChange={() => handleQuizChange(index)} 
                  />
                  <span className={`font-semibold ${quizAnswers[index] ? 'text-teal-900' : 'text-gray-700'}`}>{question}</span>
                </label>
              ))}
            </div>

            {/* Dynamic Results Box */}
            <div className="border-t-2 border-gray-100 pt-8 text-center">
              <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                Your Score: <span className={quizScore > 2 ? 'text-red-500' : 'text-teal-600'}>{quizScore} / 5</span>
              </h3>
              
              {quizScore === 0 ? (
                <p className="text-gray-500 font-medium">Your brand is looking incredibly healthy! Keep up the great work.</p>
              ) : quizScore <= 2 ? (
                <div className="animate-[fadeIn_0.5s]">
                  <p className="text-gray-600 font-medium mb-6">You have a solid foundation, but there's room for optimization. A brand refresh might be the edge you need.</p>
                  <Link to="/contact?service=Brand%20Refresh" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase hover:bg-teal-600 transition-colors tracking-widest text-sm shadow-md hover:-translate-y-1">Discuss a Brand Refresh</Link>
                </div>
              ) : (
                <div className="animate-[fadeIn_0.5s]">
                  <p className="text-red-600 font-bold mb-6 text-lg">Warning: Your brand identity is actively holding your business back. It's time for a professional rebrand.</p>
                  <Link to="/contact?service=Enterprise%20Rebrand" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-sm">Schedule Free Consultation</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Branding Specific Pricing / Packages */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-gray-900">
                Branding <span className="text-teal-600">Packages</span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg font-light">Clear, transparent pricing designed to fit the scale of your ambition.</p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {brandPackages.map((pkg, index) => (
              <FadeInView key={pkg.name} delay={index * 200} direction="up">
                <div className={`relative p-8 md:p-10 rounded-3xl bg-white border flex flex-col h-full transition-all duration-300 ${
                  pkg.isPopular ? 'border-teal-500 shadow-2xl shadow-teal-900/10 md:-translate-y-4 border-2' : 'border-gray-200 shadow-sm hover:border-teal-300'
                }`}>
                  
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-600 text-white text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                        Highly Recommended
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm h-10 mb-6 font-light">{pkg.description}</p>
                  <div className="text-4xl md:text-5xl font-black text-teal-600 mb-8 border-b border-gray-100 pb-8 tracking-tighter">
                    {pkg.price}
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 font-medium text-sm">
                        <svg className="w-5 h-5 text-teal-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/contact?package=${encodeURIComponent(pkg.name)}`} 
                    className={`w-full text-center py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 ${
                      pkg.isPopular 
                        ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-1'
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Branding FAQs (Accordion) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Branding FAQs</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {brandFaqs.map((faq, index) => (
              <FadeInView key={index} delay={index * 100} direction="up">
                <div 
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-teal-500 shadow-md' : 'border-gray-200 shadow-sm hover:border-teal-300'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-8 ${openFaq === index ? 'text-teal-600' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400'}`}>
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 text-gray-600 border-t border-gray-100 pt-6 leading-relaxed text-lg font-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Standard CTA */}
      <ReadyToStart />
    </main>
  );
}