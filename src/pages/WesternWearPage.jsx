import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function WesternWearPage() {
  const westernFaqs = [
    { 
      q: 'What western outfits do you stitch?', 
      a: 'We stitch formal blazers, jumpsuits, office trousers, western maxis, skirts, and structured tops.' 
    },
    { 
      q: 'Do you include shoulder padding and boning?', 
      a: 'Yes, for blazers and structured tops, we insert canvas shoulder padding and boning for professional European tailoring cuts.' 
    },
    { 
      q: 'Can I provide a western design photo from Pinterest or Instagram?', 
      a: 'Yes! Simply share the design photo or link, and our master tailors will create a pattern tailored to your measurements.' 
    },
    { 
      q: 'What is the delivery time for western wear?', 
      a: 'Standard western wear stitching takes 5 to 7 working days.' 
    }
  ];

  const westernStyles = [
    {
      title: 'Multicolor Patterned Western Maxi',
      img: '/cat-western.png',
      desc: 'Flowy multi-pattern western maxi dress with waist drawstring and flared cuff sleeves.',
      features: ['Clean hem fold bias cut', 'Fluid drape lining', 'Concealed neck snap button']
    },
    {
      title: 'Formal Blazer & Jumpsuit Set',
      img: '/dress-pink-maxi.png',
      desc: 'Tailored office blazer with structured lapel collar and wide-leg jumpsuit.',
      features: ['Canvas padded shoulder structure', 'Inseam pocket integration', 'Clean razor seam press']
    },
    {
      title: 'High-Low Designer Dress',
      img: '/stitched-dresses-2.png',
      desc: 'Asymmetric high-low evening dress with buttoned sleeve cuffs and boat neckline.',
      features: ['Invisible back zipper', 'Double overlock interior finish', 'Tear-proof seam locks']
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Western Wear & Maxi Dress Tailor Lahore | Sasta Darzi"
        description="Custom western wear, blazer, jumpsuit & maxi dress tailoring in Lahore with doorstep pickup across WAPDA Town, DHA & Gulberg."
        keywords="Western Wear Tailor Lahore, Maxi Dress Tailor Lahore, Blazer Stitching Lahore, Ladies Tailor WAPDA Town Lahore, Tailor Near Me"
        canonicalPath="/services/western-wear-tailor-lahore"
      />

      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/cat-western.png" alt="Western Wear Tailor Lahore" className="w-full h-full object-cover opacity-35 filter brightness-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Contemporary Global Fashion
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Western Wear & Maxi Dress<br />Tailoring in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Blazers, jumpsuits, office wear & western maxis tailored with clean seams and modern silhouettes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link 
              to="/book-ladies-tailor-appointment-lahore"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg inline-block"
            >
              Book Western Stitching
            </Link>
            <a 
              href="https://wa.me/923158212978?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Western%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* WESTERN STYLES */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Western Wear Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {westernStyles.map((item, idx) => (
            <div key={idx} className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-64 w-full overflow-hidden bg-black/40">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#D4AF37] font-serif">{item.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2 text-xs text-gray-300 pt-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold">
                <span className="text-[#D4AF37]">5-7 Days Delivery</span>
                <Link to="/book-ladies-tailor-appointment-lahore" className="text-[#D4AF37] hover:underline flex items-center gap-1">
                  Book <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={westernFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
