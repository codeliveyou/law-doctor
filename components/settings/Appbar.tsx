"use client"

import { Separator } from "@radix-ui/themes";
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function () {
  const router = useRouter();

  return (
    <div className="flex gap-4 fixed w-full h-16 items-center px-6 bg-neutral-900 rounded-b-xl sm:hidden z-30">
      <Image
        src="/images/go-back.svg" width={24} height={24} alt="go-back"
        onClick={() => router.back()}
      />
      <div>Settings</div>
    </div>
  )
}