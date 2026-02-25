import React from 'react';

// Components
import Hero from '../components/Hero';
import WhyTrustUs from '../components/WhyTrustUs';
import CoreCapabilities from '../components/CoreCapabilities';
import CreativeServices from '../components/CreativeServices';
import SignatureWork from '../components/SignatureWork';
import IndustriesGrid from '../components/IndustriesGrid';
import CreativeProcess from '../components/CreativeProcess';
import MonthlyRetainer from '../components/MonthlyRetainer';
import PricingTable from '../components/PricingTable';
import BlogInsights from '../components/BlogInsights';
import ReadyToStart from '../components/ReadyToStart';

export default function HomePage() {
  return (
    // Added global premium typography, dark text, off-white background, and custom text-selection colors
    <main className="font-sans bg-[#F9FAFB] text-gray-900 overflow-hidden selection:bg-teal-600 selection:text-white">
      
      {/* 1. THE HOOK: Grab attention immediately */}
      <Hero />
      
      {/* 2. IMMEDIATE TRUST: Before you sell, prove you are legitimate */}
      <WhyTrustUs />
      
      {/* 3. THE VALUE: High-level capabilities down to specific services */}
      <CoreCapabilities />
      <CreativeServices />
      
      {/* 4. THE PROOF: Show them the actual quality of your work */}
      <SignatureWork />
      
      {/* 5. THE CONTEXT: Who you work with and how you operate */}
      <IndustriesGrid />
      <CreativeProcess />
      
      {/* 6. THE OFFER: Your business models (Retainer first, then standard pricing) */}
      <MonthlyRetainer />
      <PricingTable />
      
      {/* 7. VALUE ADD & ACTION: Show industry knowledge, then ask for the sale */}
      <BlogInsights />
      <ReadyToStart />
      
    </main>
  );
}