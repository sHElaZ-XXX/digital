"use client"

import { useEffect, useState } from 'react'

export default function useDarkMode() {
  // Initialize with undefined to prevent hydration mismatch
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    // Check localStorage first
    const storedPreference = localStorage.getItem('darkMode')
    
    if (storedPreference !== null) {
      // If user has explicitly set a preference, use that
      setDarkMode(storedPreference === 'true')
    } else {
      // Otherwise, check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(systemPrefersDark)
      localStorage.setItem('darkMode', systemPrefersDark.toString())
    }
  }, [])

  useEffect(() => {
    // Only update the DOM when darkMode is defined
    if (darkMode !== undefined) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set an explicit preference
      if (!localStorage.getItem('darkMode')) {
        setDarkMode(e.matches)
        localStorage.setItem('darkMode', e.matches.toString())
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      if (prev === undefined) return true
      const newValue = !prev
      localStorage.setItem('darkMode', newValue.toString())
      return newValue
    })
  }

  // Return undefined during SSR to prevent hydration mismatch
  return { 
    darkMode: darkMode === undefined ? false : darkMode, 
    toggleDarkMode 
  }
}
