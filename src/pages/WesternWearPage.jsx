import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, ChevronRight, MessageSquare } from 'lucide-react';
import { customerReviews } from '../data/reviewsData';
import FAQSection from '../components/FAQSection';

export default function WesternWearPage({ setActivePage }) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    },
    {
      title: 'Workwear Trousers & Silk Shirts',
      img: '/dress-blue-silk.png',
      desc: 'Clean tailored office trousers and button-down silk blouses crafted for professional fitting.',
      features: ['Crease-resistant hem fold', 'Hand-stitched hook closure', 'Tailored waist fit']
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/cat-western.png" alt="Western Wear Stitching Lahore" className="w-full h-full object-cover opacity-35 filter brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Global Style & Modern Silhouettes
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Western Wear Stitching<br />Services in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Look globally styled with our western wear stitching service — blazers, maxis, jumpsuits, and formal trousers crafted with precision cuts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button 
              onClick={() => navTo('book-appointment')}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg shadow-[#D4AF37]/20"
            >
              Book Western Stitching
            </button>
            <a 
              href="https://wa.me/923158212978?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Western%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 pt-4 border-t border-gray-800/80">
            {['European Pattern Cuts', 'Canvas Shoulder Padding', '5-7 Day Delivery'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WESTERN STYLES */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Western & Modern Collections
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Crafted with European pattern drafting and clean interior seam locks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {westernStyles.map((item, idx) => (
            <div key={idx} className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-[#D4AF37] font-serif">{item.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.desc}</p>
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
              <div className="px-8 py-5 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold">
                <span className="text-[#D4AF37]">Delivery Time: 5-7 working days</span>
                <button onClick={() => navTo('book-appointment')} className="text-[#D4AF37] hover:underline flex items-center gap-1">
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQSection faqs={westernFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
