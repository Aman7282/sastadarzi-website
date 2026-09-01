import React from 'react';
import { Star, MessageSquare, Wand2, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import RelatedServices from '../components/RelatedServices';

const faqs = [
  { q: 'Can I send a design picture?', a: 'Yes. You can share a reference image, Pinterest pin, or sketch and we will follow your design requirements.' },
  { q: 'Can you customize an existing design?', a: 'Yes. If you have an existing design you\'d like adjusted — different neckline, different sleeves, altered daman — we can work with that.' },
  { q: 'Can I choose my own fabric?', a: 'Yes. Bring your own fabric or discuss fabric options with our team before placing your order.' },
  { q: 'Can you create formal and bridal designs?', a: 'Yes. We design and stitch formal, party and bridal outfits with customized design details.' },
];

const relatedLinks = [
  { id: 'lehenga', label: 'Lehenga' },
  { id: 'bridal-wear', label: 'Bridal Wear' },
  { id: 'gown', label: 'Gown' },
  { id: 'formal-wear', label: 'Formal Wear' },
  { id: 'custom-stitching', label: 'Custom Stitching' },
  { id: 'contact', label: 'Start Your Design' },
];

export default function DressDesigningPage({ setActivePage }) {
  const startingSources = [
    'A photograph', 'Pinterest inspiration', 'A fabric', 'A sketch',
    'A neckline', 'A colour combination', 'An idea in your mind'
  ];

  const designDetails = ['Neck', 'Sleeves', 'Daman', 'Length', 'Fitting', 'Panels', 'Lace', 'Buttons', 'Trouser', 'Finishing'];

  const clothingTypes = ['Shalwar Kameez', 'Maxi', 'Gown', 'Formal Wear', 'Party Wear', 'Bridal Wear', 'Lehenga', 'Abaya'];

  return (
    <div className="bg-white text-gray-900">

      <PageHero
        tag="Ladies Dress Designing in Lahore"
        h1="Custom Ladies Dress Designing in Lahore"
        lead="Have a design in mind?"
        body="Bring your inspiration, fabric or ideas and we'll help turn them into a finished women's outfit."
        ctaLabel="Discuss Your Design"
        setActivePage={setActivePage}
        bgImage="/img-studio-wall.jpg"
        showWhatsapp={false}
      />

      {/* Section 2 — Inspiration sources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full">Your Starting Point</span>
              <h2 className="font-serif text-3xl font-bold text-gray-900">From Inspiration to Your Finished Dress</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Your design can start from anywhere. You don't need a finished sketch — just an idea is enough to begin.</p>
              <p className="text-sm font-semibold text-gray-700 mb-2">Your design can start with:</p>
              <div className="space-y-2">
                {startingSources.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-80">
              <img src="/img-embroidery.jpg" alt="Custom dress design detail work at SastaDarzi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What We Customize */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full">Design Details</span>
          <h2 className="font-serif text-3xl font-bold text-gray-900">Every Detail Can Make a Difference</h2>
          <p className="text-gray-500 text-sm">Customize every element of your outfit:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {designDetails.map((d) => (
              <span key={d} className="bg-white border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 transition cursor-default">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Clothing Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-gray-900">What Can We Design?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {clothingTypes.map((c) => (
              <button key={c}
                onClick={() => { setActivePage(c.toLowerCase().replace(' ', '-').replace('é', 'e')); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-gray-50 border border-gray-200 rounded-xl py-4 px-3 text-center text-sm font-semibold text-gray-700 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 transition">
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Design Process */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Process</span>
            <h2 className="font-serif text-3xl font-bold text-white">Your Idea. Our Craftsmanship.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 items-center text-sm font-semibold">
            {['Reference', 'Design Requirements', 'Measurements', 'Cutting', 'Stitching', 'Finishing'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="bg-gray-900 border border-gray-700 text-white px-5 py-3 rounded-full">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-yellow-500" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Gallery */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-8">Designs We've Created</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: '/img-suit-full.jpg', caption: 'Custom 3-piece stitched suit — SastaDarzi' },
              { src: '/img-embroidery.jpg', caption: 'Embroidery daman close-up finish' },
              { src: '/img-dresses.jpg', caption: 'Range of custom stitched outfits — Lahore studio' },
            ].map(({ src, caption }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm group relative h-64">
                <img src={src} alt={caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-4">
                  <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="font-serif text-3xl font-bold">Have a Design in Mind?</h2>
          <p className="text-gray-300 text-sm">Send us your reference and let's create your outfit.</p>
          <button onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm uppercase rounded-xl transition">
            Start Your Design
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900 text-center mb-8">What Customers Say About Our Designing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: '"I sent a reference picture from Pinterest and the finished dress matched it beautifully. The neckline and daman were exactly what I wanted."', by: 'Customer, Lahore' },
              { text: '"I had an idea in mind but no design. SastaDarzi helped me work it out. The final outfit was better than I imagined."', by: 'Customer, Lahore' },
            ].map(({ text, by }, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3 hover:border-yellow-400 transition">
                <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                <p className="text-xs font-bold text-gray-900 pt-2 border-t border-gray-100">— {by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Dress Designing — Frequently Asked Questions" />
      <RelatedServices links={relatedLinks} setActivePage={setActivePage} heading="Related Stitching Services" />
    </div>
  );
}
