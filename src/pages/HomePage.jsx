import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Star, Smartphone, QrCode, Phone, X } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import SEOHead from '../components/SEOHead';
import { customerReviews, googleReviewsSummary } from '../data/reviewsData';

export default function HomePage() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const navigate = useNavigate();

  const homeFaqs = [
    { q: 'How do I give my measurements?', a: 'You can provide measurements by selecting a standard size on the app, uploading a custom measurement profile, or requesting our representative to pick up a perfect-fit sample garment from your doorstep.' },
    { q: 'Do you pick up and deliver at my doorstep? Is there a charge?', a: 'Yes, we offer doorstep pickup and delivery across Lahore. Please note: pickup and delivery are charged separately and are not included in the stitching price. Our rider collects your fabric from your address and delivers your finished garment back to you. Charges vary by area — confirm the exact fee via WhatsApp before booking.' },
    { q: 'How can I track my tailoring order?', a: 'Once your order is picked up, you can track every stage of the stitching process—from cutting and stitching to quality check and dispatch—in real-time on our mobile app.' },
    { q: 'What is your standard delivery time?', a: 'Our standard delivery time is 7 to 10 working days after fabric collection. We also offer express delivery services if you need your outfits sooner.' },
    { q: 'Can I choose my own neck and sleeve designs?', a: 'Absolutely! You can upload design reference photos or select from our curated catalog of necklines, sleeve designs, and daman borders directly in the app.' }
  ];

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 3 >= customerReviews.length ? 0 : prev + 3));
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 3 < 0 ? Math.max(0, customerReviews.length - 3) : prev - 3));
  };

  const visibleReviews = customerReviews.slice(activeReviewIndex, activeReviewIndex + 3);

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      <SEOHead 
        title="Sasta Darzi | Best Ladies Tailor in Lahore | Custom Dress Stitching & Alteration"
        description="Sasta Darzi is Lahore's premier ladies tailor offering custom dress stitching, bridal lehenga tailoring, party wear, and doorstep fabric pickup across WAPDA Town, DHA, Gulberg, Johar Town & Model Town. Shop No 48 Ground Floor, Wapda, Rehmat Market, WAPDA Town Block K 1 Town, Lahore, 54770, Pakistan."
        keywords="Ladies Tailor in Lahore, Best Ladies Tailor Near Me, Custom Dress Stitching WAPDA Town, Online Darzi Lahore, Boutique Stitching DHA Lahore, Gulberg Tailoring Services, Doorstep Tailor Johar Town, Ladies Alteration Service Lahore, Bridal Lehenga Tailor Lahore"
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/stitched-dresses-2.png" alt="Tailoring Studio Showcase" className="w-full h-full object-cover opacity-30 filter brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-[#1A1A1A]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-[#D4AF37]" /> 4.8 Rating from 94+ Google Reviews
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-md font-serif">
            Best Ladies Tailor in Lahore,<br/>Quality You Can Trust
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every dress deserves perfection — custom ladies suit stitching, bridal couture, party wear, and doorstep fabric pickup in Lahore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/custom-stitching-lahore" className="px-8 py-3.5 bg-[#D4AF37] hover:bg-yellow-500 text-white font-bold uppercase tracking-wider rounded text-sm transition-colors shadow-lg shadow-[#D4AF37]/20 inline-block">
              Book Custom Stitching
            </Link>
            <a
              href="tel:+923158212978"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-sm transition-colors border border-emerald-400/40 flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-white" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. BEST LADIES TAILOR SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Best Ladies Tailor in Lahore</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Looking for an expert ladies tailor in Lahore? At SastaDarzi, we provide high-quality tailoring services designed to give you the perfect fit every time. Whether it's everyday shalwar kameez, formal wear, party dresses, or heavy bridal outfits, we manage everything from start to finish. Our experienced team ensures precision stitching, timely delivery, and a hassle-free experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Real Photo Collage */}
          <div className="grid grid-cols-2 gap-4 h-[420px]">
            <img src="/custom-stitching.png" alt="Custom Stitching on Sewing Machine" className="w-full h-full object-cover rounded-xl col-span-2 row-span-1 border border-[#D4AF37]/30 shadow-lg" style={{height: '230px'}} />
            <img src="/alteration-service.png" alt="Ladies Dress Alteration & Measurement" className="w-full h-[170px] object-cover rounded-xl border border-[#D4AF37]/20 shadow-md" />
            <img src="/worldwide-delivery.png" alt="Doorstep & Worldwide Delivery Service" className="w-full h-[170px] object-cover rounded-xl border border-[#D4AF37]/20 shadow-md" />
          </div>

          {/* Why Choose List */}
          <div className="space-y-6">
            <div className="space-y-2 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] font-serif">Why Choose SastaDarzi?</h3>
              <p className="text-gray-300 font-medium">We're not your typical tailor.</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                No more delays, no more sizing issues. We are bringing precision tailoring direct to your door — digitally managed and locally crafted in Lahore.
              </p>
            </div>
            
            <ul className="space-y-5">
              {[
                '100% custom stitching with designer-level finishing',
                'Rated 4.8 / 5 Stars across 94+ Google Reviews',
                'Doorstep pickup & delivery across Lahore',
                'Dedicated Lahori master tailors & quality control',
                'Manual or AI body measurements'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. STITCHING SERVICES */}
      <section className="py-24 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Ladies Tailoring Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Custom Suit Stitching', tag: 'Our Speciality', img: '/custom-stitching.png', link: '/services/custom-stitching-lahore' },
              { title: 'Alteration Services', tag: 'Our Speciality', img: '/alteration-service.png', link: '/services/ladies-alteration-lahore' },
              { title: 'Bulk Stitching', tag: 'For Brands', img: '/tailor-workshop.png', link: '/services/boutique-stitching-for-brands' },
              { title: 'Worldwide Delivery', tag: 'For Expats', img: '/worldwide-delivery.png', link: '/services' },
            ].map((svc, i) => (
              <div 
                key={i} 
                className="group relative rounded-xl overflow-hidden cursor-pointer h-[320px] bg-neutral-800" 
                onClick={() => navigate(svc.link)}
              >
                <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
                
                <div className="absolute top-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-[#D4AF37] text-[10px] uppercase tracking-wider rounded font-bold mb-3">
                    {svc.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">{svc.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="px-8 py-3 bg-[#D4AF37] hover:bg-yellow-500 text-white font-bold uppercase tracking-wider rounded text-sm transition-colors inline-block">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PICKUP & DELIVERY LAHORE */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Pickup & Delivery Available Across Lahore</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide doorstep pickup and delivery across all major sectors. Our team collects your fabric directly from your home and delivers your ready-to-wear outfit:
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-300 font-semibold text-sm">
              <div>• WAPDA Town</div>
              <div>• Gulberg</div>
              <div>• DHA Phases 1-9</div>
              <div>• Model Town</div>
              <div>• Johar Town</div>
              <div>• Faisal Town</div>
              <div>• Bahria Town</div>
              <div>• Iqbal Town</div>
            </div>
            <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl flex items-center justify-between">
              <span className="text-[#D4AF37] font-bold text-base">Doorstep Pickup & Delivery Across Lahore</span>
              <Link to="/book-ladies-tailor-appointment-lahore" className="px-4 py-2 bg-[#D4AF37] text-black font-bold text-xs rounded uppercase hover:bg-yellow-500 transition inline-block">Book Pickup</Link>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl relative group h-[320px]">
              <img src="/worldwide-delivery.png" alt="SastaDarzi Pickup & Delivery Representative" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">Doorstep Service</span>
                <p className="text-white text-xs font-medium">Safe fabric collection & rider tracking</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl h-[320px]">
              <iframe 
                title="SastaDarzi Location in Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/tailor-workshop.png" alt="Working Tailor Workshop" className="w-full h-full object-cover opacity-20 filter grayscale" />
          <div className="absolute inset-0 bg-[#1A1A1A]/85 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">How It Works</h2>
            <p className="text-gray-400 text-sm">The process is fast, simple, and hassle-free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Upload Your Design', desc: 'Share your requirements and design pictures on the app or WhatsApp.' },
              { title: 'Choose Measurement', desc: 'Pick your preferred measurement method — standard size, custom measurements, or sample dress pickup.' },
              { title: 'We Stitch & Deliver to You', desc: 'Our expert Lahori tailors finish your dress flawlessly and deliver to your door.' },
            ].map((step, i) => (
              <div key={i} className="border border-[#D4AF37]/50 bg-black/40 backdrop-blur-sm rounded-xl p-10 text-center hover:bg-black/60 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <span className="font-bold text-xl">{i+1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOOGLE REVIEWS */}
      <section className="py-24 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-blue-600/20 via-yellow-500/20 to-emerald-600/20 border border-[#D4AF37]/40 px-6 py-2.5 rounded-full">
              <span className="text-[#D4AF37] font-extrabold text-lg">{googleReviewsSummary.rating} ★</span>
              <span className="text-gray-300 text-xs font-semibold">({googleReviewsSummary.totalReviews} Verified Google Reviews)</span>
              <a 
                href="https://g.page/r/CYROPMqivftrEAI/review" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs text-[#D4AF37] hover:text-white flex items-center gap-1 font-bold underline ml-2"
              >
                Visit Google Profile <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">What Our Customers Say</h2>
            <p className="text-gray-400 text-sm">Real reviews from our satisfied clients in Lahore & across Pakistan.</p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleReviews.map((rev) => (
              <a 
                key={rev.id} 
                href="https://g.page/r/CYROPMqivftrEAI/review" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 flex flex-col justify-between hover:border-[#D4AF37]/60 transition duration-300 shadow-xl relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={rev.userAvatar} alt={rev.author} className="w-11 h-11 rounded-full border border-[#D4AF37]/40" />
                      <div>
                        <h4 className="font-bold text-white text-sm flex items-center gap-1.5 group-hover:text-[#D4AF37] transition">
                          {rev.author}
                          {rev.badge && (
                            <span className="text-[9px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded font-bold">{rev.badge}</span>
                          )}
                        </h4>
                        <p className="text-gray-400 text-[11px]">{rev.timeAgo} • <span className="text-[#D4AF37]">{rev.reviewCount || 'Google Review'}</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                    <span className="text-xs text-gray-400 font-bold ml-2 flex items-center gap-1">
                      Verified Google Review <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {rev.reviewImage && (
                  <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-3">
                    <img src={rev.reviewImage} alt="Stitching preview by client" className="w-12 h-12 object-cover rounded-lg border border-[#D4AF37]/30" />
                    <span className="text-xs text-[#D4AF37] font-semibold">Photo shared in review</span>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <a 
                href="https://g.page/r/CYROPMqivftrEAI/review" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-[#1A1A1A] bg-[#D4AF37] border border-[#D4AF37] px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition flex items-center gap-2 shadow-md"
              >
                <ChevronRight className="w-4 h-4" /> Rate Us on Google My Business
              </a>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handlePrevReview} 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Previous Reviews"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={handleNextReview} 
                className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A1A1A] hover:bg-yellow-500 transition-colors"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT MODAL */}
      {showScreenshotModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border-2 border-[#D4AF37]/50 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#141414]">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm">
                <Star className="w-4 h-4 fill-[#D4AF37]" /> Official SastaDarzi Google Reviews (4.8 ★)
              </div>
              <button 
                onClick={() => setShowScreenshotModal(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 flex-1">
              <img src="/google-reviews.png" alt="Official SastaDarzi Google Reviews Screenshot" className="w-full h-auto rounded-lg border border-gray-800 shadow-inner" />
            </div>

            <div className="p-4 border-t border-gray-800 bg-[#141414] text-center text-xs text-gray-400">
              Authentic customer feedback collected directly from our Google Business Profile.
            </div>
          </div>
        </div>
      )}

      {/* 7. APP PROMO */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Not Your Typical Tailor</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              At SastaDarzi, we are bringing precision and convenience to you. Manage your wardrobe from your phone. AI measurements, easy tracking, and reliable delivery.
            </p>
            <p className="text-[#D4AF37] font-semibold text-sm">
              Download SastaDarzi app now on Appstore & Play Store
            </p>
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-[2rem] p-12 lg:p-20 overflow-hidden relative shadow-2xl shadow-[#D4AF37]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8 text-black">
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">Tailor at Your Fingertips</h3>
              <p className="text-black/80 font-medium">Download our app, manage your designs, and get support instantly. It's the modern way to handle your wardrobe.</p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  <QrCode className="w-16 h-16 text-black" />
                </div>
                <div className="space-y-3 flex flex-col">
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-900 transition-colors">
                    <Smartphone className="w-5 h-5" /> Download on the App Store
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-900 transition-colors">
                    <Smartphone className="w-5 h-5" /> GET IT ON Google Play
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-[450px] w-full flex justify-center lg:justify-end items-center">
              <img 
                src="/img-phones-mockup.png" 
                alt="SastaDarzi Mobile App Mockup" 
                className="max-h-full object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <FAQSection faqs={homeFaqs} dark={true} title="Frequently Asked Questions" />

    </div>
  );
}
