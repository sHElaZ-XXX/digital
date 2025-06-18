"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate API call to validate credentials
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // If credentials are valid, redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="w-full flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Card className="p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src="https://www.africancentury.co.zw/corporate/assets/img/icons/logo_large.png" 
                  alt="ACL Digital Logo" 
                  className="h-12 w-auto mx-auto"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome Back</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account</p>
            </div>

            {error && (
              <div className="mb-6 p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                    <Label htmlFor="email">Email or Phone</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter your email or phone"
                      autoComplete="username"
                      required
                      disabled={isLoading}
                      className="bg-white dark:bg-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/reset-password"
                        className="text-sm text-[#c0985b] hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      disabled={isLoading}
                      className="bg-white dark:bg-gray-800"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600 dark:text-gray-400">Don't have an account?</span>{" "}
              <Link href="/register" className="text-[#c0985b] hover:underline dark:text-[#d4b17d]">
                Create one
              </Link>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img 
                src="https://www.zimsitch.com/assets/zipit/icons/shield.svg" 
                alt="" 
                className="w-4 h-4" 
              />
              <span>Secure Login</span>
            </div>
            <p>
              Your connection to ACL Digital is encrypted and your information is protected.
            </p>
          </div>
        </div>
      </main>

      {/* Footer with Social Links */}
      <footer className="w-full py-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} ACL Digital. All rights reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6">
          <a 
            href="https://twitter.com/ACL_Bank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100063615876854" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#4267B2] hover:opacity-80 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </a>
          <a 
            href="https://www.instagram.com/africancenturylimited" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#833AB4] hover:opacity-80 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <i className="bi bi-instagram text-2xl"></i>
          </a>
          <a 
            href="https://www.linkedin.com/company/african-century-limited" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0072b1] hover:opacity-80 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <i className="bi bi-linkedin text-2xl"></i>
          </a>
          <a 
            href="https://wa.me/263778032920" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#25D366] hover:opacity-80 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <i className="bi bi-whatsapp text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  )
}
