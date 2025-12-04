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
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Product', href: '#products' },
    { label: 'Testimonial', href: '#testimonials' },
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
      <div className="container mx-auto px-4 max-w-screen-2xl">
        
        {/* FLEXBOX LAYOUT BARU: Kiri, Tengah, Kanan */}
        <div className="flex items-center w-full">
          
          {/* 1. BAGIAN KIRI (LOGO) - flex-1 agar mendorong menu ke tengah */}
          <div className="flex-1 flex justify-start">
            <div 
              onClick={() => scrollToSection('#hero')}
              className="cursor-pointer flex items-center gap-3"
            >
              <img 
                /* Note: Di React/Vite, path gambar dari folder public cukup tulis '/images/...' */
                src="/images/acplogoiconheader.png" 
                alt="PT Archipelago Jaya Nusantara" 
                className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105" 
              />
              
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg md:text-xl text-white tracking-wide leading-none">
                  ARCHIPELAGO
                </span>
                <span className="text-[10px] font-bold text-white/90 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-amber-400 transition-colors">
                  Jaya Nusantara
                </span>
              </div>
            </div>
          </div>

          {/* 2. BAGIAN TENGAH (MENU) - Tidak pakai flex-grow */}
          <div className="hidden lg:flex justify-center">
            <div className={`flex items-center gap-8 px-8 py-2.5 rounded-full border backdrop-blur-md transition-colors duration-300 ${
              scrolled ? 'bg-white/5 border-white/10' : 'bg-primary-900/40 border-white/10'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-primary-100 hover:text-white transition-colors relative group tracking-wide whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. BAGIAN KANAN (TOMBOL & MOBILE TOGGLE) - flex-1 agar seimbang dengan kiri */}
          <div className="flex-1 flex justify-end items-center">
            {/* Tombol Desktop */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="group flex items-center gap-2 bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-900/20 whitespace-nowrap"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Tombol Mobile (Hamburger) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors ml-4"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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