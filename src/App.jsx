import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Import added
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OurWorkPage from './pages/OurWorkPage';
import ScrollToTop from './components/ScrollToTop';
import PromotionsPage from './pages/PromotionsPage';
import BrandPage from './pages/BrandPage';
import DigitalPage from './pages/DigitalPage';
import RetainerPage from './pages/RetainerPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content Area wrapper to push footer down if page is short */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/our-work/:categorySlug" element={<ServiceDetailPage />} />
            
            <Route path="/project/:categorySlug/:projectId" element={<ProjectDetailPage />} />

            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/digital" element={<DigitalPage />} />
            <Route path="/retainer" element={<RetainerPage />} />

            <Route path="*" element={
              <div className="flex items-center justify-center h-96 text-2xl font-bold text-gray-500">
                404 - Page Not Found
              </div>
            } />

          </Routes>
        </div>

        {/* Global Footer placed outside Routes so it renders on all pages */}
        <Footer />
      </div>
    </Router>
  );
}