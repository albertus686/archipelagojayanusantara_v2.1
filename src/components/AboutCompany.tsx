import React from 'react'
import { Target, Eye, Sprout, Trees, Factory, Flame, Truck } from 'lucide-react'
import { motion } from 'framer-motion' // Import Animasi

const AboutCompany = () => {
  // DATA: 5 PHILOSOPHY STEPS
  const steps = [
    { icon: <Sprout size={28} />, hashtag: '#wegrow', title: 'Naturally Grown', desc: 'Cultivated in natural, eco-friendly, and shaded plantations without the use of harmful chemicals.' },
    { icon: <Trees size={28} />, hashtag: '#wefarm', title: 'Farmers Dedication', desc: 'The love and dedication of farming families committed to every activity and harvest tradition.' },
    { icon: <Factory size={28} />, hashtag: '#weprocess', title: 'Quality Control', desc: 'Owning our own processing facilities allows us full control and traceability over our coffee quality.' },
    { icon: <Flame size={28} />, hashtag: '#weroast', title: 'Precision Processing', desc: 'Processed with modern machinery and strict profiling systems to ensure consistent flavor notes.' },
    { icon: <Truck size={28} />, hashtag: '#wedeliver', title: 'Direct Trade', desc: 'Delivered directly from the plantation to your warehouse/cup, with absolutely no intermediaries.' }
  ]

  // Settingan Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Jeda 0.2 detik antar elemen (Efek Gelombang)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-12 md:py-20 bg-primary-900 text-white relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        
        {/* === HEADER (Animasi Sendiri) === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Bridging Indonesian <span className="text-amber-500">Coffee</span> to the World
          </h2>
          <p className="text-lg text-primary-200/80 max-w-3xl mx-auto leading-relaxed">
            PT Archipelago Jaya Nusantara is dedicated to curating the finest Arabica Green Beans 
            from Sumatra for Roasters and Importers worldwide.
          </p>
        </motion.div>

        {/* === CONTENT (Gambar & Visi Misi) === */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Foto (Muncul dari Kiri) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="absolute -inset-2 bg-amber-600/30 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-all duration-500 blur-sm"></div>
              <img src="/images/about-coffee.png" alt="Coffee Process" className="relative w-full rounded-2xl shadow-2xl border border-white/10" />
            </motion.div>

            {/* Cards Visi Misi (Muncul dari Kanan - Satu per satu) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="order-1 lg:order-2 space-y-6"
            >
              <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20"><Target size={24} /></div>
                  <h3 className="font-heading text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-primary-200/80 leading-relaxed text-sm">"To introduce the unique character of Sumatra Mandeling coffee to the global stage."</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20"><Eye size={24} /></div>
                  <h3 className="font-heading text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-primary-200/80 leading-relaxed text-sm">"To become the most trusted sourcing partner for international roasters."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* === BOTTOM: 5 KOTAK FILOSOFI (Muncul Bergelombang) === */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Mulai animasi pas udah kelihatan dikit
          variants={containerVariants} // Pemicu animasi bergelombang
          className="pt-12 border-t border-white/10"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="font-heading text-2xl font-bold text-white">Our Farm to Cup Philosophy</h3>
            <p className="text-primary-300 text-sm mt-2">Commitment to quality at every step</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} // Setiap kartu akan muncul berurutan
                className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-amber-900/30 text-amber-500 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 border border-amber-500/20">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-sky-400 mb-2 font-heading tracking-wide group-hover:text-sky-300">{step.hashtag}</h4>
                <h5 className="font-bold text-white text-sm mb-3">{step.title}</h5>
                <p className="text-xs text-primary-200/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutCompany