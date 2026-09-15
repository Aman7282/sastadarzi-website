import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, User, Sparkles, Search, CheckCircle2 } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';

export default function BlogPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const blogFaqs = [
    {
      q: 'Do you offer custom tailoring advice based on these blog guides?',
      a: 'Yes! Our master tailors provide free design consultation during doorstep fabric pickup or appointment booking in Lahore.'
    },
    {
      q: 'Can I bring a blog reference or design picture for custom stitching?',
      a: 'Absolutely. You can share any article reference, Pinterest photo, or sketch when placing your custom stitching order.'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Tailoring Tips for Unstitched Lawn & Cotton Suits',
      category: 'stitching-tips',
      categoryLabel: 'Stitching Tips',
      date: 'September 1, 2026',
      readTime: '4 min read',
      author: 'SastaDarzi Master Tailors',
      summary: 'Learn how to shrink unstitched lawn fabric before cutting, choose the best neck collars, and add overlock seam seals for long-lasting summer suits.',
      fullContent: `
        Unstitched lawn and cotton suits are a staple of Pakistani fashion. However, getting the perfect fit requires attention to detail before the first cut is made.

        1. Pre-Stitching Fabric Shrinkage:
        Always soak 100% cotton and lawn fabric in room temperature water for 30 minutes before tailoring. This prevents unwanted shrinking after your suit is stitched.

        2. Neckline & Side Slit Finishing:
        Reinforcing side slits with silk piping prevents tears when sitting down. Additionally, canvas collars help maintain neckline shape after multiple washes.

        3. Trouser Hem Fitting:
        Whether you prefer cigarette trousers or flared palazzos, ensure the bottom hem has a clean 1.5-inch fold to maintain crisp drape.
      `,
      img: '/stitched-dresses-[#...]' ? '/cat-casual.png' : '/cat-casual.png'
    },
    {
      id: 2,
      title: 'Bridal Lehenga Stitching Guide: Kali Count, Can-Can & Waistbands',
      category: 'bridal',
      categoryLabel: 'Bridal & Couture',
      date: 'August 28, 2026',
      readTime: '6 min read',
      author: 'Sami Ullah (CEO & Master Craftsman)',
      summary: 'Everything you need to know about 8-Kali vs 16-Kali lehengas, built-in double can-can net volume, and preserving heavy Zardozi panel borders.',
      fullContent: `
        Stitching a heavy bridal Barat or Walima lehenga is an architectural art. Here are key factors that create a majestic bridal look:

        1. Understanding Kali Count:
        An 8-Kali lehenga provides classic flare, while a 16-Kali or 24-Kali lehenga creates voluminous royal fullness. Ensure your fabric width allows for full panel drafting.

        2. Built-in Can-Can Net Support:
        Double-layer can-can net inserted between the outer raw silk and inner satin lining ensures your lehenga maintains its flared bell shape on stage without feeling heavy.

        3. Heavy Zipper & Hook Retention:
        Bridal waistbands require canvas reinforcement, a deep waist hook lock, and a heavy-duty concealed metal zip to prevent slipping.
      `,
      img: '/cat-bridal.png'
    },
    {
      id: 3,
      title: 'Doorstep Fabric Pickup & Online Darzi Services in Lahore',
      category: 'services',
      categoryLabel: 'Doorstep Tailoring',
      date: 'August 24, 2026',
      readTime: '5 min read',
      author: 'Aman Ullah (Co-Founder)',
      summary: 'Discover how SastaDarzi collects unstitched fabric from your home in Gulberg, DHA, WAPDA Town, and Johar Town with 100% fitting guarantee.',
      fullContent: `
        Visiting crowded tailor shops in Lahore heat can be stressful. Our online doorstep tailoring service simplifies the process:

        1. Home Pickup:
        Our rider arrives at your doorstep in Lahore to collect your unstitched fabric and sample garment for size reference.

        2. Precision Cutting:
        Our master tailors inspect fabric grain, pattern alignment, and embroidery motifs before precision cutting.

        3. Insured Doorstep Delivery:
        Your finished outfit is packed in a moisture-proof garment bag and delivered back to your home within 3 to 7 working days.
      `,
      img: '/delivery-service.png'
    },
    {
      id: 4,
      title: 'The Art of Ladies Dress Alteration: Resizing Without Ruining Cuts',
      category: 'alterations',
      categoryLabel: 'Dress Alteration',
      date: 'August 18, 2026',
      readTime: '4 min read',
      author: 'SastaDarzi Alteration Experts',
      summary: 'Why cheap alterations distort armholes and daman lines, and how our master tailors preserve original designer panel cuts during resizing.',
      fullContent: `
        Altering a heavy party dress or designer shirt requires skilled dart re-seating rather than blindly sewing straight inner seams.

        1. Armhole Balance:
        Reducing shoulder width without re-drafting the armhole curve causes uncomfortable pulling across the chest. Always insist on proper armhole reshaping.

        2. Motif Cutwork Preservation:
        When altering heavily embroidered shirts, tucks should be taken from hidden side seams so the front motif alignment stays centered.
      `,
      img: '/alteration-service.png'
    },
    {
      id: 5,
      title: 'How to Calculate Exact Fabric Needed for Kameez, Lehenga & Maxi',
      category: 'stitching-tips',
      categoryLabel: 'Fabric Guide',
      date: 'August 12, 2026',
      readTime: '5 min read',
      author: 'SastaDarzi Tailoring Studio',
      summary: 'A complete yardage breakdown for standard sizing vs voluminous flared maxis, pishwas, and saree blouses.',
      fullContent: `
        Buying too little fabric can ruin a dress design, while buying excess fabric wastes money. Use these general yardage rules:

        - Standard 2-Piece Kameez & Trouser: 4.25 yards (44" width)
        - Flared Anarkali / Maxi: 6.0 yards (44" width)
        - 12-Kali Volume Lehenga: 6.5 to 7.0 yards
        - Saree Blouse: 1.25 to 1.5 yards with inner lining
      `,
      img: '/stitched-dresses-1.png'
    },
    {
      id: 6,
      title: 'Designer Suit Redesign: Replicating High Fashion Cuts at Home',
      category: 'fashion',
      categoryLabel: 'Boutique Fashion',
      date: 'August 05, 2026',
      readTime: '5 min read',
      author: 'SastaDarzi Fashion Team',
      summary: 'How to achieve boutique-level organza daman cutwork, pearl drop tassels, and piping finish on unstitched designer suits.',
      fullContent: `
        You don't need to pay high boutique prices to get a designer finish. Here is how SastaDarzi upgrades unstitched suits:

        1. Organza Scalloped Trims:
        Fusing organza cutwork with heat-sealing prevents fraying while adding luxury texture to sleeves and shirt daman.

        2. Pearl & Zari Dori Tassels:
        Hand-attaching pearl drops to necklines and back doris gives a high-end couture feel to party wear.
      `,
      img: '/party-5-champagne-gold.png'
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Tailoring Blog & Tips | Ladies Tailor in Lahore"
        description="Read our latest blog posts on custom dress stitching tips, bridal lehenga guides, and doorstep tailoring services in Lahore."
        keywords="ladies tailor in lahore, dress stitching tips, best ladies tailor near me, tailoring blog"
        canonicalPath="/blog-ladies-tailoring-tips-lahore"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="SastaDarzi Tailoring Blog" className="w-full h-full object-cover opacity-30 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
            Tailoring Insights & Style Guides
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif tracking-tight drop-shadow-md leading-tight">
            SastaDarzi Blog & Journal
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Expert tailoring advice, fabric yardage guides, bridal lehenga tips, and doorstep tailoring insights from Lahori master tailors.
          </p>
        </div>
      </section>

      {/* 2. BLOG CATEGORY FILTER */}
      <section className="py-8 bg-[#141414] border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {[
            { key: 'all', label: 'All Articles' },
            { key: 'stitching-tips', label: 'Stitching Tips' },
            { key: 'bridal', label: 'Bridal & Couture' },
            { key: 'services', label: 'Doorstep Service' },
            { key: 'alterations', label: 'Dress Alterations' },
            { key: 'fashion', label: 'Boutique Fashion' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 text-xs font-bold uppercase rounded-xl transition border ${selectedCategory === cat.key ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg' : 'bg-[#242424] text-gray-300 border-gray-800 hover:border-[#D4AF37]/40'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. BLOG POSTS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticleModal(post)}
              className="bg-[#242424] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-56 w-full overflow-hidden bg-black/40 relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-black/80 px-3 py-1 rounded border border-[#D4AF37]/40 backdrop-blur-sm">
                    {post.categoryLabel}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#D4AF37]" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-800 bg-[#1E1E1E] flex items-center justify-between text-xs font-bold text-[#D4AF37]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ARTICLE MODAL LIGHTBOX */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#242424] border-2 border-[#D4AF37]/40 rounded-2xl max-w-2xl w-full p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveArticleModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded border border-[#D4AF37]/30">
                {activeArticleModal.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-snug">
                {activeArticleModal.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                <span>By {activeArticleModal.author}</span>
                <span>•</span>
                <span>{activeArticleModal.date}</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-800 h-64">
              <img src={activeArticleModal.img} alt={activeArticleModal.title} className="w-full h-full object-cover" />
            </div>

            <div className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
              {activeArticleModal.fullContent}
            </div>

            <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-4 items-center justify-between">
              <button
                onClick={() => {
                  setActiveArticleModal(null);
                  navTo('book-appointment');
                }}
                className="px-6 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shadow-lg"
              >
                Book Custom Stitching Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection faqs={blogFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
