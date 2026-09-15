import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function PageHero({ tag, h1, lead, body, ctaLabel, ctaPath = '/book-ladies-tailor-appointment-lahore', bgImage, showWhatsapp = true }) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt={h1} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-20">
        <div className="max-w-3xl space-y-5">
          {tag && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full">
              {tag}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">{h1}</h1>
          {lead && <p className="text-lg text-yellow-300 font-medium">{lead}</p>}
          {body && <p className="text-base text-gray-300 leading-relaxed">{body}</p>}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to={ctaPath}
              className="px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm uppercase tracking-wide rounded-xl transition shadow-lg inline-block"
            >
              {ctaLabel || 'Get Started'}
            </Link>
            {showWhatsapp && (
              <a
                href="https://wa.me/923158212978?text=Hello%20SastaDarzi!"
                target="_blank" rel="noreferrer"
                className="px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm uppercase tracking-wide rounded-xl flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
