"use client"

import React from "react"

export function Loader() {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white/90 via-white/95 to-white/90 dark:from-gray-900/90 dark:via-gray-900/95 dark:to-gray-900/90 backdrop-blur-sm transition-all duration-300"
      aria-live="polite"
    >
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#c0985b]/20 border-t-[#c0985b] rounded-full animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
