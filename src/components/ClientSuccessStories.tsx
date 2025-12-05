import React, { useRef } from 'react'
import { Star, Quote, TrendingUp, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SuccessStories = () => {
  const containerRef = useRef(null)

  // PARALLAX BACKGROUND
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yBg = useTransform(scrollYProgress, [0, 1], [50, -50])

  // DATA CLIENT STORIES (Contoh: Taiwan, Eropa, Lokal)
  const stories = [
    {
      name: "Chen Wei-Hao",
      role: "Head Roaster, Taipei",
      company: "Formosa Coffee Lab",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Ganti foto asli nanti
      flag: "🇹🇼",
      quote: "The Giling Basah profile from Archipelago is distinctively clean. It became our best-selling single origin espresso within just two months.",
      result: "Best Seller 2024",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Sourcing Manager",
      company: "Nordic Brews, Sweden",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      flag: "🇸🇪",
      quote: "Consistency is key for us. Archipelago delivers Grade 1 beans that match the sample perfectly every single shipment. Truly reliable.",
      result: "Zero Defects",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Owner",
      company: "Kopi Senja, Jakarta",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      flag: "🇮🇩",
      quote: "Support lokal rasa internasional. Beans Mandeling mereka punya body yang tebal tapi aftertaste-nya manis. Customer saya sangat suka.",
      result: "Sales +40%",
      rating: 5
    }
  ]

  // ANIMASI
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  return (
    <section ref={containerRef} id="testimonials" className="py-16 md:py-24 bg-primary-900 relative overflow-hidden text-white">
      
      {/* BACKGROUND DECOR */}
      {/* Blob samar */}
      <motion.div style={{ y: yBg }} className="absolute top-[20%] left-[-10%] w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />
      <motion.div className="absolute bottom-[10%] right-[-10%] w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Texture Peta Dunia (Opsional, pakai URL gambar peta transparan kalau ada) */}
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center opacity-[0.03] bg-contain pointer-events-none mix-blend-overlay invert"></div>

      <div className="container mx-auto px-5 md:px-6 max-w-screen-2xl relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">
            Client Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-amber-500">Global Partners</span>
          </h2>
          <p className="text-primary-100/70 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            See how our premium beans help roasters and distributors grow their business worldwide.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl relative group hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Kutip Besar di Belakang */}
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-amber-500/10 transition-colors duration-500 transform rotate-12" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-primary-100/90 text-sm md:text-base italic leading-relaxed mb-6 flex-grow relative z-10">
                "{story.quote}"
              </p>

              {/* Result Badge (Success Metric) */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full self-start mb-6">
                 <TrendingUp size={14} className="text-amber-500" />
                 <span className="text-amber-500 text-xs font-bold uppercase tracking-wide">{story.result}</span>
              </div>

              {/* Separator */}
              <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-amber-500/30 transition-colors"></div>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative">
                    {/* Foto Profil Bulat */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-amber-500 transition-colors">
                        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Bendera Negara */}
                    <span className="absolute -bottom-1 -right-1 text-sm bg-primary-900 rounded-full p-0.5 border border-white/10 shadow-sm">
                        {story.flag}
                    </span>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm md:text-base group-hover:text-amber-400 transition-colors">{story.name}</h4>
                    <div className="flex items-center gap-1.5 text-primary-300/60 text-xs">
                        <MapPin size={12} />
                        <span>{story.company}</span>
                    </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default SuccessStories