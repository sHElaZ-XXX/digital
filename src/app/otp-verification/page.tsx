"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function OTPVerificationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [timer, setTimer] = useState(30)
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtpValues = [...otpValues]
      newOtpValues[index] = value
      setOtpValues(newOtpValues)

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6)
    if (/^\d+$/.test(pastedData)) {
      const newOtpValues = [...otpValues]
      pastedData.split("").forEach((char, index) => {
        if (index < 6) newOtpValues[index] = char
      })
      setOtpValues(newOtpValues)
    }
  }

  const router = useRouter()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Simulate API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // If OTP is valid, redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("OTP Verification Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setTimer(30)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#c0985b] dark:text-[#d4b17d]">ACL Digital</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                OTP Verification
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Enter the 6-digit code sent to your phone
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input Grid */}
              <div className="flex justify-between gap-2">
                {otpValues.map((value, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-lg font-semibold bg-white dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                ))}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                disabled={isLoading || otpValues.some((v) => !v)}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Didn't receive the code?{" "}
                  {timer > 0 ? (
                    <span>Resend in {timer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-[#c0985b] hover:underline dark:text-[#d4b17d]"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
                <Link
                  href="/login"
                  className="text-sm text-[#c0985b] hover:underline dark:text-[#d4b17d] block"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} ACL Digital. All rights reserved.</p>
      </footer>
    </div>
  )
}
