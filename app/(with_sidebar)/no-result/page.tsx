"use client"

import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-6 w-full h-full justify-center">
      <Image src="/images/empty-box.svg" width={184} height={200} alt="fence" />
      <div className="flex flex-col text-center">
        <div className="text-3xl font-clash">No results found</div>
        <div className="text-indigo-200 font-inter">Please try again, we could not locate any results matching your query</div>
      </div>
      <div className="w-52 flex flex-col">
        <Button color="blue" onClick={() => router.back()}>
          <Image src="/images/toleft.svg" width={16} height={16} alt="left-arrow" />
          Back to Main Page
        </Button>
      </div>
    </div>
  )
}