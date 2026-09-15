import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function FabricCalculatorPage({ setActivePage }) {
  const [garment, setGarment] = useState('shalwar-kameez');
  const [width, setWidth] = useState('44');
  const [height, setHeight] = useState('standard');
  const [flare, setFlare] = useState('medium');

  const fabricMatrix = {
    'shalwar-kameez': { base: 4.25, tip: 'Includes 2.25m shirt + 2.25m shalwar/trouser. Add 2.5 yards extra if including separate Dupatta.' },
    'kurti-frock': { base: 3.5, tip: 'Ideal for A-line or straight kurti. For flared frock add 1 yard.' },
    'lehenga-8': { base: 5.0, tip: 'For 8-Kali flare lehenga. Requires canvas/can-can inner lining.' },
    'lehenga-12': { base: 6.5, tip: 'For 12-Kali voluminous lehenga. Extra lining recommended for volume.' },
    'lehenga-16': { base: 8.5, tip: 'Heavy bridal 16-Kali lehenga. Requires multi-layer inner lining.' },
    'maxi-pishwas': { base: 6.0, tip: 'Floor-length Maxi or Anarkali Pishwas with full flare.' },
    'gown-layered': { base: 5.5, tip: 'Double layered evening gown or Indo-Western cut.' },
    'abaya-kaftan': { base: 4.25, tip: 'Front open or butterfly kaftan style abaya.' },
    'saree-blouse': { base: 1.25, tip: 'Designer saree blouse with margin for padded cups.' }
  };

  const currentRule = fabricMatrix[garment] || fabricMatrix['shalwar-kameez'];

  let totalYards = currentRule.base;

  // Width Modifier
  if (width === '36') totalYards *= 1.22;
  else if (width === '60') totalYards *= 0.82;

  // Height Modifier
  if (height === 'tall') totalYards += 0.5;
  else if (height === 'petite') totalYards -= 0.25;

  // Flare Modifier
  if (flare === 'heavy') totalYards += 1.0;
  else if (flare === 'light') totalYards -= 0.5;

  const gaz = (totalYards * 1.09361).toFixed(2);
  const meters = (totalYards * 0.9144).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-16 space-y-12">
      
      <SEOHead 
        title="Fabric Yardage Calculator | Best Ladies Tailor in Lahore"
        description="Calculate the exact gaz, yards, or meters of fabric needed for your shalwar kameez, lehenga, maxi, or kurti. Never buy too much or too little fabric again!"
        keywords="ladies tailor in lahore, fabric calculator for dresses, best ladies tailor near me, how much fabric for lehenga"
        canonicalPath="/fabric-calculator"
      />

      {/* Title */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/30">
          Smart Tailoring Assistant
        </span>
        <h1 className="text-4xl font-extrabold font-serif">
          Interactive <span className="text-gold-gradient">Fabric Calculator</span>
        </h1>
        <p className="text-neutral-300 text-sm leading-relaxed">
          Never buy too little or too much fabric again! Calculate exact Gaz (Gaz), Yards, and Meters required for your dress style.
        </p>
      </div>

      {/* Main Calculator Box */}
      <div className="bg-obsidian-900 border-2 border-gold-500/40 rounded-2xl p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-gold-400" /> Enter Garment Specifications
          </h3>

          <div className="space-y-4 text-xs">
            {/* Garment Select */}
            <div className="space-y-1.5">
              <label className="block font-semibold text-gold-400 uppercase tracking-wider">1. Select Garment / Suit Style</label>
              <select 
                value={garment}
                onChange={(e) => setGarment(e.target.value)}
                className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
              >
                <option value="shalwar-kameez">Shalwar Kameez (2-Piece / 3-Piece)</option>
                <option value="kurti-frock">Short / Medium Kurti Frock</option>
                <option value="lehenga-8">8-Kali Flared Lehenga</option>
                <option value="lehenga-12">12-Kali Voluminous Lehenga</option>
                <option value="lehenga-16">16-Kali Heavy Bridal Lehenga</option>
                <option value="maxi-pishwas">Floor Length Maxi / Pishwas</option>
                <option value="gown-layered">Layered Evening Gown</option>
                <option value="abaya-kaftan">Front Open Abaya / Kaftan</option>
                <option value="saree-blouse">Designer Saree Blouse</option>
              </select>
            </div>

            {/* Fabric Width Select */}
            <div className="space-y-1.5">
              <label className="block font-semibold text-gold-400 uppercase tracking-wider">2. Fabric Width (Bar / Arzi)</label>
              <select 
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
              >
                <option value="44">44" - 45" Standard Bar (Standard Lawn/Chiffon)</option>
                <option value="36">36" Chota Bar (Silk/Net Fabrics)</option>
                <option value="60">60" Bada Bar (Wide Silk/Velvet)</option>
              </select>
            </div>

            {/* Height & Flare Grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-semibold text-gold-400 uppercase tracking-wider">3. Height Preference</label>
                <select 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
                >
                  <option value="standard">Standard Height (5'3" - 5'6")</option>
                  <option value="petite">Petite Height (&lt; 5'2")</option>
                  <option value="tall">Tall Height (5'7"+)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-gold-400 uppercase tracking-wider">4. Flare Volume</label>
                <select 
                  value={flare}
                  onChange={(e) => setFlare(e.target.value)}
                  className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
                >
                  <option value="medium">Medium Standard Flare</option>
                  <option value="light">Straight / Light Flare</option>
                  <option value="heavy">Heavy Extra Flare</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Display */}
        <div className="lg:col-span-5 bg-obsidian-950 p-6 rounded-2xl border-2 border-dashed border-gold-500/50 text-center space-y-6">
          <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            Calculated Requirement
          </span>

          <div className="space-y-1">
            <div className="text-5xl font-serif font-extrabold text-gold-400">{gaz} Gaz</div>
            <p className="text-xs text-neutral-400 font-semibold">({totalYards.toFixed(2)} Yards / {meters} Meters)</p>
          </div>

          <div className="bg-gold-500/10 p-3 rounded-xl border border-gold-500/30 text-left text-xs space-y-1">
            <h4 className="font-bold text-gold-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Master Tailor Advice:
            </h4>
            <p className="text-neutral-300">{currentRule.tip}</p>
          </div>

          <div className="space-y-2">
            <button 
              onClick={() => setActivePage('contact')}
              className="w-full py-3.5 bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold-sm hover:brightness-110 transition"
            >
              Order Stitching for {gaz} Gaz Fabric
            </button>

            <a 
              href={`https://wa.me/923423748897?text=Hello%20Sasta%20Darzi,%20I%20used%20your%20Fabric%20Calculator%20for%20${encodeURIComponent(garment)}%20and%20calculated%20${gaz}%20Gaz%20(${totalYards.toFixed(2)}%20Yards).%20I%20want%20to%20order%20stitching.`}
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4" /> Send Calculation to WhatsApp
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
