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
    { icon: <Facebook size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
    { icon: <Linkedin size={18} />, href: '#' },
    { icon: <Youtube size={18} />, href: '#' }
  ]

  return (
    <footer className="bg-primary-900 text-white pt-10 pb-6 border-t-4 border-amber-600">
      
      <div className="container mx-auto px-6 max-w-screen-2xl">
        
        {/* GRID 3 KOLOM */}
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          
          {/* KOLOM 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* PERUBAHAN: Ganti Kotak AJN jadi Logo Gambar yang DIKECILKAN (h-8) */}
              <img 
                src="../public/images/acplogoiconheader.png" 
                alt="PT Archipelago Jaya Nusantara" 
                className="h-8 w-auto object-contain" // h-8 = 32px (Ukuran Manis buat Footer)
              />
              {/* Teks Nama PT dihapus/disembunyikan kalau di logo sudah ada tulisan */}
            </div>
            
            <p className="text-primary-100/80 text-sm leading-relaxed max-w-md">
              Mitra terpercaya sourcing komoditas Indonesia. Menghadirkan Kopi Sumatra Mandeling Grade 1 terbaik ke pasar global.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center text-amber-500 hover:bg-amber-600 hover:text-white transition-colors duration-300 border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: Menu */}
          <div className="md:pl-10">
            <h4 className="font-bold text-white text-sm mb-4 border-b border-white/20 pb-2 inline-block">
              Akses Cepat
            </h4>
            <ul className="space-y-2 text-sm text-primary-100/80">
              <li>
                <button onClick={() => scrollToSection('#hero')} className="hover:text-amber-500 transition-colors text-left">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#products')} className="hover:text-amber-500 transition-colors text-left">
                  Produk Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#about')} className="hover:text-amber-500 transition-colors text-left">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="hover:text-amber-500 transition-colors text-left">
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: Kontak */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 border-b border-white/20 pb-2 inline-block">
              Kantor Pusat
            </h4>
            <ul className="space-y-3 text-sm text-primary-100/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Jl. Kaliurang KM 5.2, Yogyakarta,<br />Indonesia 55281</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <span>+62 274 558 888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <span>sales@archipelago-jaya.com</span>
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
            <button onClick={() => scrollToSection('#about')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection('#about')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            
            {/* Tombol Back to Top */}
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