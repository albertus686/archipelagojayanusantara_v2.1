import React, { useState } from 'react'
import { Check, X, Star, TrendingUp, Target, DollarSign } from 'lucide-react'

const ProductComparison = () => {
  const [selectedProduct, setSelectedProduct] = useState<'raffele' | 'dedak' | null>(null)

  const comparisonData = [
    {
      category: 'Nutrisi',
      items: [
        { feature: 'Protein Content', raffele: '18-20%', dedak: '14-16%', winner: 'raffele' },
        { feature: 'Energy Density', raffele: 'High', dedak: 'Standard', winner: 'raffele' },
        { feature: 'Mineral Content', raffele: 'Enhanced', dedak: 'Balanced', winner: 'raffele' },
        { feature: 'Digestibility', raffele: '95%+', dedak: '88-92%', winner: 'raffele' }
      ]
    },
    {
      category: 'Kualitas',
      items: [
        { feature: 'Processing Method', raffele: 'Special Processing', dedak: 'Standard Processing', winner: 'raffele' },
        { feature: 'Shelf Life', raffele: 'Extended (8-12 months)', dedak: 'Standard (6-8 months)', winner: 'raffele' },
        { feature: 'Quality Control', raffele: 'Premium QC', dedak: 'Standard QC', winner: 'equal' },
        { feature: 'Consistency', raffele: '99.5%', dedak: '97%', winner: 'raffele' }
      ]
    },
    {
      category: 'Sertifikasi',
      items: [
        { feature: 'ISO 9001', raffele: true, dedak: true, winner: 'equal' },
        { feature: 'Organic Certified', raffele: true, dedak: false, winner: 'raffele' },
        { feature: 'Halal Certified', raffele: true, dedak: true, winner: 'equal' },
        { feature: 'Export Ready', raffele: true, dedak: true, winner: 'equal' }
      ]
    },
    {
      category: 'Target Market',
      items: [
        { feature: 'Farm Size', raffele: 'Large-scale Commercial', dedak: 'Medium-Small Operations', winner: 'different' },
        { feature: 'Investment Level', raffele: 'Premium Investment', dedak: 'Cost-Effective', winner: 'different' },
        { feature: 'Performance Goals', raffele: 'Maximum Performance', dedak: 'Reliable Growth', winner: 'different' },
        { feature: 'ROI Timeline', raffele: '3-6 months', dedak: '6-12 months', winner: 'raffele' }
      ]
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getWinnerIcon = (winner: string) => {
    if (winner === 'raffele') return <Star className="text-amber-500" size={16} />
    if (winner === 'dedak') return <TrendingUp className="text-blue-500" size={16} />
    if (winner === 'equal') return <Check className="text-green-500" size={16} />
    return <Target className="text-purple-500" size={16} />
  }

  return (
    <section id="comparison" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Perbandingan Produk
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Analisis mendalam untuk membantu Anda memilih solusi nutrisi yang tepat 
            sesuai kebutuhan dan budget operasi peternakan Anda.
          </p>
        </div>

        {/* Comparison Visual */}
        <div className="mb-12">
          <img 
            src="/images/product-comparison.png" 
            alt="Perbandingan Visual Raffele vs Dedak Biasa"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-card"
          />
        </div>

        {/* Product Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1"></div>
          
          {/* Raffele Header */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border-2 border-amber-200">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star className="text-amber-500" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                Raffele Premium
              </h3>
              <p className="text-neutral-600 text-sm mb-4">Masterpiece Premium</p>
              <div className="flex justify-center gap-2">
                <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs">PREMIUM</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">ORGANIC</span>
              </div>
            </div>
          </div>

          {/* Dedak Biasa Header */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-blue-500" size={32} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                Dedak Biasa
              </h3>
              <p className="text-neutral-600 text-sm mb-4">Reliable Quality</p>
              <div className="flex justify-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">QUALITY</span>
                <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">COST-EFFECTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-background-elevated rounded-lg shadow-card overflow-hidden">
          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
                <h4 className="font-semibold text-neutral-900 text-lg">{category.category}</h4>
              </div>
              
              {/* Category Items */}
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-1 lg:grid-cols-3 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
                  {/* Feature Name */}
                  <div className="px-6 py-4 font-medium text-neutral-800 flex items-center gap-2">
                    {getWinnerIcon(item.winner)}
                    {item.feature}
                  </div>
                  
                  {/* Raffele Value */}
                  <div className="px-6 py-4 text-neutral-700">
                    {typeof item.raffele === 'boolean' ? (
                      item.raffele ? <Check className="text-green-600" size={20} /> : <X className="text-red-500" size={20} />
                    ) : (
                      <span className={item.winner === 'raffele' ? 'font-semibold text-amber-600' : ''}>{item.raffele}</span>
                    )}
                  </div>
                  
                  {/* Dedak Value */}
                  <div className="px-6 py-4 text-neutral-700">
                    {typeof item.dedak === 'boolean' ? (
                      item.dedak ? <Check className="text-green-600" size={20} /> : <X className="text-red-500" size={20} />
                    ) : (
                      <span className={item.winner === 'dedak' ? 'font-semibold text-blue-600' : ''}>{item.dedak}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Decision Helper */}
        <div className="mt-16 bg-background-elevated rounded-lg p-8 shadow-card">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-6 text-center">
            Tool Pemilihan Cepat
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Raffele Recommendation */}
            <div className="border-2 border-amber-200 rounded-lg p-6 bg-amber-50">
              <h4 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <Star size={20} />
                Pilih Raffele Jika:
              </h4>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Operasi skala besar (1000+ ternak)</li>
                <li>• Target performance maksimal</li>
                <li>• Budget premium tersedia</li>
                <li>• Sertifikasi organic diperlukan</li>
                <li>• Export ke pasar premium</li>
              </ul>
              <button 
                onClick={() => scrollToSection('#configurator')}
                className="w-full mt-4 bg-amber-500 text-white py-2 rounded-sm font-medium hover:bg-amber-600 transition-colors duration-300"
              >
                Konfigurasi Raffele
              </button>
            </div>

            {/* Dedak Biasa Recommendation */}
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <DollarSign size={20} />
                Pilih Dedak Biasa Jika:
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Operasi skala menengah-kecil</li>
                <li>• Efisiensi biaya prioritas</li>
                <li>• Kualitas konsisten dibutuhkan</li>
                <li>• Operasi standar sehari-hari</li>
                <li>• First-time buyer</li>
              </ul>
              <button 
                onClick={() => scrollToSection('#configurator')}
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-sm font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Konfigurasi Dedak Biasa
              </button>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Masih bingung memilih? Tim ahli kami siap membantu!
          </p>
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-cta-primary text-cta-text px-8 py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300"
          >
            Konsultasi dengan Ahli
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductComparison