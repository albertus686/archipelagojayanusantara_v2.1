import React from 'react'
import { Target, Eye, Leaf, ShieldCheck, Globe, Sprout } from 'lucide-react'

const AboutCompany = () => {
  const values = [
    {
      icon: <Sprout className="text-primary-600" size={32} />,
      title: 'Direct Sourcing',
      description: 'Langsung dari Petani',
      details: 'Kami memotong rantai pasok dengan mengambil langsung dari kelompok tani di dataran tinggi Gayo dan Mandeling.'
    },
    {
      icon: <ShieldCheck className="text-primary-600" size={32} />,
      title: 'Triple Picked',
      description: 'Quality Control Ketat',
      details: 'Setiap biji melalui proses sortir manual 3 kali (Triple Picked) untuk memastikan Defect Value di bawah 11 poin.'
    },
    {
      icon: <Globe className="text-primary-600" size={32} />,
      title: 'Global Logistics', 
      description: 'Ekspor ke 25+ Negara',
      details: 'Berpengalaman menangani dokumen ekspor (ICO, Phytosanitary) dan packaging GrainPro agar kesegaran terjaga.'
    },
    {
      icon: <Leaf className="text-primary-600" size={32} />,
      title: 'Sustainability',
      description: 'Ramah Lingkungan',
      details: 'Mendukung praktik pertanian berkelanjutan (shade-grown coffee) yang menjaga ekosistem hutan Sumatera.'
    }
  ]

  return (
    // PERUBAHAN: py-16 jadi py-10, md:py-24 jadi md:py-12 (Lebih Ramping)
    <section id="about" className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header - Margin bawah dikurangi (mb-16 jadi mb-10) */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Jembatan Kopi Nusantara ke Dunia
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            PT Archipelago Jaya Nusantara berdedikasi mengurasi Green Bean Arabica terbaik 
            dari Sumatera untuk Roastery dan Importir di seluruh dunia.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-primary-100 rounded-xl transform -rotate-2"></div>
              <img 
                src="/images/about-coffee.png" 
                alt="Proses Sortir Kopi"
                className="relative w-full rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-primary-600" size={24} />
                  <h3 className="font-heading text-xl font-bold text-neutral-900">Misi Kami</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  "Memperkenalkan karakter unik kopi Sumatera Mandeling ke panggung dunia dengan standar kualitas Grade 1 yang konsisten dan transparan."
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-primary-600" size={24} />
                  <h3 className="font-heading text-xl font-bold text-neutral-900">Visi Kami</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  "Menjadi mitra sourcing paling terpercaya bagi roaster internasional yang mencari biji kopi Indonesia berkualitas premium."
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-5 border border-primary-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-3 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
                <h4 className="font-bold text-neutral-900 mb-1 text-sm">{value.title}</h4>
                <p className="text-xs font-semibold text-primary-700 mb-2">{value.description}</p>
                <p className="text-[11px] text-neutral-600 leading-relaxed">{value.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany