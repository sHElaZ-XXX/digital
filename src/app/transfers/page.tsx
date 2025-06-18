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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

export default function TransfersPage() {
  const [isLoading, setIsLoading] = useState(false)

  const accounts = [
    { id: "acc1", number: "**** 1234", type: "Current Account", balance: "50,000.00" },
    { id: "acc2", number: "**** 5678", type: "Savings Account", balance: "25,000.00" },
  ]

  const banks = [
    { id: "bank1", name: "ACL Bank" },
    { id: "bank2", name: "First Capital Bank" },
    { id: "bank3", name: "Standard Chartered" },
    { id: "bank4", name: "Stanbic Bank" },
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Fund Transfers</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Transfer money securely to any account
                </p>
              </div>

              <Tabs defaultValue="internal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="internal" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Internal</TabsTrigger>
                  <TabsTrigger value="rtgs" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">RTGS</TabsTrigger>
                  <TabsTrigger value="zipit" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">ZIPIT</TabsTrigger>
                </TabsList>

                {/* Internal Transfer */}
                <TabsContent value="internal">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">From Account</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            {accounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                {account.type} - {account.number} (${account.balance})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">To Account</Label>
                        <Input
                          type="text"
                          placeholder="Enter recipient account number"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                            $
                          </span>
                          <Input
                            type="number"
                            placeholder="0.00"
                            className="pl-8 bg-white dark:bg-gray-800"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Purpose</Label>
                        <Textarea
                          placeholder="Enter transfer purpose"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Transfer"}
                    </Button>
                  </form>
                </TabsContent>

                {/* RTGS Transfer */}
                <TabsContent value="rtgs">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">From Account</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            {accounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                {account.type} - {account.number} (${account.balance})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Recipient Bank</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select bank" />
                          </SelectTrigger>
                          <SelectContent>
                            {banks.map((bank) => (
                              <SelectItem key={bank.id} value={bank.id}>
                                {bank.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Recipient Account</Label>
                        <Input
                          type="text"
                          placeholder="Enter recipient account number"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                            $
                          </span>
                          <Input
                            type="number"
                            placeholder="0.00"
                            className="pl-8 bg-white dark:bg-gray-800"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Purpose</Label>
                        <Textarea
                          placeholder="Enter transfer purpose"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Transfer"}
                    </Button>
                  </form>
                </TabsContent>

                {/* ZIPIT Transfer */}
                <TabsContent value="zipit">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">From Account</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select account" />
                          </SelectTrigger>
                          <SelectContent>
                            {accounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                {account.type} - {account.number} (${account.balance})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Recipient Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="Enter recipient phone number"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                            $
                          </span>
                          <Input
                            type="number"
                            placeholder="0.00"
                            className="pl-8 bg-white dark:bg-gray-800"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Purpose</Label>
                        <Textarea
                          placeholder="Enter transfer purpose"
                          className="bg-white dark:bg-gray-800"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Transfer"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Recent Transfers */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Transfers</h2>
                <div className="space-y-4">
                  {[
                    {
                      type: "Internal",
                      recipient: "John Smith",
                      amount: "$1,000.00",
                      date: "2024-01-20",
                      status: "Completed",
                    },
                    {
                      type: "RTGS",
                      recipient: "Jane Doe",
                      amount: "$2,500.00",
                      date: "2024-01-18",
                      status: "Completed",
                    },
                  ].map((transfer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{transfer.recipient}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {transfer.type} • {transfer.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-gray-100">{transfer.amount}</p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          {transfer.status}
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
