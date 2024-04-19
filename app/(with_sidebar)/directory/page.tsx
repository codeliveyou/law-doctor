"use client"

import { makeTree } from "@/components/common/MakeTree"
import Pagination from "@/components/common/Pagination"
import Header from "@/components/directory/Header"
import { ScrollArea } from "@radix-ui/themes"
import { useState } from "react"

const treedata = [
  { label: "Judical Events", count: 1139 },
  {
    label: "Traditional Customs",
    count: 1139,
    children: [
      { label: "1", count: 1000 },
      {
        label: "2",
        count: 1000,
        children: [
          {
            label: "2.1",
            count: 1000
          },
          {
            label: "2.2",
            count: 1000
          },
          {
            label: "2.3",
            count: 1000,
            children: [
              {
                label: "2.3.1",
                count: 1000
              },
              {
                label: "2.3.2",
                count: 1000,
                children: [
                  {
                    label: "2.3.2.1",
                    count: 1000
                  },
                  {
                    label: "2.3.2.2",
                    count: 1000
                  },
                ]
              },
            ]
          },
        ]
      },
      { label: "3", count: 1000 },
      { label: "4", count: 1000 },
    ]
  },
  { label: "State Administration", count: 1139 },
  { label: "Agrarian", count: 1139 },
  { label: "Arbitration & Alternative Dispute Resolution", count: 1139 },
  { label: "Customs & Excise", count: 1139 },
  { label: "Intellectual Property Rights", count: 1139 },
  { label: "International Law", count: 1139 },
  { label: "Capital of Nusantara", count: 1139 },
  { label: "Immigration", count: 1139 },
  { label: "Bankruptcy", count: 1139 },
  { label: "Occupational Safety & Health", count: 1139 },
  { label: "Occupational Safety & Health", count: 3465 },
  { label: "Constitution, Human Rights & State Order", count: 3465 },
  { label: "Living environment", count: 3465 },
  { label: "Legal Entity / SOE & BUMD Organizations", count: 3465 },
  { label: "Regional Autonomy", count: 3465 },
  { label: "Tax & PNBP", count: 3465 },
  { label: "Capital Market", count: 3465 },
  { label: "Investment", count: 3465 },
  { label: "Civil", count: 3465 },
  { label: "Consumer Protection", count: 3465 },
  { label: "Business Competition", count: 3465 },
  { label: "Criminal", count: 3465 },
]

export default function () {
  const [page, setPage] = useState(5)

  return (
    <>
      <ScrollArea scrollbars="vertical" type="scroll">
        <div className="max-w-screen-lg mx-auto px-2 sm:px-4 max-sm:my-4">
          <div className="flex flex-col gap-6 bg-gray-900 sm:sticky top-0 sm:pt-8 sm:pb-4">
            <Header page="index" />
          </div>
          <div className="flex gap-6 py-6">
            <div className="flex-1 flex flex-col gap-3">
              {
                makeTree(treedata.slice(0, 12))
              }
            </div>
            <div className="flex-1 flex flex-col gap-3 max-sm:hidden">
              {
                makeTree(treedata.slice(12))
              }
            </div>
          </div>
        </div>
      </ScrollArea>

      <div
        className="flex justify-center pb-4 pt-6 sticky bottom-0 mt-2 sm:hidden"
        style={{ background: "linear-gradient(#12182300 0%, #121823 25%)" }}
      >
        <Pagination totalPages={30} onPageChange={setPage} currentPage={page} />
      </div>
    </>
  )
}