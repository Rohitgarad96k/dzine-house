import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReadyToStart from '../components/ReadyToStart';
import { digitalServices, digitalPackages, digitalFaqs } from '../data/data';

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

// --- Digital Audit Questions ---
const auditQuestions = [
  "Does your website take more than 3 seconds to load?",
  "Does your site look broken or squished on mobile devices?",
  "Are your visitors leaving without filling out your contact form?",
  "Does your social media feed look inconsistent or unbranded?",
  "Is it hard for users to find what they are looking for in under 2 clicks?"
];

export default function DigitalPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [auditAnswers, setAuditAnswers] = useState(new Array(auditQuestions.length).fill(false));

  // NEW: State for interactive Pricing Cards (Defaults to the 'isPopular' package)
  const [selectedPackage, setSelectedPackage] = useState(() => {
    const popular = digitalPackages.find(p => p.isPopular);
    return popular ? popular.name : (digitalPackages[1]?.name || '');
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.scrollTo(0, 0); // Ensure page loads at the top
    return () => clearTimeout(timeout);
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const handleAuditChange = (index) => {
    const newAnswers = [...auditAnswers];
    newAnswers[index] = !newAnswers[index];
    setAuditAnswers(newAnswers);
  };

  const auditScore = auditAnswers.filter(Boolean).length;

  // Smart routing logic to connect digital services to specific portfolio galleries
  const getGallerySlug = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('social') || lowerTitle.includes('post') || lowerTitle.includes('banner')) {
      return '/our-work/social-media-graphics';
    }
    return '/our-work'; 
  };

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Tech-Focused Hero Banner */}
      <section className="relative bg-gray-900 py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        {/* Tech Glowing Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase drop-shadow-2xl transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">& UI/UX</span> Design
          </h1>
          <p className={`mt-8 text-gray-300 font-bold tracking-[0.2em] uppercase text-sm md:text-base transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2">/</span> Digital
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Intro */}
      <section className="py-24 text-center bg-gray-50 border-b border-gray-200">
        <FadeInView delay={0}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tight leading-tight">
              Aesthetics Meet <span className="text-teal-600 border-b-4 border-teal-200">Usability.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              Your digital presence is your 24/7 salesperson. We design intuitive, high-converting digital experiences—from pixel-perfect website interfaces to engaging social media ecosystems—that turn passive scrollers into active buyers.
            </p>
          </div>
        </FadeInView>
      </section>

      {/* 3. Zig-Zag Core Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
             <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900">Digital Deliverables</h2>
               <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
             </div>
          </FadeInView>
          
          {digitalServices.map((service, index) => (
            <div key={service.id} className="mb-32 last:mb-0 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                <FadeInView delay={100} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-sm font-black text-teal-600 tracking-[0.2em] uppercase mb-4 block">
                      Deliverable 0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight uppercase">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-800 font-bold bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-teal-300 transition-colors duration-300">
                          <svg className="w-6 h-6 text-teal-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* TWO FULLY FUNCTIONAL BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Button 1: Routes to Contact page with parameter */}
                      <Link 
                        to={`/contact?service=${encodeURIComponent(service.title)}`} 
                        className="inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-teal-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group shadow-md"
                      >
                        Start Project
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                        </svg>
                      </Link>

                      {/* Button 2: Dynamic route to the portfolio gallery */}
                      <Link 
                        to={getGallerySlug(service.title)} 
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

      {/* 4. Interactive "Website UX Audit" Checklist */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 drop-shadow-md">
                Is Your Website Losing You Money?
              </h2>
              <p className="text-teal-100 text-lg">Check any of the symptoms below that apply to your current digital presence.</p>
            </div>
          </FadeInView>

          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-4 mb-10">
              {auditQuestions.map((question, index) => (
                <label 
                  key={index} 
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${auditAnswers[index] ? 'bg-teal-900/50 border-teal-500 shadow-sm' : 'bg-gray-800 border-gray-600 hover:border-gray-500'}`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center mr-4 mt-0.5 shrink-0 transition-colors ${auditAnswers[index] ? 'bg-teal-500 text-white' : 'bg-gray-800 border-2 border-gray-500'}`}>
                    {auditAnswers[index] && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={auditAnswers[index]} 
                    onChange={() => handleAuditChange(index)} 
                  />
                  <span className={`font-semibold ${auditAnswers[index] ? 'text-teal-300' : 'text-gray-300'}`}>{question}</span>
                </label>
              ))}
            </div>

            {/* Dynamic Results Box */}
            <div className="border-t-2 border-gray-700 pt-8 text-center">
              <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                UX Danger Score: <span className={auditScore > 2 ? 'text-red-400' : 'text-teal-400'}>{auditScore} / 5</span>
              </h3>
              
              {auditScore === 0 ? (
                <p className="text-gray-400 font-medium">Your digital presence seems highly optimized. You're ready to scale!</p>
              ) : auditScore <= 2 ? (
                <div className="animate-[fadeIn_0.5s]">
                  <p className="text-gray-300 font-medium mb-6">You have some UX friction points. A UI refresh could significantly boost your conversion rate.</p>
                  <Link to="/contact?service=UI/UX%20Audit" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-bold uppercase hover:bg-teal-500 transition-colors tracking-widest text-sm shadow-md hover:-translate-y-1">Request a UX Audit</Link>
                </div>
              ) : (
                <div className="animate-[fadeIn_0.5s]">
                  <p className="text-red-400 font-bold mb-6 text-lg">Warning: Your digital UI is likely driving customers to your competitors. It's time for a redesign.</p>
                  <Link to="/contact?service=Website%20Redesign" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-teal-400 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-sm">Discuss a Redesign</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE Digital Pricing / Packages */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
                Digital <span className="text-teal-600">Packages</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg font-light">From monthly social media graphics to complete website redesigns.</p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
            {digitalPackages.map((pkg, index) => {
              // Determine if this specific package is currently the one selected
              const isSelected = selectedPackage === pkg.name;

              return (
                <FadeInView key={pkg.name} delay={index * 200} direction="up">
                  <div 
                    onClick={() => setSelectedPackage(pkg.name)}
                    className={`relative p-8 md:p-10 rounded-3xl bg-white border flex flex-col h-full cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'border-teal-500 shadow-2xl md:-translate-y-4 border-2 z-10' 
                        : 'border-gray-200 hover:border-teal-300 shadow-sm opacity-90 hover:opacity-100'
                    }`}
                  >
                    
                    {/* Dynamic Floating Badge */}
                    {isSelected && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300">
                        <span className="bg-teal-600 text-white text-xs font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-md">
                          {pkg.isPopular ? 'Best Value' : 'Selected'}
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Prevents the div onClick from firing if the user actually clicks the specific button to route */}
                    <Link 
                      to={`/contact?package=${encodeURIComponent(pkg.name)}`} 
                      onClick={(e) => e.stopPropagation()} 
                      className={`w-full text-center py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 mt-auto ${
                        isSelected 
                          ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-1'
                      }`}
                    >
                      Select Package
                    </Link>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Digital FAQs (Accordion) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Digital FAQs</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {digitalFaqs.map((faq, index) => (
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 text-gray-600 border-t border-gray-100 pt-6 font-light leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Standard CTA */}
      <ReadyToStart />
    </main>
  );
}