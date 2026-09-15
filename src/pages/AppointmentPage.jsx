import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjsConfig';
import {
  Calendar, MapPin, User, Mail, Phone, Scissors,
  CheckCircle2, Send, AlertCircle, MessageSquare,
  Store, Home, Clock
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const inputClass =
  'w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition placeholder-gray-600';
const selectClass =
  'w-full bg-[#1A1A1A] border border-gray-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition';
const labelClass = 'block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5';

export default function AppointmentPage() {
  const [serviceMode, setServiceMode] = useState(null); // 'shop' | 'home'
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    garmentType: 'Shalwar Kameez',
    serviceType: 'Custom Stitching',
    appointmentDate: '',
    timeSlot: 'Morning (9 AM – 12 PM)',
    // Home pickup only
    pickupAddress: '',
    sector: 'WAPDA Town',
    // Design notes
    designNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [refId] = useState(`SD-${Math.floor(Math.random() * 90000) + 10000}`);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const buildWhatsAppMsg = () => {
    let msg = `*New Booking — SastaDarzi*%0A%0A`;
    msg += `🔖 *Ref:* ${refId}%0A`;
    msg += `👤 *Name:* ${formData.fullName}%0A`;
    msg += `📞 *Phone:* ${formData.phone}%0A`;
    msg += `📧 *Email:* ${formData.email || 'Not given'}%0A`;
    msg += `👗 *Garment:* ${formData.garmentType}%0A`;
    msg += `🧵 *Service:* ${formData.serviceType}%0A`;
    msg += `📅 *Date:* ${formData.appointmentDate || 'ASAP'} — ${formData.timeSlot}%0A`;
    if (serviceMode === 'home') {
      msg += `📍 *Pickup:* ${formData.pickupAddress}, ${formData.sector}%0A`;
    } else {
      msg += `🏪 *Mode:* Visit Shop (WAPDA Town, Lahore)%0A`;
    }
    if (formData.designNotes) msg += `📝 *Notes:* ${formData.designNotes}%0A`;
    return `https://wa.me/923158212978?text=${msg}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError(false);

    const params = {
      reference_id:     refId,
      client_name:      formData.fullName,
      client_phone:     formData.phone,
      client_email:     formData.email,
      garment_type:     formData.garmentType,
      service_type:     formData.serviceType,
      appointment_date: formData.appointmentDate || 'ASAP',
      time_slot:        formData.timeSlot,
      service_mode:     serviceMode === 'home' ? 'Home Pickup & Delivery' : 'Visit Shop',
      pickup_address:   serviceMode === 'home' ? `${formData.pickupAddress}, ${formData.sector}` : 'N/A — Customer visiting shop',
      design_notes:     formData.designNotes || 'None',
    };

    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        { ...params, to_email: EMAILJS_CONFIG.ADMIN_EMAIL }, EMAILJS_CONFIG.PUBLIC_KEY);
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.USER_TEMPLATE_ID,
        { ...params, to_email: formData.email }, EMAILJS_CONFIG.PUBLIC_KEY);
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('EmailJS:', err);
      setEmailError(true);
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /* ─── SUCCESS SCREEN ─── */
  if (submitted) {
    return (
      <div className="bg-[#1A1A1A] min-h-screen text-white font-sans flex items-center justify-center px-6 py-32">
        <div className="max-w-lg w-full bg-[#141414] border-2 border-[#D4AF37]/40 rounded-2xl p-10 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 bg-emerald-600/20 text-emerald-400 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-white mb-2">Booking Received!</h2>
            <p className="text-gray-400 text-sm">Thank you <span className="text-[#D4AF37] font-semibold">{formData.fullName}</span>. Our team will contact you shortly to confirm.</p>
          </div>

          {/* email status */}
          {emailError ? (
            <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-xl text-xs text-amber-200 flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Email could not be sent automatically. Please confirm via WhatsApp below.</span>
            </div>
          ) : (
            <div className="p-3 bg-emerald-600/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 flex items-start gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Confirmation email sent to <strong>{formData.email}</strong>. Check your inbox (and spam folder).</span>
            </div>
          )}

          {/* summary */}
          <div className="bg-[#1A1A1A] rounded-xl border border-gray-800 p-5 text-left space-y-2.5 text-xs">
            {[
              ['Reference ID', <span className="text-[#D4AF37] font-bold">{refId}</span>],
              ['Name', formData.fullName],
              ['Service', formData.serviceType],
              ['Garment', formData.garmentType],
              ['Mode', serviceMode === 'home' ? '🏠 Home Pickup' : '🏪 Visit Shop'],
              ['Date & Slot', `${formData.appointmentDate || 'ASAP'} — ${formData.timeSlot}`],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                <span className="text-gray-500">{label}</span>
                <span className="text-white font-semibold text-right">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={buildWhatsAppMsg()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Confirm via WhatsApp
            </a>
            <button
              onClick={() => { setSubmitted(false); setServiceMode(null); }}
              className="w-full py-3 bg-white/8 hover:bg-white/15 text-gray-300 font-semibold text-sm rounded-xl border border-gray-800 transition"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── MAIN PAGE ─── */
  return (
    <div className="bg-[#1A1A1A] text-white font-sans selection:bg-yellow-500 selection:text-black pb-24">
      <SEOHead
        title="Book Appointment | Best Ladies Tailor in Lahore"
        description="Book a custom stitching appointment at SastaDarzi. Visit our shop in WAPDA Town or request doorstep fabric pickup across Lahore."
        keywords="book ladies tailor lahore, doorstep tailor appointment, custom stitching lahore"
        canonicalPath="/book-ladies-tailor-appointment-lahore"
      />

      {/* HERO */}
      <section className="relative min-h-[38vh] flex items-center justify-center text-center overflow-hidden pt-28 md:pt-36 pb-14">
        <div className="absolute inset-0 z-0">
          <img src="/custom-stitching.png" alt="Book Tailoring Appointment" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-4 h-4" /> SastaDarzi — Lahore's Best Ladies Tailor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Fill in the form below and our team will confirm your appointment within a few hours.
          </p>
        </div>
      </section>

      {/* FORM AREA */}
      <section className="max-w-2xl mx-auto px-6 pt-4 space-y-6">

        {/* STEP 1 — Choose Mode */}
        <div className="space-y-3">
          <p className="text-center text-sm font-bold text-gray-300 uppercase tracking-widest">
            How would you like to proceed?
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Visit Shop */}
            <button
              type="button"
              onClick={() => setServiceMode('shop')}
              className={`rounded-2xl border-2 p-6 flex flex-col items-center gap-3 transition-all duration-200
                ${serviceMode === 'shop'
                  ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/10'
                  : 'border-gray-800 bg-[#141414] hover:border-gray-600'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                ${serviceMode === 'shop' ? 'bg-[#D4AF37] text-black' : 'bg-gray-800 text-gray-400'}`}>
                <Store className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className={`font-bold text-sm ${serviceMode === 'shop' ? 'text-[#D4AF37]' : 'text-white'}`}>Visit Our Shop</p>
                <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">Come to our studio in<br/>WAPDA Town, Lahore</p>
              </div>
              {serviceMode === 'shop' && (
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">Selected ✓</span>
              )}
            </button>

            {/* Home Pickup */}
            <button
              type="button"
              onClick={() => setServiceMode('home')}
              className={`rounded-2xl border-2 p-6 flex flex-col items-center gap-3 transition-all duration-200
                ${serviceMode === 'home'
                  ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/10'
                  : 'border-gray-800 bg-[#141414] hover:border-gray-600'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center
                ${serviceMode === 'home' ? 'bg-[#D4AF37] text-black' : 'bg-gray-800 text-gray-400'}`}>
                <Home className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className={`font-bold text-sm ${serviceMode === 'home' ? 'text-[#D4AF37]' : 'text-white'}`}>Pickup from Home</p>
                <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">Our rider picks up your<br/>fabric from your address</p>
              </div>
              {serviceMode === 'home' && (
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">Selected ✓</span>
              )}
            </button>
          </div>

          {/* Home mode charge notice */}
          {serviceMode === 'home' && (
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/40 rounded-xl space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-amber-200 leading-relaxed">
                  <strong className="text-amber-400">Pickup & delivery fees are charged separately</strong> and are not included in the stitching price. Our team confirms charges via WhatsApp before proceeding.
                </p>
              </div>
              <div className="flex items-start gap-2.5 pl-6">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-amber-100/80 space-y-0.5">
                  <p><strong className="text-amber-400">Pickup Hours — Weekdays (Mon–Fri):</strong> 9:00 AM – 10:00 PM</p>
                  <p><strong className="text-amber-400">Pickup Hours — Weekends (Sat–Sun):</strong> 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          )}

          {/* Shop mode info */}
          {serviceMode === 'shop' && (
            <div className="p-3.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-yellow-100/80 leading-relaxed">
                  <strong className="text-[#D4AF37]">Shop Address:</strong> Shop No 48, Ground Floor, Rehmat Market, WAPDA Town Block K-1, Lahore.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-yellow-100/80 leading-relaxed space-y-0.5">
                  <p><strong className="text-[#D4AF37]">Weekdays (Mon–Fri):</strong> 9:00 AM – 10:00 PM</p>
                  <p><strong className="text-[#D4AF37]">Weekends (Sat–Sun):</strong> 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOOKING FORM — shows only after mode selected */}
        {serviceMode && (
          <form onSubmit={handleSubmit} className="bg-[#141414] border border-gray-800 rounded-2xl p-7 space-y-6 shadow-2xl">

            {/* Personal Info */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs flex items-center justify-center font-bold">1</span>
                Your Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                    <input type="text" name="fullName" required placeholder="e.g. Ayesha Khan"
                      value={formData.fullName} onChange={handleChange}
                      className={`${inputClass} pl-9`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                    <input type="tel" name="phone" required placeholder="03XX XXXXXXX"
                      value={formData.phone} onChange={handleChange}
                      className={`${inputClass} pl-9`} />
                  </div>
                </div>
              </div>
              <div>
                <label className={labelClass}>Email Address (for confirmation)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                  <input type="email" name="email" placeholder="your@email.com"
                    value={formData.email} onChange={handleChange}
                    className={`${inputClass} pl-9`} />
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs flex items-center justify-center font-bold">2</span>
                What Do You Need?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Service Type</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={selectClass}>
                    <option>Custom Stitching</option>
                    <option>Bridal & Wedding Wear</option>
                    <option>Alteration & Resizing</option>
                    <option>Party & Formal Wear</option>
                    <option>Design Consultation</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Garment Type</label>
                  <select name="garmentType" value={formData.garmentType} onChange={handleChange} className={selectClass}>
                    <option>Shalwar Kameez</option>
                    <option>Lehenga & Choli</option>
                    <option>Maxi & Party Gown</option>
                    <option>Silk / Velvet Suit</option>
                    <option>Abaya & Kaftan</option>
                    <option>Saree Blouse</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Home Pickup — address fields */}
            {serviceMode === 'home' && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs flex items-center justify-center font-bold">3</span>
                  Pickup Address
                </h2>
                <div>
                  <label className={labelClass}>Street / House Address *</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                    <input type="text" name="pickupAddress" required={serviceMode === 'home'}
                      placeholder="House No, Street, Block / Phase"
                      value={formData.pickupAddress} onChange={handleChange}
                      className={`${inputClass} pl-9`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Area / Sector</label>
                  <select name="sector" value={formData.sector} onChange={handleChange} className={selectClass}>
                    <option>WAPDA Town</option>
                    <option>Gulberg</option>
                    <option>DHA Lahore</option>
                    <option>Model Town</option>
                    <option>Johar Town</option>
                    <option>Faisal Town</option>
                    <option>Bahria Town</option>
                    <option>Iqbal Town</option>
                    <option>Other Area in Lahore</option>
                  </select>
                </div>
              </div>
            )}

            {/* Date & Time */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs flex items-center justify-center font-bold">
                  {serviceMode === 'home' ? '4' : '3'}
                </span>
                Preferred Date & Time
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                    <input type="date" name="appointmentDate"
                      value={formData.appointmentDate} onChange={handleChange}
                      className={`${inputClass} pl-9`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Time Slot</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-600 absolute left-3 top-3.5" />
                    <select name="timeSlot" value={formData.timeSlot} onChange={handleChange}
                      className={`${selectClass} pl-9`}>
                      <optgroup label="Weekdays (Mon–Fri) — 9 AM to 10 PM">
                        <option>Morning — 9:00 AM to 12:00 PM</option>
                        <option>Afternoon — 12:00 PM to 4:00 PM</option>
                        <option>Evening — 4:00 PM to 7:00 PM</option>
                        <option>Night — 7:00 PM to 10:00 PM</option>
                      </optgroup>
                      <optgroup label="Weekends (Sat–Sun) — 9 AM to 5 PM">
                        <option>Weekend Morning — 9:00 AM to 12:00 PM</option>
                        <option>Weekend Afternoon — 12:00 PM to 3:00 PM</option>
                        <option>Weekend Late — 3:00 PM to 5:00 PM</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className={labelClass}>Design Notes (optional)</label>
              <textarea name="designNotes" rows="3"
                placeholder="Mention neckline style, sleeve preference, daman border, or any special requests..."
                value={formData.designNotes} onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition placeholder-gray-600 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#D4AF37] hover:bg-yellow-500 disabled:opacity-60 text-black font-bold uppercase tracking-wider text-sm rounded-xl transition duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
            >
              {loading
                ? <><span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" /> Sending...</>
                : <><Send className="w-4 h-4" /> Confirm Appointment</>
              }
            </button>

            <p className="text-center text-gray-600 text-[11px]">
              Our team will contact you via WhatsApp or phone to confirm within a few hours.
            </p>
          </form>
        )}
      </section>

      {/* ─── FAQ SECTION — White Background ─── */}
      <section className="mt-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Got Questions?</span>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Everything you need to know before booking your appointment.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What are your pickup & delivery hours?',
                a: 'Our rider is available for doorstep fabric pickup and delivery from Monday to Friday between 9:00 AM and 10:00 PM. On weekends (Saturday & Sunday) pickup is available from 9:00 AM to 5:00 PM only.'
              },
              {
                q: 'Are pickup and delivery free of charge?',
                a: 'No — pickup and delivery are separate paid services and are not included in the stitching price. Our team will confirm the exact charges for your area via WhatsApp before we proceed.'
              },
              {
                q: 'Can I visit the shop instead of home pickup?',
                a: 'Absolutely! You are welcome to visit our studio at Shop No 48, Ground Floor, Rehmat Market, WAPDA Town Block K-1, Lahore. Shop hours are 9 AM–10 PM on weekdays and 9 AM–5 PM on weekends.'
              },
              {
                q: 'How long does stitching take?',
                a: 'Standard stitching orders are completed in 7 to 10 working days after fabric collection. Bridal and heavy formal wear may take 2 to 3 weeks. Express delivery is available on request.'
              },
              {
                q: 'How will I receive confirmation of my booking?',
                a: 'Once you submit the form, our team will contact you within a few hours via WhatsApp or phone call to confirm your appointment, discuss requirements, and share pickup/delivery charges.'
              },
              {
                q: 'Can I share a design reference photo?',
                a: 'Yes! You can mention your design preferences in the notes field, or send reference images directly to our WhatsApp after booking. We replicate necklines, sleeves, daman borders and full outfits from photos.'
              },
              {
                q: 'Do you stitch branded unstitched suits?',
                a: 'Yes, we stitch all types of unstitched fabric including lawn, chiffon, organza, velvet, khaddar, and raw silk — including branded designer suits from Maria B, Zara Shahjahan, Sana Safinaz, etc.'
              },
            ].map(({ q, a }, i) => (
              <FaqItem key={i} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
      open ? 'border-[#D4AF37] shadow-md' : 'border-gray-200'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className={`font-semibold text-sm leading-snug ${
          open ? 'text-[#b8960c]' : 'text-gray-900'
        }`}>{question}</span>
        <span className={`ml-4 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-200 ${
          open ? 'bg-[#D4AF37] text-black rotate-45' : 'bg-gray-100 text-gray-500'
        }`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
