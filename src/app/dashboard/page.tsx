"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [accounts, setAccounts] = useState<any[]>([])
  const [transactions, setTransactions] = useState<any[]>([])
  const [notifications, setNotifications] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      // Simulate API calls with different loading times
      setTimeout(() => {
        setAccounts([
          {
            type: "Current Account",
            number: "**** 1234",
            balance: "50,000.00",
            currency: "USD",
          },
          {
            type: "Savings Account",
            number: "**** 5678",
            balance: "25,000.00",
            currency: "USD",
          },
          {
            type: "Investment Account",
            number: "**** 9012",
            balance: "100,000.00",
            currency: "USD",
          },
        ])
      }, 2000)

      setTimeout(() => {
        setTransactions([
          {
            id: 1,
            description: "Online Transfer",
            amount: "-$500.00",
            date: "2024-01-20",
            status: "completed",
          },
          {
            id: 2,
            description: "Salary Deposit",
            amount: "+$5,000.00",
            date: "2024-01-19",
            status: "completed",
          },
          {
            id: 3,
            description: "Bill Payment - Utilities",
            amount: "-$150.00",
            date: "2024-01-18",
            status: "completed",
          },
        ])
      }, 3000)

      setTimeout(() => {
        setNotifications([
          {
            id: 1,
            title: "Security Alert",
            message: "New device login detected",
            time: "2 hours ago",
            type: "warning",
          },
          {
            id: 2,
            title: "Payment Due",
            message: "Upcoming bill payment reminder",
            time: "5 hours ago",
            type: "info",
          },
          {
            id: 3,
            title: "Transfer Success",
            message: "Fund transfer completed successfully",
            time: "1 day ago",
            type: "success",
          },
        ])
        setIsLoading(false)
      }, 4000)
    }

    loadData()
  }, [])

  const quickActions = [
    { 
      label: "Transfer Money", 
      href: "/transfers", 
      icon: "https://api.iconify.design/solar:transfer-horizontal-bold-duotone.svg"
    },
    { 
      label: "Pay Bills", 
      href: "/bill-payments", 
      icon: "https://api.iconify.design/solar:bill-list-bold-duotone.svg"
    },
    { 
      label: "Manage Cards", 
      href: "/visa-management", 
      icon: "https://api.iconify.design/solar:card-bold-duotone.svg"
    },
    { 
      label: "Virtual Branch", 
      href: "/virtual-branch", 
      icon: "https://api.iconify.design/solar:buildings-3-bold-duotone.svg"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dashboard Content */}
      <main className="lg:pl-64 p-4 sm:p-6">
        <div className="grid gap-6">
          {/* Account Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Account Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {accounts.length === 0 ? (
                <>
                  <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-8 w-40" />
                    </div>
                  </Card>
                  <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-8 w-40" />
                    </div>
                  </Card>
                  <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-8 w-40" />
                    </div>
                  </Card>
                </>
              ) : (
                accounts.map((account) => (
                  <Card key={account.number} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{account.type}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{account.number}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {account.currency} {account.balance}
                      </p>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  className="h-24 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  asChild
                >
                  <Link href={action.href} className="flex flex-col items-center justify-center space-y-2">
                    <img src={action.icon} alt="" className="w-6 h-6" />
                    <span className="text-center text-sm text-gray-900 dark:text-gray-100">{action.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </section>

          {/* Transactions & Notifications */}
          <section className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Recent Transactions
                </h3>
                <div className="space-y-4">
                  {transactions.length === 0 ? (
                    <>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-48" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                          <Skeleton className="h-4 w-20" />
                        </div>
                      ))}
                    </>
                  ) : (
                    transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{transaction.description}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {transaction.date}
                          </p>
                        </div>
                        <span
                          className={
                            transaction.amount.startsWith("+")
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }
                        >
                          {transaction.amount}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Notifications</h3>
                <div className="space-y-4">
                  {notifications.length === 0 ? (
                    <>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2">
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                          <Skeleton className="h-3 w-full" />
                        </div>
                      ))}
                    </>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="flex justify-between">
                          <p className="font-medium text-gray-900 dark:text-gray-100">{notification.title}</p>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {notification.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
