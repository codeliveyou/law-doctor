"use client"

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge, Button, Separator } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-900 rounded-2xl border-[1px] border-gray-800 hover:border-blue-800 select-none">
      <div className="px-3 sm:px-6 py-3 flex flex-col gap-2">
        <div className="flex justify-between max-lg:flex-col gap-2">
          <div className="text-indigo-300 font-bold flex-1">
            Undang-Undang Nomor 11 Tahun 2008
          </div>
          <div className="flex text-indigo-200 text-xs font-medium gap-2">
            <div className="py-1 px-2 bg-gray-900 rounded border border-gray-800 text-indigo-200 text-xs font-medium">
              Enacted: 03 Oct 2009
            </div>
            <div className="py-1 px-2 bg-gray-900 rounded border border-gray-800 text-indigo-200 text-xs font-medium">
              Effective: 03 Oct 2009
            </div>
          </div>
        </div>
        <Separator size="4" />
        <div className="font-medium">
          EMPLOYEE PERFORMANCE ALLOWANCE IN THE MINISTRY OF PUBLIC WORKS AND PUBLIC HOUSING
        </div>
      </div>
      <Separator size="4" />
      <div className="flex justify-between px-3 md:px-6 py-3 flex-wrap">
        <div className="inline-flex gap-1.5 cursor-pointer">
          <div className="text-indigo-300 text-sm font-medium">Download PDF</div>
          <Image src="/images/download.svg" alt="download" width={11} height={14} />
        </div>

        <div className="inline-flex gap-1.5 cursor-pointer" onClick={() => router.push("/research/view")}>
          <div className="text-sm">
            <span className="text-slate-400">Action: </span>
            <span className="text-indigo-300">Read More</span>
          </div>
          <Image src="/images/newtab.svg" alt="download" width={14} height={14} />
        </div>

        <div className="md:hidden w-full my-2 bg-slate-600 h-[1px]">
        </div>

        <div className="text-sm">
          <span className="text-slate-400">Category: </span>
          <span className="text-indigo-300">Corporate Law</span>
        </div>

        <Badge color="green">Active</Badge>
      </div>
    </div>
  )
}