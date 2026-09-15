import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function CasualWearPage() {
  const casualFaqs = [
    { 
      q: 'What casual outfits do you stitch?', 
      a: 'We stitch 2-piece and 3-piece lawn suits, linen kurtis, straight shirts with cigarette pants, tulip trousers, and daily tunics.' 
    },
    { 
      q: 'What is the turnaround time for casual wear?', 
      a: 'Our standard delivery time for casual lawn suits is 3 to 5 working days.' 
    },
    { 
      q: 'Do you shrink fabric before stitching?', 
      a: 'Yes, we perform pre-stitching fabric shrinkage upon request to ensure zero size distortion after washing.' 
    },
    { 
      q: 'Can I send a sample dress for measurement pickup?', 
      a: 'Yes! Our rider collects your sample garment from your home in Lahore, and we return it safely along with your newly stitched outfit.' 
    }
  ];

  const casualStyles = [
    {
      title: 'Cream & Blue Printed Kurti Set',
      img: '/cat-casual.png',
      desc: 'Clean A-line casual kurti with geometric neck stripes, floral shoulder motif, and matching straight pants.',
      features: ['Overlock inner seam seal', 'Fray-proof neck collar', 'Clean razor hem fold']
    },
    {
      title: '2-Piece Lawn & Linen Daily Suit',
      img: '/stitched-dresses-1.png',
      desc: 'Comfortable everyday lawn/linen printed shirt with cigarette trousers and neat side slit finish.',
      features: ['Shrunk fabric guarantee', 'Comfortable armhole cut', 'Reinforced side slits']
    },
    {
      title: 'Tulip Trouser & Kurti Set',
      img: '/dress-blue-silk.png',
      desc: 'Trendy short kurti with tulip trouser cut and neat cuff finishing.',
      features: ['Elasticated waist band', 'Double-line seam lock', 'Designer button loop accents']
    }
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Casual Lawn Suit & Shalwar Kameez Stitching Lahore | Sasta Darzi"
        description="Everyday casual lawn suit & shalwar kameez stitching in Lahore. 2-piece & 3-piece suits with doorstep pickup across WAPDA Town, DHA & Gulberg."
        keywords="Casual Suit Stitching Lahore, Lawn Suit Tailor Lahore, Shalwar Kameez Tailor Near Me, Online Darzi Lahore, Ladies Tailor WAPDA Town"
        canonicalPath="/services/casual-suit-stitching-lahore"
      />

      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/cat-casual.png" alt="Casual Suit Stitching Lahore" className="w-full h-full object-cover opacity-35 filter brightness-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Everyday Comfortable Wardrobe
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-lg leading-tight">
            Casual Lawn Suit & Kameez<br />Stitching in Lahore
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Neatly finished 2-piece and 3-piece daily wear lawn and linen suits stitched with precision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link 
              to="/book-ladies-tailor-appointment-lahore"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider rounded text-xs transition shadow-lg inline-block"
            >
              Book Casual Suit Stitching
            </Link>
            <a 
              href="https://wa.me/923158212978?text=Hello%20SastaDarzi,%20I%20want%20to%20inquire%20about%20Casual%20Wear%20stitching." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CASUAL STYLES */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
            Casual Wear Styles
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            Quick 3 to 5 day turnaround with clean seam locks and comfortable fits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casualStyles.map((item, idx) => (
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
                <span className="text-[#D4AF37]">3-5 Days Delivery</span>
                <Link to="/book-ladies-tailor-appointment-lahore" className="text-[#D4AF37] hover:underline flex items-center gap-1">
                  Book <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={casualFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
