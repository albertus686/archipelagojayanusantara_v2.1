import React, { useRef } from 'react'
import { Quote } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FounderQuote = () => {
  const containerRef = useRef(null)
  
  // --- SETUP PARALLAX BACKGROUND ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Efek parallax halus agar background bergerak pelan saat scroll
  const yMap = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacityMap = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2])

  // --- VARIAN ANIMASI ---
  const quoteContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 1, ease: "backOut" } 
    }
  }

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-primary-900 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* --- BACKGROUND ELEMENTS (DEKORASI) --- */}
      
      {/* 1. World Map Texture (Peta Dunia Samar di Belakang) */}
      <motion.div 
        style={{ y: yMap, opacity: opacityMap }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
         <div className="w-[120%] h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain mix-blend-overlay invert opacity-10"></div>
      </motion.div>

      {/* 2. Ambient Light (Cahaya Emas Hangat di Tengah) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>


      {/* --- KONTEN UTAMA --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* ICON QUOTE BESAR */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full flex items-center justify-center border border-amber-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <Quote size={32} className="text-amber-500 fill-amber-500/20" />
          </div>
        </motion.div>

        {/* TEKS QUOTE (Dianimasikan per kata) */}
        <motion.div
          variants={quoteContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight">
            {/* Memecah kalimat jadi kata-kata biar muncul satu per satu */}
            {"We provide efficient and high-quality services ".split(" ").map((word, index) => (
              <motion.span key={index} variants={wordVariant} className="inline-block mr-2 md:mr-3">
                {word}
              </motion.span>
            ))}
            
            {/* Kata 'Worldwide' dibuat spesial (emas & bergaris bawah) */}
            <motion.span variants={wordVariant} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 animate-pulse relative">
               worldwide.
               {/* Garis bawah dekoratif */}
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: '100%' }}
                 transition={{ delay: 1.5, duration: 0.8 }}
                 className="absolute -bottom-2 left-0 h-1 bg-amber-500/50 rounded-full"
               />
            </motion.span>
          </h2>
        </motion.div>

        {/* KARTU NAMA FOUNDER (Style Kaca & Glow saat Hover) */}
        <motion.div 
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block relative group cursor-default"
        >
          {/* Kotak Kaca Transparan */}
          <div className="relative px-8 py-4 md:px-12 md:py-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 z-10">
            
            {/* Titik Emas Dekoratif Kiri-Kanan */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1 group-hover:text-amber-100 transition-colors">
              Nathan Lusandri Widjaja
            </h3>
            
            <p className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              Founder of Archipelago Jaya Nusantara
            </p>
          </div>

          {/* Efek Glow/Cahaya di belakang kartu saat di-hover */}
          <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default FounderQuote