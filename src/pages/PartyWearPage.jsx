import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ChevronRight, Upload, Scissors, Truck, MessageSquare } from 'lucide-react';
import { customerReviews } from '../data/reviewsData';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function PartyWearPage() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

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
      title: 'Fancy Suit Stitching',
      img: '/party-fancy-suit.png',
      desc: '3-Piece party suits with tissue silk dupattas, lace trimmings, and customized neck borders.',
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 4,
      title: 'Maxi & Formal Gowns',
      img: '/party-maxi-gown.png',
      desc: 'Floor-length flared maxis and pastel gowns crafted for engagement and valima functions.',
      delivery: 'Delivery Time: 5-7 working days'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Party Wear & Wedding Dress Stitching Lahore | Sasta Darzi"
        description="Party wear dress stitching in Lahore. Maxis, peplums, shararas & fancy 3-piece wedding suit stitching with doorstep pickup."
        keywords="Party Wear Suit Stitching Lahore, Fancy Dress Tailor Lahore, Maxi Dress Tailor Lahore, Sharara Stitching Near Me, Ladies Tailor WAPDA Town Lahore"
        canonicalPath="/services/party-wear-stitching-lahore"
      />

      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/party-dress-sample.png" alt="Party Wear Stitching Lahore" className="w-full h-full object-cover opacity-35 filter brightness-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Glamorous Festive Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Party Wear & Wedding Dress<br />Stitching in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Stand out at every event with custom-stitched party maxis, peplums, and festive sharara suits.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link 
              to="/book-ladies-tailor-appointment-lahore"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg inline-block"
            >
              Book Party Wear Stitching
            </Link>
            <a 
              href="https://wa.me/923423748897?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Party%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* PARTY WEAR ITEMS */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Party Wear Stitching Styles
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Expertly crafted with double overlock lining, neat hem finishing, and precise neck detailing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partyItems.map((item) => (
            <div key={item.id} className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-[#D4AF37] font-serif">{item.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-8 py-5 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold">
                <span className="text-[#D4AF37]">{item.delivery}</span>
                <Link to="/book-ladies-tailor-appointment-lahore" className="text-[#D4AF37] hover:underline flex items-center gap-1">
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              Simple 3-Step Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Share Design & Fabric</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Provide fabric via doorstep pickup or send us reference pictures on WhatsApp.
              </p>
            </div>

            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Select Measurements</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Provide standard size or let us collect a sample fitting dress.
              </p>
            </div>

            <div className="bg-[#141414]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4 backdrop-blur-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Stitched & Delivered</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our master tailors finish your outfit with perfection and deliver to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              What Clients Say About Our Party Wear
            </h2>
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
        </div>
      </section>

      <FAQSection faqs={partyFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
