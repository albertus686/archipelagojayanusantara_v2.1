import React, { useState, useEffect } from 'react'
import { ArrowRight, Coffee, MapPin } from 'lucide-react'

// Komponen Penghitung Angka
interface StatisticProps {
  end: number
  suffix: string
  label: string
  duration?: number
}

const AnimatedCounter: React.FC<StatisticProps> = ({ end, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-4xl font-heading font-bold mb-1 text-primary-200">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-sm text-primary-100/80 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const coffeeStats = [
    { value: 1400, suffix: '+', label: 'Altitude (masl)', duration: 2000 },
    { value: 13, suffix: '%', label: 'Moisture Max', duration: 1500 },
    { value: 84, suffix: '+', label: 'Cupping Score', duration: 2000 },
    { value: 100, suffix: '%', label: 'Arabica G1', duration: 1000 }
  ]

  return (
    // REVISI 1: Layout Container
    // - Mobile: 'pt-32' (turun jauh biar gak nabrak navbar), 'pb-12', 'items-start' (atau default)
    // - Desktop (md): 'items-center', 'pt-0' (kembali ke tengah)
    <section id="hero" className="relative min-h-screen flex flex-col justify-center md:items-center overflow-hidden bg-primary-900 pt-32 pb-12 md:pt-0 md:pb-0">
      
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/pot-with-coffee-beans.jpg" 
          alt="Sumatra Coffee Plantation"
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/40 to-primary-900"></div>
      </div>
      
      {/* KONTEN UTAMA */}
      <div className="relative z-10 container mx-auto px-4 text-center"> 
        <div className="max-w-5xl mx-auto">
          
          {/* Badge Lokasi */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-6 animate-fade-in">
            <MapPin size={14} className="text-amber-500 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-sm font-bold text-amber-50 tracking-widest uppercase">
              Direct Origin: North Sumatra
            </span>
          </div>

          {/* HEADLINE UTAMA */}
          {/* REVISI 2: Font size HP diturunkan jadi 'text-4xl' biar aman */}
          <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 text-white leading-tight">
            The Soul of <br className="md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Mandeling
            </span>
          </h1>
          
          {/* SUB-HEADLINE */}
          {/* REVISI 3: Margin bawah dikurangi (mb-8) */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-10 space-y-2 px-2">
            <p className="text-lg md:text-2xl text-white font-medium">
              Exquisite Grade 1 Arabica Coffee.
            </p>
            <p className="text-sm md:text-lg text-primary-100/80 font-light leading-relaxed">
              Sourced directly from farmers, processed with passion for global roasters.
            </p>
          </div>
          
          {/* TOMBOL CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group bg-amber-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-amber-900/20 active:scale-95"
            >
              <Coffee size={18} className="md:w-5 md:h-5" />
              Get The Sample
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('#products')}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-amber-100 border-2 border-amber-100/30 hover:bg-amber-100 hover:text-primary-900 transition-all duration-300 active:scale-95"
            >
              Specification
            </button>
          </div>
          
          {/* STATISTIK FLOAT */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/10 mx-2 md:mx-0">
            {coffeeStats.map((stat, index) => (
              <AnimatedCounter 
                key={index}
                end={stat.value} 
                suffix={stat.suffix} 
                label={stat.label}
                duration={stat.duration}
              />
            ))}
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator (Hidden di Mobile biar gakuh layar) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-6 h-10 border-2 border-amber-200/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-200/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero