"use client"

import Image from "next/image";
import CurrentPlanContent from "./CurrentPlanContent";
import { useState } from "react";
import Popup from "../common/MobileBottomPopup";

export default function CurrentPlan() {
  const [showPlan, setShowPlan] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-medium text-xl">Current Plan</div>
        <div className="flex flex-col gap-3 bg-gray-800 p-4 rounded-2xl">
          <div className="bg-gray-900 flex flex-col rounded-xl px-4 pb-4 max-sm:hidden">
            <CurrentPlanContent />
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl sm:hidden">
            <div className="flex gap-2">
              <Image src="/images/plan.svg" width={20} height={20} alt="plan" />
              <div className="text-indigo-200 text-sm">Plan</div>
            </div>
            <div className="flex gap-2 select-none" onClick={() => setShowPlan(true)}>
              <div className="text-sm font-medium">Basic</div>
              <Image src="/images/chevron-right.svg" width={18} height={18} alt="go" />
            </div>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <div className="flex gap-2">
              <Image src="/images/pay-card.svg" width={20} height={20} alt="pay-card" />
              <div className="text-indigo-200 text-sm">Payment Type</div>
            </div>
            <div className="flex gap-2 select-none">
              <Image src="/images/visa-sample.svg" width={18} height={18} alt="visa-sample" />
              <div className="text-sm font-medium">Mastercard-1234</div>
            </div>
          </div>
        </div>
      </div>

      <Popup show={showPlan} setShow={setShowPlan}>
        <div className="mb-7 flex justify-between items-start">
          <div className="text-lg">Plan details</div>
          <Image src="/images/icon-close.svg" width={24} height={24} alt="close" onClick={() => setShowPlan(false)} />
        </div>
        <div className="bg-gray-800 flex flex-col rounded-xl px-4 pb-4 gap-7">
          <CurrentPlanContent />
        </div>
      </Popup>
    </>
  )
}