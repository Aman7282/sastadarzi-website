import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjsConfig';
import { Calendar, Clock, MapPin, User, Mail, Phone, Scissors, CheckCircle2, Send, AlertCircle, FileText, Sparkles, MessageSquare, ChevronRight, ShieldCheck, X } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AppointmentPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Custom Stitching',
    garmentCategory: 'Shalwar Kameez',
    measurementType: 'standard',
    standardSize: 'Medium',
    chest: '',
    waist: '',
    hips: '',
    shoulder: '',
    sleeveLength: '',
    shirtLength: '',
    trouserLength: '',
    pickupAddress: '',
    sector: 'Gulberg',
    appointmentDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    designNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [refId] = useState(`SD-${Math.floor(Math.random() * 90000) + 10000}`);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError(false);

    const measurementLabel =
      formData.measurementType === 'standard'
        ? `Standard Size — ${formData.standardSize}`
        : formData.measurementType === 'pickup'
        ? 'Sample Garment Doorstep Pickup'
        : 'Custom Measurements Provided';

    const templateParams = {
      reference_id:      refId,
      client_name:       formData.fullName,
      client_phone:      formData.phone,
      client_email:      formData.email,
      service_type:      formData.serviceType,
      garment_category:  formData.garmentCategory,
      measurement_type:  measurementLabel,
      chest:             formData.chest       || '-',
      waist:             formData.waist       || '-',
      hips:              formData.hips        || '-',
      shoulder:          formData.shoulder    || '-',
      sleeve_length:     formData.sleeveLength || '-',
      shirt_length:      formData.shirtLength  || '-',
      pickup_address:    formData.pickupAddress || 'Not specified',
      sector:            formData.sector,
      appointment_date:  formData.appointmentDate || 'ASAP',
      time_slot:         formData.timeSlot,
      design_notes:      formData.designNotes  || 'None',
    };

    try {
      // 1️⃣ Send full booking details to admin
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        { ...templateParams, to_email: EMAILJS_CONFIG.ADMIN_EMAIL },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // 2️⃣ Send confirmation copy to customer
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        { ...templateParams, to_email: formData.email },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setEmailError(true);
      setLoading(false);
      // Still mark as submitted so user sees booking summary
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sendWhatsAppCopy = () => {
    let msg = `*NEW BOOKING APPOINTMENT / STITCHING ORDER*%0A%0A`;
    msg += `👤 *Client Name:* ${formData.fullName}%0A`;
    msg += `📞 *Phone:* ${formData.phone}%0A`;
    msg += `📧 *Email:* ${formData.email || 'Not provided'}%0A`;
    msg += `🧵 *Service:* ${formData.serviceType}%0A`;
    msg += `👗 *Garment:* ${formData.garmentCategory}%0A`;
    msg += `📏 *Measurement:* ${formData.measurementType === 'standard' ? `Standard (${formData.standardSize})` : formData.measurementType === 'pickup' ? 'Sample Garment Doorstep Pickup' : 'Custom Measurements Provided'}%0A`;
    
    if (formData.measurementType === 'custom') {
      msg += `📐 *Custom Sizes:* Chest: ${formData.chest || '-'}, Waist: ${formData.waist || '-'}, Hips: ${formData.hips || '-'}, Shoulder: ${formData.shoulder || '-'}, Shirt Length: ${formData.shirtLength || '-'}%0A`;
    }

    msg += `📍 *Pickup Address:* ${formData.pickupAddress || 'Lahore'} (${formData.sector})%0A`;
    msg += `📅 *Date & Slot:* ${formData.appointmentDate || 'Asap'} - ${formData.timeSlot}%0A`;
    if (formData.designNotes) msg += `📝 *Notes:* ${formData.designNotes}%0A`;
    msg += `%0A_Sent to: sastadarzi@gmail.com & WhatsApp_`;

    window.open(`https://wa.me/923158212978?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-24">
      
      <SEOHead 
        title="Book Appointment | Best Ladies Tailor in Lahore"
        description="Book your custom stitching appointment online. Request a doorstep fabric pickup from WAPDA Town, DHA, or Gulberg."
        keywords="book ladies tailor in lahore, best ladies tailor near me, doorstep tailor appointment"
        canonicalPath="/book-ladies-tailor-appointment-lahore"
      />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/custom-stitching.png" alt="Tailoring Appointment Booking" className="w-full h-full object-cover opacity-25 filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-4 h-4" /> Doorstep Pickup & Custom Stitching Booking
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight drop-shadow-md">
            Book Tailoring Appointment
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Fill in your stitching details below. Your request will be sent directly to <span className="text-[#D4AF37] font-semibold">sastadarzi@gmail.com</span> and our Lahori team will contact you for fabric pickup.
          </p>
        </div>
      </section>

      {/* 2. MAIN FORM CONTAINER */}
      <section className="max-w-5xl mx-auto px-6 pt-8">
        
        {submitted ? (
          <div className="bg-[#141414] border-2 border-[#D4AF37] rounded-2xl p-10 text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="w-20 h-20 bg-emerald-600/20 text-emerald-400 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white font-serif">Appointment Request Received!</h2>
              <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you <strong className="text-[#D4AF37]">{formData.fullName}</strong>. Your booking has been submitted.
              </p>
            </div>

            {/* Email status */}
            {emailError ? (
              <div className="max-w-xl mx-auto p-3.5 bg-amber-500/10 border border-amber-500/40 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Automatic email could not be sent right now. <strong>Please use the WhatsApp button below</strong> to confirm your booking with us directly — we'll respond within minutes.</span>
              </div>
            ) : (
              <div className="max-w-xl mx-auto p-3.5 bg-emerald-600/10 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>✅ Confirmation email sent to <strong>{formData.email}</strong> and booking details sent to <strong>sastadarzi@gmail.com</strong>.</span>
              </div>
            )}

            {/* Booking Summary Box */}
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6 max-w-xl mx-auto text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Reference ID:</span>
                <span className="text-[#D4AF37] font-bold">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Selected Service:</span>
                <span className="text-white font-semibold">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Garment Category:</span>
                <span className="text-white font-semibold">{formData.garmentCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Measurement Style:</span>
                <span className="text-white font-semibold">{formData.measurementType === 'standard' ? `Standard (${formData.standardSize})` : formData.measurementType === 'pickup' ? 'Doorstep Sample Dress Pickup' : 'Custom Sizes'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pickup Location:</span>
                <span className="text-white font-semibold">{formData.pickupAddress || 'Lahore'} ({formData.sector})</span>
              </div>
              <div className="flex justify-between border-t border-gray-800 pt-2">
                <span className="text-gray-400">Target Email:</span>
                <span className="text-[#D4AF37] font-bold">sastadarzi@gmail.com</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button 
                onClick={sendWhatsAppCopy}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" /> Send Instant Copy via WhatsApp
              </button>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            action="https://formspree.io/f/sastadarzi@gmail.com"
            method="POST"
            className="bg-[#141414] border border-[#D4AF37]/30 rounded-2xl p-8 lg:p-12 space-y-10 shadow-2xl"
          >
            {/* Form Hidden Target Email Input */}
            <input type="hidden" name="_to" value="sastadarzi@gmail.com" />
            <input type="hidden" name="_subject" value={`New SastaDarzi Booking from ${formData.fullName}`} />

            {/* SECTION 1: Personal Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-xl font-bold text-white font-serif">Customer Contact Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      placeholder="e.g. Ayesha Malik" 
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="0300 1234567" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Email Address (Receives Copy) *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="your.email@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Service & Garment Selection */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-xl font-bold text-white font-serif">Service & Garment Choice</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Select Primary Service</label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Custom Stitching">Custom Stitching (Regular / Formal Wear)</option>
                    <option value="Bridal Couture">Bridal Couture & Heavy Barat/Walima Wear</option>
                    <option value="Alteration Services">Ladies Dress Alteration & Resizing</option>
                    <option value="Bulk Stitching">Bulk Stitching for Brands / Boutiques</option>
                    <option value="Designer Consultation">Designer Stitching Consultation</option>
                    <option value="Doorstep Sample Pickup">Doorstep Fabric & Sample Pickup</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Garment Category</label>
                  <select 
                    name="garmentCategory"
                    value={formData.garmentCategory}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Shalwar Kameez">Shalwar Kameez (3-Piece / 2-Piece / Straight Cut)</option>
                    <option value="Lehenga Couture">Lehenga & Choli (Barat / Walima / Mehendi)</option>
                    <option value="Flared Maxi & Gown">Flared Maxi & Party Gown</option>
                    <option value="Silk & Velvet Suit">Silk & Velvet Festive Suit</option>
                    <option value="Saree Blouse">Designer Saree Blouse</option>
                    <option value="Abaya & Modest Wear">Front-Open Abaya & Kaftan</option>
                    <option value="Other Garment">Other Custom Requirement</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 3: Measurement Preference */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">3</div>
                <h2 className="text-xl font-bold text-white font-serif">Measurement Preference</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, measurementType: 'standard' })}
                  className={`p-4 rounded-xl border text-left transition ${formData.measurementType === 'standard' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-[#1A1A1A] border-gray-800 text-gray-400'}`}
                >
                  <div className="font-bold text-sm mb-1 text-[#D4AF37]">Standard Size</div>
                  <p className="text-[11px] text-gray-400 font-normal">Select standard sizing (S, M, L, XL)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, measurementType: 'pickup' })}
                  className={`p-4 rounded-xl border text-left transition ${formData.measurementType === 'pickup' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-[#1A1A1A] border-gray-800 text-gray-400'}`}
                >
                  <div className="font-bold text-sm mb-1 text-[#D4AF37]">Sample Dress Pickup</div>
                  <p className="text-[11px] text-gray-400 font-normal">Our rider collects your best-fitting dress</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, measurementType: 'custom' })}
                  className={`p-4 rounded-xl border text-left transition ${formData.measurementType === 'custom' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-[#1A1A1A] border-gray-800 text-gray-400'}`}
                >
                  <div className="font-bold text-sm mb-1 text-[#D4AF37]">Custom Inches</div>
                  <p className="text-[11px] text-gray-400 font-normal">Enter custom chest, waist & length sizes</p>
                </button>
              </div>

              {formData.measurementType === 'standard' && (
                <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-center gap-4 text-xs">
                  <span className="font-bold text-gray-300 uppercase">Select Standard Size:</span>
                  {['Small', 'Medium', 'Large', 'X-Large'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setFormData({ ...formData, standardSize: sz })}
                      className={`px-4 py-2 rounded-lg font-bold transition ${formData.standardSize === sz ? 'bg-[#D4AF37] text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              )}

              {formData.measurementType === 'custom' && (
                <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Chest (Inches)</label>
                    <input type="text" name="chest" placeholder="e.g. 36" value={formData.chest} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Waist (Inches)</label>
                    <input type="text" name="waist" placeholder="e.g. 30" value={formData.waist} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Hips (Inches)</label>
                    <input type="text" name="hips" placeholder="e.g. 40" value={formData.hips} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Shoulder (Inches)</label>
                    <input type="text" name="shoulder" placeholder="e.g. 14" value={formData.shoulder} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Sleeve Length</label>
                    <input type="text" name="sleeveLength" placeholder="e.g. 21" value={formData.sleeveLength} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Shirt Length</label>
                    <input type="text" name="shirtLength" placeholder="e.g. 42" value={formData.shirtLength} onChange={handleChange} className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 4: Address, Date & Instructions */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">4</div>
                <h2 className="text-xl font-bold text-white font-serif">Pickup Location & Appointment Date</h2>
              </div>

              {/* ⚡ PICKUP & DELIVERY CHARGE NOTICE */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/50 rounded-xl flex items-start gap-3 text-xs">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-amber-400 uppercase tracking-wider">⚠️ Pickup & Delivery — Separate Charges Apply</p>
                  <p className="text-amber-100/80 leading-relaxed">
                    Doorstep fabric <strong>pickup</strong> and finished garment <strong>delivery</strong> are <strong>not included</strong> in the stitching price. Both are charged separately based on your area in Lahore. Please confirm the exact pickup & delivery fee with us via <strong>WhatsApp before finalising your order</strong>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <div className="md:col-span-2 space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Doorstep Pickup Address in Lahore *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      name="pickupAddress"
                      required
                      placeholder="House/Street Address, Block/Phase" 
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Lahore Sector / Area</label>
                  <select 
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="WAPDA Town">WAPDA Town</option>
                    <option value="Gulberg">Gulberg (I, II, III)</option>
                    <option value="DHA Lahore">DHA Lahore (Phases 1-9)</option>
                    <option value="Model Town">Model Town</option>
                    <option value="Johar Town">Johar Town</option>
                    <option value="Faisal Town">Faisal Town</option>
                    <option value="Bahria Town">Bahria Town</option>
                    <option value="Iqbal Town">Iqbal Town</option>
                    <option value="International / Overseas">Overseas / Outside Lahore</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Preferred Appointment Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                    <input 
                      type="date" 
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-bold text-gray-300 uppercase tracking-wider">Time Slot</label>
                  <select 
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-800 text-white rounded-xl p-3.5 focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <label className="block font-bold text-gray-300 uppercase tracking-wider">Special Stitching Instructions / Neckline Cuts / Design Notes</label>
                <textarea 
                  name="designNotes"
                  rows="3"
                  placeholder="Mention neckline preferences, sleeve styles, daman borders, or special fitting requests..."
                  value={formData.designNotes}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#D4AF37] transition"
                ></textarea>
              </div>
            </div>

            {/* Email Dispatch Notice */}
            <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl flex items-center gap-3 text-xs text-[#D4AF37]">
              <Mail className="w-5 h-5 shrink-0" />
              <span>
                Submitting this form will automatically route your details to <strong>sastadarzi@gmail.com</strong> for swift processing.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold uppercase tracking-wider text-sm rounded-xl transition duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Dispatching to sastadarzi@gmail.com...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Form
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </section>

    </div>
  );
}
