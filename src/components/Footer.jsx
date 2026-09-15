import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Tailoring Services', path: '/services' },
    { label: 'Custom Stitching', path: '/services/custom-stitching-lahore' },
    { label: 'Ladies Alterations', path: '/services/ladies-alteration-lahore' },
    { label: 'Bridal Lehenga Tailor', path: '/services/bridal-lehenga-tailor-lahore' },
    { label: 'Fabric Calculator', path: '/fabric-calculator' },
    { label: 'Our Work Portfolio', path: '/tailoring-work-portfolio-lahore' },
    { label: 'About Sasta Darzi', path: '/about-best-ladies-tailor-lahore' },
    { label: 'WAPDA Town Shop Location', path: '/ladies-tailor-wapda-town-lahore-location' },
    { label: 'Book Appointment', path: '/book-ladies-tailor-appointment-lahore' }
  ];

  return (
    <footer className="bg-[#141414] text-white pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group mb-2 inline-block">
              <img 
                src="/logo.png" 
                alt="SastaDarzi - Best Ladies Tailor in Lahore" 
                className="h-14 md:h-16 w-auto object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sasta Darzi is Lahore's premier ladies tailor offering custom dress stitching, bridal couture, party wear, and doorstep fabric pickup across WAPDA Town, DHA, Gulberg, and Johar Town.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Services & Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info & SEO Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Explore Sasta Darzi</h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/blog-ladies-tailoring-tips-lahore" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Tailoring Blog & Tips
                </Link>
              </li>
              <li>
                <a href="https://g.page/r/CYROPMqivftrEAI/review" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline transition-colors text-sm font-semibold flex items-center gap-1 mt-1">
                  ⭐ Google Reviews (4.8 ★)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@sastadarzi.com" className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  info@sastadarzi.com
                </a>
              </li>
              <li>
                <a href="tel:03158212978" className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  +92 315 821 2978
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                Shop No 48 Ground Floor, Wapda, Rehmat Market, WAPDA Town Block K 1 Town, Lahore, 54770, Pakistan
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
          <p>{new Date().getFullYear()} © Sasta Darzi | Best Ladies Tailor in Lahore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
