import React, { useRef } from 'react'
import { Star, Coffee, Mountain, Droplets, ArrowRight, ShieldCheck } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductShowcase = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yBg2 = useTransform(scrollYProgress, [0, 1], [-50, 50])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // DATA: SPESIFIKASI (English)
  const specs = [
    { label: 'Altitude', value: '1,400+ masl', icon: <Mountain size={20} /> },
    { label: 'Process', value: 'Wet Hulled (Giling Basah)', icon: <Coffee size={20} /> },
    { label: 'Moisture', value: '11-13%', icon: <Droplets size={20} /> },
    { label: 'Grade', value: 'Grade 1 (Triple Picked)', icon: <Star size={20} /> },
  ]

  // ANIMASI
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const cardBounceVariant = {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  }

  const rippleVariants = {
    rest: { scale: 0.8, opacity: 0 },
    hover: { 
      scale: [1, 1.5], 
      opacity: [0.5, 0], 
      transition: { duration: 1, repeat: Infinity, ease: "easeOut" } 
    }
  }

  const iconShakeVariants = {
    rest: { rotate: 0 },
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0], 
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } 
    }
  }

  return (
    <section ref={containerRef} id="products" className="py-12 md:py-24 bg-primary-900 relative overflow-hidden text-white">
      
      {/* BACKGROUND DECOR */}
      <motion.div style={{ y: yBg1 }} className="absolute top-[10%] right-[-5%] w-96 h-96 bg-amber-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <motion.div style={{ y: yBg2 }} className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-amber-800 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* KOLOM KIRI: FOTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group w-full max-w-[340px] md:max-w-none mx-auto"
          >
            <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-full md:rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
            
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
               className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-square md:aspect-[4/3]"
            >
              <img 
                src="/images/mandelin.png" 
                alt="Sumatra Mandeling Green Beans"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-primary-900/80 backdrop-blur-md border border-amber-500/30 p-3 md:p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="bg-amber-500/20 p-2 rounded-full text-amber-500">
                   <ShieldCheck size={20} />
                </div>
                <div>
                   <span className="block text-amber-500 font-bold text-[10px] uppercase tracking-widest">Certified</span>
                   <span className="text-white font-heading text-sm md:text-lg leading-none">Export Quality</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* KOLOM KANAN: DETAIL */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-amber-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 block animate-pulse">
                The Crown Jewel of Sumatra
              </span>
              
              <h2 className="font-heading text-3xl md:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
                Sumatra <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                  Mandeling G1
                </span>
              </h2>
              
              {/* COPYWRITING BAHASA INGGRIS YANG MENJUAL */}
              <p className="text-primary-100/80 text-sm md:text-lg leading-relaxed lg:border-l-4 lg:border-amber-600 lg:pl-6 pl-0">
                Known for it's legendary <strong>Heavy Body</strong> and low acidity. 
                Experience a complex flavor profile featuring <em>Exotic Earthy</em> notes, <em>Herbal Spice</em>, and a lingering <em>Dark Chocolate</em> finish. 
                The preferred choice for roasters worldwide.
              </p>
            </motion.div>

            {/* GRID SPESIFIKASI */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp} 
                  whileHover="hover" 
                  initial="rest" 
                  animate="rest"
                >
                  <motion.div 
                    variants={cardBounceVariant}
                    className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 hover:border-amber-500/50 transition-colors duration-300 group cursor-pointer h-full justify-center"
                  >
                    <div className="relative w-10 h-10 md:w-12 md:h-12 mb-3 flex items-center justify-center">
                       <motion.div variants={rippleVariants} className="absolute inset-0 rounded-full bg-amber-500/30" />
                       <div className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500 transition-colors"></div>
                       <motion.div variants={iconShakeVariants} className="text-amber-500 relative z-10">
                          {spec.icon}
                       </motion.div>
                    </div>

                    <p className="text-[10px] md:text-xs text-primary-300 uppercase tracking-wider mb-1 group-hover:text-amber-400 transition-colors font-bold">
                        {spec.label}
                    </p>
                    <p className="text-sm md:text-lg font-bold text-white group-hover:scale-105 transition-transform">
                        {spec.value}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* TOMBOL FIX: Menggunakan 'w-auto' dan 'mx-auto' agar tidak panjang di HP */}
            <motion.div variants={fadeInUp} className="pt-2 md:pt-4">
              <a 
                href="https://wa.me/6281234567890" // Ganti No WA
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-auto mx-auto lg:mx-0 bg-amber-600 text-white py-3 md:py-4 px-8 md:px-10 rounded-xl font-bold text-sm md:text-lg hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/40 items-center justify-center gap-2 md:gap-3 group active:scale-95"
                style={{ maxWidth: 'fit-content' }} // Tambahan safety agar tidak melar
              >
                Request Free Sample
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase