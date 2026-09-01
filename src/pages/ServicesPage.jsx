import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  const navTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-20">
      
      {/* HERO BANNER */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/img-dresses.jpg" alt="Tailoring Studio Services" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-md font-serif">
            Don't Worry, We've Got Your Stitching Covered
          </h1>
        </div>
      </section>

      {/* 2. WHY CHOOSE SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Grey Placeholder Box to Match Design */}
          <div className="bg-neutral-300 rounded-lg h-[400px] w-full shadow-lg flex items-center justify-center text-neutral-600 font-semibold">
            {/* Design Mockup Placeholder Container */}
            <span>SastaDarzi Sizing & Customization Preview</span>
          </div>

          {/* Why Choose List */}
          <div className="space-y-6">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">
                Why Choose SastaDarzi for Your Stitching Needs?
              </h2>
            </div>
            
            <ul className="space-y-5">
              {[
                '100% Custom-Fitted Dresses',
                'Manual or AI-Based Body Measurements',
                'Guaranteed On-Time Delivery',
                'Doorstep Pickup & Delivery Across Lahore',
                'Experienced Female & Male Karigars',
                'Real-Time Order Tracking via App'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-gray-300 text-base font-semibold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="py-24 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Our Core Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'Custom Stitching', 
                desc: 'We offer personalized stitching services for every occasion.', 
                img: '/custom-stitching.png', 
                link: 'stitching' 
              },
              { 
                title: 'Fabric Sourcing', 
                desc: 'We source premium fabrics from top brands.', 
                img: '/img-dresses.jpg', 
                link: 'fabric-calc' 
              },
              { 
                title: 'Alteration Services', 
                desc: 'From minor tweaks to major adjustments, our expert tailors fix fitting and length perfectly.', 
                img: '/alteration-service.png', 
                link: 'alteration' 
              },
              { 
                title: 'Bulk Stitching', 
                desc: 'We specialize in bulk stitching for businesses, boutiques, and designers.', 
                img: '/tailor-workshop.png', 
                link: 'brands' 
              },
              { 
                title: 'Designer Collaboration', 
                desc: 'We collaborate with top designers to bring their exclusive collections.', 
                img: '/stitched-dresses-2.png', 
                link: 'designing' 
              },
              { 
                title: 'Worldwide Delivery', 
                desc: 'No matter where you are, we offer reliable doorstep pickup & worldwide delivery.', 
                img: '/worldwide-delivery.png', 
                link: 'services' 
              },
            ].map((svc, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden cursor-pointer h-[320px] bg-[#262626] border border-neutral-800 hover:border-gold-500/50 transition-all duration-300" onClick={() => navTo(svc.link)}>
                <div className="h-[55%] relative overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#262626] to-transparent" />
                </div>
                
                <div className="p-6 flex flex-col justify-between h-[45%]">
                  <div>
                    <h3 className="text-lg font-bold text-[#D4AF37] leading-tight mb-2 font-serif">{svc.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#D4AF37] text-xs font-bold mt-2">
                    Find Out More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PICKUP & DELIVERY LAHORE */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] font-serif">Pickup & Delivery Available Across Lahore</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-semibold">
              We provide doorstep pickup and delivery across all major sectors including:
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
            <p className="text-[#D4AF37] font-bold text-base mt-4">
              Doorstep Pickup & Delivery Service Across Lahore
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-2xl h-[350px]">
            <iframe 
              title="SastaDarzi Services Location in Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54443.916960136364!2d74.272847!3d31.469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMTYnMjIuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-[85%]" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
