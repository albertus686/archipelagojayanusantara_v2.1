import React, { useEffect, useRef } from 'react'
import { ArrowRight, Coffee, MapPin } from 'lucide-react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

// --- KOMPONEN PENGHITUNG ANGKA (DENGAN FRAMER MOTION) ---
interface StatisticProps {
  end: number
  suffix: string
  label: string
  delay?: number
}

const AnimatedCounter: React.FC<StatisticProps> = ({ end, suffix, label, delay = 0 }) => {
  const ref = useRef(null)
  // useInView: Animasi baru jalan pas elemen muncul di layar
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  // Setup Motion Value
  const motionValue = useMotionValue(0)
  // Spring config biar angkanya nambahnya smooth (ada efek rem di akhir)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  // Transform ke integer (bulatkan angka)
  const rounded = useTransform(springValue, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      // Set timer delay sedikit biar gak kaget
      const timeout = setTimeout(() => {
        motionValue.set(end)
      }, delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [isInView, end, motionValue, delay])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-2xl md:text-4xl font-heading font-bold mb-1 text-primary-200 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-[10px] md:text-sm text-primary-100/80 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}

// --- MAIN HERO COMPONENT ---
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const coffeeStats = [
    { value: 1400, suffix: '+', label: 'Altitude (masl)', delay: 0 },
    { value: 13, suffix: '%', label: 'Moisture Max', delay: 0.1 },
    { value: 84, suffix: '+', label: 'Cupping Score', delay: 0.2 },
    { value: 100, suffix: '%', label: 'Arabica G1', delay: 0.3 }
  ]

  // Variabel animasi text (Fade Up)
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1] // Custom easing curve
      }
    })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center md:items-center overflow-hidden bg-primary-900 pt-32 pb-12 md:pt-0 md:pb-0">
      
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="/images/pot-with-coffee-beans.jpg" 
            alt="Sumatra Coffee Plantation"
            className="w-full h-full object-cover opacity-50" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/40 to-primary-900"></div>
      </div>
      
      {/* KONTEN UTAMA */}
      <div className="relative z-10 container mx-auto px-4 text-center"> 
        <div className="max-w-5xl mx-auto">
          
          {/* Badge Lokasi */}
          <motion.div 
            custom={0.2} // Delay
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-6"
          >
            <MapPin size={14} className="text-amber-500 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-sm font-bold text-amber-50 tracking-widest uppercase">
              Direct Origin: North Sumatra
            </span>
          </motion.div>

          {/* HEADLINE UTAMA */}
          <motion.h1 
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 text-white leading-tight"
          >
            The Soul of <br className="md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Mandeling
            </span>
          </motion.h1>
          
          {/* SUB-HEADLINE */}
          <motion.div 
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-3xl mx-auto mb-8 md:mb-10 space-y-2 px-2"
          >
            <p className="text-lg md:text-2xl text-white font-medium">
              Exquisite Grade 1 Arabica Coffee.
            </p>
            <p className="text-sm md:text-lg text-primary-100/80 font-light leading-relaxed">
              Sourced directly from farmers, processed with passion for global roasters.
            </p>
          </motion.div>
          
          {/* TOMBOL CTA */}
          <motion.div 
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4"
          >
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
          </motion.div>
          
          {/* STATISTIK FLOAT (DENGAN GLASS EFFECT LEBIH KUAT) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/10 mx-2 md:mx-0 shadow-2xl shadow-black/20"
          >
            {coffeeStats.map((stat, index) => (
              <AnimatedCounter 
                key={index}
                end={stat.value} 
                suffix={stat.suffix} 
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-amber-200/50 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-3 bg-amber-200/80 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero