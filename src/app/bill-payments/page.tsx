"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function BillPaymentsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedBiller, setSelectedBiller] = useState("")

  const billers = [
    { id: "zesa", name: "ZESA", category: "Utilities" },
    { id: "zol", name: "ZOL", category: "Internet" },
    { id: "telone", name: "TelOne", category: "Telecommunications" },
    { id: "uz", name: "University of Zimbabwe", category: "Education" },
    { id: "msu", name: "Midlands State University", category: "Education" },
    { id: "dstv", name: "DSTV", category: "Entertainment" },
    { id: "citycouncil", name: "City Council", category: "Municipal" },
  ]

  const accounts = [
    { id: "acc1", number: "**** 1234", type: "Current Account" },
    { id: "acc2", number: "**** 5678", type: "Savings Account" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="lg:pl-64 p-4 sm:p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Bill Payments</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Pay your bills quickly and securely
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Biller Selection */}
                <div className="space-y-2">
                  <Label htmlFor="biller" className="text-gray-900 dark:text-gray-100">Select Biller</Label>
                  <Select
                    value={selectedBiller}
                    onValueChange={setSelectedBiller}
                  >
                    <SelectTrigger className="bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Choose a biller" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(
                        billers.reduce((acc, biller) => {
                          if (!acc[biller.category]) {
                            acc[biller.category] = []
                          }
                          acc[biller.category].push(biller)
                          return acc
                        }, {} as Record<string, typeof billers>)
                      ).map(([category, categoryBillers]) => (
                        <div key={category}>
                          <div className="px-2 py-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400">
                            {category}
                          </div>
                          {categoryBillers.map((biller) => (
                            <SelectItem key={biller.id} value={biller.id}>
                              {biller.name}
                            </SelectItem>
                          ))}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Account Selection */}
                <div className="space-y-2">
                  <Label htmlFor="account" className="text-gray-900 dark:text-gray-100">Account to Debit</Label>
                  <Select>
                    <SelectTrigger className="bg-white dark:bg-gray-800">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.type} - {account.number}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-gray-900 dark:text-gray-100">Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      $
                    </span>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      className="pl-8 bg-white dark:bg-gray-800"
                      required
                    />
                  </div>
                </div>

                {/* Reference Number */}
                <div className="space-y-2">
                  <Label htmlFor="reference" className="text-gray-900 dark:text-gray-100">Reference Number</Label>
                  <Input
                    id="reference"
                    type="text"
                    placeholder="Enter reference number"
                    className="bg-white dark:bg-gray-800"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing Payment..." : "Pay Bill"}
                </Button>
              </form>

              {/* Recent Payments */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Payments</h2>
                <div className="space-y-4">
                  {[
                    {
                      biller: "ZESA",
                      amount: "$50.00",
                      date: "2024-01-20",
                      status: "Completed",
                    },
                    {
                      biller: "ZOL",
                      amount: "$75.00",
                      date: "2024-01-18",
                      status: "Completed",
                    },
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{payment.biller}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-gray-100">{payment.amount}</p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          {payment.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
