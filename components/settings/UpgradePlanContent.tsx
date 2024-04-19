import { Button, Separator } from "@radix-ui/themes";
import Image from "next/image";
import ProfessionalBadge from "./ProfessionalBadge";
import EnterpriseBadge from "./EnterpriseBadge";


export default function UpgradePlanContent() {
  return (
    <>
      <div className="flex-1 p-3 bg-gray-800 sm:bg-gray-900 rounded-2xl flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-3">
          <ProfessionalBadge />
          <div className="text-xs">AI Tools to take your work to the next level, with added benefits from the standard plan</div>
          <div>
            <span className="text-xl">Rp 1,500,000</span>
            <span className="text-indigo-200 text-sm">/month</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">For private sector i.e. advisory, compliance teams etc</div>
            </div>
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">Cost per user</div>
            </div>
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">Conversational AI bot as research assistant</div>
            </div>
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">Generative AI to identify risks & potential non-compliance issues, generate templates and assessment reports</div>
            </div>
          </div>
        </div>
        <Button>Upgrade Plan</Button>
      </div>
      <div className="flex-1 p-3 bg-gray-800 sm:bg-gray-900 rounded-2xl flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-3">
          <EnterpriseBadge />
          <div className="text-xs">Comprehensive plan for university students with advanced search and law directory</div>
          <div className="text-xl">
            Customer Pricing
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">Only for universities and institutions for learning</div>
            </div>
            <div className="flex gap-2 items-start">
              <Image src="/images/check.svg" width={18} height={18} alt="check" />
              <div className="text-indigo-200 text-xs font-medium">No user limit</div>
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
        </div>
        <Button>Upgrade Plan</Button>
      </div>
    </>
  )
}