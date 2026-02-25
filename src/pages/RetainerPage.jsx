import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReadyToStart from '../components/ReadyToStart';
import { retainerBenefits, retainerPackages, retainerFaqs } from '../data/data';

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

// --- Local Data for Sections ---
const howItWorks = [
  { step: '01', title: 'Subscribe & Onboard', desc: 'Pick a plan, complete your checkout, and get instant access to your dedicated client portal (Trello/Asana).' },
  { step: '02', title: 'Submit Requests', desc: 'Add as many design requests to your queue as you want. Provide briefs, brand assets, and references.' },
  { step: '03', title: 'Fast Execution', desc: 'Our team gets to work immediately. We deliver most standard graphic requests within 24 to 48 hours.' },
  { step: '04', title: 'Revise & Approve', desc: 'Review the designs. Not perfect? Leave feedback and we will revise it until you are 100% satisfied.' }
];

const scopeIncluded = [
  'Logos & Branding', 'Social Media Graphics', 'UI/UX Wireframes', 'Website Mockups (Figma)', 'Flyers & Brochures', 'Packaging & Labels', 'Slide Decks & Presentations', 'Exhibition Stalls & Standees'
];

const scopeExcluded = [
  'Complex 3D Modeling', 'Video Editing/Animation', 'Website Coding (HTML/CSS)', 'Copywriting/Content Creation', 'Social Media Management (Posting)'
];

