import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Calculator, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTo = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesSubItems = [
    { id: 'stitching', label: 'Custom Stitching', desc: 'Personalized ladies tailoring & designer cuts' },
    { id: 'alteration', label: 'Alteration Services', desc: 'Precision dress resizing & fitting corrections' },
    { id: 'brands', label: 'Bulk Stitching', desc: 'Stitching solutions for fashion brands & boutiques' },
    { id: 'designing', label: 'Dress Designing', desc: 'Designer collaboration & pattern customization' },
  ];

  const stitchingGuideSubItems = [
    { id: 'fabric-calc', label: 'Fabric Yardage Calculator', desc: 'Calculate exact fabric needed for kameez, lehenga & maxi', icon: Calculator },
    { id: 'our-work', label: 'Branded Portfolio Showcase', desc: 'Stitched as per Khaadi, Maria B, Kalamkar, Nureh & Aden Libas', icon: Sparkles },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo (Just Logo Image - Large & Readable) */}
        <div onClick={() => navTo('home')} className="flex items-center cursor-pointer group py-1">
          <img 
            src="/logo.png" 
            alt="SastaDarzi Logo" 
            className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Desktop Navigation (Centered) - Text Black */}
        <nav className="hidden lg:flex items-center gap-7">
          
          {/* Home */}
          <button
            onClick={() => navTo('home')}
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${activePage === 'home' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => navTo('services')}
              className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 py-2 transition-colors ${activePage === 'services' || activePage === 'stitching' || activePage === 'alteration' || activePage === 'brands' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl p-3 shadow-2xl space-y-1 animate-fade-in z-50">
                {servicesSubItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navTo(item.id)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition flex flex-col group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D4AF37] transition">{item.label}</span>
                    <span className="text-[10px] text-gray-500 leading-tight mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Stitching Guide Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('stitching-guide')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => navTo('fabric-calc')}
              className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 py-2 transition-colors ${activePage === 'fabric-calc' || activePage === 'our-work' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
            >
              Stitching Guide
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'stitching-guide' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>

            {activeDropdown === 'stitching-guide' && (
              <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-xl p-3 shadow-2xl space-y-1 animate-fade-in z-50">
                {stitchingGuideSubItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => navTo(item.id)}
                      className="w-full text-left p-3 rounded-lg hover:bg-yellow-50 transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-900 group-hover:text-[#D4AF37] transition block">{item.label}</span>
                        <span className="text-[10px] text-gray-500 leading-tight mt-0.5 block">{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* About Us */}
          <button
            onClick={() => navTo('about')}
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${activePage === 'about' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            About Us
          </button>

          {/* Blog */}
          <button
            onClick={() => navTo('blog')}
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${activePage === 'blog' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Blog
          </button>

          {/* Location */}
          <button
            onClick={() => navTo('location')}
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${activePage === 'location' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Location
          </button>

        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => navTo('book-appointment')}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-yellow-500 text-black text-[13px] font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book An Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-900 p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (White Background & Black Text) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 absolute w-full shadow-2xl max-h-[85vh] overflow-y-auto z-50">
          <button
            onClick={() => navTo('home')}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${activePage === 'home' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Home
          </button>

          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4 py-1">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">Services</span>
            {servicesSubItems.map(sub => (
              <button key={sub.id} onClick={() => navTo(sub.id)} className="block text-left text-xs font-semibold text-gray-700 hover:text-black py-1">
                • {sub.label}
              </button>
            ))}
          </div>

          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4 py-1">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">Stitching Guide & Tools</span>
            {stitchingGuideSubItems.map(sub => (
              <button key={sub.id} onClick={() => navTo(sub.id)} className="block text-left text-xs font-semibold text-gray-700 hover:text-black py-1">
                • {sub.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => navTo('about')}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${activePage === 'about' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            About Us
          </button>

          <button
            onClick={() => navTo('blog')}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${activePage === 'blog' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Blog
          </button>

          <button
            onClick={() => navTo('location')}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${activePage === 'location' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Location
          </button>

          <button 
            onClick={() => navTo('book-appointment')}
            className="w-full mt-4 px-6 py-3 bg-[#D4AF37] text-black text-[13px] font-bold uppercase tracking-wider rounded shadow-md"
          >
            Book An Appointment
          </button>
        </div>
      )}
    </header>
  );
}
