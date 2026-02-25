import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { faqs } from '../data/data';

export default function ContactPage() {
  // --- 1. Catch URL Parameters ---
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // It checks for either ?service=... or ?package=... from your other pages
  const incomingService = searchParams.get('service') || searchParams.get('package') || '';

  // --- 2. Form State Management ---
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: incomingService, // Automatically pre-fills based on where they came from
    message: ''
  });

  // If the URL changes while they are on the page, update the form
  useEffect(() => {
    if (incomingService) {
      setFormData(prev => ({ ...prev, service: incomingService }));
    }
  }, [incomingService]);

  // --- 3. Submission States ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // --- 4. Handle Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate an API call / Backend request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form Data Submitted:', formData);
      setSubmitStatus('success');
      
      // Clear form after success
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', service: '', message: ''
      });
    } catch (error) {
      console.error('Submission failed', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="font-sans bg-gray-50 min-h-screen pb-20">
      
      {/* Page Hero */}
      <section className="relative bg-teal-600 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/50 to-teal-500/50 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {incomingService && (
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase border border-white/30 text-white rounded-full bg-white/10 backdrop-blur-sm animate-pulse">
              You are requesting: {incomingService}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-md uppercase">
            Let's Build <span className="text-teal-200">Something Great</span>
          </h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Reach out to our team of experts and let's discuss how we can elevate your brand.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 border border-teal-100">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Studio</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Dzine House<br />
                123 Creative Street, Tech Park,<br />
                City Center, 400001<br />
                India
              </p>
            </div>

            {/* Direct Contact & WhatsApp Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 border border-teal-100">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Directly</h3>
              <div className="space-y-4 text-gray-600 font-light">
                <p className="flex items-center">
                  <strong className="w-20 text-gray-900 font-bold">Phone:</strong> 
                  <a href="tel:+919876543210" className="hover:text-teal-600 transition-colors">+91-9876543210</a>
                </p>
                <p className="flex items-center">
                  <strong className="w-20 text-gray-900 font-bold">Email:</strong> 
                  <a href="mailto:hello@dzinehouse.com" className="hover:text-teal-600 transition-colors truncate">hello@dzinehouse.com</a>
                </p>
                
                {/* WhatsApp Integration Button */}
                <a 
                  href={`https://wa.me/919876543210?text=Hi%20Dzine%20House,%20I%20would%20like%20to%20discuss%20${incomingService ? incomingService : 'a project'}.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center w-full px-4 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
            
            {/* Success Overlay */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 z-10 bg-white/95 rounded-3xl flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm transition-all duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">Message Sent!</h2>
                <p className="text-gray-600 mb-8 max-w-md font-light leading-relaxed">Thank you for reaching out to Dzine House. Our creative team will review your project details and get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitStatus(null)}
                  className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-teal-600 transition-colors font-bold uppercase tracking-wide text-sm"
                >
                  Send another message
                </button>
              </div>
            )}

            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">Send us a message</h2>
            <p className="text-gray-500 mb-10 font-light">Fill out the form below and our creative team will get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">What service are you looking for?</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-gray-700 font-medium"
                >
                  <option value="">Select a service...</option>
                  
                  {/* If they came from a specific page, inject that dynamic service into the dropdown list */}
                  {incomingService && (
                    <option value={incomingService}>{incomingService}</option>
                  )}

                  <option value="Logo & Brand Identity">Logo & Brand Identity</option>
                  <option value="UI/UX & Website Design">UI/UX & Website Design</option>
                  <option value="Print & Promotional Design">Print & Promotional Design</option>
                  <option value="Social Media Graphics">Social Media Graphics</option>
                  <option value="Monthly Design Retainer">Monthly Design Retainer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Project Details *</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none" 
                  placeholder="Tell us about your project, timeline, and goals..."
                  required
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded-lg border border-red-100">Something went wrong. Please try again or contact us directly.</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full md:w-auto px-10 py-5 font-black uppercase tracking-widest text-sm rounded-xl transition-all duration-300 flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-teal-400 text-teal-100 cursor-not-allowed' 
                    : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 focus:ring-4 focus:ring-teal-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Embedded Map Section - Fixed Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
          {/* Defaulting to a map of New Delhi as an example since you are in India */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d224345.83923192776!2d77.06889659999999!3d28.527582000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1708785000000!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">Got Questions?</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-16 rounded"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Map through the imported faqs array */}
          {faqs?.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}