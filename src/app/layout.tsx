"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import useDarkMode from "@/hooks/useDarkMode"
//import Loader from "@/components/Loader"
import { Loader } from "@/components/Loader"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { darkMode } = useDarkMode()
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html 
      lang="en" 
      className={`${darkMode ? 'dark' : ''} ${inter.variable}`}
      style={{ colorScheme: darkMode ? 'dark' : 'light' }}
      suppressHydrationWarning
    >
      <head>
        <title>ACL Digital</title>
        <meta name="description" content="ACL Digital Banking Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="https://www.africancentury.co.zw/corporate/assets/img/icons/favicon-16x16.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body 
        className={`${inter.className} antialiased bg-gradient-to-br from-white via-[#f9f2e6] to-[#fff8e1] dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300`}
        suppressHydrationWarning
      >
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translateY(8px);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
            transform: translateY(0);
          }
          .page-transition-exit-active {
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 300ms, transform 300ms;
          }
        `}</style>
        {isLoading && <Loader />}
        <div className="min-h-screen flex">
          <Navigation />
          <main className="flex-1 ml-0 md:ml-64 p-4 pt-20 transition-all duration-200">
            {children}
          </main>
        </div>

        {/* Prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const darkMode = localStorage.getItem('darkMode');
                if (darkMode === 'true' || (!darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
