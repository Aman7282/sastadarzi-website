import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import RelatedServices from '../components/RelatedServices';
import SEOHead from '../components/SEOHead';

const faqs = [
  { q: 'What types of alterations do you do?', a: 'We handle length adjustments, waist fitting, side fitting, sleeve adjustments, trouser fitting, neck adjustments, daman adjustments and general fitting corrections.' },
  { q: 'Can you alter imported or readymade outfits?', a: 'Yes. We can alter imported dresses, readymade outfits and branded clothing, subject to the construction of the garment.' },
  { q: 'How long do alterations take?', a: 'The timeframe depends on the type of alteration required. Please confirm the expected turnaround when bringing your outfit.' },
  { q: 'Can you alter bridal or formal outfits?', a: 'Yes. We can carefully alter bridal and formal outfits while preserving the original design and finishing.' },
  { q: 'Do I need to bring my outfit in person?', a: 'Yes, for alterations we prefer to inspect the garment and understand the required change before proceeding.' },
];

const relatedLinks = [
  { path: '/services/custom-stitching-lahore', label: 'Custom Stitching' },
  { path: '/services/designer-dress-stitching', label: 'Dress Designing' },
  { path: '/services/bridal-lehenga-tailor-lahore', label: 'Bridal Wear' },
  { path: '/services/party-wear-stitching-lahore', label: 'Party Wear' },
  { path: '/book-ladies-tailor-appointment-lahore', label: 'Request Alteration' },
];

export default function AlterationPage() {
  const alterationTypes = [
    'Length Adjustment', 'Waist Fitting', 'Side Fitting', 'Sleeve Adjustment',
    'Trouser Fitting', 'Neck Adjustment', 'Daman Adjustment', 'Loose or Tight Fitting'
  ];

  const garmentTypes = ['Shalwar Kameez', 'Kurtas', 'Maxis', 'Gowns', 'Formal Wear', 'Party Wear', 'Abayas', 'Saree Blouses'];

  const processSteps = ['Inspect', 'Understand Required Change', 'Measure', 'Alter', 'Check Fitting', 'Finish'];

  return (
    <div className="bg-white text-gray-900">

      <SEOHead 
        title="Best Ladies Alteration Service in Lahore | Sasta Darzi"
        description="Expert ladies dress alteration & fitting in Lahore. Length adjustments, waist fitting, sleeve modifications & bridal dress alterations."
        keywords="Ladies Alteration Service Lahore, Dress Fitting Near Me, Suit Alteration Lahore, Ladies Tailor WAPDA Town Lahore, Tailor Near Me"
        canonicalPath="/services/ladies-alteration-lahore"
      />

      <PageHero
        tag="Ladies Dress Alteration in Lahore"
        h1="Ladies Dress Alteration Services in Lahore"
        lead="A beautiful outfit can still feel wrong when the fitting isn't right."
        body="Our alteration service helps improve the fit, length and finishing of women's clothing. Bring your outfit or schedule doorstep pickup."
        ctaLabel="Request an Alteration"
        ctaPath="/book-ladies-tailor-appointment-lahore"
        bgImage="/alteration-service.png"
        showWhatsapp={false}
      />

      {/* Section 2 — Common Alterations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full">Common Alterations</span>
              <h2 className="font-serif text-3xl font-bold text-gray-900">We Can Help With</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {alterationTypes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-yellow-400 transition">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md h-72">
              <img src="/img-embroidery.jpg" alt="Detail alteration work at SastaDarzi Lahore" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Clothing We Alter */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full">Women's Alterations</span>
          <h2 className="font-serif text-3xl font-bold text-gray-900">Women's Clothing Alterations</h2>
          <p className="text-gray-500 text-sm">We can work with various women's outfits including:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {garmentTypes.map((g) => (
              <span key={g} className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700">{g}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Why Fitting Matters */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Craftsmanship</span>
          <h2 className="font-serif text-3xl font-bold text-white">Small Adjustments Can Change the Whole Look</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Good alteration isn't simply making something smaller or larger. The adjustment needs to maintain the shape, balance and finishing of the original garment. A poorly done alteration can distort the neckline, throw off the shoulder balance or change the daman drape.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            At SastaDarzi, we approach every alteration with care — inspecting the construction of the garment first, then making changes that maintain its original look and feel.
          </p>
        </div>
      </section>

      {/* Section 5 — Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-10">Our Alteration Process</h2>
          <div className="flex flex-wrap justify-center gap-3 items-center text-sm font-semibold">
            {processSteps.map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="bg-gray-50 border border-gray-200 px-5 py-3 rounded-full text-gray-700">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-yellow-500" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Reviews */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-8">Trusted for Careful Finishing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: '"I had a bridal lehenga that needed the waist taken in. SastaDarzi altered it without disturbing the embroidery. The finishing was clean and the fit was much better."', by: 'Customer, Lahore' },
              { text: '"I sent a maxi from the UK to be shortened. The alteration was done carefully and the new hemline looked professionally finished."', by: 'Customer, Overseas' },
            ].map(({ text, by }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 hover:border-yellow-400 transition">
                <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                <p className="text-xs font-bold text-gray-900 pt-2 border-t border-gray-100">— {by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-5">
          <h2 className="font-serif text-3xl font-bold">Need Your Dress Altered?</h2>
          <p className="text-gray-300 text-sm">Bring your outfit to SastaDarzi or book doorstep pickup online.</p>
          <Link to="/book-ladies-tailor-appointment-lahore" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm uppercase rounded-xl transition inline-block">
            Book Alteration Pickup
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Ladies Alteration — Frequently Asked Questions" />
      <RelatedServices links={relatedLinks} heading="Related Services" />
    </div>
  );
}
