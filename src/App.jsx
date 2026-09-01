import React, { useState } from 'react';
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
import ContactQuotePage from './pages/ContactQuotePage';
import AppointmentPage from './pages/AppointmentPage';
import PartyWearPage from './pages/PartyWearPage';
import BridalWearPage from './pages/BridalWearPage';
import CasualWearPage from './pages/CasualWearPage';
import WesternWearPage from './pages/WesternWearPage';
import LocationPage from './pages/LocationPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'blog':
        return <BlogPage setActivePage={setActivePage} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'stitching':
        return <StitchingPage setActivePage={setActivePage} />;
      case 'bridal-wear':
      case 'bridal':
        return <BridalWearPage setActivePage={setActivePage} />;
      case 'party-wear':
      case 'party':
        return <PartyWearPage setActivePage={setActivePage} />;
      case 'casual-wear':
      case 'casual':
        return <CasualWearPage setActivePage={setActivePage} />;
      case 'western-wear':
      case 'western':
        return <WesternWearPage setActivePage={setActivePage} />;
      case 'location':
      case 'locations':
        return <LocationPage setActivePage={setActivePage} />;
      case 'alteration':
        return <AlterationPage setActivePage={setActivePage} />;
      case 'designing':
        return <DesigningPage setActivePage={setActivePage} />;
      case 'brands':
        return <ForBrandsPage setActivePage={setActivePage} />;
      case 'our-work':
        return <OurWorkPage setActivePage={setActivePage} />;
      case 'fabric-calc':
        return <FabricCalculatorPage setActivePage={setActivePage} />;
      case 'book-appointment':
      case 'appointment':
      case 'contact':
        return <AppointmentPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-neutral-100 selection:bg-yellow-500 selection:text-black">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      <Footer setActivePage={setActivePage} />
      <WhatsAppFloating />
    </div>
  );
}
