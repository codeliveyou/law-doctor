"use client"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Radio, Separator, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Popup from "../common/MobileBottomPopup";
import { useState } from "react";

export default function Header({ page }: { page: string }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex justify-center sm:justify-between">
        <div className="font-clash text-3xl text-slate-200">Central Law Directory</div>
        <div className="md:min-w-[450px] max-sm:hidden">
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
      <div className="flex max-sm:hidden">
        <div className="flex border border-slate-700 p-[1px] rounded select-none cursor-pointer">
          <div className={`rounded px-3 py-1 text-sm ${page === "index" ? "bg-slate-800" : "hover:bg-gray-800"}`} onClick={() => router.push("/directory")}>
            Central Regulations
          </div>
          <div className={`rounded px-3 py-1 text-sm ${page === "index1" ? "bg-slate-800" : "hover:bg-gray-800"}`}>
            Regional Regulations
          </div>
          <div className={`rounded px-3 py-1 text-sm ${page === "index2" ? "bg-slate-800" : "hover:bg-gray-800"}`}>
            Decisions
          </div>
          <div className={`rounded px-3 py-1 text-sm ${page === "index3" ? "bg-slate-800" : "hover:bg-gray-800"}`}>
            Precedent
          </div>
          <div className={`rounded px-3 py-1 text-sm ${page === "latest" ? "bg-slate-800" : "hover:bg-gray-800"}`} onClick={() => router.push("/directory/latest")}>
            Latest Updates <span className="text-red-500">•</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 py-2 bg-gray-800 rounded-lg select-none sm:hidden" onClick={() => setShow(true)}>
        <div className="text-sm font-medium">Central Regulations</div>
        <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="dropdown" />
      </div>

      <Popup show={show} setShow={setShow}>
        <div className="mb-7 flex justify-between items-start">
          <div className="text-lg">Law Type</div>
          <Image src="/images/icon-close.svg" width={24} height={24} alt="close" onClick={() => setShow(false)} />
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex justify-between">
            <div className="text-sm">Central Regulations</div>
            <Radio
              name="lawtype" value="central_regulations"
              checked={page === "index"}
              onClick={() => router.push("/directory")}
            />
          </div>
          <Separator size="4" />
          <div className="flex justify-between">
            <div className="text-sm">Regional Regulations</div>
            <Radio name="lawtype" value="regular_regulations" />
          </div>
          <Separator size="4" />
          <div className="flex justify-between">
            <div className="text-sm">Decisions</div>
            <Radio name="lawtype" value="decisions" />
          </div>
          <Separator size="4" />
          <div className="flex justify-between">
            <div className="text-sm">Precedent</div>
            <Radio name="lawtype" value="precedent" />
          </div>
          <Separator size="4" />
          <div className="flex justify-between">
            <div className="text-sm">Latest Updates</div>
            <Radio
              name="lawtype" value="latest_updates"
              checked={page === "latest"}
              onClick={() => router.push("/directory/latest")}
            />
          </div>
        </div>
      </Popup>
    </>
  )
}