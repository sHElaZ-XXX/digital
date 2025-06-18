"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

export default function VirtualBranchPage() {
  const [isLoading, setIsLoading] = useState(false)

  const accounts = [
    { id: "acc1", number: "**** 1234", type: "Current Account", balance: "50,000.00" },
    { id: "acc2", number: "**** 5678", type: "Savings Account", balance: "25,000.00" },
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Virtual Branch</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Request deposits and withdrawals from your accounts
                </p>
              </div>

              <Tabs defaultValue="deposit" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="deposit" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Deposit</TabsTrigger>
                  <TabsTrigger value="withdrawal" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Withdrawal</TabsTrigger>
                </TabsList>

                {/* Deposit Form */}
                <TabsContent value="deposit">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Account</Label>
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
                        <Label className="text-gray-900 dark:text-gray-100">Deposit Method</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash Deposit</SelectItem>
                            <SelectItem value="check">Check Deposit</SelectItem>
                            <SelectItem value="transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Notes</Label>
                        <Textarea
                          placeholder="Add any additional information"
                          className="min-h-[100px] bg-white dark:bg-gray-800"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Request Deposit"}
                    </Button>
                  </form>
                </TabsContent>

                {/* Withdrawal Form */}
                <TabsContent value="withdrawal">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Account</Label>
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
                        <Label className="text-gray-900 dark:text-gray-100">Withdrawal Method</Label>
                        <Select>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash Withdrawal</SelectItem>
                            <SelectItem value="check">Check Withdrawal</SelectItem>
                            <SelectItem value="transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900 dark:text-gray-100">Purpose</Label>
                        <Textarea
                          placeholder="Specify the purpose of withdrawal"
                          className="min-h-[100px] bg-white dark:bg-gray-800"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Request Withdrawal"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Recent Requests */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Requests</h2>
                <div className="space-y-4">
                  {[
                    {
                      type: "Deposit",
                      amount: "$5,000.00",
                      date: "2024-01-20",
                      status: "Pending",
                      method: "Bank Transfer",
                    },
                    {
                      type: "Withdrawal",
                      amount: "$1,000.00",
                      date: "2024-01-18",
                      status: "Completed",
                      method: "Cash",
                    },
                  ].map((request, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              request.type === "Deposit"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          />
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {request.type} - {request.method}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{request.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-gray-100">{request.amount}</p>
                        <p
                          className={`text-sm ${
                            request.status === "Completed"
                              ? "text-green-600 dark:text-green-400"
                              : "text-yellow-600 dark:text-yellow-400"
                          }`}
                        >
                          {request.status}
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
