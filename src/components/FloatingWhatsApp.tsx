import React from 'react'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  // GANTI NOMOR WA DISINI
  const phoneNumber = '6285700800872' 
  const message = "Hei Archipelago Jaya Nusantara, I need some help!"

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {/* Label Chat (Warna Putih Teks Coklat) */}
      <div className="bg-white text-primary-900 px-4 py-2 rounded-lg shadow-lg text-xs font-bold mb-1 animate-bounce origin-bottom-right border border-amber-100">
        Need a Help? Chat us on WhatsApp!
      </div>

      {/* Tombol Utama (Warna TEMA: Amber/Emas) */}
      <button
        onClick={handleClick}
        // PERUBAHAN WARNA DISINI:
        // bg-amber-600 (Emas) -> hover:bg-primary-900 (Coklat Kopi saat disorot)
        className="group flex items-center justify-center bg-amber-600 text-white p-4 rounded-full shadow-xl hover:bg-primary-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-300 border-2 border-white/20"
        aria-label="Chat WhatsApp"
      >
        {/* Ikon */}
        <MessageCircle size={28} className="text-white fill-current" />
        
        {/* Teks Geser */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-white ml-0 group-hover:ml-3">
          Chat WhatsApp
        </span>
      </button>
    </div>
  )
}

export default FloatingWhatsApp