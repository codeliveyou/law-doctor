"use client"

import Toolbar from "@/components/research/Toolbar";
import SearchBox from "@/components/research/SearchBox";
import FilterSorter from "@/components/research/FilterSorter";
import SearchResultItem from "@/components/research/SearchResultItem";
import Pagination from "@/components/common/Pagination";
import { useState } from "react";
import MobileFilterSorter from "@/components/research/MobileFilterSorter";

export default function () {
  const [page, setPage] = useState(5);
  const totalPages = 10;
  const [legalStatus, setLegalStatus] = useState<string[]>([]);
  const [language, setLanguage] = useState<string[]>([]);

  return (
    <>
      <Toolbar />
      <div className="lg:max-w-[800px] xl:max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col gap-6 w-100 max-sm:pt-24 max-sm:pb-20">
          <SearchBox />

          <div className="max-sm:hidden">
            <FilterSorter
              legalStatus={legalStatus}
              setLegalStatus={setLegalStatus}
              language={language}
              setLanguage={setLanguage}
            />
          </div>

          <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
            <SearchResultItem />
            <SearchResultItem />
            <SearchResultItem />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center pb-4 pt-6 sticky bottom-14 sm:bottom-0 mt-2"
        style={{ background: "linear-gradient(#12182300 0%, #121823 25%)" }}
      >
        <Pagination totalPages={totalPages} onPageChange={setPage} currentPage={page} />
      </div>

      <MobileFilterSorter />
    </>
  )
}