import React, { useState } from 'react'
import { BarChart3, TrendingUp, Target, Clock, ArrowRight, Download, CheckCircle } from 'lucide-react'

const CaseStudySection = () => {
  const [selectedCase, setSelectedCase] = useState(0)

  const caseStudies = [
    {
      title: "Mid-Scale Farm Success Story",
      subtitle: "Transformasi Peternakan Sapi Perah 800 Ekor",
      company: "PT Mitra Dairy Farm",
      location: "Jawa Barat, Indonesia",
      duration: "6 bulan implementasi",
      challenge: "Improving feed efficiency and reducing mortality rates",
      solution: "Custom nutrition program using Dedak Biasa + consultation",
      image: "/images/case-study-farm.png",
      results: [
        { metric: "Mortality Reduction", before: "8.5%", after: "3.2%", improvement: "-18%", color: "green" },
        { metric: "Feed Cost Savings", before: "$2,400/bulan", after: "$1,920/bulan", improvement: "-12%", color: "blue" },
        { metric: "Weight Gain", before: "680g/hari", after: "735g/hari", improvement: "+8%", color: "purple" },
        { metric: "Milk Production", before: "18L/hari/sapi", after: "21.5L/hari/sapi", improvement: "+19%", color: "orange" }
      ],
      timeline: [
        { phase: "Assessment", duration: "2 minggu", description: "Farm audit dan analisis nutrisi current" },
        { phase: "Custom Solution", duration: "1 minggu", description: "Design program nutrisi optimal dengan Dedak Biasa" },
        { phase: "Implementation", duration: "4 minggu", description: "Gradual transition dan training staff" },
        { phase: "Optimization", duration: "3 bulan", description: "Fine-tuning dan monitoring hasil" }
      ],
      keyFactors: [
        "Transisi bertahap dari feed lama ke Dedak Biasa",
        "Training intensif untuk farm workers",
        "Monitoring harian untuk 3 bulan pertama",
        "Adjustment program berdasarkan response ternak"
      ],
      testimonial: {
        quote: "Partnership dengan Archipelago bukan hanya soal produk, tapi transformasi cara kami mengelola farm. ROI tercapai dalam 4 bulan.",
        author: "Budi Santoso",
        position: "Farm Manager PT Mitra Dairy"
      }
    },
    {
      title: "Large-Scale Commercial Success",
      subtitle: "Optimalisasi Peternakan Ayam Broiler 15,000 Ekor",
      company: "CV Sukses Unggas Mandiri",
      location: "Lampung, Indonesia", 
      duration: "8 bulan implementasi",
      challenge: "Maximizing growth rate while maintaining cost efficiency",
      solution: "Raffele Premium with custom blend + analytics platform",
      image: "/images/case-study-farm.png",
      results: [
        { metric: "Growth Rate", before: "45g/hari", after: "52g/hari", improvement: "+15%", color: "green" },
        { metric: "Feed Conversion", before: "1.8:1", after: "1.5:1", improvement: "+20%", color: "blue" },
        { metric: "Production Cycle", before: "42 hari", after: "38 hari", improvement: "-4 hari", color: "purple" },
        { metric: "Profit Margin", before: "12%", after: "18.5%", improvement: "+6.5%", color: "orange" }
      ],
      timeline: [
        { phase: "Baseline Analysis", duration: "3 minggu", description: "Comprehensive farm performance audit" },
        { phase: "Custom Raffele Blend", duration: "2 minggu", description: "Formulation khusus untuk broiler optimization" },
        { phase: "Pilot Testing", duration: "6 minggu", description: "Testing pada 2,000 ekor sebagai pilot" },
        { phase: "Full Implementation", duration: "5 bulan", description: "Scale up ke seluruh populasi dengan monitoring" }
      ],
      keyFactors: [
        "Custom Raffele blend dengan protein 19.5%",
        "Implementation analytics platform untuk real-time monitoring",
        "Weekly consultation dengan nutrition expert",
        "Predictive analytics untuk optimasi feed schedule"
      ],
      testimonial: {
        quote: "Raffele Premium memberikan consistency yang luar biasa. Predictive analytics membantu kami planning yang lebih akurat.",
        author: "Sari Wijaya",
        position: "Operations Director CV Sukses Unggas"
      }
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentCase = caseStudies[selectedCase]

  return (
    <section id="case-study" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Deep dive ke dalam transformasi nyata yang dialami klien-klien kami. 
            Data lengkap, methodology, dan insights yang bisa diaplikasikan.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedCase === index
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-200 hover:border-primary-300 bg-white'
              }`}
            >
              <h3 className="font-semibold text-neutral-900 mb-1">{caseStudy.title}</h3>
              <p className="text-sm text-neutral-600">{caseStudy.company}</p>
              <p className="text-xs text-primary-500 font-medium">{caseStudy.location}</p>
            </button>
          ))}
        </div>

        {/* Main Case Study Content */}
        <div className="max-w-6xl mx-auto">
          {/* Case Overview */}
          <div className="bg-background-elevated rounded-lg shadow-card overflow-hidden mb-8">
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${currentCase.image}')` }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                    {currentCase.title}
                  </h3>
                  <p className="text-xl text-primary-200 mb-4">
                    {currentCase.subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {currentCase.company}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {currentCase.location}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {currentCase.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <Target className="text-red-500" size={20} />
                    Challenge
                  </h4>
                  <p className="text-neutral-600">{currentCase.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    Solution
                  </h4>
                  <p className="text-neutral-600">{currentCase.solution}</p>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="mb-8">
                <h4 className="font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary-500" size={20} />
                  Hasil Terukur
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-4">
                      <h5 className="font-medium text-neutral-900 mb-2 text-sm">
                        {result.metric}
                      </h5>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Before:</span>
                          <span className="font-medium">{result.before}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">After:</span>
                          <span className="font-medium">{result.after}</span>
                        </div>
                        <div className={`text-${result.color}-600 font-bold text-center mt-2 py-1 bg-${result.color}-50 rounded`}>
                          {result.improvement}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Timeline */}
              <div className="mb-8">
                <h4 className="font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                  <Clock className="text-primary-500" size={20} />
                  Timeline Implementasi
                </h4>
                <div className="space-y-4">
                  {currentCase.timeline.map((phase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        {index < currentCase.timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-primary-200 mx-auto mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-1">
                          <h5 className="font-semibold text-neutral-900">{phase.phase}</h5>
                          <span className="text-sm text-primary-500 font-medium">{phase.duration}</span>
                        </div>
                        <p className="text-neutral-600 text-sm">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Success Factors */}
              <div className="mb-8">
                <h4 className="font-semibold text-neutral-900 mb-4">Key Success Factors:</h4>
                <ul className="space-y-2">
                  {currentCase.keyFactors.map((factor, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-neutral-600 text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Testimonial */}
              <div className="bg-primary-50 rounded-lg p-6">
                <blockquote className="text-neutral-700 mb-4 italic">
                  "{currentCase.testimonial.quote}"
                </blockquote>
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold text-neutral-900">{currentCase.testimonial.author}</p>
                  <p className="text-primary-600 text-sm">{currentCase.testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Siap Menciptakan Success Story Anda Sendiri?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Tim ahli kami siap membantu mereplikasi kesuksesan ini di operasi peternakan Anda. 
            Mulai dengan konsultasi gratis untuk assessment mendalam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-cta-primary text-cta-text px-8 py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              Mulai Transformasi Anda
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-sm font-semibold hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Full Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudySection