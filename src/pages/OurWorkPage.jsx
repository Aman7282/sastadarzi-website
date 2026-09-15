import React, { useState } from 'react';
import { Scissors, Sparkles, CheckCircle2, MessageSquare, X, Eye, ArrowRight, MapPin, Search } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function OurWorkPage({ setActivePage }) {
  const [filter, setFilter] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const portfolioFaqs = [
    {
      q: 'Are these actual photos of outfits stitched by SastaDarzi?',
      a: 'Yes! All images in our portfolio showcase real dresses stitched, finished, and delivered by our Lahori master tailors.'
    },
    {
      q: 'Can you replicate a design from an image I provide?',
      a: 'Absolutely! Simply upload your reference picture during booking or send it via WhatsApp, and our tailoring team will craft the exact silhouette and cut.'
    },
    {
      q: 'Do you stitch unstitched branded designer suits?',
      a: 'Yes, we specialize in stitching all unstitched luxury fabrics (lawn, chiffon, organza, velvet, and raw silk) with precise necklines, sleeve trims, daman borders, and inner lining.'
    },
    {
      q: 'How can I request doorstep fabric pickup in Lahore?',
      a: 'Click "Book Custom Stitching", select your address in Lahore (Gulberg, DHA, WAPDA Town, Johar Town, etc.), and our rider will collect your fabric right from your home.'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Ivory Silk & Pearl Fringe Suit',
      category: 'formal',
      categoryLabel: 'Pearl Fringe Silk',
      desc: 'Ivory silk shirt with heavy pearl tassel fringe daman trim and pearl-studded flared wrist cuffs.',
      qualityNotes: 'Hand-attached heavy pearl fringe, satin inner lining, tear-proof shoulder seam',
      img: '/portfolio-ivory-pearl.jpg'
    },
    {
      id: 2,
      title: 'Eternal Delight Nida Abaya',
      category: 'abaya',
      categoryLabel: 'Nida Fabric Abaya',
      desc: 'Deep maroon Nida fabric front-open abaya with metallic trim edging and draped butterfly sleeves.',
      qualityNotes: 'Premium Nida fabric handling, concealed snap buttons, fluid drape cut',
      img: '/portfolio-maroon-abaya.jpg'
    },
    {
      id: 3,
      title: 'SastaDarzi Studio Organza Sample',
      category: 'formal',
      categoryLabel: 'Studio Craftsmanship',
      desc: 'Cream organza formal shirt with multi-color floral cutwork border displayed in our Lahore workshop.',
      qualityNotes: 'Razor-sharp cutwork edge preservation, pearl drop accents, silk inner lining',
      img: '/portfolio-studio-cream.jpg'
    },
    {
      id: 4,
      title: 'Dusty Pink Floral Embroidered Kaftan',
      category: 'maxi',
      categoryLabel: 'Floral Kaftan',
      desc: 'Dusty pink chiffon kaftan with resham rose neck embroidery and fluid drape flared sides.',
      qualityNotes: 'Resham threadwork protection, custom neck keyhole string, lightweight inner slip',
      img: '/portfolio-pink-kaftan.jpg'
    },
    {
      id: 5,
      title: 'Pure White Embellished Formal Set',
      category: 'formal',
      categoryLabel: 'Pure White Formal',
      desc: 'Pure white raw silk suit with pearl-studded neckline and hand-attached silver cutwork daman.',
      qualityNotes: 'Pearl drop neck detail, organza sleeve insertion, overlock interior seam seal',
      img: '/portfolio-white-embellished.jpg'
    },
    {
      id: 6,
      title: 'Magenta Pink Georgette Saree',
      category: 'saree',
      categoryLabel: 'Georgette Saree',
      desc: 'Magenta pink georgette saree with heavy silver scallop lace border and embellished maroon blouse.',
      qualityNotes: 'Custom saree pallu pleating, padded bust cups in blouse, heavy back hook lock',
      img: '/brand-magenta-saree.jpg'
    },
    {
      id: 7,
      title: 'Dual-Tone Grey & Teal Silk Saree',
      category: 'saree',
      categoryLabel: 'Dual-Tone Silk Saree',
      desc: 'Dual-tone grey & teal silk saree with embroidered scalloped borders and tailored petticoat.',
      qualityNotes: 'Precision border alignment, non-slip waist hook strip, custom blouse fitting',
      img: '/brand-teal-saree.jpg'
    },
    {
      id: 8,
      title: 'Champagne Gold Open Jacket Pishwas',
      category: 'bridal',
      categoryLabel: 'Couture Pishwas',
      desc: 'Champagne gold net & organza open-front jacket pishwas with sequin cutwork and matching potli bag.',
      qualityNotes: 'Built-in inner silk skirt, cutwork motif preservation, matching accessory stitching',
      img: '/brand-gold-jacket.jpg'
    },
    {
      id: 9,
      title: 'Lavender Silk Suit & Pearl Tassels',
      category: 'formal',
      categoryLabel: 'Lavender Silk',
      desc: 'Lavender silk shirt with resham floral neck embroidery, organza dupatta with scalloped borders, and pearl tassels.',
      qualityNotes: 'Hand-attached pearl dori tassels, organza scalloped dupatta edging, overlock inner seam lock',
      img: '/brand-lavender-silk.jpg'
    },
    {
      id: 10,
      title: 'Silver Grey Shimmer Formal Suit',
      category: 'formal',
      categoryLabel: 'Shimmer Formal',
      desc: 'Silver grey shimmer shirt with sheer organza sleeves, delicate neck embellishment, and tailored cigarette pants.',
      qualityNotes: 'Sheer sleeve overlock finish, pearl drop daman trim, tailored cigarette pant cut',
      img: '/brand-silver-shimmer.jpg'
    },
    {
      id: 11,
      title: 'White Floral Embroidered Kurti Set',
      category: 'casual',
      categoryLabel: 'Lawn Kurti Set',
      desc: 'White floral embroidered shirt with custom sunflower collars and rust flared bottom.',
      qualityNotes: 'Canvas reinforced collars, double-line gold piping, custom wrist detail',
      img: '/stitched-dresses-1.png'
    },
    {
      id: 12,
      title: 'Festive Formals Rack Showcase',
      category: 'bridal',
      categoryLabel: 'Boutique Collection',
      desc: 'Rack of custom stitched partywear including gold embroidered gown, yellow resham tunic, and emerald green suit.',
      qualityNotes: 'Full inner satin lining, hand-attached pearl buttons, double seam lock',
      img: '/stitched-dresses-2.png'
    },
    {
      id: 13,
      title: 'Olive Green Embroidered Sharara Suit',
      category: 'formal',
      categoryLabel: 'Embroidered Formal',
      desc: 'Olive green chiffon shirt with intricate silver resham threadwork running down vertical panels, finished with a decorative bow belt accent and a pleated metallic sharara.',
      qualityNotes: 'Dense resham threadwork on organza base, bow belt hand-stitched, pleated sharara precision-cut',
      img: '/portfolio-olive-embroidered.jpg'
    },
    {
      id: 14,
      title: 'Black & White Abstract Print Kaftan',
      category: 'abaya',
      categoryLabel: 'Printed Kaftan Maxi',
      desc: 'Striking black satin kaftan with bold white abstract leaf-print, V-neckline with silver chain trim edging, and dramatic batwing sleeves for an effortlessly glamorous look.',
      qualityNotes: 'Satin print preservation, silver chain neckline finish, overlock batwing hem',
      img: '/portfolio-black-printed-kaftan.png'
    },
    {
      id: 15,
      title: 'Rose Pink Shimmer Column Gown',
      category: 'maxi',
      categoryLabel: 'Shimmer Party Gown',
      desc: 'Floor-length rose pink shimmer fabric column gown with a structured high-mock neck, cold-shoulder cut-out sleeves, and a sleek fitted silhouette perfect for formal events.',
      qualityNotes: 'Shimmer fabric flat-seam stitching, structured mock neck interfacing, cold-shoulder sleeve precision',
      img: '/portfolio-pink-shimmer-gown.jpg'
    },
    {
      id: 16,
      title: 'White Cutwork Lace Formal Suit',
      category: 'formal',
      categoryLabel: 'Cutwork Lace Formal',
      desc: 'Elegant ivory white cutwork lace dupatta and shirt set with delicate floral motif hand-stitching and colourful resham flower accents — a signature SastaDarzi studio piece.',
      qualityNotes: 'Hand-preserved cutwork lace edges, resham floral appliqué, silk inner lining',
      img: '/portfolio-white-cutwork-suit.jpg'
    },
    {
      id: 17,
      title: 'Dusty Pink Floral Satin Blouse',
      category: 'casual',
      categoryLabel: 'Floral Satin Blouse',
      desc: 'Soft dusty pink satin blouse with a vibrant floral print, elegant pussy-bow neck tie, button-down front placket, and shirred wrist cuffs — a refined everyday staple.',
      qualityNotes: 'Satin print alignment at seams, self-fabric pussy-bow, shirred cuff finish',
      img: '/portfolio-floral-blouse.jpg'
    },
    {
      id: 18,
      title: 'Teal Emerald Sequin Trail Gown',
      category: 'bridal',
      categoryLabel: 'Couture Sequin Gown',
      desc: 'Breathtaking teal emerald full-length gown with dense geometric silver sequin embellishment, V-neckline, sheer organza long sleeves, pearl waist band detail, and a dramatic trailing hem.',
      qualityNotes: 'Hand-sewn geometric sequin layout, pearl-studded waistband, sheer sleeve overlock finish, trail hem reinforced lining',
      img: '/portfolio-teal-sequin-gown.jpg'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(i => i.category === filter);

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Our Work Portfolio | Ladies Tailor in Lahore"
        description="View our custom stitched dresses, bridal lehengas, party maxis, and casual lawn suits. See our quality finish and craftsmanship."
        keywords="ladies tailor in lahore, boutique stitching portfolio, bridal dress portfolio, best ladies tailor near me"
        canonicalPath="/tailoring-work-portfolio-lahore"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="SastaDarzi Portfolio" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Master Craftsmanship & Real Outfit Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-md leading-tight">
            Our Portfolio Showcase
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Inspect actual stitched outfits, sarees, abayas, and formal suits executed by our Lahori master tailors with precision finishing.
          </p>
        </div>
      </section>

      {/* 2. PORTFOLIO GALLERY */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { key: 'all', label: 'All Portfolio' },
            { key: 'formal', label: 'Formal Silk & Pearl' },
            { key: 'saree', label: 'Sarees & Dupattas' },
            { key: 'abaya', label: 'Abayas & Kaftans' },
            { key: 'bridal', label: 'Couture & Pishwas' },
            { key: 'casual', label: 'Lawn & Daily Wear' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 text-xs font-bold uppercase rounded-xl transition border ${filter === f.key ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg' : 'bg-[#242424] text-gray-300 border-gray-800 hover:border-[#D4AF37]/40'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (3 items per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-72 w-full overflow-hidden bg-black/40 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-black/80 px-3 py-1 rounded border border-[#D4AF37]/40 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" /> Inspect Stitching Details
                </span>
                <span className="text-gray-400 group-hover:text-white transition">View Photo →</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. MODAL LIGHTBOX */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#242424] border-2 border-[#D4AF37]/40 rounded-2xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded border border-[#D4AF37]/30">
                {activeModalItem.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">{activeModalItem.title}</h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-800 max-h-80">
              <img src={activeModalItem.img} alt={activeModalItem.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">{activeModalItem.desc}</p>

            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
              <h4 className="font-bold text-[#D4AF37]">Master Tailor Quality Notes:</h4>
              <p className="text-gray-300">✓ {activeModalItem.qualityNotes}</p>
              <p className="text-gray-300">✓ Custom measurement precision & neck/sleeve finishing</p>
              <p className="text-gray-300">✓ Double overlock interior seam seal & lining</p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  navTo('book-appointment');
                }}
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
              >
                Book Custom Stitching For This Style <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. LOCAL KEYWORDS & LAHORE SERVICE COVERAGE SECTION */}
      <section className="py-16 px-6 bg-[#141414] border-t border-gray-800">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Lahore Doorstep Tailoring & Local Coverage
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
              Best Ladies Tailor & Custom Stitching in Lahore
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              We provide doorstep fabric pickup and custom ladies dress stitching across all top areas in Lahore.
            </p>
          </div>

          {/* Keyword Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {[
              'Ladies Tailor in Lahore',
              'Custom Dress Stitching WAPDA Town',
              'Online Darzi Lahore',
              'Boutique Stitching DHA Lahore',
              'Gulberg Tailoring Services',
              'Doorstep Tailor Johar Town',
              'Ladies Alteration Service Lahore',
              'Custom Lehenga Stitching',
              'Saree Blouse & Fall Stitching Lahore',
              'Lawn Suit Tailor Model Town',
              'Abaya & Kaftan Tailor Lahore',
              'Barat & Walima Gown Tailor Lahore'
            ].map((kw) => (
              <span key={kw} className="px-3.5 py-1.5 bg-[#242424] border border-gray-800 text-gray-300 text-xs font-medium rounded-lg hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#D4AF37]" /> {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
      <FAQSection faqs={portfolioFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
