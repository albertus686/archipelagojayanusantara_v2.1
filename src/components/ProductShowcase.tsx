import React from 'react'
import { Shield, Award, CheckCircle, Star, Coffee, Mountain, Droplets, Sun } from 'lucide-react'

const ProductShowcase = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // PERUBAHAN: Padding dikurangi jadi py-10 md:py-12
    <section id="products" className="py-10 md:py-12 bg-primary-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full mb-3">
            <Coffee size={14} />
            <span className="text-xs font-bold tracking-wide uppercase">Signature Product</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Sumatra Mandeling Grade 1
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Permata dari dataran tinggi Sumatera dengan body tebal dan acidity rendah.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100 flex flex-col lg:flex-row">
            
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-neutral-800">
              <img 
                src="/images/mandeling-beans.png" 
                alt="Sumatra Mandeling Green Beans"
                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  PREMIUM
                </span>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">
                The Jewel of Indonesia
              </h3>
              <p className="text-primary-600 font-medium mb-4 text-sm">Semi-Washed (Giling Basah) Process</p>
              
              <p className="text-neutral-600 mb-6 leading-relaxed text-sm">
                Kopi Mandeling kami diproses secara tradisional "Giling Basah" yang memberikan warna unik hijau kebiruan. 
                Dikenal dunia karena teksturnya yang syrupy, aroma earthy yang kuat, serta nuansa coklat dan rempah yang kompleks.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 p-3 rounded-lg border border-primary-100">
                  <div className="flex items-center gap-2 mb-1 text-primary-700">
                    <Mountain size={16} />
                    <span className="text-xs font-bold">Altitude</span>
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">1,200 - 1,500 masl</p>
                </div>
                <div className="bg-primary-50 p-3 rounded-lg border border-primary-100">
                  <div className="flex items-center gap-2 mb-1 text-primary-700">
                    <Droplets size={16} />
                    <span className="text-xs font-bold">Moisture</span>
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">12 - 13% Max</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-all text-sm"
                >
                  Minta Penawaran
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="flex-1 border-2 border-primary-200 text-primary-700 py-3 rounded-lg font-bold hover:bg-primary-50 text-sm"
                >
                  Download Brosur
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase