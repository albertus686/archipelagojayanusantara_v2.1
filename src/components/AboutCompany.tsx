import React, { useRef } from 'react'
import { Target, Eye, Sprout, Trees, Factory, Flame, Truck } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutCompany = () => {
  const containerRef = useRef(null)
  
  // PARALLAX EFFECT SETUP
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  // DATA: 5 PHILOSOPHY STEPS
  const steps = [
    {
      icon: <Sprout size={26} />,
      hashtag: 'We Grow',
      title: 'Naturally Grown',
      desc: 'Cultivated in eco-friendly shaded plantations, free from harmful chemicals.'
    },
    {
      icon: <Trees size={26} />,
      hashtag: 'We Farm',
      title: 'Farmers Dedication',
      desc: 'Nurtured by committed farming families upholding harvest traditions.'
    },
    {
      icon: <Factory size={26} />,
      hashtag: 'We Process',
      title: 'Quality Control',
      desc: 'Full traceability and control in our own dedicated processing facilities.'
    },
    {
      icon: <Flame size={26} />,
      hashtag: 'We Roast',
      title: 'Precision Profiling',
      desc: 'Processed with modern machinery and strict data-driven profiling.'
    },
    {
      icon: <Truck size={26} />,
      hashtag: 'We Deliver',
      title: 'Direct Trade',
      desc: 'Shipped directly from origin to your warehouse, eliminating intermediaries.'
    }
  ]

  // --- VARIAN ANIMASI (DIPISAH AGAR TIDAK BENTROK) ---

  // 1. ANIMASI MASUK (Untuk Wrapper Luar)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  // 2. ANIMASI INTERAKSI (Untuk Kartu Dalam)
  const cardBounceVariant = {
    rest: { 
      y: 0, 
      scale: 1,
      // Transisi 'pulang' yang mulus biar tidak patah
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    hover: { 
      y: -10, 
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  }

  // 3. Animasi ICON (Ripple & Shake)
  const rippleVariants = {
    rest: { scale: 0.8, opacity: 0 },
    hover: { 
      scale: [1, 1.5, 2], 
      opacity: [0.5, 0.2, 0], 
      transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" } 
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
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-primary-900 text-white relative overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      <motion.div style={{ y: yBg1 }} className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <motion.div style={{ y: yBg2 }} className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold text-xs uppercase mb-3 block"
          >
            About Us
          </motion.span>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {["Bridging", "Indonesian", "Coffee", "to", "the", "World"].map((word, i) => (
              <motion.span key={i} variants={fadeInUp} className={`inline-block mr-2 ${word === "Coffee" ? "text-amber-500" : ""}`}>
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary-100/80 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            PT Archipelago Jaya Nusantara curates the finest, traceable Arabica Green Beans from Sumatra for Roasters and Importers worldwide.
          </motion.p>
        </div>

        {/* === CONTENT: IMAGE & VISI MISI === */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* FOTO (Kiri) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="absolute -inset-3 border-2 border-amber-500/20 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-auto rounded-[2rem] shadow-2xl bg-black/40 overflow-hidden aspect-[5/4]"
              >
                 <img 
                  src="/images/imagesabout.jpg" 
                  alt="Coffee Process"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent"></div>
              </motion.div>
            </motion.div>

            {/* Visi Misi (Kanan) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex flex-col gap-6"
            >
              
              {/* VISION CARD */}
              <motion.div 
                variants={fadeInUp} // Animasi Masuk Wrapper
                className="w-full"
              >
                <motion.div 
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardBounceVariant} // Animasi Interaksi Kartu
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl cursor-default relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative shrink-0 w-14 h-14 flex items-center justify-center">
                       <motion.div variants={rippleVariants} className="absolute inset-0 rounded-full bg-amber-500/40" />
                       <div className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20"></div>
                       <motion.div variants={iconShakeVariants} className="text-amber-500 relative z-10">
                          <Eye size={28} />
                       </motion.div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">Our Vision</h3>
                      <p className="text-primary-100/70 leading-relaxed italic">
                        "To introduce premium Nusantara coffee to the Taiwanese market via international standards, modern branding, and enduring partnerships with local distributors, roasters, and cafe chains."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* MISSION CARD */}
              <motion.div 
                variants={fadeInUp} 
                className="w-full"
              >
                <motion.div 
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardBounceVariant}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl cursor-default relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative shrink-0 w-14 h-14 flex items-center justify-center">
                       <motion.div variants={rippleVariants} className="absolute inset-0 rounded-full bg-amber-500/40" />
                       <div className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20"></div>
                       <motion.div variants={iconShakeVariants} className="text-amber-500 relative z-10">
                          <Target size={28} />
                       </motion.div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">Our Mission</h3>
                      <p className="text-primary-100/70 leading-relaxed italic">
                        "Our mission is to establish Nusantara coffee as a premium choice in Taiwan by guaranteeing international quality standards, implementing modern branding strategies, and fostering long-term synergies with local distributors and roasters."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* === BOTTOM: 5 KOTAK FILOSOFI (FLEXBOX CENTERED + ANIMATION FIX) === */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Trigger sedikit lebih cepat
          className="relative pt-10 border-t border-white/10"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl font-bold text-white">
              The Farm to Cup Philosophy
            </h3>
            <p className="text-primary-200/60 mt-2 text-sm">Our holistic approach to guaranteed quality</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {steps.map((step, index) => (
              // 1. WRAPPER LUAR: Menangani Animasi Masuk (FadeIn)
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                className="w-full md:w-[30%] lg:w-[18%]"
              >
                 {/* 2. KOTAK DALAM: Menangani Interaksi (Hover/Bounce) secara mandiri */}
                 <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardBounceVariant}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 hover:border-amber-500/50 transition-colors duration-300 group cursor-pointer h-full"
                 >
                    <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                       {/* Ripple */}
                       <motion.div variants={rippleVariants} className="absolute inset-0 rounded-full bg-amber-500/30" />
                       {/* Base Circle */}
                       <div className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500 transition-colors"></div>
                       {/* Icon */}
                       <motion.div variants={iconShakeVariants} className="text-amber-500 relative z-10">
                          {step.icon}
                       </motion.div>
                    </div>
                    
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-amber-500/80 group-hover:text-amber-400 transition-colors">
                      #{step.hashtag}
                    </h4>
                    <h5 className="font-bold text-white text-base mb-2">
                      {step.title}
                    </h5>
                    <p className="text-xs text-primary-200/70 leading-relaxed group-hover:text-white transition-colors">
                      {step.desc}
                    </p>
                 </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutCompany