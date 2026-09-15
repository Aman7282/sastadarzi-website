import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { customerReviews } from '../data/reviewsData';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function BridalWearPage() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const bridalFaqs = [
    { 
      q: 'What bridal outfits do you stitch?', 
      a: 'We specialize in 16-kali Barat lehengas, Walima long gowns, Mehndi shararas/ghararas, and designer bridal trousseau suits.' 
    },
    { 
      q: 'Do you insert can-can net and canvas lining in lehengas?', 
      a: 'Yes, all our bridal lehengas and gowns include built-in multi-layer can-can net volume, canvas reinforced waistbands, and full silk lining.' 
    },
    { 
      q: 'What is the delivery time for bridal stitching?', 
      a: 'Standard bridal stitching takes 10 to 14 working days due to intricate handwork preservation, double seam locking, and trial fittings.' 
    },
    { 
      q: 'Do you offer international shipping for overseas brides?', 
      a: 'Yes! We provide express insured worldwide delivery to the UK, USA, Canada, UAE, Saudi Arabia, and Australia.' 
    }
  ];

  const bridalStyles = [
    {
      title: 'Barat Heavy Zardozi Lehenga',
      img: '/cat-bridal.png',
      desc: '16-Kali maroon raw silk lehenga with heavy gold Zardozi threadwork, inner can-can net, and concealed zip.',
      features: ['Canvas reinforced waist band', 'Built-in double can-can net volume', 'Deep waist hook & heavy metal zip']
    },
    {
      title: 'Walima Gold Metallic Flared Gown',
      img: '/dress-gold-twirl.png',
      desc: 'Twirling gold velvet & organza walima gown with heavy bodice embellishment and full flare skirt.',
      features: ['Full flared horsehair braid hem', 'Padded bust cups insertion', 'Custom net dupatta border attachment']
    },
    {
      title: 'Mehndi Sharara & Gharara Set',
      img: '/stitched-dresses-2.png',
      desc: 'Vibrant yellow & green festive sharara set with gota border alignment and resham neck details.',
      features: ['Multi-layer satin & silk lining', 'Double overlock interior seam seal', 'Tassel dori back attachment']
    },
    {
      title: 'Designer Barat Lehenga Resizing',
      img: '/stitched-dresses-1.png',
      desc: 'Precision fitting & resizing for imported bridal lehengas without cutting Zardozi panel borders.',
      features: ['Hidden inner dart tucks', 'Re-seated zipper retention', 'Zero border distortion guaranteed']
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Bridal Lehenga & Barat Suit Tailor in Lahore | Sasta Darzi"
        description="Custom bridal lehenga stitching in Lahore. Barat 16-kali lehengas, Walima maxis, Mehndi shararas with built-in can-can net & doorstep pickup."
        keywords="Bridal Lehenga Tailor Lahore, Barat Dress Stitching, Walima Gown Tailor Lahore, Designer Bridal Stitching Near Me, Ladies Tailor WAPDA Town Lahore"
        canonicalPath="/services/bridal-lehenga-tailor-lahore"
      />

      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/cat-bridal.png" alt="Bridal Couture Stitching Lahore" className="w-full h-full object-cover opacity-35 filter brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Bridal Barat & Walima Masterpieces
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Bridal Wear Stitching<br />Services in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Turn heads on your special day with custom-fitted bridal lehengas, long gowns, and ghararas crafted by master Lahori artisans.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link 
              to="/book-ladies-tailor-appointment-lahore"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg shadow-[#D4AF37]/20 inline-block"
            >
              Book Bridal Consultation
            </Link>
            <a 
              href="https://wa.me/923423748897?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Bridal%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300 pt-4 border-t border-gray-800/80">
            {['Built-in Can-Can Volume', 'Canvas Reinforced Waist', 'Insured Express International Delivery'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL STYLES */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Bridal Wear Masterpieces
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Handled by specialized master cut artisans to ensure majestic flare, shape, and zero motif damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bridalStyles.map((item, idx) => (
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
                <span className="text-[#D4AF37]">Delivery Time: 10-14 working days</span>
                <Link to="/book-ladies-tailor-appointment-lahore" className="text-[#D4AF37] hover:underline flex items-center gap-1">
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LAHORE PICKUP */}
      <section className="py-20 px-6 bg-[#141414] border-t border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              Doorstep Pickup Across Lahore & Worldwide Delivery
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide doorstep pickup in Lahore and express insured international shipping for overseas brides:
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-gray-300 font-semibold text-xs md:text-sm">
              <div>• WAPDA Town</div>
              <div>• Gulberg</div>
              <div>• DHA Phases 1-9</div>
              <div>• Model Town</div>
              <div>• Johar Town</div>
              <div>• Faisal Town</div>
              <div>• Bahria Town</div>
              <div>• Overseas Shipping (UK, USA, UAE)</div>
            </div>
            <Link to="/book-ladies-tailor-appointment-lahore" className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-xs rounded inline-block">
              Book Bridal Appointment
            </Link>
          </div>
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl h-[320px]">
            <iframe 
              title="SastaDarzi Location in Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQSection faqs={bridalFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