export default function RetainerPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Interactive Calculator State
  const [projectsPerMonth, setProjectsPerMonth] = useState(12);

  // NEW: State for interactive Pricing Cards (Defaults to the 'isPopular' package)
  const [selectedPackage, setSelectedPackage] = useState(() => {
    const popular = retainerPackages.find(p => p.isPopular);
    return popular ? popular.name : (retainerPackages[1]?.name || '');
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    window.scrollTo(0, 0); // Ensure page loads at the top
    return () => clearTimeout(timeout);
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // --- Calculator Logic ---
  const freelancerCostPerProject = 4000;
  const traditionalAgencyCostPerProject = 12000;
  
  const totalFreelancerCost = projectsPerMonth * freelancerCostPerProject;
  const totalTraditionalCost = projectsPerMonth * traditionalAgencyCostPerProject;
  
  let dzineCost = 25000;
  let recommendedPlan = 'Part-Time Partner';
  if (projectsPerMonth > 8 && projectsPerMonth <= 20) {
    dzineCost = 50000;
    recommendedPlan = 'Dedicated Design Team';
  } else if (projectsPerMonth > 20) {
    dzineCost = 100000;
    recommendedPlan = 'Enterprise Scale';
  }

  const monthlySavings = totalTraditionalCost - dzineCost;

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-teal-600 py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/50 to-teal-600"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse animation-delay-2000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <span className={`inline-block py-2 px-6 rounded-full bg-white/10 border border-white/30 text-white text-xs font-black tracking-widest uppercase mb-8 backdrop-blur-sm transition-all duration-1000 ease-out shadow-sm ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Unlimited Design. Flat Monthly Fee.
          </span>
          <h1 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase drop-shadow-xl transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Your Dedicated <br/> <span className="text-teal-200">Design Department</span>
          </h1>
          <p className={`mt-8 text-teal-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Get an entire team of senior designers for a fraction of the cost of one full-time employee. Pause or cancel your subscription at any time.
          </p>

          <div className={`mt-10 transition-all duration-1000 delay-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-10 py-5 bg-gray-900 text-white font-black rounded-full shadow-2xl hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              See Pricing Plans
              <svg className="w-5 h-5 ml-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive ROI Cost Calculator */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
                Calculate Your <span className="text-teal-600">Savings</span>
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 mb-6 rounded"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">Adjust the slider below to see how much you save by switching to our flat-rate retainer model compared to traditional outsourcing.</p>
            </div>
          </FadeInView>

          <FadeInView delay={200} direction="up">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
              
              {/* Slider Control */}
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xl font-black text-gray-900 uppercase tracking-tight">Estimated Design Tasks per Month:</label>
                  <span className="text-3xl font-black text-teal-600 bg-teal-50 px-6 py-2 rounded-xl shadow-sm border border-teal-100">{projectsPerMonth}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  value={projectsPerMonth} 
                  onChange={(e) => setProjectsPerMonth(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600 hover:accent-teal-500 transition-all"
                />
              </div>

              {/* Data Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Competitor 1 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center opacity-70">
                  <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-sm">Average Freelancers</h4>
                  <p className="text-3xl font-black text-gray-800">₹{totalFreelancerCost.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Unreliable timelines</p>
                </div>
                
                {/* Competitor 2 */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center opacity-70">
                  <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-sm">Traditional Agency</h4>
                  <p className="text-3xl font-black text-gray-800">₹{totalTraditionalCost.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">Hourly billing & hidden fees</p>
                </div>

                {/* Dzine House */}
                <div className="bg-teal-600 p-6 rounded-2xl border border-teal-500 text-center shadow-lg transform md:-translate-y-2">
                  <h4 className="text-teal-100 font-bold mb-2 uppercase tracking-wide text-sm">Dzine House Retainer</h4>
                  <p className="text-4xl font-black text-white">₹{dzineCost.toLocaleString()}</p>
                  <p className="text-xs text-teal-200 mt-2 font-bold uppercase tracking-widest">Recommended: {recommendedPlan}</p>
                </div>
              </div>

              {/* Savings Output */}
              <div className="text-center pt-8 border-t-2 border-gray-100 border-dashed">
                <h3 className="text-2xl text-gray-600 font-black uppercase tracking-tight">Your Estimated Monthly Savings:</h3>
                <p className="text-5xl md:text-6xl font-black text-teal-600 mt-4 drop-shadow-sm">
                  {dzineCost >= totalTraditionalCost ? 'Flat Rate Security' : `₹${monthlySavings.toLocaleString()}`}
                </p>
                {dzineCost < totalTraditionalCost && (
                  <p className="text-sm text-gray-500 font-medium mt-4">Plus zero HR costs, no benefits to pay, and a team that never calls in sick.</p>
                )}
              </div>

            </div>
          </FadeInView>
        </div>
      </section>

      {/* 3. The "In-House vs Retainer" Reality Check */}
      <section className="py-24 bg-gray-900 text-white border-b-8 border-teal-500">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                  The Reality Check
                </h2>
                <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Bad Side */}
               <FadeInView delay={100} direction="right">
                 <div className="bg-gray-800 border border-gray-700 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
                    <h3 className="text-2xl font-black text-gray-300 mb-6 flex items-center uppercase tracking-tight">
                      <svg className="w-8 h-8 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Hiring In-House
                    </h3>
                    <ul className="space-y-5">
                      <li className="flex text-gray-400 font-medium"><span className="text-red-400 mr-4 font-black text-lg">✕</span> High annual salary (₹6L - ₹15L+)</li>
                      <li className="flex text-gray-400 font-medium"><span className="text-red-400 mr-4 font-black text-lg">✕</span> You pay for software, laptops, and benefits</li>
                      <li className="flex text-gray-400 font-medium"><span className="text-red-400 mr-4 font-black text-lg">✕</span> You pay for sick days, holidays, and downtime</li>
                      <li className="flex text-gray-400 font-medium"><span className="text-red-400 mr-4 font-black text-lg">✕</span> Limited to one single person's skill set</li>
                      <li className="flex text-gray-400 font-medium"><span className="text-red-400 mr-4 font-black text-lg">✕</span> Long, painful hiring and firing processes</li>
                    </ul>
                 </div>
               </FadeInView>

               {/* Good Side */}
               <FadeInView delay={300} direction="left">
                 <div className="bg-white border-4 border-teal-500 p-8 md:p-10 rounded-3xl shadow-2xl shadow-teal-900/30 relative overflow-hidden transform md:-translate-y-4">
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center uppercase tracking-wide">
                      <svg className="w-8 h-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Dzine House Retainer
                    </h3>
                    <ul className="space-y-5">
                      <li className="flex text-gray-800 font-bold"><span className="text-teal-500 mr-4 font-black text-lg">✓</span> Flat, predictable monthly fee</li>
                      <li className="flex text-gray-800 font-bold"><span className="text-teal-500 mr-4 font-black text-lg">✓</span> We cover all our own tools and software</li>
                      <li className="flex text-gray-800 font-bold"><span className="text-teal-500 mr-4 font-black text-lg">✓</span> Access to UI, Print, and Brand specialists</li>
                      <li className="flex text-gray-800 font-bold"><span className="text-teal-500 mr-4 font-black text-lg">✓</span> Unlimited revisions until you're happy</li>
                      <li className="flex text-gray-800 font-bold"><span className="text-teal-500 mr-4 font-black text-lg">✓</span> Pause or cancel anytime. Zero risk.</li>
                    </ul>
                 </div>
               </FadeInView>
            </div>
         </div>
      </section>

      {/* 4. How It Works Timeline */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
             <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900">How The Process Works</h2>
               <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
               <p className="text-gray-500 mt-6 text-lg font-light">A streamlined, asynchronous workflow designed for speed.</p>
             </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             {/* Background Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-teal-200 -z-10"></div>
             
             {howItWorks.map((step, index) => (
               <FadeInView key={index} delay={index * 200}>
                 <div className="flex flex-col items-center text-center relative z-10 group">
                   <div className="w-24 h-24 bg-white rounded-full border-4 border-teal-500 flex items-center justify-center shadow-lg mb-6 group-hover:bg-teal-600 transition-all duration-500 group-hover:scale-110">
                     <span className="text-3xl font-black text-teal-600 group-hover:text-white transition-colors duration-300">{step.step}</span>
                   </div>
                   <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                   <p className="text-gray-500 leading-relaxed text-sm px-4 font-light">{step.desc}</p>
                 </div>
               </FadeInView>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Scope of Work (Included vs Not Included) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Scope of Work</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Included */}
            <FadeInView delay={100} direction="right">
              <div className="bg-teal-50/50 rounded-3xl p-8 md:p-10 border border-teal-100 h-full">
                <h3 className="text-2xl font-black text-teal-900 mb-8 border-b border-teal-200 pb-4 uppercase tracking-tight">What's Included</h3>
                <div className="flex flex-wrap gap-3">
                  {scopeIncluded.map((item, idx) => (
                    <span key={idx} className="bg-white border border-teal-200 text-teal-800 px-4 py-2 rounded-lg font-bold shadow-sm text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>

            {/* Excluded */}
            <FadeInView delay={300} direction="left">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 h-full">
                <h3 className="text-2xl font-black text-gray-700 mb-8 border-b border-gray-200 pb-4 uppercase tracking-tight">What's NOT Included</h3>
                <div className="flex flex-wrap gap-3">
                  {scopeExcluded.map((item, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg font-bold shadow-sm text-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm text-gray-500 italic font-medium">*If you need these services, we can provide custom quotes outside of the standard retainer.</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE Retainer Pricing / Packages */}
      <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                Membership <span className="text-teal-600">Plans</span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg font-light">Scalable design support tailored to your monthly output needs.</p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
            {retainerPackages.map((pkg, index) => {
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
                          {pkg.isPopular ? 'Most Popular' : 'Selected'}
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
                      to={`/contact?service=Retainer&package=${encodeURIComponent(pkg.name)}`} 
                      onClick={(e) => e.stopPropagation()} 
                      className={`w-full text-center py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 mt-auto ${
                        isSelected 
                          ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-1'
                      }`}
                    >
                      Subscribe Now
                    </Link>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FAQs (Accordion) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Retainer FAQs</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-6 rounded"></div>
            </div>
          </FadeInView>

          <div className="space-y-4">
            {retainerFaqs.map((faq, index) => (
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
                    <div className="px-8 pb-8 text-gray-600 border-t border-gray-100 pt-6 leading-relaxed font-light text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ReadyToStart />
    </main>
  );
}