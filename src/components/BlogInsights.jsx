import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogInsights } from '../data/data'; // Import data

export default function BlogInsights() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically extract unique categories from the data array
  const categories = ['All', ...new Set(blogInsights.map(blog => blog.category))];

  // Filter blogs based on the selected category state
  const filteredBlogs = activeCategory === 'All' 
    ? blogInsights 
    : blogInsights.filter(blog => blog.category === activeCategory);

  // Limit display to the first 3 items (or let it map all of them if you prefer)
  const displayedBlogs = filteredBlogs.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Design Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 mb-6 rounded"></div>
          <p className="text-gray-600 text-lg">
            Explore the latest trends, tips, and strategies from the design world.
          </p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        {displayedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <Link 
                to={`/blog/${blog.id}`} // Setup for future routing
                key={blog.id} 
                className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/95 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date */}
                  <span className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-widest">
                    {blog.date}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2 mb-4">
                    {blog.title}
                  </h3>
                  
                  {/* Action Link anchored to bottom */}
                  <div className="mt-auto flex items-center text-teal-600 text-sm font-bold uppercase tracking-wide">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State Fallback if a filter returns 0 results */
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found in this category right now.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-teal-600 font-bold hover:underline"
            >
              View All Insights
            </button>
          </div>
        )}

      </div>
    </section>
  );
}