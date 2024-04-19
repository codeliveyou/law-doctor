"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

function PaginationBtn({ page, active, className, onClick }:
  {
    page: number
    active?: boolean
    className?: string
    onClick: Function
  }) {
  return (
    <div className={`text-slate-200 text-xs h-7 w-7 flex items-center justify-center rounded-md cursor-pointer ${active && "border border-blue-300"} ${className}`}
      key={page} onClick={() => onClick(page)}>
      {page}
    </div>
  )
}

export default function (
  {
    totalItems, totalPages, currentPage, onPageChange
  }: {
    totalItems?: number
    totalPages: number
    currentPage: number
    onPageChange: Function
  }
) {
  const begin = Math.max(1, currentPage - 2);
  const end = Math.min(begin + 4, totalPages);
  const pages = [...Array(end - begin + 1)].map((it, i) => begin + i);

  return (
    <div className="flex gap-4 items-center">
      {totalItems && <div className="text-slate-400 text-sm max-sm:hidden">Total {totalItems} items</div>}
      <div className="flex items-center gap-0.5">
        {currentPage !== 1 && <div className="p-1 rounded-md cursor-pointer" onClick={() => onPageChange(currentPage - 1)}>
          <ChevronLeftIcon />
        </div>}
        {begin > 1 && <PaginationBtn page={1} className="max-sm:hidden" onClick={onPageChange} />}
        {begin > 2 && <Image src="/images/dots.svg" width={15} height={5} alt="dots" className="max-sm:hidden" />}
        {
          pages.map(page => <PaginationBtn key={page} page={page} active={currentPage === page} onClick={onPageChange} />)
        }
        {end < totalPages - 1 && <Image src="/images/dots.svg" width={15} height={5} alt="dots" className="max-sm:hidden" />}
        {end < totalPages && <PaginationBtn page={totalPages} className="max-sm:hidden" onClick={onPageChange} />}
        {currentPage !== totalPages && <div className="p-1 rounded-md cursor-pointer" onClick={() => onPageChange(currentPage + 1)}>
          <ChevronRightIcon />
        </div>}
      </div>
    </div>
  )
}