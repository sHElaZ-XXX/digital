"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Bill Payments",
      description: "Pay your bills seamlessly with our digital payment solutions.",
      href: "/bill-payments",
    },
    {
      title: "Fund Transfers",
      description: "Transfer funds easily with multiple options including RTGS and ZIPIT.",
      href: "/transfers",
    },
    {
      title: "Visa Management",
      description: "Manage your Visa cards and transactions in one place.",
      href: "/visa-management",
    },
    {
      title: "Virtual Branch",
      description: "Access banking services remotely through our virtual branch.",
      href: "/virtual-branch",
    },
    {
      title: "Bulk Payments",
      description: "Process multiple payments efficiently with our bulk payment system.",
      href: "/bulk-payments",
    },
    {
      title: "Account Management",
      description: "View and manage your accounts with detailed transaction history.",
      href: "/dashboard",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-[#c0985b]">Modern Banking</span>
                <br />
                for the Digital Age
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Experience seamless banking with ACL Digital. We provide cutting-edge solutions
                for both Corporate and Retail Banking needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#c0985b] hover:bg-[#b08a4d] text-white"
                >
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#c0985b] text-[#c0985b] hover:bg-[#c0985b] hover:text-white"
                >
                  <Link href="/login">Login to Account</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c0985b]/20 to-[#7c727d]/20 rounded-2xl" />
              <img
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
                alt="Digital Banking"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of banking services designed to meet
              all your financial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#c0985b] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="text-[#c0985b] hover:text-[#b08a4d] hover:bg-[#c0985b]/10"
                >
                  <Link href={feature.href}>Learn More →</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#c0985b] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Modern Banking?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ACL Digital for their
              banking needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="secondary"
                className="bg-white text-[#c0985b] hover:bg-gray-100"
              >
                <Link href="/register">Open an Account</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/login">Login to Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold text-[#c0985b]">ACL Digital</span>
              <p className="mt-4 text-gray-600">
                Your trusted partner in digital banking solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/login" className="text-gray-600 hover:text-[#c0985b]">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-600 hover:text-[#c0985b]">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-600 hover:text-[#c0985b]">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/bill-payments" className="text-gray-600 hover:text-[#c0985b]">
                    Bill Payments
                  </Link>
                </li>
                <li>
                  <Link href="/transfers" className="text-gray-600 hover:text-[#c0985b]">
                    Fund Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/visa-management" className="text-gray-600 hover:text-[#c0985b]">
                    Visa Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>support@acldigital.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Digital Street, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} ACL Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
