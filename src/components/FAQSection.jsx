import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', dark = false }) {
  const [open, setOpen] = useState(null);
  return (
    <section className={`py-16 ${dark ? 'bg-[#141414] border-t border-neutral-800' : 'bg-gray-50 border-t border-gray-100'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`font-serif text-2xl sm:text-3xl font-bold mb-8 text-center ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-colors ${dark ? 'border-neutral-800 hover:border-gold-400' : 'border-gray-200'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left transition ${dark ? 'bg-[#1A1A1A] hover:bg-neutral-800 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'}`}
              >
                <span className="font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${dark ? 'text-gold-400' : 'text-yellow-600'} ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className={`px-6 py-4 border-t text-sm leading-relaxed ${dark ? 'bg-[#141414] border-neutral-800 text-neutral-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
