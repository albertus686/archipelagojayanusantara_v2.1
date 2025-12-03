import React from 'react'
import { Shield, Users, BarChart3, Headphones, CheckCircle, ArrowRight } from 'lucide-react'

const ServicesEnhanced = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: <Shield className="text-primary-500" size={48} />,
      title: 'Quality Testing Premium',
      subtitle: 'Beyond Industry Standards',
      description: 'Our quality assurance process goes beyond industry standards. Each batch undergoes rigorous testing with complete traceability and detailed reporting for transparency you can trust.',
      features: [
        'Real-time batch tracking system',
        'Third-party verified quality control',
        'Detailed nutritional analysis reports',
        'Continuous monitoring and improvement',
        'International certification compliance'
      ],
      cta: 'Lihat Sertifikat Kualitas',
      highlight: 'ISO 9001 Certified'
    },
    {
      icon: <Users className="text-primary-500" size={48} />,
      title: 'Nutrition Consultation',
      subtitle: 'Agricultural Business Development Partnership',
      description: 'More than consultation - we become your nutrition partner. From feed optimization to business scaling, our experts provide strategic guidance for sustainable growth.',
      features: [
        'Nutrition program design and optimization',
        'Feed cost analysis and reduction strategies',
        'Production efficiency improvement plans',
        'Regulatory compliance and certification support',
        'Business scaling and market expansion guidance'
      ],
      cta: 'Jadwalkan Konsultasi',
      highlight: 'Free Initial Consultation'
    },
    {
      icon: <BarChart3 className="text-primary-500" size={48} />,
      title: 'Performance Analytics',
      subtitle: 'Data-Driven Optimization',
      description: 'Comprehensive monitoring and analysis tools to track your livestock performance, feed efficiency, and ROI optimization through our advanced analytics platform.',
      features: [
        'Real-time performance monitoring',
        'Feed conversion ratio tracking',
        'Cost-benefit analysis reporting',
        'Predictive analytics for planning',
        'Benchmark comparisons with industry standards'
      ],
      cta: 'Demo Analytics Platform',
      highlight: 'AI-Powered Insights'
    },
    {
      icon: <Headphones className="text-primary-500" size={48} />,
      title: '24/7 Expert Support',
      subtitle: 'Always Available When You Need Us',
      description: 'Round-the-clock technical support from our team of animal nutrition experts. Emergency response, troubleshooting, and ongoing guidance for peace of mind.',
      features: [
        'Emergency hotline untuk urgent issues',
        'Technical troubleshooting support',
        'Remote consultation via video call',
        'Regular check-ins and progress reviews',
        'Multi-language support team'
      ],
      cta: 'Hubungi Support',
      highlight: 'Emergency Response'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Layanan Premium Terintegrasi
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekadar supplier - kami adalah partner strategis untuk 
            kesuksesan jangka panjang operasi peternakan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background-elevated rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-xl font-bold text-neutral-900">
                        {service.title}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium text-sm">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-neutral-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-primary-500 text-white py-3 rounded-sm font-semibold hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  {service.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="font-heading text-3xl font-bold text-neutral-900 text-center mb-12">
            Proses Layanan Terintegrasi
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Comprehensive farm analysis and nutrition needs evaluation'
              },
              {
                step: '02', 
                title: 'Custom Solution Design',
                description: 'Tailored nutrition programs with cost-benefit analysis'
              },
              {
                step: '03',
                title: 'Implementation Support', 
                description: 'On-site training, monitoring, and optimization'
              },
              {
                step: '04',
                title: 'Growth Partnership',
                description: 'Continuous improvement and business scaling support'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-24 h-0.5 bg-primary-200"></div>
                  )}
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{step.title}</h4>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-500 rounded-lg p-8 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Siap Mengoptimalkan Operasi Peternakan Anda?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Tim ahli kami menunggu untuk membantu Anda mencapai efisiensi maksimal 
            dan pertumbuhan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-primary-500 px-8 py-3 rounded-sm font-semibold hover:bg-neutral-100 transition-colors duration-300"
            >
              Konsultasi Gratis
            </button>
            <button 
              onClick={() => scrollToSection('#configurator')}
              className="border-2 border-white text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-300"
            >
              Coba Product Configurator
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesEnhanced