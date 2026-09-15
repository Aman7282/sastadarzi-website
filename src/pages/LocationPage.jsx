import React from 'react';
import { Phone, Mail, MapPin, Navigation, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function LocationPage({ setActivePage }) {
  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Locations | Ladies Tailor in Wapda Town Lahore"
        description="Visit Sasta Darzi at Wapda Town, Lahore, or request doorstep fabric pickup across DHA, Gulberg, and Johar Town."
        keywords="ladies tailor in lahore, best ladies tailor near me, tailor in wapda town, ladies tailor location"
        canonicalPath="/ladies-tailor-wapda-town-lahore-location"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="SastaDarzi Locations" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg">
            Locations
          </h1>
        </div>
      </section>

      {/* 2. LAHORE OFFICE */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] font-serif">
              Lahore Office
            </h2>

            <div className="space-y-6 text-gray-200 text-sm md:text-base font-medium">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+923158212978" className="hover:text-[#D4AF37] transition">
                  +92 315 821 2978
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:sastadarzi@gmail.com" className="hover:text-[#D4AF37] transition">
                  sastadarzi@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed">
                  Shop No 48 Ground Floor, Wapda, Rehmat Market, WAPDA Town Block A 1 Town, Lahore, 54770, Pakistan
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => navTo('book-appointment')}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-xs rounded transition shadow-lg"
              >
                Book Appointment
              </button>
              <a 
                href="https://g.page/r/CYROPMqivftrEAI/review" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-gray-700 text-white font-bold uppercase tracking-wider text-xs rounded transition flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" /> Open Google Maps
              </a>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-4 border-[#D4AF37]/40 shadow-2xl h-[340px] md:h-[380px]">
            <iframe 
              title="SastaDarzi Lahore Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 3. DOORSTEP PICKUP & DELIVERY HUB */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-800/80 bg-[#141414]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] font-serif">
              Doorstep Delivery Hub
            </h2>

            <div className="space-y-6 text-gray-200 text-sm md:text-base font-medium">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+923158212978" className="hover:text-[#D4AF37] transition">
                  +92 315 821 2978
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:sastadarzi@gmail.com" className="hover:text-[#D4AF37] transition">
                  sastadarzi@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed">
                  Serving all major sectors across Lahore (Gulberg, DHA Phases 1-9, WAPDA Town, Johar Town, Model Town, Bahria Town & Faisal Town)
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => navTo('book-appointment')}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-xs rounded transition shadow-lg flex items-center gap-2"
              >
                Schedule Doorstep Fabric Pickup <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-4 border-[#D4AF37]/40 shadow-2xl h-[340px] md:h-[380px]">
            <iframe 
              title="SastaDarzi Lahore Coverage Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
