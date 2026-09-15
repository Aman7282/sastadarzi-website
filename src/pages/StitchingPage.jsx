import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function StitchingPage() {
  const categories = [
    {
      id: 'bridal',
      title: 'Bridal Wear Stitching',
      img: '/cat-bridal.png',
      path: '/services/bridal-lehenga-tailor-lahore',
      desc: 'Turn heads on your special day with our custom-fitted bridal stitching service. We handle intricate styles with the highest precision, including:',
      bullets: [
        'Traditional 16-kali lehengas',
        'Trail gowns',
        'Heavy dupattas with borders',
        'Embellished cholis & ghararas'
      ],
      delivery: 'Delivery Time: 10-14 working days'
    },
    {
      id: 'party',
      title: 'Party Wear Stitching',
      img: '/cat-party.png',
      path: '/services/party-wear-stitching-lahore',
      desc: 'For your special events and formal gatherings, we craft stylish silhouettes like:',
      bullets: [
        'Pastel Maxis',
        'Decorated shirts',
        'Open front maxis',
        'High-low gowns'
      ],
      delivery: 'Delivery Time: 5-7 working days'
    },
    {
      id: 'casual',
      title: 'Casual Wear Stitching',
      img: '/cat-casual.png',
      path: '/services/casual-suit-stitching-lahore',
      desc: 'Elevate your everyday style with neatly stitched 2-piece and 3-piece suits.',
      bullets: [
        'Straight shirts with cigarette pants',
        'A-line kurtis with tulip trousers',
        'Loose-fit kurta set for daily wear'
      ],
      delivery: 'Delivery Time: 3-5 working days'
    },
    {
      id: 'western',
      title: 'Western Wear Stitching',
      img: '/cat-western.png',
      path: '/services/western-wear-tailor-lahore',
      desc: 'Look globally styled with our western wear stitching service:',
      bullets: [
        'Blazers, jumpsuits, and formal tops',
        'Office wear with clean seams and professional cuts',
        'Maxis, skirts, and trousers'
      ],
      delivery: 'Delivery Time: 5-7 working days'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Custom Ladies Suit Stitching in Lahore | Sasta Darzi"
        description="Custom ladies suit stitching in Lahore with doorstep pickup. Specialized tailoring for bridal lehengas, party wear maxis, lawn suits & western wear."
        keywords="Custom Ladies Suit Stitching Lahore, Shalwar Kameez Tailor Lahore, Best Ladies Tailor in Lahore, Doorstep Tailor WAPDA Town Lahore, Tailor Near Me"
        canonicalPath="/services/custom-stitching-lahore"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="SastaDarzi Custom Stitching Studio" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-md leading-tight">
            Custom Ladies Suit Stitching<br />Services in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            High-precision tailoring crafted by expert Lahori master tailors with doorstep fabric collection & home delivery.
          </p>
        </div>
      </section>

      {/* 2. OUR STITCHING CATEGORIES (2x2 GRID) */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Our Custom Stitching Categories
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            Each category below is handled by specialized tailoring teams to ensure the perfect fit and finish.
          </p>
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-[#D4AF37] font-serif leading-snug">
                    {cat.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    {cat.desc}
                  </p>

                  {/* Bullet Points Grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300 font-medium pt-2">
                    {cat.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="px-8 py-5 border-t border-gray-800 bg-[#1E1E1E] flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
                <span className="text-[#D4AF37]">{cat.delivery}</span>
                <div className="flex items-center gap-3">
                  <Link 
                    to={cat.path}
                    className="text-gray-300 hover:text-white underline flex items-center gap-1"
                  >
                    View Details
                  </Link>
                  <Link 
                    to="/book-ladies-tailor-appointment-lahore"
                    className="px-3.5 py-1.5 bg-[#D4AF37] text-black font-bold rounded hover:bg-yellow-500 transition flex items-center gap-1"
                  >
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. PICKUP & DELIVERY AVAILABLE ACROSS LAHORE */}
      <section className="py-20 px-6 bg-[#141414] border-t border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              Pickup & Delivery Available Across Lahore
            </h2>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide doorstep pickup and delivery across all major sectors including:
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 text-gray-300 font-semibold text-xs md:text-sm">
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> WAPDA Town</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Gulberg</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> DHA Phases 1-9</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Model Town</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Johar Town</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Faisal Town</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Bahria Town</div>
              <div className="flex items-center gap-2"><span className="text-[#D4AF37]">•</span> Iqbal Town</div>
            </div>

            <div className="pt-2">
              <Link 
                to="/book-ladies-tailor-appointment-lahore"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-xs rounded transition shadow-md inline-block"
              >
                Schedule Doorstep Pickup
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl h-[340px]">
            <iframe 
              title="SastaDarzi Lahore Coverage Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 4. SEAMLESS STITCHING PROCESS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 bg-[#242424] border border-gray-800 rounded-2xl h-[340px] flex items-center justify-center text-gray-500 font-semibold shadow-xl relative overflow-hidden">
            <img src="/custom-stitching.png" alt="Stitching Process" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider bg-black/80 px-3 py-1 rounded border border-[#D4AF37]/30">Master Craftsmanship</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
              Seamless Stitching Process
            </h2>

            <div className="space-y-5 text-sm md:text-base font-bold text-white">
              {[
                'Choose Your Dress Type',
                'Select Measurement Method (Manual or AI)',
                'We Stitch & Deliver',
                'Track Live in App'
              ].map((stepText, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#242424] p-4 rounded-xl border border-gray-800 hover:border-[#D4AF37]/40 transition">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  <span>{stepText}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                to="/book-ladies-tailor-appointment-lahore"
                className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-xs rounded transition shadow-lg inline-block"
              >
                Book Custom Stitching Now
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
