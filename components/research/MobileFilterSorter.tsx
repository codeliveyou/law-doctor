"use client"

import { Button, Checkbox, Radio, Separator, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import YearSelector from "./YearSelector";

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
          <div className="flex p-4 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-slate-200 text-sm font-medium">Legal Status</div>
              <div className="text-indigo-200 text-xs">Choose the legal status of law</div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm">
              <label className="flex gap-2 items-center">
                <Checkbox />
                Not Revoked / Changed
              </label>
              <label className="flex gap-2 items-center">
                <Checkbox />
                Revoked
              </label>
              <label className="flex gap-2 items-center">
                <Checkbox />
                Has Been Changed
              </label>
              <label className="flex gap-2 items-center">
                <Checkbox />
                Partially Revoked
              </label>
              <label className="flex gap-2 items-center">
                <Checkbox />
                Partially Revoked & Revoked
              </label>
            </div>
          </div>
          <Separator size="4" />
          <div className="flex p-4 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-slate-200 text-sm font-medium">Language</div>
              <div className="text-indigo-200 text-xs">Select the language you want to read</div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm">
              <label className="flex gap-2 items-center">
                <Checkbox />
                English
              </label>
              <label className="flex gap-2 items-center">
                <Checkbox />
                Indonesian
              </label>
            </div>
          </div>
          <Separator size="4" />
          <div className="flex p-4 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-slate-200 text-sm font-medium">Effective year</div>
              <div className="text-indigo-200 text-xs">Range of year the law published</div>
            </div>
            <div className="flex gap-2 items-center">
              <YearSelector from={1999} to={2012} />
              <div className="text-slate-400 text-sm">-</div>
              <YearSelector from={1999} to={2012} />
            </div>
          </div>
          <Separator size="4" />
          <div className="flex p-4 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-slate-200 text-sm font-medium">Sort by</div>
              <div className="text-indigo-200 text-xs">Sort the results by newest or relevant</div>
            </div>
            <div className="flex flex-col gap-3 text-white text-sm">
              <label className="flex gap-2 items-center">
                <Radio name="sort" value="newest" />
                Newest
              </label>
              <label className="flex gap-2 items-center">
                <Radio name="sort" value="relevant" />
                Relevant
              </label>
            </div>
          </div>
          <div className="p-4 rounded-t-xl bg-gray-800 flex flex-col figma-shadow">
            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </>
  )
}