"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import useDarkMode from "@/hooks/useDarkMode"

export function Navigation() {
  const pathname = usePathname()
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle mobile menu transitions
  const toggleMobileMenu = () => {
    setIsTransitioning(true)
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isAuthenticated = pathname.startsWith("/dashboard") || 
                         pathname.startsWith("/bill-payments") || 
                         pathname.startsWith("/transfers") ||
                         pathname.startsWith("/bulk-payments") ||
                         pathname.startsWith("/visa-management") ||
                         pathname.startsWith("/virtual-branch")

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: "https://api.iconify.design/solar:home-2-bold-duotone.svg" },
    { href: "/bill-payments", label: "Bill Payments", icon: "https://api.iconify.design/solar:bill-list-bold-duotone.svg" },
    { href: "/transfers", label: "Transfers", icon: "https://api.iconify.design/solar:transfer-horizontal-bold-duotone.svg" },
    { href: "/bulk-payments", label: "Bulk Payments", icon: "https://api.iconify.design/solar:card-transfer-bold-duotone.svg" },
    { href: "/visa-management", label: "Cards", icon: "https://api.iconify.design/solar:card-bold-duotone.svg" },
    { href: "/virtual-branch", label: "Virtual Branch", icon: "https://api.iconify.design/solar:buildings-3-bold-duotone.svg" },
  ]

  if (isAuthenticated) {
    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md md:hidden transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle mobile menu"
        >
          <img 
            src="https://api.iconify.design/solar:hamburger-menu-bold-duotone.svg" 
            alt="" 
            className="w-6 h-6"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${isTransitioning ? 'transition-opacity' : ''}`}
          onClick={toggleMobileMenu}
        />

        {/* Left Sidebar - Desktop & Mobile */}
        <aside 
          className={`fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg z-40 transition-all duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } ${isTransitioning ? 'transition-transform' : ''}`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                <img 
                  src="https://www.africancentury.co.zw/corporate/assets/img/icons/logo_large.png" 
                  alt="ACL Digital" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={toggleMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        pathname === link.href
                          ? "bg-[#c0985b]/10 text-[#c0985b] dark:bg-[#c0985b]/20 dark:text-[#d4b17d] shadow-sm"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 hover:shadow-sm"
                      }`}
                    >
                      <img src={link.icon} alt="" className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Dark Mode Toggle */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-sm"
              >
                {darkMode ? (
                  <>
                    <img src="https://api.iconify.design/solar:sun-bold-duotone.svg" alt="" className="w-5 h-5" />
                    <span className="font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <img src="https://api.iconify.design/solar:moon-bold-duotone.svg" alt="" className="w-5 h-5" />
                    <span className="font-medium">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </aside>

        {/* Top Profile Menu */}
        <div className="fixed top-0 right-0 p-4 z-50">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <img src="https://api.iconify.design/solar:user-circle-bold-duotone.svg" alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900 dark:text-gray-100">John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <DropdownMenuItem className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <img src="https://api.iconify.design/solar:user-bold-duotone.svg" className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
                <img src="https://api.iconify.design/solar:logout-3-bold-duotone.svg" className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <img 
              src="https://www.africancentury.co.zw/corporate/assets/img/icons/logo_large.png" 
              alt="ACL Digital" 
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/login"
              className="font-medium text-gray-600 hover:text-[#c0985b] dark:text-gray-300 dark:hover:text-[#d4b17d] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="font-medium text-gray-600 hover:text-[#c0985b] dark:text-gray-300 dark:hover:text-[#d4b17d] transition-colors"
            >
              Register
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 hover:text-[#c0985b] dark:text-gray-300 dark:hover:text-[#d4b17d] transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? (
                <img src="https://api.iconify.design/solar:sun-bold-duotone.svg" alt="" className="w-5 h-5" />
              ) : (
                <img src="https://api.iconify.design/solar:moon-bold-duotone.svg" alt="" className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
