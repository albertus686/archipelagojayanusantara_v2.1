import React, { useState } from 'react'
import { Settings, ChevronRight, Download, Calculator, Check } from 'lucide-react'

interface ConfigurationState {
  livestockType: string
  farmSize: string
  productionGoals: string
  budgetRange: string
  qualityPreference: string
}

const ProductConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [config, setConfig] = useState<ConfigurationState>({
    livestockType: '',
    farmSize: '',
    productionGoals: '',
    budgetRange: '',
    qualityPreference: ''
  })
  const [recommendation, setRecommendation] = useState<any>(null)

  const livestockOptions = [
    { value: 'poultry', label: 'Unggas (Ayam, Bebek)', icon: '🐔' },
    { value: 'cattle', label: 'Sapi (Perah/Potong)', icon: '🐄' },
    { value: 'swine', label: 'Babi', icon: '🐷' },
    { value: 'aquaculture', label: 'Akuakultur (Ikan)', icon: '🐟' }
  ]

  const farmSizeOptions = [
    { value: 'small', label: 'Kecil (50-500 ternak)', description: 'Operasi keluarga atau usaha kecil' },
    { value: 'medium', label: 'Menengah (500-2000 ternak)', description: 'Peternakan komersial menengah' },
    { value: 'large', label: 'Besar (2000+ ternak)', description: 'Operasi industri skala besar' }
  ]

  const productionGoalsOptions = [
    { value: 'growth', label: 'Pertumbuhan Optimal', description: 'Fokus pada kenaikan berat badan' },
    { value: 'production', label: 'Produktivitas Maksimal', description: 'Telur, susu, atau reproduksi' },
    { value: 'efficiency', label: 'Efisiensi Pakan', description: 'Optimalisasi konversi pakan' },
    { value: 'health', label: 'Kesehatan Ternak', description: 'Daya tahan dan kesehatan optimal' }
  ]

  const budgetRangeOptions = [
    { value: 'economy', label: 'Ekonomis', description: 'Solusi hemat biaya' },
    { value: 'standard', label: 'Standard', description: 'Kualitas seimbang dengan harga' },
    { value: 'premium', label: 'Premium', description: 'Investasi untuk hasil terbaik' }
  ]

  const qualityPreferenceOptions = [
    { value: 'basic', label: 'Kualitas Dasar', description: 'Standar industri' },
    { value: 'enhanced', label: 'Kualitas Tinggi', description: 'Di atas rata-rata industri' },
    { value: 'premium', label: 'Kualitas Premium', description: 'Terbaik di kelasnya' }
  ]

  const handleSelection = (field: keyof ConfigurationState, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const generateRecommendation = () => {
    let score = 0
    let productRecommendation = ''
    let rationale: string[] = []
    let features: string[] = []
    let estimatedROI = ''
    let costAnalysis = ''

    // Scoring algorithm
    if (config.farmSize === 'large') score += 3
    if (config.farmSize === 'medium') score += 2
    if (config.farmSize === 'small') score += 1

    if (config.budgetRange === 'premium') score += 3
    if (config.budgetRange === 'standard') score += 2
    if (config.budgetRange === 'economy') score += 1

    if (config.qualityPreference === 'premium') score += 3
    if (config.qualityPreference === 'enhanced') score += 2
    if (config.qualityPreference === 'basic') score += 1

    if (config.productionGoals === 'production') score += 2
    if (config.productionGoals === 'growth') score += 2

    // Recommendation logic
    if (score >= 7) {
      productRecommendation = 'Raffele Premium'
      rationale = [
        'Operasi skala besar membutuhkan performa maksimal',
        'Budget premium memungkinkan investasi optimal',
        'Target produktivitas tinggi sesuai dengan Raffele',
        'ROI lebih cepat dengan protein content 18-20%'
      ]
      features = [
        'Protein content 18-20% untuk performance maksimal',
        'Enhanced energy density untuk production boost',
        'Organic certification untuk pasar premium',
        'Custom nutritional blends tersedia',
        'Extended shelf life untuk efisiensi operasional'
      ]
      estimatedROI = '3-6 bulan'
      costAnalysis = 'Investment tinggi, ROI cepat dengan peningkatan produktivitas 20-35%'
    } else {
      productRecommendation = 'Dedak Biasa Standard'
      rationale = [
        'Solusi cost-effective untuk operasi efisien',
        'Kualitas konsisten untuk pertumbuhan stabil',
        'Cocok untuk skala menengah-kecil',
        'Balance optimal antara harga dan performa'
      ]
      features = [
        'Protein content 14-16% untuk nutrisi seimbang',
        'Standard processing dengan kualitas konsisten',
        'Ready-to-use formulations',
        'Cost-effective untuk bulk production',
        'ISO 9001 certified quality'
      ]
      estimatedROI = '6-12 bulan'
      costAnalysis = 'Investment moderat dengan ROI stabil dan sustainable'
    }

    setRecommendation({
      product: productRecommendation,
      rationale,
      features,
      estimatedROI,
      costAnalysis,
      livestockType: config.livestockType,
      farmSize: config.farmSize
    })
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      generateRecommendation()
      setCurrentStep(6)
    }
  }

  const resetConfigurator = () => {
    setCurrentStep(1)
    setConfig({
      livestockType: '',
      farmSize: '',
      productionGoals: '',
      budgetRange: '',
      qualityPreference: ''
    })
    setRecommendation(null)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Pilih Jenis Ternak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {livestockOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection('livestockType', option.value)}
                  className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    config.livestockType === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Ukuran Peternakan</h3>
            <div className="space-y-4">
              {farmSizeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection('farmSize', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    config.farmSize === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="font-medium mb-1">{option.label}</div>
                  <div className="text-sm text-neutral-600">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Tujuan Produksi</h3>
            <div className="space-y-4">
              {productionGoalsOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection('productionGoals', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    config.productionGoals === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="font-medium mb-1">{option.label}</div>
                  <div className="text-sm text-neutral-600">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Range Budget</h3>
            <div className="space-y-4">
              {budgetRangeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection('budgetRange', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    config.budgetRange === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="font-medium mb-1">{option.label}</div>
                  <div className="text-sm text-neutral-600">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Preferensi Kualitas</h3>
            <div className="space-y-4">
              {qualityPreferenceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelection('qualityPreference', option.value)}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                    config.qualityPreference === option.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="font-medium mb-1">{option.label}</div>
                  <div className="text-sm text-neutral-600">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 6:
        return recommendation && (
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                <Check size={20} />
                Rekomendasi Selesai
              </div>
              <h3 className="text-2xl font-bold text-primary-500 mb-2">
                {recommendation.product}
              </h3>
              <p className="text-neutral-600">
                Solusi optimal untuk {livestockOptions.find(o => o.value === recommendation.livestockType)?.label}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Alasan Rekomendasi:</h4>
                <ul className="space-y-2">
                  {recommendation.rationale.map((reason: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={14} />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Fitur Utama:</h4>
                <ul className="space-y-2">
                  {recommendation.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-primary-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-primary-800 mb-1">Estimasi ROI</h5>
                  <p className="text-primary-700">{recommendation.estimatedROI}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-800 mb-1">Analisis Biaya</h5>
                  <p className="text-primary-700 text-sm">{recommendation.costAnalysis}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="flex-1 bg-cta-primary text-cta-text py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Analisis Lengkap
              </button>
              <button 
                onClick={resetConfigurator}
                className="flex-1 border-2 border-primary-500 text-primary-500 py-3 rounded-sm font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                Konfigurasi Ulang
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="configurator" className="py-16 md:py-24 bg-background-page">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Product Configurator
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Tool interaktif untuk menemukan solusi nutrisi yang sempurna sesuai 
            kebutuhan spesifik operasi peternakan Anda.
          </p>
        </div>

        {/* Configurator Visual */}
        <div className="mb-12">
          <img 
            src="/images/product-configurator.png" 
            alt="Product Configurator Tool"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-card"
          />
        </div>

        {/* Progress Bar */}
        {currentStep <= 5 && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Langkah {currentStep} dari 5</span>
              <span className="text-sm text-neutral-600">{(currentStep / 5 * 100).toFixed(0)}%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Configurator Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-background-elevated rounded-lg shadow-card p-8">
            {renderStep()}
            
            {/* Navigation Buttons */}
            {currentStep <= 5 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-6 py-2 border border-neutral-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50 transition-colors duration-200"
                >
                  Kembali
                </button>
                <button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !config.livestockType) ||
                    (currentStep === 2 && !config.farmSize) ||
                    (currentStep === 3 && !config.productionGoals) ||
                    (currentStep === 4 && !config.budgetRange) ||
                    (currentStep === 5 && !config.qualityPreference)
                  }
                  className="px-6 py-2 bg-primary-500 text-white rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors duration-200 flex items-center gap-2"
                >
                  {currentStep === 5 ? 'Dapatkan Rekomendasi' : 'Lanjut'}
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductConfigurator