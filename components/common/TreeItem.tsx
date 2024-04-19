"use client"

import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TreeItem(
  { label, children, count }:
    {
      label: string
      count?: number
      children?: React.ReactNode
    }) {
  const [collapsed, setCollapsed] = useState(true)
  const router = useRouter();

  function onClick() {
    if (children)
      setCollapsed(!collapsed)
    else
      router.push("/directory/details")
  }

  return (
    <div className="flex gap-2 flex-col">
      <div
        className="flex justify-between bg-gray-800 rounded-lg p-[9px] select-none border-[1px] border-gray-800 hover:bg-transparent hover:border-blue-800 items-center"
        onClick={onClick}
      >
        <div className="flex gap-2">
          <Image src="/images/folder.svg" width={16} height={16} alt="folder" />
          <div className="text-indigo-200 text-xs">
            {label}
          </div>
        </div>
        <div className="flex gap-2">
          <Badge color="indigo">{count}</Badge>
          <Image src={children ? `/images/chevron-${collapsed ? "down" : "up"}.svg` : "/images/newtab-dark.svg"}
            width={16} height={16} alt="down"
          />
        </div>
      </div>
      {
        children && !collapsed && (
          <div className="flex items-start">
            <Image src="/images/treeitem-connector.svg" width={28} height={32} alt="connector" className="-mt-2" />
            <div className="flex-1 flex flex-col gap-2">
              {children}
            </div>
          </div>
        )
      }
    </div>
  )
}