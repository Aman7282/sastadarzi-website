import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe, Send, CheckCircle2, Scissors, UserCheck } from 'lucide-react';

export default function ContactQuotePage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('Custom Stitching');
  const [garment, setGarment] = useState('Shalwar Kameez');
  const [finish, setFinish] = useState('Designer Cut with Piping');
  const [sizeType, setSizeType] = useState('standard');
  const [standardSize, setStandardSize] = useState('Medium');
  
  // Custom measurements
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [shoulder, setShoulder] = useState('');
  const [sleeveLength, setSleeveLength] = useState('');
  const [shirtLength, setShirtLength] = useState('');
  const [notes, setNotes] = useState('');

  const sendToWhatsApp = () => {
    let msg = `Hello Sasta Darzi! 👋%0A%0A`;
    msg += `I would like to inquire/order tailoring:%0A`;
    msg += `🧵 *Service:* ${service}%0A`;
    msg += `👗 *Garment:* ${garment}%0A`;
    msg += `✨ *Finish Style:* ${finish}%0A`;
    
    if (sizeType === 'standard') {
      msg += `📏 *Size:* Standard (${standardSize})%0A`;
    } else {
      msg += `📐 *Custom Measurements:*%0A`;
      if (chest) msg += `- Chest: ${chest}"%0A`;
      if (waist) msg += `- Waist: ${waist}"%0A`;
      if (hips) msg += `- Hips: ${hips}"%0A`;
      if (shoulder) msg += `- Shoulder: ${shoulder}"%0A`;
      if (sleeveLength) msg += `- Sleeve Length: ${sleeveLength}"%0A`;
      if (shirtLength) msg += `- Shirt Length: ${shirtLength}"%0A`;
    }

    if (notes) msg += `📝 *Notes:* ${notes}%0A`;
    msg += `%0APlease share the process details and fabric pickup timing. Thank you!`;

    const phone = '923158212978';
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/30">
          Direct Consultation & Quote
        </span>
        <h1 className="text-4xl font-extrabold font-serif">
          Contact & <span className="text-gold-gradient">Get Custom Quote</span>
        </h1>
        <p className="text-neutral-300 text-sm leading-relaxed">
          Book a tailoring consultation, request doorstep fabric pickup in Lahore, or send your custom order requirements directly via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Interactive Customizer Wizard */}
        <div className="lg:col-span-7 bg-obsidian-900 border-2 border-gold-500/30 rounded-2xl p-8 space-y-8 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
            <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
              <Scissors className="w-6 h-6 text-gold-400" /> Tailoring Customizer Wizard
            </h3>
            <span className="text-xs font-bold text-gold-400">Step {step} of 3</span>
          </div>

          {/* STEP 1: Garment & Service Selection */}
          {step === 1 && (
            <div className="space-y-5 text-xs">
              <div className="space-y-2">
                <label className="block font-bold text-gold-400 uppercase tracking-wider">Select Primary Service</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Custom Stitching', 'Dress Designing', 'Ladies Alteration', 'B2B Brand Order'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`p-3 text-left rounded-xl font-bold border transition ${service === s ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-obsidian-950 border-neutral-800 text-neutral-300'}`}
                    >
                      {s} {service === s && '✓'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-bold text-gold-400 uppercase tracking-wider">Select Garment Category</label>
                <select 
                  value={garment}
                  onChange={(e) => setGarment(e.target.value)}
                  className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
                >
                  <option value="Shalwar Kameez">Shalwar Kameez (Straight / A-Line / Patiala)</option>
                  <option value="Lehenga Couture">Lehenga Couture (8-Kali / 12-Kali / Bridal)</option>
                  <option value="Maxi & Gown">Maxi & Floor Length Gown</option>
                  <option value="Abaya & Kaftan">Front Open Abaya / Kaftan</option>
                  <option value="Saree Blouse">Designer Saree Blouse</option>
                  <option value="Formal Silk & Velvet">Silk / Velvet Formal Suit</option>
                  <option value="Bridal Wear Masterpiece">Bridal Barat / Walima Wear</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-bold text-gold-400 uppercase tracking-wider">Select Finish Style</label>
                <select 
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full bg-obsidian-950 border border-gold-500/30 text-white p-3 rounded-xl focus:outline-none focus:border-gold-400"
                >
                  <option value="Designer Cut with Piping">Designer Cut with Piping & Overlock Finish</option>
                  <option value="Simple Clean Stitching">Simple Clean Stitching</option>
                  <option value="Heavy Zardozi / Sitara Embellishment">Heavy Zardozi & Cutwork Embellishment</option>
                  <option value="Custom Organza Sleeve & Daman Trim">Custom Organza Sleeve & Daman Cutwork</option>
                </select>
              </div>

              <button 
                type="button" 
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold-sm hover:brightness-110 transition mt-4"
              >
                Continue to Sizing & Measurements →
              </button>
            </div>
          )}

          {/* STEP 2: Sizing & Custom Measurements */}
          {step === 2 && (
            <div className="space-y-5 text-xs">
              <div className="flex gap-4 border-b border-neutral-800 pb-3">
                <button 
                  type="button"
                  onClick={() => setSizeType('standard')}
                  className={`flex-1 py-2 rounded-lg font-bold border transition ${sizeType === 'standard' ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-obsidian-950 border-neutral-800 text-neutral-400'}`}
                >
                  Standard Size (S / M / L / XL)
                </button>
                <button 
                  type="button"
                  onClick={() => setSizeType('custom')}
                  className={`flex-1 py-2 rounded-lg font-bold border transition ${sizeType === 'custom' ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-obsidian-950 border-neutral-800 text-neutral-400'}`}
                >
                  Enter Custom Measurements (Inches)
                </button>
              </div>

              {sizeType === 'standard' ? (
                <div className="space-y-2">
                  <label className="block font-bold text-gold-400 uppercase tracking-wider">Choose Standard Size</label>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    {['Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setStandardSize(sz)}
                        className={`p-3 rounded-xl font-bold border transition ${standardSize === sz ? 'bg-gold-500/20 border-gold-400 text-gold-300' : 'bg-obsidian-950 border-neutral-800 text-neutral-300'}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-400 mb-1">Chest (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 36" 
                      value={chest} 
                      onChange={(e) => setChest(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Waist (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 30" 
                      value={waist} 
                      onChange={(e) => setWaist(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Hips (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 40" 
                      value={hips} 
                      onChange={(e) => setHips(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Shoulder (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 14.5" 
                      value={shoulder} 
                      onChange={(e) => setShoulder(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Sleeve Length (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 21" 
                      value={sleeveLength} 
                      onChange={(e) => setSleeveLength(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">Shirt Length (Inches)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 42" 
                      value={shirtLength} 
                      onChange={(e) => setShirtLength(e.target.value)} 
                      className="w-full bg-obsidian-950 border border-gold-500/30 p-2.5 rounded-lg text-white"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 bg-neutral-900 border border-neutral-700 text-neutral-300 font-bold text-xs uppercase rounded-xl"
                >
                  ← Back
                </button>
                <button 
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold-sm"
                >
                  Review Order Summary →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Summary & WhatsApp Submission */}
          {step === 3 && (
            <div className="space-y-6 text-xs">
              <div className="bg-obsidian-950 p-6 rounded-xl border border-gold-500/30 space-y-3">
                <h4 className="font-serif text-lg font-bold text-gold-400 border-b border-gold-500/20 pb-2">
                  Order Inquiry Summary
                </h4>
                <p><strong>Service:</strong> {service}</p>
                <p><strong>Garment Category:</strong> {garment}</p>
                <p><strong>Finish Style:</strong> {finish}</p>
                <p><strong>Sizing:</strong> {sizeType === 'standard' ? `Standard ${standardSize}` : 'Custom Measurements Specified'}</p>
                <p><strong>Craftsmanship Guarantee:</strong> 100% Fit Guarantee & Overlock Seam Sealing</p>
              </div>

              <div className="space-y-1.5">
                <label className="block font-bold text-gold-400 uppercase tracking-wider">Additional Instructions / Notes</label>
                <textarea 
                  rows="3"
                  placeholder="Mention neck style preferences, dupatta border lining, or pickup address in Lahore..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-obsidian-950 border border-gold-500/30 p-3 rounded-xl text-white focus:outline-none focus:border-gold-400"
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 bg-neutral-900 border border-neutral-700 text-neutral-300 font-bold text-xs uppercase rounded-xl"
                >
                  ← Edit Specs
                </button>
                <button 
                  type="button"
                  onClick={sendToWhatsApp}
                  className="w-2/3 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" /> Send Inquiry to WhatsApp (03158212978)
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Contact & Studio Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-obsidian-900 border border-gold-500/20 p-8 rounded-2xl space-y-6 text-center">
            <img src="/logo.png" alt="Sasta Darzi Logo" className="h-24 w-auto mx-auto object-contain p-2 border border-gold-500/40 rounded-xl bg-white/5" />
            
            <h3 className="font-serif text-2xl font-bold text-white">SASTA DARZI STUDIO</h3>
            <p className="text-xs text-gold-400 font-bold uppercase tracking-widest">Silai Behtar, Libas Shandar</p>

            <div className="space-y-4 text-left text-xs border-t border-neutral-800 pt-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Phone & WhatsApp Direct</h4>
                  <a href="tel:03158212978" className="text-gold-400 font-semibold hover:underline">
                    03158212978
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Email Address</h4>
                  <a href="mailto:info@sastadarzi.com" className="text-gold-400 font-semibold hover:underline">
                    info@sastadarzi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Lahore Studio Address</h4>
                  <p className="text-neutral-300">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Studio Hours</h4>
                  <p className="text-neutral-300">Monday - Saturday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Global Courier Delivery</h4>
                  <p className="text-neutral-300">DHL & FedEx International Doorstep Express</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/923158212978?text=Hello%20Sasta%20Darzi,%20I%20want%20to%20consult%20for%20stitching."
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Quick WhatsApp Call / Chat
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
