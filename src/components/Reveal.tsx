import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number // Biar bisa diatur delay-nya
}

export const Reveal = ({ children, width = '100%', delay = 0.25 }: Props) => {
  const ref = useRef(null)
  // once: true artinya animasi cuma jalan sekali (gak ngulang-ngulang pas scroll naik turun)
  const isInView = useInView(ref, { once: true, margin: "-75px" }) 
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 }, // Mulai dari transparan & agak bawah
          visible: { opacity: 1, y: 0 }, // Muncul penuh & naik ke posisi asli
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }} // Easing yang sangat halus (Fluent)
      >
        {children}
      </motion.div>
    </div>
  )
}