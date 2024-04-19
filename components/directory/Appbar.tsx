"use client"

import Image from "next/image"
import { useState } from "react"
import Sidebar from "../common/Sidebar";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";

function DetailsAppbar() {
  const router = useRouter();
  return (
    <div className="flex gap-4 fixed w-full h-16 items-center px-6 bg-neutral-900 rounded-b-xl sm:hidden z-30">
      <Image src="/images/go-back-indigo.svg" width={24} height={24} alt="goback" onClick={() => router.back()} />
      <div>Sengketa & Sanksi</div>
    </div>
  )
}

function ReadmoreAppbar() {
  const router = useRouter();
  return (
    <div className="flex gap-4 fixed w-full h-16 items-center px-6 bg-neutral-900 rounded-b-xl sm:hidden z-30">
      <Image src="/images/go-back-indigo.svg" width={24} height={24} alt="goback" onClick={() => router.back()} />
      <div>Back to List</div>
    </div>
  )
}

function IndexAppbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div className="flex gap-4 fixed w-full h-16 items-center px-6 bg-neutral-900 rounded-b-xl sm:hidden z-30">
        {
          showSearch ? <TextField.Root placeholder="Search any law within the directory"
            className="border hover:border-slate-600 border-gray-800 flex-1"
            style={{ boxShadow: 'none' }}
            size="2" variant="surface" radius="large">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
            : <>
              <Image src="/images/hamburger.svg" width={24} height={24} alt="hamburger" onClick={() => setShowMenu(true)} />
              <div className="flex-1 text-center">Directory</div>
              <Image src="/images/search.svg" width={24} height={24} alt="database" onClick={() => setShowSearch(true)} />
            </>
        }
      </div>

      <div className={`z-50 sm:hidden transition-all flex fixed h-screen w-screen rounded-r-2xl shadow-lg py-[5px] ${showMenu ? 'left-0' : '-left-full'}`}>
        <div className="w-72 bg-gray-900 overflow-y-auto flex">
          <Sidebar onClickHamburgur={() => setShowMenu(false)} hideMenu={() => setShowMenu(false)} />
        </div>
        <div className={`flex-1 transition-opacity bg-black ${showMenu ? 'opacity-20' : 'opacity-0'}`} onClick={() => setShowMenu(false)} ></div>
      </div>
    </>
  )
}

export default function Appbar() {
  const pathname = usePathname();

  if (pathname === "/directory/readmore")
    return <ReadmoreAppbar />

  if (pathname === "/directory/details")
    return <DetailsAppbar />

  return <IndexAppbar />
}