"use client"

import { Avatar, IconButton } from "@radix-ui/themes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function (
  { onClickHamburgur, collapsable, hideMenu }: {
    onClickHamburgur?: Function
    collapsable?: Boolean
    hideMenu?: Function
  }
) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const showHistory = pathname.startsWith("/research")

  function hamburgurClicked() {
    onClickHamburgur && onClickHamburgur();

    if (collapsable)
      setCollapsed(!collapsed);
  }

  function redirect(url: string) {
    return () => {
      router.push(url);
      hideMenu && hideMenu();
    }
  }

  return (
    <div className="flex flex-col w-full sm:max-w-60 max-w-72">
      <div className="px-7 py-5 gap-6 flex">
        <Image
          src="/images/hamburger.svg" width={20} height={24} alt="hamburger"
          className="cursor-pointer"
          onClick={hamburgurClicked}
        />
        <Image src="/images/logo.svg" width={90} height={20} alt="logo"
          className={collapsed ? "hidden" : ""}
        />
      </div>
      <div className="px-3 py-4 flex flex-col gap-1 border-b border-slate-800">
        <div className={`px-4 py-3 flex gap-3 rounded-xl cursor-pointer ${pathname.startsWith("/research") ? "bg-slate-800" : "hover:bg-gray-800"}`} onClick={redirect("/research")}>
          <Image src="/images/research-sidebar.svg" width={16} height={16} alt="Research" className="py-0.5" />
          <div className={`text-indigo-300 text-sm font-medium ${collapsed && 'hidden'}`}>Research</div>
        </div>
        <div className={`px-4 py-3 flex gap-3 rounded-xl cursor-pointer ${pathname.startsWith("/directory") ? "bg-slate-800" : "hover:bg-gray-800"}`} onClick={redirect("/directory")}>
          <Image src="/images/directory.svg" width={16} height={16} alt="Research" className="py-0.5" />
          <div className={`text-indigo-300 text-sm font-medium ${collapsed && 'hidden'}`}>Directory</div>
        </div>
      </div>
      <div className="px-3 py-4 flex-1">
        <div className={`flex flex-col gap-6 ${(!showHistory || collapsed) && 'hidden'}`}>
          <div className="flex flex-col gap-2">
            <div className="text-slate-400 text-xs">Today</div>
            <div className="flex h-6 px-2 rounded-[3px] cursor-pointer justify-center items-center hover:bg-gray-800">
              <div className="text-indigo-200 text-xs line-clamp-1">
                I am having problem related to something that I don't know. I need assistance
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-slate-400 text-xs">Yesterday</div>
            <div className="flex h-6 px-2 rounded-[3px] cursor-pointer justify-center items-center hover:bg-gray-800">
              <div className="text-indigo-200 text-xs line-clamp-1">
                I am trying to solve my problem still and still looking for answers
              </div>
            </div>
            <div className="flex h-6 px-2 rounded-[3px] cursor-pointer justify-center items-center hover:bg-gray-800">
              <div className="text-indigo-200 text-xs line-clamp-1">
                My client got trouble with his office and I am trying to help him ge
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`p-3 ${collapsed && 'hidden'} select-none`} onClick={redirect("/settings/plan")}>
        <div className="p-2 bg-gray-800 rounded-lg border transition-all border-slate-600 flex flex-col gap-2 hover:border-[#004CB3] upgrade-zajan">
          <div className="flex flex-col gap-2">
            <Image src="/images/magic-blue.svg" width={24} height={24} alt="magic" />
            <div className="flex flex-col gap-1">
              <div className="text-slate-200">Upgrade to AI Attorney</div>
              <div className="text-indigo-200 text-xs font-light">Enjoy the enhanced benefits with Integrated AI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="py-2 px-2.5 bg-gray-800 rounded-lg flex justify-between">
          <Avatar radius="full" fallback="J" size="2" />
          {collapsed || <IconButton radius="full" color="gray" variant="soft" onClick={redirect("/settings")}>
            <Image src="/images/settings.svg" width={16} height={16} alt="settings" />
          </IconButton>}
        </div>
      </div>
    </div>
  )
}