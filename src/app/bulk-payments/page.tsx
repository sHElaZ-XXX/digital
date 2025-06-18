"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { useState } from "react"

export default function BulkPaymentsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewData, setPreviewData] = useState<any[]>([])

  // Dummy data for preview
  const dummyData = [
    {
      accountNumber: "1234567890",
      beneficiaryName: "John Smith",
      amount: "1,000.00",
      reference: "SAL-JAN24",
      status: "Pending",
    },
    {
      accountNumber: "9876543210",
      beneficiaryName: "Jane Doe",
      amount: "2,500.00",
      reference: "SAL-JAN24",
      status: "Pending",
    },
    {
      accountNumber: "5678901234",
      beneficiaryName: "Robert Johnson",
      amount: "1,750.00",
      reference: "SAL-JAN24",
      status: "Pending",
    },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      // In a real application, you would parse the CSV file here
      // For now, we'll just show dummy data
      setPreviewData(dummyData)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="lg:pl-64 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Bulk Payments</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Upload a CSV file to process multiple payments at once
            </p>
          </div>

          <div className="grid gap-6">
            {/* File Upload Section */}
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Upload CSV File</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      File must be in CSV format with the required columns
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="text-[#c0985b] hover:text-[#c0985b] hover:bg-[#c0985b]/10 border-gray-200 dark:border-gray-700"
                    asChild
                  >
                    <a href="#" download>
                      Download Template
                    </a>
                  </Button>
                </div>

                <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer space-y-2"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#c0985b]/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#c0985b]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-[#c0985b]">Click to upload</span> or
                      drag and drop
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">CSV files only</div>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="flex items-center justify-between bg-[#c0985b]/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-[#c0985b]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {uploadedFile.name}
                      </span>
                    </div>
                    <button
                      className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      onClick={() => setUploadedFile(null)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </Card>

            {/* Preview Section */}
            {previewData.length > 0 && (
              <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Payment Preview</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Review the payments before submission
                    </p>
                  </div>

                  <div className="border rounded-lg border-gray-200 dark:border-gray-700">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200 dark:border-gray-700">
                          <TableHead className="text-gray-900 dark:text-gray-100">Account Number</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Beneficiary Name</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Amount</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Reference</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {previewData.map((row, index) => (
                          <TableRow key={index} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-gray-900 dark:text-gray-100">{row.accountNumber}</TableCell>
                            <TableCell className="text-gray-900 dark:text-gray-100">{row.beneficiaryName}</TableCell>
                            <TableCell className="text-gray-900 dark:text-gray-100">${row.amount}</TableCell>
                            <TableCell className="text-gray-900 dark:text-gray-100">{row.reference}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300">
                                {row.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Total Records: {previewData.length}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Amount: $
                        {previewData
                          .reduce(
                            (sum, row) =>
                              sum + parseFloat(row.amount.replace(",", "")),
                            0
                          )
                          .toLocaleString()}
                      </p>
                    </div>
                    <Button
                      className="bg-[#c0985b] hover:bg-[#b08a4d] dark:bg-[#d4b17d] dark:hover:bg-[#c0985b]"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Submit for Approval"}
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Previous Uploads */}
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Previous Uploads</h2>
                <div className="border rounded-lg border-gray-200 dark:border-gray-700">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200 dark:border-gray-700">
                        <TableHead className="text-gray-900 dark:text-gray-100">Date</TableHead>
                        <TableHead className="text-gray-900 dark:text-gray-100">File Name</TableHead>
                        <TableHead className="text-gray-900 dark:text-gray-100">Records</TableHead>
                        <TableHead className="text-gray-900 dark:text-gray-100">Total Amount</TableHead>
                        <TableHead className="text-gray-900 dark:text-gray-100">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          date: "2024-01-20",
                          fileName: "January_Salaries.csv",
                          records: 150,
                          amount: "75,000.00",
                          status: "Completed",
                        },
                        {
                          date: "2024-01-15",
                          fileName: "Vendor_Payments.csv",
                          records: 45,
                          amount: "32,500.00",
                          status: "Completed",
                        },
                      ].map((upload, index) => (
                        <TableRow key={index} className="border-gray-200 dark:border-gray-700">
                          <TableCell className="text-gray-900 dark:text-gray-100">{upload.date}</TableCell>
                          <TableCell className="text-gray-900 dark:text-gray-100">{upload.fileName}</TableCell>
                          <TableCell className="text-gray-900 dark:text-gray-100">{upload.records}</TableCell>
                          <TableCell className="text-gray-900 dark:text-gray-100">${upload.amount}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              {upload.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
