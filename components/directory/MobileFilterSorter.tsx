"use client"

import { Button, Checkbox, Radio, Separator, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import FilterContent from "./FilterContent";

export default function () {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileFilter = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <div className={`fixed w-screen h-screen bg-gray-950 bg-opacity-60 top-0 z-40 ${showMobileMenu || "hidden"}`} onClick={toggleMobileFilter}></div>
      <div className={`flex flex-col figma-shadow fixed bottom-0 w-full bg-neutral-900 rounded-t-xl sm:hidden z-40 justify-center items-center transition-transform ${showMobileMenu ? "translate-y-0" : "translate-y-[calc(100%-60px)]"}`}>
        <div className="w-10 h-1 bg-slate-500 rounded-[33px] mt-2" />
        <div className="flex px-4 w-full items-center">
          <div className={`w-24 flex justify-start ${showMobileMenu || "hidden"}`} onClick={toggleMobileFilter}>
            <Image src="/images/chevron-left.svg" width={24} height={24} alt="left" />
          </div>
          <div className="text-slate-200 text-sm font-medium flex-1 pt-3 pb-4 text-center select-none" onClick={toggleMobileFilter}>All Filters</div>
          <div className={`w-24 flex justify-end ${showMobileMenu || "hidden"}`}>
            <div className="text-slate-600 text-sm font-medium">Clear Filters</div>
          </div>
        </div>

        <div className="max-h-[calc(100vh-110px)] w-full overflow-y-auto">
          <FilterContent />
        </div>
      </div>
    </>
  )
}