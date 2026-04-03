'use client'

import { useState, useEffect } from 'react'
import { Monitor, Smartphone } from 'lucide-react'

export function MobileCheck({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent)
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) return children

  if (isMobile) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA] px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Smartphone className="size-12 text-[#64748B]" />
            <span className="text-2xl text-[#94A3B8]">→</span>
            <Monitor className="size-12 text-[#2563EB]" />
          </div>
          <h1 
            className="text-2xl font-bold text-[#1E293B]"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Desktop Experience Only
          </h1>
          <p className="max-w-xs text-sm leading-relaxed text-[#64748B]">
            This landing page is optimized for desktop viewing. Please visit us on a PC or tablet for the best experience.
          </p>
        </div>
      </div>
    )
  }

  return children
}
