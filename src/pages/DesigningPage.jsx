import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import RelatedServices from '../components/RelatedServices';
import SEOHead from '../components/SEOHead';

const faqs = [
  { q: 'Can I send a design picture?', a: 'Yes. You can share a reference image, Pinterest pin, or sketch and we will follow your design requirements.' },
  { q: 'Can you customize an existing design?', a: 'Yes. If you have an existing design you\'d like adjusted — different neckline, different sleeves, altered daman — we can work with that.' },
  { q: 'Can I choose my own fabric?', a: 'Yes. Bring your own fabric or discuss fabric options with our team before placing your order.' },
  { q: 'Can you create formal and bridal designs?', a: 'Yes. We design and stitch formal, party and bridal outfits with customized design details.' },
];

const relatedLinks = [
  { path: '/services/bridal-lehenga-tailor-lahore', label: 'Bridal Wear' },
  { path: '/services/party-wear-stitching-lahore', label: 'Party Wear' },
  { path: '/services/custom-stitching-lahore', label: 'Custom Stitching' },
  { path: '/book-ladies-tailor-appointment-lahore', label: 'Start Your Design' },
];

export default function DressDesigningPage() {
  const startingSources = [
    'A photograph', 'Pinterest inspiration', 'A fabric', 'A sketch',
    'A neckline', 'A colour combination', 'An idea in your mind'
  ];

  const designDetails = ['Neck', 'Sleeves', 'Daman', 'Length', 'Fitting', 'Panels', 'Lace', 'Buttons', 'Trouser', 'Finishing'];

  return (
    <div className="bg-white text-gray-900">

      <SEOHead 
        title="Designer Dress Designing & Customization Lahore | Sasta Darzi"
        description="Custom ladies dress designing in Lahore. Replicate Pinterest designs, necklines, sleeves & party wear cuts with doorstep pickup."
        keywords="Designer Suit Stitching Lahore, Dress Designing Near Me, Custom Neckline Stitching, Pinterest Dress Tailor Lahore, Ladies Tailor WAPDA Town"
        canonicalPath="/services/designer-dress-stitching"
      />

      <PageHero
        tag="Ladies Dress Designing in Lahore"
        h1="Custom Ladies Dress Designing in Lahore"
        lead="Have a design in mind?"
        body="Bring your inspiration, fabric or ideas and we'll help turn them into a finished women's outfit."
        ctaLabel="Discuss Your Design"
        ctaPath="/book-ladies-tailor-appointment-lahore"
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

      {/* Section 7 — CTA */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="font-serif text-3xl font-bold">Have a Design in Mind?</h2>
          <p className="text-gray-300 text-sm">Send us your reference and let's create your outfit.</p>
          <Link to="/book-ladies-tailor-appointment-lahore" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm uppercase rounded-xl transition inline-block">
            Start Your Design
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Dress Designing — Frequently Asked Questions" />
      <RelatedServices links={relatedLinks} heading="Related Stitching Services" />
    </div>
  );
}
