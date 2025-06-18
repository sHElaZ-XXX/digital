"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState } from "react"

export default function VisaManagementPage() {
  const [isLoading, setIsLoading] = useState(false)

  const cards = [
    {
      id: "card1",
      type: "Visa Platinum",
      number: "**** **** **** 1234",
      expiryDate: "12/25",
      status: "Active",
      limit: "10,000",
      balance: "2,500",
    },
    {
      id: "card2",
      type: "Visa Gold",
      number: "**** **** **** 5678",
      expiryDate: "06/24",
      status: "Active",
      limit: "5,000",
      balance: "1,200",
    },
  ]

  const handleAction = async (action: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="lg:pl-64 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Visa Card Management</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage your Visa cards and transactions
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]">
                  Request New Card
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-gray-900 dark:text-gray-100">Request New Card</DialogTitle>
                  <DialogDescription className="text-gray-600 dark:text-gray-400">
                    Choose your preferred card type and submit your application.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 cursor-pointer hover:border-[#c0985b] transition-colors bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Visa Platinum</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Premium benefits and rewards
                      </p>
                    </Card>
                    <Card className="p-4 cursor-pointer hover:border-[#c0985b] transition-colors bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Visa Gold</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Enhanced features and security
                      </p>
                    </Card>
                  </div>
                  <Button
                    className="w-full bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                    onClick={() => handleAction("request")}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Submit Application"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6">
            {cards.map((card) => (
              <Card key={card.id} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{card.type}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          card.status === "Active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {card.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{card.number}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Expires: {card.expiryDate}
                    </p>
                  </div>

                  <div className="space-y-1 md:text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Available Balance</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">${card.balance}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      of ${card.limit} limit
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleAction("statement")}
                      disabled={isLoading}
                      className="border-gray-200 dark:border-gray-700"
                    >
                      Download Statement
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="border-gray-200 dark:border-gray-700">Actions</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white dark:bg-gray-800">
                        <DropdownMenuItem
                          onClick={() => handleAction("block")}
                          className="text-red-600 dark:text-red-400"
                        >
                          Block Card
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleAction("limit")}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          Change Limit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleAction("pin")}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          Change PIN
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Recent Transactions
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        merchant: "Amazon",
                        amount: "-$299.99",
                        date: "2024-01-20",
                        type: "Online Purchase",
                      },
                      {
                        merchant: "Walmart",
                        amount: "-$156.78",
                        date: "2024-01-19",
                        type: "In-Store Purchase",
                      },
                    ].map((transaction, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{transaction.merchant}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {transaction.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-600 dark:text-red-400">
                            {transaction.amount}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {transaction.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
