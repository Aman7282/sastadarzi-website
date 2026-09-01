import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-white pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer group mb-2" onClick={() => navTo('home')}>
              <img 
                src="/logo.png" 
                alt="SastaDarzi Logo" 
                className="h-14 md:h-16 w-auto object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sasta Darzi is a tailoring startup that offers premium custom tailoring services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Stitching Guide', id: 'fabric-calc' },
                { label: 'About Us', id: 'about' },
                { label: 'Location', id: 'location' },
                { label: 'Book Appointment', id: 'book-appointment' }
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => navTo(link.id)} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wide">Info & Reviews</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://g.page/r/CYROPMqivftrEAI/review" target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline transition-colors text-sm font-semibold flex items-center gap-1">
                  ⭐ Google Reviews (4.8 ★)
                </a>
              </li>
              <li>
                <button onClick={() => navTo('blog')} className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                  Blog
                </button>
              </li>
              {['Privacy Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <button className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
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
                Shop No 48 Ground Floor, Wapda, Rehmat Market, WAPDA Town Block A 1 Town, Lahore, 54770, Pakistan
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
          <p>{new Date().getFullYear()} © Sasta Darzi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
