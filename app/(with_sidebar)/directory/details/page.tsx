"use client"

import Pagination from "@/components/common/Pagination";
import FilterContent from "@/components/directory/FilterContent";
import MobileFilterSorter from "@/components/directory/MobileFilterSorter";
import ResultItem from "@/components/directory/ResultItem";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ScrollArea, Separator, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const [page, setPage] = useState(5);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-10 max-sm:pb-16 h-full">
        <div className="flex flex-col gap-6 py-4 h-full">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between max-sm:flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src="/images/go-back-lg.svg" width={32} height={32} alt="goback"
                  className="max-sm:hidden"
                  onClick={() => router.back()}
                />
                <div className="flex gap-2 text-slate-400 text-xs select-none">
                  <div>Home</div>
                  <div>/</div>
                  <div className="max-sm:hidden">Application Center</div>
                  <div className="sm:hidden">•••</div>
                  <div>/</div>
                  <div>Application List</div>
                  <div>/</div>
                  <div>An Application</div>
                </div>
                <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="dropdown" className="w-[10px]" />
              </div>
              <div className="xl:min-w-[450px] mr-3">
                <TextField.Root placeholder="Search any law within the directory"
                  className="border hover:border-slate-600 border-gray-800 group"
                  style={{ boxShadow: 'none' }}
                  size="2" variant="surface" radius="large">
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
            <div className="flex flex-col max-sm:hidden">
              <div className="text-3xl font-clash">Tariff Center Regulations</div>
              <div className="text-indigo-200">Collection of State Administration Center Regulations - Tariffs</div>
            </div>
          </div>
          <div className="overflow-y-auto h-full flex gap-4">
            <div className="bg-gray-800 rounded-2xl overflow-y-auto h-full max-md:hidden">
              <ScrollArea type="scroll" scrollbars="vertical" style={{ height: '100%' }}>
                <div className="flex justify-between p-3">
                  <div className="text-sm">All Filters</div>
                  <div className="text-sm text-slate-600">Clear Filters</div>
                </div>
                <Separator size="4" />
                <FilterContent />
              </ScrollArea>
            </div>
            <div className="flex-1">
              <ScrollArea type="scroll" scrollbars="vertical" style={{ height: '100%' }}>
                <div className="h-full flex gap-3 flex-col pr-3">
                  <ResultItem />
                  <ResultItem />
                  <ResultItem />
                  <ResultItem />
                  <ResultItem />

                  <div
                    className="flex justify-center pt-4 sticky bottom-0 mt-2"
                    style={{ background: "linear-gradient(#12182300 0%, #121823 25%)" }}
                  >
                    <Pagination totalPages={10} currentPage={page} onPageChange={setPage} totalItems={85} />
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>

      <MobileFilterSorter />
    </>
  )
}