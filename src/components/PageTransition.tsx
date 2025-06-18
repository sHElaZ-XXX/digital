"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Loader } from "./Loader"

interface PageTransitionProps {
  children: React.ReactNode
  isAuthPage?: boolean
}

export function PageTransition({ children, isAuthPage = false }: PageTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Don't show loader for dashboard and auth pages
    if (pathname.startsWith("/dashboard") || isAuthPage) {
      setIsLoading(false)
      return
    }

    // Show loader for other pages
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname, isAuthPage])

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div
      className={`${
        isTransitioning ? "page-transition-enter page-transition-enter-active" : ""
      }`}
    >
      {children}
    </div>
  )
}
