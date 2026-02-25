import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReadyToStart from '../components/ReadyToStart';
import { portfolioCategories } from '../data/data';

// --- Custom Reusable Component for Scroll Animations ---
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

// --- Local Data for New Sections ---
const statsData = [
  { id: 1, number: '36+', label: 'Years Experience' },
  { id: 2, number: '500+', label: 'Projects Completed' },
  { id: 3, number: '99%', label: 'Client Satisfaction' },
  { id: 4, number: '15+', label: 'Industry Awards' },
];

const testimonialsData = [
  { 
    id: 1, 
    quote: "Dzine House completely transformed our visual identity. Their packaging design helped us stand out on the shelves and increased our retail sales by 40% in the first quarter.", 
    name: "Sarah Jenkins", 
    role: "Marketing Director, PureFoods" 
  },
  { 
    id: 2, 
    quote: "The team is incredibly responsive and truly understands how to translate a brief into a stunning digital campaign. They are our go-to partner for all things creative.", 
    name: "David Chen", 
    role: "CEO, TechNova Solutions" 
  },
  { 
    id: 3, 
    quote: "Professional, creative, and timely. The corporate brochures they designed for our real estate firm elevated our brand perception instantly.", 
    name: "Priya Sharma", 
    role: "Head of Sales, Horizon Estates" 
  }
];

const workFaqs = [
  { question: "How many revisions do we get?", answer: "We typically include 2-3 rounds of revisions in our standard packages to ensure you are 100% satisfied with the final result." },
  { question: "Do you provide the source files?", answer: "Yes! Upon final payment and approval, we hand over all high-resolution and editable source files (AI, PSD, PDF, etc.)." },
  { question: "How long does a typical branding project take?", answer: "A full brand identity project usually takes between 2 to 4 weeks, depending on the complexity and feedback cycles." }
];

// --- Main Page Component ---
export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMounted, setIsMounted] = useState(false);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const industryParam = searchParams.get('industry');

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const filterTabs = ['All', ...portfolioCategories.map(cat => cat.title)];
  const displayedCategories = activeFilter === 'All' 
    ? portfolioCategories 
    : portfolioCategories.filter(cat => cat.title === activeFilter);

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Dynamic Hero Banner */}
      <section className="relative bg-gray-900 py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight uppercase drop-shadow-2xl transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Portfolio
          </h1>
          <p className={`mt-6 text-teal-400 font-bold tracking-widest uppercase text-sm md:text-base transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link> <span className="mx-2">/</span> Our Work
          </p>
        </div>
      </section>

      {/* 2. Intro & Smart Routing Banner */}
      <section className="py-16 text-center bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          {industryParam && (
            <div className="mb-8 inline-block bg-teal-100 border border-teal-300 text-teal-800 px-6 py-2 rounded-full font-bold uppercase tracking-wide text-sm shadow-sm animate-bounce">
              Viewing customized results for: {industryParam.replace('-', ' ')}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-6 uppercase tracking-tight">
            Welcome To Our Gallery
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Browse through our extensive gallery of creative works. From brand identity to digital marketing assets, we take pride in delivering high-quality, bespoke designs that help our clients succeed in their respective industries.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                  activeFilter === tab
                    ? 'bg-teal-600 text-white shadow-md transform -translate-y-0.5'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-teal-500 hover:text-teal-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filterable & Animated Portfolio Sections */}
      <section className="py-20">
        {displayedCategories.length > 0 ? (
          displayedCategories.map((item, index) => (
            <div key={item.id} className="mb-24 last:mb-0">
              <FadeInView delay={0}>
                <div className="w-full bg-teal-600 py-6 px-4 text-center shadow-md mb-12">
                  <h3 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </FadeInView>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  
                  <FadeInView delay={200} direction={index % 2 === 0 ? 'right' : 'left'}>
                    <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <h4 className="text-3xl font-extrabold text-gray-900 mb-6">Elevate Your Brand</h4>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {item.description}
                      </p>
                      
                      <ul className="space-y-4 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-800 font-medium">
                            <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-4 shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="text-center md:text-left">
                        {/* THE FIX: Links correctly to the Gallery pages while keeping your original teal button style */}
                        <Link 
                          to={`/our-work/${item.slug}`} 
                          className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-extrabold text-sm uppercase tracking-widest rounded-lg hover:bg-teal-700 transition-all duration-300 group shadow-md"
                        >
                          {item.btnText}
                          <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </FadeInView>

                  <FadeInView delay={400} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                        <div className="absolute inset-0 bg-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </FadeInView>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-500 font-medium text-xl">
            No projects found for this category.
          </div>
        )}
      </section>

      {/* NEW SECTION 4: By The Numbers (Stats) */}
      <section className="py-20 bg-gray-900 text-white border-t-8 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <FadeInView key={stat.id} delay={index * 150} direction="up">
                <div className="p-6">
                  <div className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-4 drop-shadow-md">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 5: Client Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView delay={0}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
                Client Success Stories
              </h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded"></div>
              <p className="text-gray-600 text-lg">Don't just take our word for it. Here is what our clients have to say about the results we deliver.</p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <FadeInView key={testimonial.id} delay={index * 200}>
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative">
                  {/* Quote Icon */}
                  <svg className="absolute top-6 left-6 w-12 h-12 text-teal-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 leading-relaxed relative z-10 mb-8 pt-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <p className="font-extrabold text-gray-900">{testimonial.name}</p>
                    <p className="text-teal-600 text-sm font-bold uppercase tracking-wide mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: Project FAQs */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 uppercase">Frequently Asked Questions</h2>
                <div className="w-16 h-1 bg-teal-500 mx-auto mt-4 rounded"></div>
              </div>
            </FadeInView>

            <div className="space-y-6">
              {workFaqs.map((faq, index) => (
                <FadeInView key={index} delay={index * 150} direction="up">
                  <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:border-teal-300 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                      <span className="text-teal-500 mr-3">Q.</span> {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-7">
                      <span className="text-gray-400 font-bold mr-2">A.</span> {faq.answer}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
         </div>
      </section>

      {/* 7. Bottom CTA Section */}
      <ReadyToStart />

    </main>
  );
}