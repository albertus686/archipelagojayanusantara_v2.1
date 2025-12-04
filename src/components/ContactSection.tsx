import React, { useState } from 'react'
import { Send, CheckCircle, Globe, Building2, User, Mail, Phone, ChevronDown } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+62',
    phoneNumber: '',
    company: '',
    country: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // DATA NEGARA LENGKAP
  const countries = [
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Italy', code: '+39', flag: '🇮🇹' },
    { name: 'Spain', code: '+34', flag: '🇪🇸' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'U.A.E (Dubai)', code: '+971', flag: '🇦🇪' },
    { name: 'Turkey', code: '+90', flag: '🇹🇷' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { name: 'Thailand', code: '+66', flag: '🇹🇭' },
    { name: 'Philippines', code: '+63', flag: '🇵🇭' },
    { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
    { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'Russia', code: '+7', flag: '🇷🇺' },
    { name: 'Egypt', code: '+20', flag: '🇪🇬' },
    { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
    { name: 'Other', code: '+', flag: '🌍' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Export Inquiry:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Partner with Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-5xl mx-auto leading-relaxed">
            Dapatkan penawaran harga FOB/CIF khusus untuk <strong>Sumatra Mandeling Grade 1</strong>. </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-primary-50 rounded-2xl p-6 md:p-10 border border-primary-100 shadow-xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              {/* Baris 1: Nama & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1">
                    <User size={16} className="text-amber-600"/><p className="text-[14px]"> Full Name <span className="text-red-500">*</span></p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                    placeholder="Nama Lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1">
                    <Mail size={16} className="text-amber-600"/><p className="text-[14px]"> Business Email <span className="text-red-500">*</span> </p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                    placeholder="nama@perusahaan.com"
                  />
                </div>
              </div>

              {/* Baris 2: Telepon & Nama Perusahaan */}
              <div className="grid md:grid-cols-2 gap-5">
                
                {/* KOLOM TELEPON YANG DIRAPIKAN */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1">
                    <Phone size={16} className="text-amber-600"/><p className="text-[14px]"> WhatsApp/Phone <span className="text-red-500">*</span></p>
                  </label>
                  
                  {/* WRAPPER MENYATU (Border di luar) */}
                  <div className="flex w-full border border-neutral-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 bg-white">
                    
                    {/* Bagian Dropdown */}
                    <div className="relative bg-neutral-50 border-r border-neutral-200">
                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleInputChange}
                        className="h-full pl-3 pr-8 py-3 bg-transparent outline-none text-sm appearance-none cursor-pointer w-[95px] font-medium text-neutral-700"
                      >
                        {countries.map((c, idx) => (
                          <option key={idx} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      {/* Icon Panah Absolute */}
                      <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" />
                    </div>

                    {/* Bagian Input Nomor */}
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 outline-none text-sm text-neutral-700 placeholder-neutral-400"
                      placeholder="812-xxx-xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1">
                    <Building2 size={16} className="text-amber-600"/> <p className="text-[14px]"> Company Name<span className="text-red-500">*</span></p>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                    placeholder="PT / LLC / Ltd..."
                  />
                </div>
              </div>

              {/* Baris 3: Dropdown Negara Tujuan */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1">
                  <Globe size={14} className="text-amber-600"/> <p className="text-[14px]"> Country Of Export Destination <span className="text-red-500">*</span></p>
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>-- Pilih Negara Tujuan --</option>
                    {countries.map((c, idx) => (
                      <option key={idx} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" />
                </div>
              </div>

              {/* Baris 4: Pesan */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  <p className="text-[14px]"> Detail Of Needs (Quantity, Grade, etc) <span className="text-red-500">*</span></p>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                  placeholder="Saya butuh penawaran untuk Green Bean Mandeling Grade 1, quantity 1 Container 20ft..."
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 text-sm uppercase tracking-wide transform hover:-translate-y-1"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Inquiry Terkirim!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Minta Penawaran Resmi
                  </>
                )}
              </button>
              
              <p className="text-center text-[15px] text-neutral-500 mt-2">
                *Kami merespon inquiry B2B dalam waktu kurang dari 24 jam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection