"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6 gap-5 h-full max-sm:fixed bottom-0 max-sm:z-50 bg-gray-900 max-sm:h-[calc(100%-20px)] max-sm:rounded-t-xl">
      <div className="w-10 h-1 bg-slate-500 rounded-[33px] mt-2 self-center sm:hidden" />
      <div className="flex gap-2 items-center justify-between">
        <div className="text-slate-200 text-lg font-bold">
          UNDANG-UNDANG DASAR NEGARA REPUBLIK INDONESIA TAHUN 1945
        </div>
        <Image src="/images/icon-close.svg" width={24} height={24} alt="close"
          onClick={() => router.back()}
        />
      </div>
      <iframe src="/pdf/sample.pdf" className="flex-1 rounded-xl" />
    </div>
  )
}