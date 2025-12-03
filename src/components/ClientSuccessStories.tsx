import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Quote, CheckCircle } from 'lucide-react'

const ClientSuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [autoPlay, testimonials.length])

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const goToTestimonial = (index: number) => setCurrentTestimonial(index)

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Client Success Stories
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Kepercayaan dari Roaster dan Importir Global adalah bukti komitmen kualitas kami.
          </p>
        </div>

        {/* CONTAINER UTAMA (Relative agar tombol bisa ditaruh di luar) */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* TOMBOL KIRI (DI LUAR KOTAK) */}
          <button 
            onClick={prevTestimonial} 
            className="hidden md:flex absolute top-1/2 -left-16 transform -translate-y-1/2 z-20 bg-white text-primary-900 border border-primary-100 p-3 rounded-full shadow-lg hover:bg-amber-600 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* KOTAK TESTIMONI */}
          <div 
            className="relative rounded-2xl shadow-2xl overflow-hidden bg-cover bg-center min-h-[400px] flex items-center transition-all duration-500 mx-auto"
            style={{ backgroundImage: `linear-gradient(rgba(42, 29, 17, 0.9), rgba(42, 29, 17, 0.8)), url('${testimonials[currentTestimonial].image}')` }}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="relative z-10 w-full p-8 md:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                
                {/* Kolom Kiri: Quote & Info */}
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-current" size={18} />
                    ))}
                  </div>
                  
                  <Quote className="text-primary-300 mb-4 opacity-40" size={48} />
                  
                  <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 font-heading text-primary-50">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="font-bold text-lg text-white">{testimonials[currentTestimonial].author}</p>
                    <p className="text-amber-200/90 text-sm">{testimonials[currentTestimonial].position}</p>
                    <p className="text-amber-200/90 text-sm font-medium">{testimonials[currentTestimonial].company}, {testimonials[currentTestimonial].location}</p>
                  </div>
                </div>

                {/* Kolom Kanan: Key Performance (Kotak Kaca) */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-inner">
                  <h4 className="font-bold text-sm mb-4 text-center border-b border-white/10 pb-3 text-amber-100 tracking-wider uppercase">Key Performance</h4>
                  <div className="space-y-3">
                    {testimonials[currentTestimonial].results.map((result, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                        <div className="text-amber-400 bg-white/10 p-2 rounded-md">
                          {result.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] uppercase text-primary-200 font-bold tracking-wide">{result.label}</p>
                          <p className="text-lg font-bold text-white">{result.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* TOMBOL KANAN (DI LUAR KOTAK) */}
          <button 
            onClick={nextTestimonial} 
            className="hidden md:flex absolute top-1/2 -right-16 transform -translate-y-1/2 z-20 bg-white text-primary-900 border border-primary-100 p-3 rounded-full shadow-lg hover:bg-amber-600 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigasi Dots (Untuk Mobile) */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-amber-600 w-6' : 'bg-primary-200 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ClientSuccessStories