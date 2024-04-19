"use client"

import { Button } from "@radix-ui/themes";
import Image from "next/image";
import "./colors.css"
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-6 w-screen h-screen justify-center">
      <Image src="/images/fence.svg" width={171} height={140} alt="fence" className="py-8" />
      <div className="flex flex-col text-center">
        <div className="text-3xl font-clash">404: Path Blocked</div>
        <div className="text-indigo-200 font-inter">Apologies, the path you sought seems to have wandered into uncharted territory</div>
      </div>
      <div className="w-52 flex flex-col">
        <Button color="blue" onClick={() => router.back()}>
          <Image src="/images/toleft.svg" width={16} height={16} alt="left-arrow" />
          Back to Orthos
        </Button>
      </div>
    </div>
  )
}