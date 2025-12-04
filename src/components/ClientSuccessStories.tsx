import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Quote, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ClientSuccessStories = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0) // 1 = Kanan, -1 = Kiri
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      quote: "The Mandeling beans from Archipelago are the cleanest G1 we've sourced. Our customer feedback on the earthy notes has been phenomenal.",
      author: "James Miller",
      position: "Head Roaster",
      company: "Seattle Brew Co.",
      location: "USA",
      results: [
        { label: 'Defect Rate', value: '< 1%', icon: <Star size={18} /> },
        { label: 'Moisture Stability', value: 'Excellent', icon: <CheckCircle size={18} /> },
        { label: 'Shipping Time', value: 'On Schedule', icon: <TrendingUp size={18} /> }
      ],
      image: '/images/hero-bg.png', 
      product: 'Mandeling G1',
      rating: 5
    },
    {
      quote: "Sangat mudah bekerja sama dengan tim AJN. Dokumen ekspor lengkap dan kualitas biji kopi sangat konsisten di setiap kontainer.",
      author: "Hanseung Park",
      position: "Import Manager",
      company: "K-Beans Trading",
      location: "South Korea", 
      results: [
        { label: 'Repeat Orders', value: '12 Containers', icon: <TrendingUp size={18} /> },
        { label: 'Quality Consistency', value: '99.5%', icon: <Star size={18} /> },
        { label: 'Communication', value: '24/7 Support', icon: <Users size={18} /> }
      ],
      image: '/images/hero-bg.png',
      product: 'Gayo Specialty',
      rating: 5
    }
  ]

  // SETTINGAN ANIMASI TUMPUK (SLIDER)
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%', // Masuk dari luar layar
      opacity: 0,
      scale: 0.9,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 30 } // Efek pegas halus
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%', // Keluar ke arah berlawanan
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      transition: { duration: 0.6 }
    })
  }

  // Auto Play
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrent((prev) => (prev + 1) % testimonials.length)
      }, 8000) // Sedikit diperlama biar nyaman baca
      return () => clearInterval(interval)
    }
  }, [autoPlay, testimonials.length])

  // Navigasi
  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  const goToIndex = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-primary-900 text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER dengan ANIMASI MASUK (Scroll Reveal) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Client Success Stories
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Kepercayaan dari Roaster dan Importir Global adalah bukti komitmen kualitas kami.
          </p>
        </motion.div>

        {/* CONTAINER UTAMA (Fit Page) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-screen-xl mx-auto relative px-12 md:px-20"
        >
          
          {/* TOMBOL KIRI (Luar) */}
          <button 
            onClick={() => paginate(-1)} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 text-white border border-white/20 p-3 rounded-full hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 hidden md:flex hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft size={28} />
          </button>

          {/* AREA KARTU (Fixed Height biar stabil saat animasi) */}
          <div 
            className="relative h-[500px] w-full"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* ANIMATE PRESENCE: Kunci animasi tumpuk */}
            <AnimatePresence initial={false} custom={direction}>
              
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black group"
              >
                {/* Background Image (Zoom saat Hover) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${testimonials[current].image}')` }}
                ></div>
                
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 transition-opacity duration-500"></div>

                {/* Konten Dalam Kartu */}
                <div className="relative z-10 w-full h-full p-8 md:p-14 flex items-center">
                  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    
                    {/* Kiri: Teks */}
                    <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="text-amber-400 fill-current" size={20} />
                        ))}
                      </div>
                      
                      <Quote className="text-amber-600 mb-6 opacity-80" size={56} />
                      
                      <blockquote className="text-2xl md:text-3xl font-heading font-medium leading-snug mb-8 text-primary-50">
                        "{testimonials[current].quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white/20">
                          {testimonials[current].author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-lg text-white">{testimonials[current].author}</p>
                          <p className="text-amber-400 text-sm">{testimonials[current].position}, {testimonials[current].company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Kanan: Metrics (Efek Glass + Hover Lift) */}
                    <div className="hidden lg:block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-inner transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
                      <h4 className="font-bold text-sm mb-6 text-center text-amber-200 tracking-widest uppercase border-b border-white/10 pb-4">
                        Performance Metrics
                      </h4>
                      <div className="space-y-4">
                        {testimonials[current].results.map((result, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 bg-black/30 rounded-xl border border-white/5 hover:bg-amber-900/40 transition-colors">
                            <div className="text-amber-400 bg-amber-900/30 p-2 rounded-lg">
                              {result.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-xs uppercase text-primary-300 font-semibold tracking-wide mb-1">{result.label}</p>
                              <p className="text-xl font-bold text-white">{result.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>

            </AnimatePresence>
          </div>

          {/* TOMBOL KANAN (Luar) */}
          <button 
            onClick={() => paginate(1)} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 text-white border border-white/20 p-3 rounded-full hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 hidden md:flex hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indikator Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-amber-500 w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default ClientSuccessStories