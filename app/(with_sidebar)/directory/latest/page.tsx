"use client"

import Pagination from "@/components/common/Pagination"
import Header from "@/components/directory/Header"
import LatestItem from "@/components/directory/LatestItem"
import Image from "next/image"
import { useState } from "react"

export default function LatestPage() {
  const [page, setPage] = useState(6)
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4 pb-4 max-sm:my-4 flex flex-col gap-4">
        <div className="flex flex-col gap-6 bg-gray-900 sm:sticky top-0 sm:pt-8 pb-4">
          <Header page="latest" />
        </div>

        <div className="flex select-none overflow-x-auto text-nowrap border-b-2 border-b-gray-800">
          <div className="text-gray-100 text-sm font-medium border-b-blue-800 border-b-2 p-2">Peraturan Tingkat Pusat</div>
          <div className="text-slate-300 text-sm font-medium p-2">Peraturan Menteri</div>
          <div className="text-slate-300 text-sm font-medium p-2">Peraturan Badan/Lembaga</div>
          <div className="text-slate-300 text-sm font-medium p-2">Peraturan Daerah</div>
          <div className="text-slate-300 text-sm font-medium p-2">Permenkumham</div>
          <div className="text-slate-300 text-sm font-medium p-2">Terjemah Resmi</div>
          <div className="text-slate-300 text-sm font-medium p-2">Penerbitan Putusan MK</div>
        </div>
        <div className="bg-gray-800 rounded-2xl flex flex-col gap-5 p-4">

          <LatestItem />
          <LatestItem />
          <LatestItem />

          <div className="flex justify-between max-sm:flex-col items-center gap-2">
            <Pagination totalPages={50} currentPage={page} totalItems={85} onPageChange={setPage} />
            <div className="flex gap-2 items-center">
              <div className="text-indigo-300 font-medium">Check all the Regulations</div>
              <Image src="/images/open-newtab.svg" width={18} height={18} alt="open" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}