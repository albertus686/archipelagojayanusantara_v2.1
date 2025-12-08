import React from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  // Data Social Media
 const socialLinks = [
  { 
    icon: <Facebook size={18} />, 
    href: 'https://www.facebook.com/archipelagojayanusantara', 
    target: '_blank' // Pakai huruf kecil 't'
  },
  { 
    icon: <Instagram size={18} />, 
    href: 'https://www.instagram.com/archipelagojayanusantara/', 
    target: '_blank' 
  },
  { 
    icon: <Linkedin size={18} />, 
    href: 'https://www.linkedin.com/company/107803014', 
    target: '_blank' 
  },
  // { icon: <Youtube size={18} />, href: '#' }
]

  return (
    <footer className="bg-primary-900 text-white pt-10 pb-6 border-t-4 border-amber-600">
      
      <div className="container mx-auto px-6 max-w-screen-2xl">
        
        {/* PERUBAHAN UTAMA: 
            Saya ubah grid-cols-3 menjadi grid-cols-12 agar kita bisa atur lebar kolom lebih presisi.
            - Kolom 1 (Brand): Ambil 5 bagian (col-span-5)
            - Kolom 2 (Menu): Ambil 3 bagian (col-span-3)
            - Kolom 3 (Kontak): Ambil 4 bagian (col-span-4)
            Ini akan membuat layout lebih padat ke kiri.
        */}
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          
          {/* KOLOM 1: Brand (Logo + Teks) - Lebar 5/12 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* 1. Logo Gambar */}
              <img 
                src="/images/logoacpfooter.png" // Pastikan path ini benar sesuai file kamu
                alt="Logo AJN" 
                className="h-20 w-auto object-contain" 
              />
              
              {/* 2. Teks Nama Perusahaan */}
              <div>
                <h3 className="font-heading text-base font-bold text-white tracking-wide leading-tight">
                  PT Archipelago<br />Jaya Nusantara
                </h3>
                <p className="text-primary-200 text-[10px] uppercase tracking-wider mt-0.5">
                  General Supply & Export
                </p>
              </div>
            </div>
            
            <p className="text-primary-100/80 text-sm leading-relaxed max-w-md">
              Your trusted partner for sourcing Indonesia's finest commodities. Delivering premium Grade 1 Sumatra Mandeling coffee to the global market.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6"> 
  {/* Sesuaikan className wrapper di atas dengan kode aslimu */}
  
          {/* SOCIAL LINKS*/}
            {socialLinks.map((item, index) => (
               <a
                    key={index}
                    href={item.href}
                    
                    // --- INI YANG BIKIN BUKA TAB BARU ---
                    target={item.target || "_self"} 
                    rel="noopener noreferrer"
                    // ------------------------------------

                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-600 hover:text-white transition-all duration-300"
                      >
                    {item.icon}
                     </a>
                     ))}
              </div>
          </div>

          {/* KOLOM 2: Menu - Lebar 3/12 */}
          <div className="md:col-span-3 md:pl-4">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-white/20 pb-2 inline-block">
              Quick Access
            </h4>
            <ul className="space-y-2 text-sm text-primary-100/80">
              <li>
                <button onClick={() => scrollToSection('#hero')} className="hover:text-amber-500 transition-colors text-left">
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection('#about')} className="hover:text-amber-500 transition-colors text-left">
                  About Us
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection('#products')} className="hover:text-amber-500 transition-colors text-left">
                  Our Product
                </button>
              </li>


              <li>
                <button onClick={() => scrollToSection('#contact')} className="hover:text-amber-500 transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: Kontak - Lebar 4/12 */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-white/20 pb-2 inline-block">
              Head Office
            </h4>
            <ul className="space-y-3 text-sm text-primary-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <span>
                      JL. MAMPANG PRAPATAN RAYA NO.73A LANTAI 3 RT. 000
                      RW. 000, TEGAL PARANG, MAMPANG PRAPATAN, KOTA ADM.
                      JAKARTA SELATAN, DKI JAKARTA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <span>+62 8570 0800 872</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <span>archipelagojayanusantara@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-300">
          <div className="text-center md:text-left">
            © {currentYear} PT Archipelago Jaya Nusantara. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center text-white hover:bg-amber-700 transition-colors shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer