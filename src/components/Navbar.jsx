import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calculator, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const servicesSubItems = [
    { path: '/services/custom-stitching-lahore', label: 'Custom Stitching', desc: 'Personalized ladies tailoring & designer cuts' },
    { path: '/services/ladies-alteration-lahore', label: 'Alteration Services', desc: 'Precision dress resizing & fitting corrections' },
    { path: '/services/boutique-stitching-for-brands', label: 'Bulk Stitching', desc: 'Stitching solutions for fashion brands & boutiques' },
    { path: '/services/designer-dress-stitching', label: 'Dress Designing', desc: 'Designer collaboration & pattern customization' },
  ];

  const stitchingGuideSubItems = [
    { path: '/fabric-calculator', label: 'Fabric Yardage Calculator', desc: 'Calculate exact fabric needed for kameez, lehenga & maxi', icon: Calculator },
    { path: '/tailoring-work-portfolio-lahore', label: 'Branded Portfolio Showcase', desc: 'Stitched as per Khaadi, Maria B, Kalamkar, Nureh & Aden Libas', icon: Sparkles },
  ];

  const isServicesActive = pathname.startsWith('/services');
  const isGuideActive = pathname === '/fabric-calculator' || pathname === '/tailoring-work-portfolio-lahore';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center cursor-pointer group py-1">
          <img 
            src="/logo.png" 
            alt="SastaDarzi Logo" 
            className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          
          {/* Home */}
          <Link
            to="/"
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${pathname === '/' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/services"
              className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 py-2 transition-colors ${isServicesActive ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </Link>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl p-3 shadow-2xl space-y-1 animate-fade-in z-50">
                {servicesSubItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition flex flex-col group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D4AF37] transition">{item.label}</span>
                    <span className="text-[10px] text-gray-500 leading-tight mt-0.5">{item.desc}</span>
                  </Link>
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
            <Link
              to="/fabric-calculator"
              className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 py-2 transition-colors ${isGuideActive ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
            >
              Stitching Guide
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'stitching-guide' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </Link>

            {activeDropdown === 'stitching-guide' && (
              <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-xl p-3 shadow-2xl space-y-1 animate-fade-in z-50">
                {stitchingGuideSubItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left p-3 rounded-lg hover:bg-yellow-50 transition flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D4AF37] group-hover:text-black transition">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-900 group-hover:text-[#D4AF37] transition block">{item.label}</span>
                        <span className="text-[10px] text-gray-500 leading-tight mt-0.5 block">{item.desc}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* About Us */}
          <Link
            to="/about-best-ladies-tailor-lahore"
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${pathname === '/about-best-ladies-tailor-lahore' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            About Us
          </Link>

          {/* Blog */}
          <Link
            to="/blog-ladies-tailoring-tips-lahore"
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${pathname === '/blog-ladies-tailoring-tips-lahore' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Blog
          </Link>

          {/* Location */}
          <Link
            to="/ladies-tailor-wapda-town-lahore-location"
            className={`text-[13px] font-bold tracking-wide uppercase transition-colors ${pathname === '/ladies-tailor-wapda-town-lahore-location' ? 'text-[#D4AF37]' : 'text-gray-800 hover:text-black'}`}
          >
            Location
          </Link>

        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/book-ladies-tailor-appointment-lahore"
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-yellow-500 text-black text-[13px] font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Book An Appointment
          </Link>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 absolute w-full shadow-2xl max-h-[85vh] overflow-y-auto z-50">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${pathname === '/' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Home
          </Link>

          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4 py-1">
            <Link to="/services" onClick={closeMobileMenu} className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block hover:underline">
              Services
            </Link>
            {servicesSubItems.map(sub => (
              <Link key={sub.path} to={sub.path} onClick={closeMobileMenu} className="block text-left text-xs font-semibold text-gray-700 hover:text-black py-1">
                • {sub.label}
              </Link>
            ))}
          </div>

          <div className="space-y-2 border-l-2 border-[#D4AF37] pl-4 py-1">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">Stitching Guide & Tools</span>
            {stitchingGuideSubItems.map(sub => (
              <Link key={sub.path} to={sub.path} onClick={closeMobileMenu} className="block text-left text-xs font-semibold text-gray-700 hover:text-black py-1">
                • {sub.label}
              </Link>
            ))}
          </div>

          <Link
            to="/about-best-ladies-tailor-lahore"
            onClick={closeMobileMenu}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${pathname === '/about-best-ladies-tailor-lahore' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            About Us
          </Link>

          <Link
            to="/blog-ladies-tailoring-tips-lahore"
            onClick={closeMobileMenu}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${pathname === '/blog-ladies-tailoring-tips-lahore' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Blog
          </Link>

          <Link
            to="/ladies-tailor-wapda-town-lahore-location"
            onClick={closeMobileMenu}
            className={`block w-full text-left text-[14px] font-bold tracking-wide uppercase transition-colors ${pathname === '/ladies-tailor-wapda-town-lahore-location' ? 'text-[#D4AF37]' : 'text-gray-800'}`}
          >
            Location
          </Link>

          <Link 
            to="/book-ladies-tailor-appointment-lahore"
            onClick={closeMobileMenu}
            className="block text-center w-full mt-4 px-6 py-3 bg-[#D4AF37] text-black text-[13px] font-bold uppercase tracking-wider rounded shadow-md"
          >
            Book An Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
