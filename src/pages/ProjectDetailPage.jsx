import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolioCategories } from '../data/data';
import ReadyToStart from '../components/ReadyToStart';

export default function ProjectDetailPage() {
  const { categorySlug, projectId } = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, [categorySlug, projectId]);

  // Find the category and the specific image using the ID (index)
  const categoryData = portfolioCategories.find(cat => cat.slug === categorySlug);
  
  if (!categoryData || !categoryData.gallery[projectId]) {
    return <Navigate to="/our-work" replace />;
  }

  const imageUrl = categoryData.gallery[projectId];
  const projectNumber = parseInt(projectId) + 1;

  return (
    <main className="font-sans bg-white min-h-screen">
      
      {/* 1. Project Hero (Minimalist & Premium) */}
      <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/our-work/${categorySlug}`} className="inline-flex items-center text-teal-600 font-bold text-sm tracking-widest uppercase mb-8 hover:text-teal-800 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to {categoryData.title}
          </Link>
          
          <h1 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight uppercase transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Project <span className="text-teal-500">#{projectNumber}</span>
          </h1>
        </div>
      </section>

      {/* 2. Project Details & Full Image Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Project Information */}
            <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ease-out ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="sticky top-32">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6 uppercase border-b-2 border-teal-500 pb-4 inline-block">Project Overview</h3>
                
                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Service Type</h4>
                    <p className="text-lg font-bold text-gray-900">{categoryData.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Client Name</h4>
                    <p className="text-lg font-bold text-gray-900">Confidential / NDA</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Project Scope</h4>
                    <ul className="mt-2 space-y-2 text-gray-600 font-medium">
                      {categoryData.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link 
                  to={`/contact?service=${encodeURIComponent(categoryData.title)}`}
                  className="w-full inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors shadow-lg"
                >
                  Request Similar Design
                </Link>
              </div>
            </div>

            {/* Right: Massive High-Res Image Display */}
            <div className={`lg:col-span-8 transition-all duration-1000 delay-400 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img 
                  src={imageUrl} 
                  alt={`${categoryData.title} Project ${projectNumber}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <ReadyToStart />
    </main>
  );
}