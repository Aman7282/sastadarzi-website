import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, ChevronRight, Upload, Scissors, Truck, MessageSquare } from 'lucide-react';
import { customerReviews } from '../data/reviewsData';
import FAQSection from '../components/FAQSection';

export default function PartyWearPage({ setActivePage }) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 3 >= customerReviews.length ? 0 : prev + 3));
  };

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev - 3 < 0 ? Math.max(0, customerReviews.length - 3) : prev - 3));
  };

  const visibleReviews = customerReviews.slice(activeReviewIdx, activeReviewIdx + 3);

  const partyFaqs = [
    { 
      q: 'What types of party wear outfits do you stitch?', 
      a: 'We stitch maxis, frocks, peplums, shararas, ghararas, fancy palazzo suits, embroidered shirts, and high-low party gowns with boutique-level finishing.' 
    },
    { 
      q: 'Can I provide my own fabric and embellishments?', 
      a: 'Yes! You can provide your unstitched fabric along with any laces, tassels, or borders, or request our team to assist with sourcing.' 
    },
    { 
      q: 'How long does party wear stitching take?', 
      a: 'Our standard turnaround for party wear stitching is 5 to 7 working days. We also offer express stitching options if needed sooner.' 
    },
    { 
      q: 'Can I request custom necklines and sleeve styles?', 
      a: 'Absolutely! You can upload design pictures or describe your preferred neck cut, sleeve style, daman border, and trouser fitting.' 
    },
    { 
      q: 'How do I give my measurements for party wear?', 
      a: 'You can select standard sizing (S, M, L, XL), enter custom measurements, or request our rider to collect a perfectly fitting sample garment from your doorstep in Lahore.' 
    }
  ];

  const partyItems = [
    {
      id: 1,
      title: 'Frocks & Peplums',
      img: '/party-frock-peplum.png',
      desc: 'Elegant open-front jacket frocks and flared peplums stitched with intricate embellishments.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 2,
      title: 'Sharara Wear',
      img: '/party-sharara-wear.png',
      desc: 'Traditional and festive heavy embroidered sharara & gharara suits for weddings and dholkis.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 3,
      title: 'Long Maxi',
      img: '/party-long-maxi.png',
      desc: 'Twirling flared long maxis in organza, silk, and chiffon with custom waist belt details.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 4,
      title: 'Kurti with Trouser',
      img: '/party-4-blue-silk.png',
      desc: 'Formal silk and velvet kurtis paired with cigarette pants or flared palazzo trousers.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 5,
      title: 'Fancy Palazzo Suit',
      img: '/party-5-champagne-gold.png',
      desc: 'Royal champagne gold & pastel palazzo sets crafted with delicate pearl lace and borders.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 6,
      title: 'Embroidered Shirts',
      img: '/party-3-black-pearl.png',
      desc: 'Black and dark organza formal shirts featuring hand-attached pearl accents and cutwork necklines.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 7,
      title: 'Maxi Wear',
      img: '/party-1-pink-maxi.png',
      desc: 'Dusty pink pleated chiffon maxis with gold sleeve motifs and clean lining finish.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 8,
      title: 'Frok Wear',
      img: '/party-2-sage-green.png',
      desc: 'Sage green mirror-work embroidered frocks with contrast peach organza dupattas.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 9,
      title: 'Festive Formals',
      img: '/stitched-dresses-2.png',
      desc: 'Designer festive collections stitched to your measurements with boutique finishing.',
      delivery: 'Delivery Time: 5-7 working days'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/party-5-champagne-gold.png" alt="Party Wear Stitching" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Special Occasion & Festive Formals
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Party Wear Stitching<br />Services in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            For your special events, dinners, and formal gatherings, we craft elegant silhouettes tailored to your exact measurements with designer-level finishing.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button 
              onClick={() => navTo('book-appointment')}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg shadow-[#D4AF37]/20"
            >
              Book Custom Stitching
            </button>
            <a 
              href="https://wa.me/923158212978?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Party%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 pt-4 border-t border-gray-800/80">
            {['Perfect Fitting Guarantee', 'Silk Inner Lining', 'Timely 5-7 Day Delivery'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COLLECTION GRID (3 ITEMS PER ROW) */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Party Wear Collections
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Handled by expert Lahori craftsmen with specialized embroidery, cutwork, and piping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partyItems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-serif leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold">
                <span className="text-[#D4AF37]">{item.delivery}</span>
                <button 
                  onClick={() => navTo('book-appointment')}
                  className="text-[#D4AF37] hover:underline flex items-center gap-1"
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="relative py-24 px-6 overflow-hidden border-t border-b border-gray-800/80">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="Tailor Workshop" className="w-full h-full object-cover opacity-15 filter grayscale" />
          <div className="absolute inset-0 bg-[#1A1A1A]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              How It Works
            </h2>
            <p className="text-gray-400 text-xs md:text-sm">
              No follow-ups. No delays. Just flawless stitching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm hover:border-[#D4AF37] transition">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Upload Your Design</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Share your favorite outfit inspiration or sketch with us.
              </p>
            </div>

            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm hover:border-[#D4AF37] transition">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Choose Measurement</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Pick your preferred sizing method — standard or custom.
              </p>
            </div>

            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm hover:border-[#D4AF37] transition">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">We Stitch & Deliver to You</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our skilled tailors bring your design to life with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              Testimonials
            </h2>
            <p className="text-gray-400 text-sm">
              Our success stories are diverse and beautiful, they're romantic, heartwarming, and feel just like a dream.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews.map((rev) => (
              <div key={rev.id} className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-[#D4AF37]/40 transition duration-300 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] overflow-hidden shrink-0">
                      <img src={rev.userAvatar} alt={rev.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                      <p className="text-[#D4AF37] text-xs">Customer, Lahore</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed italic border-t border-gray-800 pt-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-800/60">
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">Verified Client</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button 
              onClick={handlePrevReview}
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
              aria-label="Previous Reviews"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={handleNextReview}
              className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black hover:bg-yellow-500 transition"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
      <FAQSection faqs={partyFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
