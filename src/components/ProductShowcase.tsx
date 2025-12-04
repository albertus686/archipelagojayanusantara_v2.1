import React from 'react'
import { Star, Coffee, Mountain, Droplets, ArrowRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const ProductShowcase = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const specs = [
    { label: 'Altitude', value: '1,400 masl', icon: <Mountain size={20} /> },
    { label: 'Process', value: 'Giling Basah', icon: <Coffee size={20} /> },
    { label: 'Moisture', value: '12-13%', icon: <Droplets size={20} /> },
    { label: 'Grade', value: 'Grade 1 (Triple Picked)', icon: <Star size={20} /> },
  ]

  // Varian Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="products" className="py-16 md:py-24 bg-primary-900 relative overflow-hidden text-white">
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/hero-bg.png')] bg-cover opacity-10 mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* KOLOM KIRI: FOTO (Animasi Zoom In & Fade) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-full md:rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-square md:aspect-[4/3]">
              <img 
                src="/images/mandelin.png" 
                alt="Sumatra Mandeling Green Beans"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <ShieldCheck size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest">Certified</span>
                </div>
                <p className="text-white font-heading text-lg">Export Quality</p>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: DETAIL (Animasi Staggered/Berurutan) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="text-amber-500 font-bold tracking-[0.2em] text-sm uppercase mb-2 block animate-pulse">
                The Crown Jewel of Sumatra
              </span>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Sumatra <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                  Mandeling G1
                </span>
              </h2>
              <p className="text-primary-100/80 text-lg leading-relaxed border-l-4 border-amber-600 pl-6">
                Kopi dengan karakter <strong>Full Body</strong> yang legendaris. 
                Memiliki profil rasa <em>Earthy</em>, <em>Spicy</em>, dan sentuhan <em>Dark Chocolate</em>. 
                Pilihan utama roaster dunia untuk base espresso yang solid.
              </p>
            </motion.div>

            {/* Grid Spesifikasi */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} // Muncul satu per satu
                  className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-amber-600/20 hover:border-amber-500/50 transition-all duration-300 group"
                >
                  <div className="text-amber-500 mb-2 group-hover:scale-110 transition-transform origin-left">
                    {spec.icon}
                  </div>
                  <p className="text-xs text-primary-300 uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="text-lg font-bold text-white">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto bg-amber-600 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/40 flex items-center justify-center gap-3 group"
              >
                Minta Sampel Gratis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase