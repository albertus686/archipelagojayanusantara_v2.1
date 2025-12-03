import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Testimoni', href: '#testimonials' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-primary-900/95 backdrop-blur-md py-3 border-white/10 shadow-lg' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <div 
            onClick={() => scrollToSection('#hero')}
            className="cursor-pointer flex items-center"
          >
            {/* PERUBAHAN: Background kotak kaca dihapus total.
                Sekarang cuma styling ukuran (h-10/h-12) dan animasi hover saja.
            */}
            <img 
              src="../public/images/acplogoiconheader.png" 
              alt="PT Archipelago Jaya Nusantara" 
              className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105" 
            />
            
            {/* Teks Nama PT */}
            <div className="flex flex-col ml-3">
              <span className="font-heading font-bold text-lg md:text-xl text-white tracking-wide leading-none">
                ARCHIPELAGO
              </span>
              <span className="text-[10px] font-bold text-white/90 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-amber-400 transition-colors">
                Jaya Nusantara
              </span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className={`hidden lg:flex items-center gap-8 px-8 py-2.5 rounded-full border backdrop-blur-md transition-colors duration-300 ${
            scrolled ? 'bg-white/5 border-white/10' : 'bg-primary-900/40 border-white/10'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-primary-100 hover:text-white transition-colors relative group tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-900/20"
            >
              Hubungi Kami
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-900 border-t border-white/10 shadow-2xl p-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-primary-100 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-white/10 my-2" />
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-amber-700 active:scale-95 transition-all"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation