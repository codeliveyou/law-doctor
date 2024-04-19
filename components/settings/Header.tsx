"use client"

import { SegmentedControl, Separator } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header({ page }: { page: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="font-clash text-3xl text-slate-200 max-sm:hidden">Settings</div>
        <SegmentedControl.Root value={page} className="border border-slate-700 p-1">
          <SegmentedControl.Item value="account" onClick={() => router.replace("/settings/account")}>
            <Image src="/images/user-circle.svg" width={75} height={20} alt="user" />
          </SegmentedControl.Item>
          <SegmentedControl.Item value="plan" onClick={() => router.replace("/settings/plan")}>
            <Image src="/images/plan-circle.svg" width={75} height={20} alt="plan" />
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>
      <div className="w-full pt-4 max-sm:hidden">
        <Separator size="4" />
      </div>
    </div>
  )
}