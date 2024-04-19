"use client"

import Image from "next/image"
import { useState } from "react"
import Sidebar from "../common/Sidebar";
import LawSource from "./LawSource";
import Popup from "../common/MobileBottomPopup";
import { usePathname, useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [showLawSource, setShowLawSource] = useState(false);

  return (
    <>
      <div className="flex gap-4 fixed w-full h-16 items-center px-6 bg-neutral-900 rounded-b-xl sm:hidden z-30">
        <Image src="/images/hamburger.svg" width={24} height={24} alt="hamburger" onClick={() => setShowMenu(true)} />
        <div className="w-6"></div>
        <div className="flex-1 text-center">Research</div>
        <Image src="/images/database.svg" width={24} height={24} alt="database" onClick={() => setShowLawSource(true)} />
        <Image
          src={pathname === "/research" ? "/images/chat-plus-disabled.svg" : "/images/chat-plus.svg"}
          onClick={() => router.push("/research")}
          width={24} height={24} alt="chat-plus"
        />
      </div>

      <div className={`z-50 sm:hidden transition-all flex fixed h-screen w-screen rounded-r-2xl shadow-lg py-[5px] ${showMenu ? 'left-0' : '-left-full'}`}>
        <div className="w-72 bg-gray-900 overflow-y-auto flex">
          <Sidebar onClickHamburgur={() => setShowMenu(false)} />
        </div>
        <div className={`flex-1 transition-opacity bg-black ${showMenu ? 'opacity-20' : 'opacity-0'}`} onClick={() => setShowMenu(false)} ></div>
      </div>

      <Popup show={showLawSource} setShow={setShowLawSource}>
        <div className="mb-3">
          <LawSource onClose={() => setShowLawSource(false)} />
        </div>
      </Popup>
    </>
  )
}