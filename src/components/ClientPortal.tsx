import React, { useState } from 'react'
import { Lock, User, BarChart3, FileText, Calendar, Settings, Shield, Download, Bell, TrendingUp } from 'lucide-react'

const ClientPortal = () => {
  const [selectedTab, setSelectedTab] = useState('overview')

  const portalFeatures = [
    {
      icon: <BarChart3 className="text-primary-500" size={32} />,
      title: 'Real-time Performance Dashboard',
      description: 'Monitor livestock performance metrics dan nutrition program effectiveness',
      benefits: ['Live feed conversion tracking', 'Growth rate monitoring', 'Health indicators dashboard', 'ROI analysis tools']
    },
    {
      icon: <FileText className="text-primary-500" size={32} />,
      title: 'Order & Batch Tracking',
      description: 'Complete order history dan detailed batch quality reports',
      benefits: ['Order status real-time', 'Delivery tracking', 'Quality certificates', 'Historical data access']
    },
    {
      icon: <Calendar className="text-primary-500" size={32} />,
      title: 'Expert Consultation Scheduling',
      description: 'Direct access untuk booking consultation session dengan nutrition experts',
      benefits: ['Online appointment booking', 'Video consultation', 'Expert recommendations', 'Follow-up scheduling']
    },
    {
      icon: <Download className="text-primary-500" size={32} />,
      title: 'Resource Library',
      description: 'Educational materials, best practices, dan industry insights',
      benefits: ['Technical guides', 'Case studies', 'Research papers', 'Training materials']
    }
  ]

  const portalTabs = [
    { id: 'overview', label: 'Portal Overview', icon: <BarChart3 size={20} /> },
    { id: 'features', label: 'Key Features', icon: <Settings size={20} /> },
    { id: 'security', label: 'Security & Access', icon: <Shield size={20} /> },
    { id: 'demo', label: 'Request Demo', icon: <User size={20} /> }
  ]

  const securityFeatures = [
    'Role-based access control untuk multi-user accounts',
    'Two-factor authentication untuk enhanced security',
    'Encrypted data transmission dan storage',
    'Regular security audits dan compliance monitoring',
    'Automatic logout untuk idle sessions',
    'Audit trail untuk semua user activities'
  ]

  const demoFeatures = [
    { feature: 'Dashboard Navigation', description: 'Live tour of main dashboard dan key metrics' },
    { feature: 'Performance Analytics', description: 'Real data examples dari successful client implementations' },
    { feature: 'Order Management', description: 'Complete order lifecycle dari placement hingga delivery' },
    { feature: 'Expert Consultation', description: 'Video call demo dengan nutrition specialist' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Portal Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-neutral-600 text-sm">24/7 access ke business insights dan performance data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Bell className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-neutral-600 text-sm">Automated alerts untuk order status dan quality updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-neutral-600 text-sm">Direct scheduling untuk expert consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-neutral-600 text-sm">Comprehensive reporting dan historical analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-semibold text-primary-800 mb-3">Getting Started</h4>
              <ol className="space-y-2 text-sm text-primary-700">
                <li className="flex gap-2">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                  Request portal access from your account manager
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                  Complete security verification process
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                  Attend personalized portal training session
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">4</span>
                  Start accessing insights dan scheduling consultations
                </li>
              </ol>
            </div>
          </div>
        )

      case 'features':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {portalFeatures.map((feature, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{feature.title}</h4>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-neutral-600 text-xs flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      case 'security':
        return (
          <div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">Security Features</h4>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-neutral-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3">Compliance Standards</h4>
                <div className="space-y-3 text-sm text-green-700">
                  <div className="flex justify-between">
                    <span>Data Protection:</span>
                    <span className="font-medium">GDPR Compliant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Standard:</span>
                    <span className="font-medium">ISO 27001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime Guarantee:</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Backup:</span>
                    <span className="font-medium">Daily Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'demo':
        return (
          <div>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">Demo Session Includes</h4>
                <div className="space-y-4">
                  {demoFeatures.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h5 className="font-medium text-neutral-900">{item.feature}</h5>
                      <p className="text-neutral-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary-800 mb-4">Schedule Your Demo</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Company Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-primary-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Contact Person</label>
                    <input type="text" className="w-full px-3 py-2 border border-primary-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-primary-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Preferred Demo Time</label>
                    <select className="w-full px-3 py-2 border border-primary-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Morning (09:00 - 12:00)</option>
                      <option>Afternoon (13:00 - 17:00)</option>
                      <option>Evening (18:00 - 20:00)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary-500 text-white py-2 rounded-sm font-medium hover:bg-primary-600 transition-colors duration-200">
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="portal" className="py-16 md:py-24 bg-background-page">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Client Portal Concept
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated dashboard untuk existing clients dengan akses ke real-time data, 
            expert consultations, dan comprehensive business insights.
          </p>
        </div>

        {/* Portal Preview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-background-elevated rounded-lg shadow-card overflow-hidden">
            {/* Mock Login Interface */}
            <div className="bg-primary-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lock className="text-primary-200" size={24} />
                  <div>
                    <h3 className="font-semibold">Archipelago Client Portal</h3>
                    <p className="text-primary-200 text-sm">Secure access untuk existing clients</p>
                  </div>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-sm">
                  <span className="text-sm">Available for Active Clients</span>
                </div>
              </div>
            </div>

            {/* Portal Tabs */}
            <div className="border-b border-neutral-200">
              <div className="flex overflow-x-auto">
                {portalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors duration-200 ${
                      selectedTab === tab.id
                        ? 'border-primary-500 text-primary-600 bg-primary-50'
                        : 'border-transparent text-neutral-600 hover:text-neutral-800'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Access Requirements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <User className="text-blue-600 mx-auto mb-3" size={32} />
            <h4 className="font-semibold text-blue-800 mb-2">Existing Clients Only</h4>
            <p className="text-blue-700 text-sm">Portal access terbatas untuk active clients dengan ongoing service agreements</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Shield className="text-green-600 mx-auto mb-3" size={32} />
            <h4 className="font-semibold text-green-800 mb-2">Secure Authentication</h4>
            <p className="text-green-700 text-sm">Multi-factor authentication dan role-based access untuk data security</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Settings className="text-purple-600 mx-auto mb-3" size={32} />
            <h4 className="font-semibold text-purple-800 mb-2">Personalized Experience</h4>
            <p className="text-purple-700 text-sm">Customized dashboard sesuai dengan business needs dan preferences</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
            Interested in Portal Access?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Client Portal tersedia untuk existing clients sebagai added value dari partnership. 
            Untuk prospective clients, kami menyediakan demo session untuk preview capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-cta-primary text-cta-text px-8 py-3 rounded-sm font-semibold hover:bg-cta-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Request Demo Session
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-sm font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              Learn More About Access
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientPortal