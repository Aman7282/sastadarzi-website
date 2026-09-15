import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ForBrandsPage() {
  const brandServices = [
    {
      title: 'Boutique Batch Stitching',
      qty: '10 to 50 Suits',
      desc: 'Ideal for independent fashion designers, Instagram boutiques, and startup clothing labels looking for flawless finishing.',
      perks: ['Master size grading (XS to XXL)', 'Branded fabric tag stitching', 'Sample suit approval before batch']
    },
    {
      title: 'Designer Capsule Collections',
      qty: '50 to 200 Suits',
      desc: 'Precision production for festive lawn drops, silk formals, and seasonal capsule launches with strict deadline management.',
      perks: ['Fabric consumption optimization', 'Quality control seal on every piece', 'Individual poly-bag packaging']
    },
    {
      title: 'Overseas Reseller Production',
      qty: 'Custom Wholesale Batches',
      desc: 'Tailored manufacturing for overseas boutiques in UK, USA, Canada, UAE, Saudi Arabia, and Australia.',
      perks: ['Export compliant customs invoices', 'Consolidated DHL Express airfreight', 'Dedicated B2B manager']
    },
    {
      title: 'Bulk Stitching & Contract Manufacturing',
      qty: '200 to 1,000+ Units',
      desc: 'Large scale unit stitching with automated pattern cutting efficiency, uniform size standards, and defect-free guarantee.',
      perks: ['Standardized size chart execution', 'Barcoded batch tracking', 'Guaranteed turnaround contract']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      <SEOHead 
        title="Bulk Stitching Services for Boutique & Fashion Brands Lahore | Sasta Darzi"
        description="B2B bulk stitching & garment manufacturing for clothing brands & boutiques in Lahore. Batch production, sample stitching & international export delivery."
        keywords="Bulk Stitching Services Lahore, Boutique Stitching Manufacturer, Garment Factory Lahore, Clothing Brand Stitching, Tailor Near Me"
        canonicalPath="/services/boutique-stitching-for-brands"
      />

      {/* Title */}
      <div className="text-center space-y-3 max-w-3xl mx-auto pt-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
          B2B Wholesale & Production
        </span>
        <h1 className="text-4xl font-extrabold font-serif text-white">
          Tailoring Manufacturing <span className="text-[#D4AF37]">For Brands & Boutiques</span>
        </h1>
        <p className="text-neutral-300 text-sm leading-relaxed">
          Partner with Lahore's premier ladies tailoring facility for small batch production, sample stitching, and bulk manufacturing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brandServices.map((b, idx) => (
          <div key={idx} className="bg-neutral-900 border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-2xl p-8 space-y-6 transition flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  {b.qty}
                </span>
                <Briefcase className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-white">{b.title}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{b.desc}</p>

              <div className="pt-2 space-y-2 border-t border-neutral-800">
                {b.perks.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href={`https://wa.me/923423748897?text=Hello%20Sasta%20Darzi,%20I%20represent%20a%20brand/boutique%20and%20want%20to%20inquire%20about%20${encodeURIComponent(b.title)}.`}
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-yellow-500 transition text-center block"
            >
              Inquire Wholesale / Brand Terms
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
