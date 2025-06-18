"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {}

    // Full Name validation
    const fullName = formData.get("fullName") as string
    if (!fullName || fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long"
    }

    // ID Number validation
    const idNumber = formData.get("idNumber") as string
    if (!idNumber || idNumber.length < 6) {
      newErrors.idNumber = "Please enter a valid ID number"
    }

    // Phone validation
    const phone = formData.get("phone") as string
    if (!phone || !/^\+?[\d\s-]{10,}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Email validation
    const email = formData.get("email") as string
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    const password = formData.get("password") as string
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    if (!validateForm(formData)) {
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#c0985b]">ACL Digital</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-10">
        <div className="w-full max-w-lg">
          <Card className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
              <p className="text-gray-600 mt-2">Join ACL Digital for secure banking</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="idNumber">ID Number</Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  placeholder="Enter your ID number"
                  required
                />
                {errors.idNumber && (
                  <p className="text-sm text-red-500">{errors.idNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <p className="text-sm text-gray-500">
                  Password must be at least 8 characters long
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-[#c0985b] hover:bg-[#b08a4d]"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  By creating an account, you agree to our{" "}
                  <Link href="/terms" className="text-[#c0985b] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#c0985b] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Already have an account?</span>{" "}
              <Link href="/login" className="text-[#c0985b] hover:underline">
                Sign in
              </Link>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} ACL Digital. All rights reserved.</p>
      </footer>
    </div>
  )
}
