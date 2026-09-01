import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function RelatedServices({ links, setActivePage, heading = 'Related Services' }) {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">{heading}</h3>
        <div className="flex flex-wrap gap-3">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { setActivePage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 hover:border-yellow-400 hover:text-yellow-700 hover:bg-yellow-50 rounded-full text-sm font-semibold text-gray-700 transition"
            >
              {label} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
