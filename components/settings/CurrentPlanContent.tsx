import { Button, Separator } from "@radix-ui/themes";
import Image from "next/image";

export default function CurrentPlanContent() {
  return (
    <>
      <div className="mt-4 flex justify-between">
        <div className="font-medium">Basic Plan</div>
        <div className="font-medium">Rp 800,000<span className="text-indigo-200">/month</span></div>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex-1">
          <Separator size="4" />
        </div>
        <div className="text-sm">Next payment at: 12 March, 2024</div>
        <div className="flex-1">
          <Separator size="4" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2 items-start">
          <Image src="/images/check.svg" width={18} height={18} alt="check" />
          <div className="text-indigo-200 text-xs font-medium">For individual users i.e. lawyers, professionals etc</div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src="/images/check.svg" width={18} height={18} alt="check" />
          <div className="text-indigo-200 text-xs font-medium">Cost per user</div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src="/images/check.svg" width={18} height={18} alt="check" />
          <div className="text-indigo-200 text-xs font-medium">Conversational semantic search as research assistant</div>
        </div>
        <div className="flex gap-2 items-start">
          <Image src="/images/check.svg" width={18} height={18} alt="check" />
          <div className="text-indigo-200 text-xs font-medium">Law directory with updated law and regulation</div>
        </div>
      </div>
      <div className="mt-5 bg-gray-900 sm:bg-gray-800 p-3 ps-4 rounded-lg flex justify-between items-center">
        <div className="text-sm">Cancel your membership?</div>
        <Button color="gray" variant="soft" >Cancel Plan</Button>
      </div>
    </>
  )
}