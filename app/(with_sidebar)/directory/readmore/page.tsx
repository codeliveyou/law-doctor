"use client"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge, Button, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ReadMorePage() {
  const router = useRouter();

  return (
    <div className="max-w-screen-lg mx-auto px-4 h-full">
      <div className="flex flex-col gap-6 py-4 h-full">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/go-back-lg.svg" width={32} height={32} alt="goback"
                className="max-sm:hidden"
                onClick={() => router.back()}
              />
              <div className="flex gap-2 text-slate-400 text-xs select-none">
                <div>Home</div>
                <div className="max-sm:hidden">/</div>
                <div className="max-sm:hidden">Application Center</div>
                <div>/</div>
                <div>•••</div>
                <div>/</div>
                <div className="flex gap-1">
                  <div>Application List</div>
                  <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="dropdown" className="w-[10px]" />
                </div>
                <div>/</div>
                <div>An Application</div>
              </div>
            </div>
            <div className="xl:min-w-[450px] max-sm:hidden">
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
          <div className="flex flex-col">
            <div className="text-3xl font-clash">Presidential Regulation Number 35 of 2024</div>
            <div className="text-indigo-200">EMPLOYEE PERFORMANCE ALLOWANCE IN THE MINISTRY OF PUBLIC WORKS AND PUBLIC HOUSING</div>
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          <div className="flex flex-col gap-4 p-4 bg-gray-800 rounded-2xl">
            <div className="flex justify-between gap-2 max-sm:flex-col">
              <div className="flex text-indigo-200 text-xs font-medium gap-2">
                <div className="py-1 px-2 bg-gray-900 rounded border border-gray-800 text-indigo-200 text-xs font-medium">
                  Enacted: 03 Oct 2009
                </div>
                <div className="py-1 px-2 bg-gray-900 rounded border border-gray-800 text-indigo-200 text-xs font-medium">
                  Effective: 03 Oct 2009
                </div>
              </div>
              <div>
                <Button size="1" variant="soft" color="indigo" radius="large">
                  <Image src="/images/view.svg" width={16} height={16} alt="view" />
                  View Document
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl flex flex-col">
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Category</div>
                <div className="text-indigo-200 p-2">Presidential Regulation</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Initiator</div>
                <div className="text-indigo-200 p-2">Central Government</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Number</div>
                <div className="text-indigo-200 p-2">35</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Year</div>
                <div className="text-indigo-200 p-2">2024</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">About</div>
                <div className="text-indigo-200 p-2">Employee Performance Allowance in the Ministry of Public Works and Public Housing</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Place of Determination</div>
                <div className="text-indigo-200 p-2">Jakarta</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">The Officer Who Sets</div>
                <div className="text-indigo-200 p-2">Joko Widodo</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Year of Initiation</div>
                <div className="text-indigo-200 p-2">2024</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Invitation Number</div>
                <div className="text-indigo-200 p-2">49</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Status</div>
                <div className="text-indigo-200 p-2">49</div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Additional Number</div>
                <div className="text-indigo-200 p-2"><Badge color="green">Active</Badge></div>
              </div>
              <div className="flex text-xs">
                <div className="min-w-40 text-slate-400 p-2">Inviting Officer</div>
                <div className="text-indigo-200 p-2">PRATIKNO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}