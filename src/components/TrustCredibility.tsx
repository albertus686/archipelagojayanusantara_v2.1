import React, { useState } from 'react'
import { Shield, Award, Globe, Users, TrendingUp, CheckCircle, MapPin } from 'lucide-react'

const TrustCredibility = () => {
  const [selectedRegion, setSelectedRegion] = useState('all')

  const certifications = [
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      status: 'Certified',
      year: '2020-2023'
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: 'FSC Certified',
      description: 'Forest Stewardship Council',
      status: 'Certified',
      year: '2021-2024'
    },
    {
      icon: <CheckCircle className="text-purple-600" size={32} />,
      title: 'Halal Certified',
      description: 'MUI Halal Certification',
      status: 'Certified',
      year: '2019-2024'
    },
    {
      icon: <Globe className="text-orange-600" size={32} />,
      title: 'Export Ready',
      description: 'Indonesian Export License',
      status: 'Active',
      year: '2018-Present'
    }
  ]

  const exportData = {
    regions: [
      {
        name: 'Southeast Asia',
        percentage: 40,
        countries: ['Malaysia', 'Thailand', 'Philippines', 'Vietnam', 'Myanmar', 'Singapore', 'Cambodia'],
        volume: '4,000+ tons/year',
        growth: '+25% YoY'
      },
      {
        name: 'Asia-Pacific',
        percentage: 35,
        countries: ['Australia', 'New Zealand', 'South Korea', 'Taiwan', 'Hong Kong'],
        volume: '3,500+ tons/year',
        growth: '+18% YoY'
      },
      {
        name: 'Middle East',
        percentage: 25,
        countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
        volume: '2,500+ tons/year',
        growth: '+30% YoY'
      }
    ],
    totalCountries: 25,
    totalVolume: '10,000+ tons annually',
    marketPresence: '15+ years'
  }

  const qualityMetrics = [
    { label: 'Quality Score', value: '99.2%', description: 'Consistent delivery standard' },
    { label: 'Client Retention', value: '94%', description: 'Long-term partnerships' },
    { label: 'Zero Defects', value: '8 months', description: 'Consecutive achievement 2024' },
    { label: 'Lead Time', value: '3-5 days', description: 'Domestic orders' }
  ]

  const awards = [
    {
      title: 'Best Export Performance',
      organization: 'Indonesian Chamber of Commerce',
      year: '2023',
      category: 'Animal Nutrition'
    },
    {
      title: 'Quality Excellence Award',
      organization: 'Ministry of Agriculture',
      year: '2022',
      category: 'Feed Manufacturing'
    },
    {
      title: 'Sustainable Business Award',
      organization: 'ASEAN Business Council',
      year: '2023',
      category: 'Environmental Stewardship'
    }
  ]

  return (
    <section id="trust" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Trust & Credibility
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            15+ tahun membangun kepercayaan global melalui kualitas konsisten, 
            sertifikasi internasional, dan performa export yang terbukti.
          </p>
        </div>

        {/* Export Network Map */}
        <div className="mb-16">
          <div className="bg-background-elevated rounded-lg shadow-card overflow-hidden">
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-6 text-center">
                Global Export Network
              </h3>
              
              {/* Map Visual */}
              <div className="mb-8">
                <img 
                  src="/images/export-network.png" 
                  alt="Global Export Network Map"
                  className="w-full max-w-4xl mx-auto rounded-lg"
                />
              </div>

              {/* Export Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {exportData.totalCountries}+
                  </div>
                  <div className="text-neutral-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {exportData.totalVolume.split(' ')[0]}
                  </div>
                  <div className="text-neutral-600">Annual Export Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    {exportData.marketPresence.split(' ')[0]}
                  </div>
                  <div className="text-neutral-600">Years Market Presence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    3
                  </div>
                  <div className="text-neutral-600">Major Regions</div>
                </div>
              </div>

              {/* Regional Breakdown */}
              <div className="grid md:grid-cols-3 gap-6">
                {exportData.regions.map((region, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-neutral-900">{region.name}</h4>
                      <span className="text-2xl font-bold text-primary-500">{region.percentage}%</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-600">Volume:</span>
                        <span className="font-medium">{region.volume}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-neutral-600">Growth:</span>
                        <span className="font-medium text-green-600">{region.growth}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 mb-2">Key Markets:</div>
                      <div className="flex flex-wrap gap-1">
                        {region.countries.slice(0, 4).map((country, countryIndex) => (
                          <span key={countryIndex} className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                            {country}
                          </span>
                        ))}
                        {region.countries.length > 4 && (
                          <span className="bg-neutral-200 text-neutral-600 text-xs px-2 py-1 rounded">
                            +{region.countries.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-background-elevated rounded-lg shadow-card p-6 text-center hover:shadow-card-hover transition-all duration-300">
              <div className="flex justify-center mb-4">
                {cert.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{cert.title}</h3>
              <p className="text-neutral-600 text-sm mb-3">{cert.description}</p>
              <div className="flex justify-center items-center gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  {cert.status}
                </span>
              </div>
              <p className="text-neutral-500 text-xs mt-2">{cert.year}</p>
            </div>
          ))}
        </div>

        {/* Quality Metrics */}
        <div className="bg-background-elevated rounded-lg shadow-card p-8 mb-16">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-8 text-center">
            Quality Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-neutral-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-neutral-600 text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-primary-500 rounded-lg p-8 text-white">
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">
            Awards & Industry Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="text-yellow-400" size={32} />
                </div>
                <h4 className="font-semibold mb-2">{award.title}</h4>
                <p className="text-primary-200 text-sm mb-2">{award.organization}</p>
                <div className="flex justify-center items-center gap-3">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {award.year}
                  </span>
                  <span className="text-primary-300 text-xs">
                    {award.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Portfolio Summary */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
            Diverse Client Portfolio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="text-primary-500 mx-auto mb-2" size={32} />
              <div className="text-xl font-bold text-neutral-900">500+</div>
              <div className="text-neutral-600 text-sm">Active Clients</div>
            </div>
            <div className="text-center">
              <Globe className="text-primary-500 mx-auto mb-2" size={32} />
              <div className="text-xl font-bold text-neutral-900">25+</div>
              <div className="text-neutral-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <TrendingUp className="text-primary-500 mx-auto mb-2" size={32} />
              <div className="text-xl font-bold text-neutral-900">94%</div>
              <div className="text-neutral-600 text-sm">Retention Rate</div>
            </div>
            <div className="text-center">
              <MapPin className="text-primary-500 mx-auto mb-2" size={32} />
              <div className="text-xl font-bold text-neutral-900">3</div>
              <div className="text-neutral-600 text-sm">Regional Hubs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustCredibility