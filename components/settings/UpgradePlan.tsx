"use client"

import Image from "next/image";
import ProfessionalBadge from "./ProfessionalBadge";
import UpgradePlanContent from "./UpgradePlanContent";
import EnterpriseBadge from "./EnterpriseBadge";
import { useState } from "react";
import Popup from "../common/MobileBottomPopup";

export default function UpgradePlan() {
  const [showPlan, setShowPlan] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-medium text-xl">Upgrade Plan</div>
        <div className="flex gap-4 bg-gray-800 p-4 rounded-2xl max-sm:hidden">
          <UpgradePlanContent />
        </div>
        <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded-2xl sm:hidden">
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <ProfessionalBadge />
            <div className="flex gap-2 select-none items-center" onClick={() => setShowPlan(true)}>
              <Image src="/images/plus.svg" width={18} height={18} alt="plus" />
              <div className="text-indigo-300 text-sm font-medium">Upgrade Plan</div>
              <Image src="/images/open-newtab.svg" width={18} height={18} alt="newtab" />
            </div>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <EnterpriseBadge />
            <div className="flex gap-2 select-none items-center" onClick={() => setShowPlan(true)}>
              <Image src="/images/quote.svg" width={18} height={18} alt="quote" />
              <div className="text-indigo-300 text-sm font-medium">Get Special Quote</div>
              <Image src="/images/open-newtab.svg" width={18} height={18} alt="newtab" />
            </div>
          </div>
        </div>
      </div>

      <Popup show={showPlan} setShow={setShowPlan}>
        <div className="mb-7 flex justify-between items-start">
          <div className="text-lg">Upgrade Plan</div>
          <Image src="/images/icon-close.svg" width={24} height={24} alt="close" onClick={() => setShowPlan(false)} />
        </div>
        <div className="flex flex-col gap-4">
          <UpgradePlanContent />
        </div>
      </Popup>
    </>
  )
}