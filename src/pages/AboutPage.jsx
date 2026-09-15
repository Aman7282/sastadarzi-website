import React, { useState } from 'react';
import { Star, ChevronRight, CheckCircle2, ShieldCheck, Heart, Award } from 'lucide-react';
import { customerReviews, googleReviewsSummary } from '../data/reviewsData';
import SEOHead from '../components/SEOHead';

export default function AboutPage({ setActivePage }) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 3 >= customerReviews.length ? 0 : prev + 3));
  };

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev - 3 < 0 ? Math.max(0, customerReviews.length - 3) : prev - 3));
  };

  const visibleReviews = customerReviews.slice(activeReviewIdx, activeReviewIdx + 3);

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="About Us | Best Ladies Tailor in Lahore | Sasta Darzi"
        description="Sasta Darzi is a premium ladies tailoring service in Lahore. We stitch for Maria B, Khaadi, and provide doorstep pickup across Lahore."
        keywords="ladies tailor in lahore, best ladies tailor near me, about sasta darzi, wapda town tailor"
        canonicalPath="/about-best-ladies-tailor-lahore"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="SastaDarzi Workshop" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg">
            About us
          </h1>
        </div>
      </section>

      {/* 2. ABOUT SASTADARZI? SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              About SastaDarzi?
            </h2>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Sasta Darzi was founded with the vision to revolutionize the stitching industry in Pakistan. The idea was born when <strong className="text-white">Aman Ullah</strong>, a seasoned technical expert, digital marketing professional, and software engineer, identified the need for a modern, safe, and reliable stitching service for ladies and boutiques. Recognizing the gap in the market, Aman decided to bring his technical expertise to the fashion industry, creating a platform that combines convenience with craftsmanship.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              To bring this vision to life, <strong className="text-white">Sami Ullah</strong>, who has over 15 years of experience in the stitching and tailoring industry, joined as the CEO of the company. With Sami's extensive knowledge and Aman's innovative approach, Sasta Darzi officially launched in September with the goal of providing premium tailoring services that cater to both individual clients and fashion boutiques. Our mission is to ensure that ladies across Pakistan and the world have access to high-quality stitching services from the comfort of their homes.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              We focus on stitching garments for renowned brands like <strong className="text-[#D4AF37]">Maria B, Khaadi</strong>, and others, offering exceptional craftsmanship that meets the highest standards. Whether you need custom tailoring or bulk stitching services, Sasta Darzi is committed to delivering impeccable results with every order.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  setActivePage('book-appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-xs rounded transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                Book An Appointment
              </button>
            </div>
          </div>

          {/* Right Image Collage matching design screenshot */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 h-[220px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl">
              <img src="/stitched-dresses-2.png" alt="Luxury Designer Dresses" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="h-[170px] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-lg">
              <img src="/tailor-workshop.png" alt="Tailors at sewing machines" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="h-[170px] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-lg">
              <img src="/stitched-dresses-1.png" alt="Boutique stitched suits" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR MISSION & OUR VISION (GOLD BORDERED CARDS) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Mission */}
          <div className="bg-[#141414] border-2 border-[#D4AF37]/50 rounded-2xl p-10 space-y-4 hover:border-[#D4AF37] transition duration-300 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] font-serif text-center">
              Our Mission
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              At Sasta Darzi, our mission is to provide safe, reliable, and high-quality stitching services to ladies and boutiques worldwide. We strive to combine tradition with innovation, ensuring that every garment we tailor is crafted with care, precision, and excellence. Our aim is to make the tailoring process seamless and accessible, whether through online orders or in-person consultations.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-[#141414] border-2 border-[#D4AF37]/50 rounded-2xl p-10 space-y-4 hover:border-[#D4AF37] transition duration-300 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] font-serif text-center">
              Our Vision
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Our vision is to become the leading online ladies tailor in Pakistan and beyond, known for our expert craftsmanship and customer-focused approach. We aspire to expand our reach globally, continuing to offer bespoke tailoring services that empower women to feel confident in clothing tailored to their needs. We envision a future where Sasta Darzi becomes synonymous with high-quality tailoring for both everyday wear and boutique-level fashion.
            </p>
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

          {/* Testimonials Grid */}
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

          {/* Nav Controls */}
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

    </div>
  );
}
