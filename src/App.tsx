import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutCompany from './components/AboutCompany'
import ProductShowcase from './components/ProductShowcase'
import ClientSuccessStories from './components/ClientSuccessStories'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FounderQuote from './components/FounderQuote'
// 1. IMPORT KOMPONEN WA
import FloatingWhatsApp from './components/FloatingWhatsApp' 
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background-page font-body text-neutral-900">
      <Navigation />
      
      <main>
        <Hero />
        <AboutCompany />
        <ProductShowcase />
        <FounderQuote />
        <ContactSection />
      </main>
      
      <Footer />

      {/* 2. PASANG DI SINI (Paling Bawah sebelum tutup div) */}
      <FloatingWhatsApp />
      
    </div>
  )
}

export default App