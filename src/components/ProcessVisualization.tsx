import React from 'react'
import { Search, Lightbulb, Cog, Handshake, ArrowRight, CheckCircle } from 'lucide-react'

const ProcessVisualization = () => {
  const processSteps = [
    {
      icon: <Search className="text-primary-500" size={48} />,
      title: 'Discovery & Assessment',
      subtitle: 'Comprehensive Analysis',
      description: 'Comprehensive farm analysis and nutrition needs evaluation',
      details: [
        'Site visit dan farm audit mendalam',
        'Analisis current feed program dan performance',
        'Assessment kesehatan ternak dan produktivitas',
        'Evaluasi infrastruktur dan operational workflow',
        'Identifikasi opportunity areas untuk improvement'
      ],
      duration: '1-2 minggu',
      deliverables: 'Comprehensive Assessment Report'
    },
    {
      icon: <Lightbulb className="text-primary-500" size={48} />,
      title: 'Custom Solution Design',
      subtitle: 'Tailored Strategy',
      description: 'Tailored nutrition programs with cost-benefit analysis',
      details: [
        'Design custom nutrition program sesuai needs',
        'Formulasi product mix optimal (Raffele/Dedak Biasa)',
        'Cost-benefit analysis dan ROI projection',
        'Implementation timeline dan resource planning',
        'Risk assessment dan mitigation strategies'
      ],
      duration: '1 minggu',
      deliverables: 'Custom Nutrition Plan & Cost Analysis'
    },
    {
      icon: <Cog className="text-primary-500" size={48} />,
      title: 'Implementation Support',
      subtitle: 'Hands-on Execution',
      description: 'On-site training, monitoring, and optimization',
      details: [
        'Gradual transition dari feed lama ke program baru',
        'Training comprehensive untuk farm staff',
        'Daily monitoring untuk 2 minggu pertama',
        'Weekly consultation dan adjustment program',
        'Real-time troubleshooting dan support'
      ],
      duration: '4-6 minggu',
      deliverables: 'Implementation Report & Staff Certification'
    },
    {
      icon: <Handshake className="text-primary-500" size={48} />,
      title: 'Growth Partnership',
      subtitle: 'Long-term Success',
      description: 'Continuous improvement and business scaling support',
      details: [
        'Monthly performance review dan optimization',
        'Quarterly business planning dan scaling strategy',
        'Access ke latest research dan innovation',
        'Network connection dengan fellow successful farms',
        'Priority support untuk expansion projects'
      ],
      duration: 'Ongoing',
      deliverables: 'Quarterly Business Review & Growth Plans'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="process" className="py-16 md:py-24 bg-background-page">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Proses Partnership Terintegrasi
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Methodology yang telah terbukti untuk memastikan implementasi yang sukses 
            dan sustainable growth untuk operasi peternakan Anda.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block w-0.5 h-24 bg-primary-200 mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="lg:col-span-10">
                  <div className="bg-background-elevated rounded-lg shadow-card p-8 hover:shadow-card-hover transition-all duration-300">
                    {/* Step Header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-primary-600 font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0">
                          <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                            {step.duration}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {step.deliverables}
                          </span>
                        </div>
                      </div>
                      <p className="text-neutral-600 text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-4">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                              <span className="text-neutral-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-neutral-50 rounded-lg p-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">Expected Outcomes:</h4>
                        <div className="space-y-3">
                          {index === 0 && (
                            <>
                              <div className="text-sm text-neutral-600">✓ Clear understanding of current state</div>
                              <div className="text-sm text-neutral-600">✓ Identified improvement opportunities</div>
                              <div className="text-sm text-neutral-600">✓ Baseline metrics established</div>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <div className="text-sm text-neutral-600">✓ Customized nutrition strategy</div>
                              <div className="text-sm text-neutral-600">✓ ROI projections & budget planning</div>
                              <div className="text-sm text-neutral-600">✓ Implementation roadmap</div>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <div className="text-sm text-neutral-600">✓ Smooth transition to new program</div>
                              <div className="text-sm text-neutral-600">✓ Staff competency developed</div>
                              <div className="text-sm text-neutral-600">✓ Initial performance improvements</div>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <div className="text-sm text-neutral-600">✓ Sustained performance gains</div>
                              <div className="text-sm text-neutral-600">✓ Continuous optimization</div>
                              <div className="text-sm text-neutral-600">✓ Business expansion support</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="mt-16 bg-primary-500 rounded-lg p-8 text-white text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            End-to-End Partnership Journey
          </h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Dari assessment awal hingga long-term growth partnership, kami berkomitmen 
            untuk kesuksesan jangka panjang operasi peternakan Anda.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">6-8 minggu</div>
              <div className="text-primary-200 text-sm">Initial Implementation</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">3-6 bulan</div>
              <div className="text-primary-200 text-sm">ROI Achievement</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Ongoing</div>
              <div className="text-primary-200 text-sm">Partnership Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            Siap memulai journey transformasi peternakan Anda?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-cta-primary text-cta-text px-8 py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Mulai Assessment Gratis
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('#configurator')}
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-sm font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              Coba Product Configurator
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessVisualization