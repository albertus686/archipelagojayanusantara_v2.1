import React, { useState, useRef } from 'react'
import { Send, CheckCircle, Globe, Building2, User, Mail, Phone, ChevronDown, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '', email: '', phoneCode: '+62', phoneNumber: '', company: '', country: '', message: ''
  })

  // DATA NEGARA LENGKAP
  const countries = [
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Thailand', code: '+66', flag: '🇹🇭' },
    { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { name: 'Philippines', code: '+63', flag: '🇵🇭' },
    { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
    { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
    { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'Mexico', code: '+52', flag: '🇲🇽' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { name: 'Italy', code: '+39', flag: '🇮🇹' },
    { name: 'Spain', code: '+34', flag: '🇪🇸' },
    { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
    { name: 'Belgium', code: '+32', flag: '🇧🇪' },
    { name: 'Russia', code: '+7', flag: '🇷🇺' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'U.A.E (Dubai)', code: '+971', flag: '🇦🇪' },
    { name: 'Qatar', code: '+974', flag: '🇶🇦' },
    { name: 'Turkey', code: '+90', flag: '🇹🇷' },
    { name: 'Egypt', code: '+20', flag: '🇪🇬' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
    { name: 'Other', code: '+', flag: '🌍' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const SERVICE_ID = 'service_bw648ol' 
    const TEMPLATE_ID = 'template_lsev1sg'
    const PUBLIC_KEY = 'BDK595rVd5cFUEE6k'

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text)
            setSubmitted(true)
            setLoading(false)
            setFormData({ name: '', email: '', phoneCode: '+62', phoneNumber: '', company: '', country: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        }, (error) => {
            console.log(error.text)
            setError('Gagal mengirim pesan. Silakan coba lagi atau WA kami.')
            setLoading(false)
        })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-900 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover opacity-[0.03] mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header dengan Animasi Masuk */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Partner with Us
          </h2>
          <p className="text-base md:text-lg text-primary-200/80 max-w-2xl mx-auto leading-relaxed px-2">
            Get a tailored FOB/CIF quote for <strong>Sumatra Mandeling Grade 1</strong>. 
            Connect with our export team today.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Form Container dengan Animasi Masuk */}
          {/* FIX 1: Padding dikurangi jadi 'p-5' di HP agar input tidak mepet kanan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-5 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[120px] opacity-10 -mr-20 -mt-20 pointer-events-none"></div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 md:space-y-8 relative z-10">
              
              <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                {/* KOLOM KIRI */}
                <div className="space-y-5 md:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-primary-200 mb-2 flex items-center gap-2">
                      <User size={16} className="text-amber-500"/> Name <span className="text-red-400">*</span>
                    </label>
                    {/* FIX 2: text-base di HP biar gak zoom otomatis */}
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-neutral-900 placeholder-neutral-400 shadow-sm text-base md:text-sm" placeholder="Full Name" />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-primary-200 mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-amber-500"/> Email <span className="text-red-400">*</span>
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-neutral-900 placeholder-neutral-400 shadow-sm text-base md:text-sm" placeholder="Business Email" />
                  </div>

                  {/* Phone (RAPI & MENYATU) */}
                  <div>
                    <label className="block text-sm font-bold text-primary-200 mb-2 flex items-center gap-2">
                      <Phone size={16} className="text-amber-500"/> Phone <span className="text-red-400">*</span>
                    </label>
                    <div className="flex w-full border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 bg-white">
                      <div className="relative bg-neutral-100 border-r border-neutral-300">
                        <select name="phoneCode" value={formData.phoneCode} onChange={handleInputChange} className="h-full pl-2 pr-6 py-3 bg-transparent outline-none appearance-none cursor-pointer w-[90px] font-medium text-neutral-900 text-base md:text-sm">
                          {countries.map((c, idx) => <option key={idx} value={c.code}>{c.flag} {c.code}</option>)}
                        </select>
                        <ChevronDown size={14} className="absolute right-1 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" />
                      </div>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required className="flex-1 px-4 py-3 border-none outline-none text-neutral-900 placeholder-neutral-400 bg-white text-base md:text-sm" placeholder="812-xxx-xxx" />
                    </div>
                  </div>
                </div>

                {/* KOLOM KANAN */}
                <div className="space-y-5 md:space-y-6">
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold text-primary-200 mb-2 flex items-center gap-2">
                      <Building2 size={16} className="text-amber-500"/> Company <span className="text-red-400">*</span>
                    </label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} required className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-neutral-900 placeholder-neutral-400 shadow-sm text-base md:text-sm" placeholder="Company Name" />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-bold text-primary-200 mb-2 flex items-center gap-2">
                      <Globe size={16} className="text-amber-500"/> Country <span className="text-red-400">*</span>
                    </label>
                    <div className="relative shadow-sm rounded-xl">
                      <select name="country" value={formData.country} onChange={handleInputChange} required className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-neutral-900 appearance-none cursor-pointer text-base md:text-sm">
                        <option value="" disabled>-- Select Country --</option>
                        {countries.map((c, idx) => <option key={idx} value={c.name}>{c.flag} {c.name}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-primary-200 mb-2">Inquiry <span className="text-red-400">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={3} className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-neutral-900 placeholder-neutral-400 shadow-sm resize-none text-base md:text-sm" placeholder="Details..." />
                  </div>
                </div>
              </div>

              {/* Tombol Submit dengan Loading */}
              {/* FIX 3: Tambah padding bottom container tombol agar tidak ketutupan WA Widget */}
              <div className="pb-6 md:pb-0">
                <button type="submit" disabled={loading || submitted} className="w-full bg-amber-600 text-white px-8 py-5 rounded-xl font-bold hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-amber-900/40 text-lg uppercase tracking-wide transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? (
                    <><Loader2 className="animate-spin" /> Sending...</>
                    ) : submitted ? (
                    <><CheckCircle size={24} /> Inquiry Sent Successfully!</>
                    ) : (
                    <><Send size={24} /> Request Official Quote</>
                    )}
                </button>
                
                {error && <p className="text-center text-red-400 text-sm mt-2">{error}</p>}
                <p className="text-center text-xs text-primary-300/60 mt-4">*Data privacy guaranteed.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection