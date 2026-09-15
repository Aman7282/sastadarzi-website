import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StitchingPage from './pages/StitchingPage';
import AlterationPage from './pages/AlterationPage';
import DesigningPage from './pages/DesigningPage';
import ForBrandsPage from './pages/ForBrandsPage';
import OurWorkPage from './pages/OurWorkPage';
import FabricCalculatorPage from './pages/FabricCalculatorPage';
import AppointmentPage from './pages/AppointmentPage';
import PartyWearPage from './pages/PartyWearPage';
import BridalWearPage from './pages/BridalWearPage';
import CasualWearPage from './pages/CasualWearPage';
import WesternWearPage from './pages/WesternWearPage';
import LocationPage from './pages/LocationPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-neutral-100 selection:bg-yellow-500 selection:text-black">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          {/* Main SEO Friendly Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-stitching-lahore" element={<StitchingPage />} />
          <Route path="/services/ladies-alteration-lahore" element={<AlterationPage />} />
          <Route path="/services/designer-dress-stitching" element={<DesigningPage />} />
          <Route path="/services/boutique-stitching-for-brands" element={<ForBrandsPage />} />
          <Route path="/services/bridal-lehenga-tailor-lahore" element={<BridalWearPage />} />
          <Route path="/services/party-wear-stitching-lahore" element={<PartyWearPage />} />
          <Route path="/services/casual-suit-stitching-lahore" element={<CasualWearPage />} />
          <Route path="/services/western-wear-tailor-lahore" element={<WesternWearPage />} />
          
          <Route path="/about-best-ladies-tailor-lahore" element={<AboutPage />} />
          <Route path="/tailoring-work-portfolio-lahore" element={<OurWorkPage />} />
          <Route path="/fabric-calculator" element={<FabricCalculatorPage />} />
          <Route path="/blog-ladies-tailoring-tips-lahore" element={<BlogPage />} />
          <Route path="/ladies-tailor-wapda-town-lahore-location" element={<LocationPage />} />
          <Route path="/book-ladies-tailor-appointment-lahore" element={<AppointmentPage />} />

          {/* Legacy & Short URL Alias Redirects */}
          <Route path="/about" element={<Navigate to="/about-best-ladies-tailor-lahore" replace />} />
          <Route path="/stitching" element={<Navigate to="/services/custom-stitching-lahore" replace />} />
          <Route path="/alteration" element={<Navigate to="/services/ladies-alteration-lahore" replace />} />
          <Route path="/designing" element={<Navigate to="/services/designer-dress-stitching" replace />} />
          <Route path="/brands" element={<Navigate to="/services/boutique-stitching-for-brands" replace />} />
          <Route path="/bridal" element={<Navigate to="/services/bridal-lehenga-tailor-lahore" replace />} />
          <Route path="/bridal-wear" element={<Navigate to="/services/bridal-lehenga-tailor-lahore" replace />} />
          <Route path="/party" element={<Navigate to="/services/party-wear-stitching-lahore" replace />} />
          <Route path="/party-wear" element={<Navigate to="/services/party-wear-stitching-lahore" replace />} />
          <Route path="/casual" element={<Navigate to="/services/casual-suit-stitching-lahore" replace />} />
          <Route path="/casual-wear" element={<Navigate to="/services/casual-suit-stitching-lahore" replace />} />
          <Route path="/western" element={<Navigate to="/services/western-wear-tailor-lahore" replace />} />
          <Route path="/western-wear" element={<Navigate to="/services/western-wear-tailor-lahore" replace />} />
          <Route path="/location" element={<Navigate to="/ladies-tailor-wapda-town-lahore-location" replace />} />
          <Route path="/locations" element={<Navigate to="/ladies-tailor-wapda-town-lahore-location" replace />} />
          <Route path="/our-work" element={<Navigate to="/tailoring-work-portfolio-lahore" replace />} />
          <Route path="/blog" element={<Navigate to="/blog-ladies-tailoring-tips-lahore" replace />} />
          <Route path="/appointment" element={<Navigate to="/book-ladies-tailor-appointment-lahore" replace />} />
          <Route path="/book-appointment" element={<Navigate to="/book-ladies-tailor-appointment-lahore" replace />} />
          <Route path="/contact" element={<Navigate to="/book-ladies-tailor-appointment-lahore" replace />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
