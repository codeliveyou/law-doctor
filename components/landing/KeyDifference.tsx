"use client"

import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: 'Engineered for maximum time optimization',
    caption: 'Expertly engineered to streamline efficiency, our innovative solutions empower unprecedented time optimization',
    image: '/images/image-engineered-for-maximum-time-optimization.svg'
  },
  {
    title: 'Pioneer accuracy, emphasis truth',
    caption: 'Bring justice to your cases, we provide accurate results so you don\'t have to fact check again',
    image: '/images/image-pioneer-accuracy-emphasis-truth.svg'
  },
  {
    title: 'One-stop access to your every legal queries',
    caption: 'Unveil a world of comprehensive legal expertise at your fingertips, seamlessly accessible',
    image: '/images/image-one-stop-access-to-your-every-legal-queries.svg'
  },
]

export default function () {
  const [tab, setTab] = useState(0);

  return (
    <div className="pt-20 sm:pt-32">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="flex-1 flex justify-end">
          <div className="flex flex-col gap-10 lg:max-w-[512px] mx-6 lg:m-0">
            <div className="flex flex-col gap-4 max-md:text-center">
              <div>
                <Badge size="3">Key Differentiators</Badge>
              </div>
              <div className="font-clash text-3xl text-slate-200">
                Orthos brings value and make your time worth
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {items.map((item, i) => (
                <div key={i} onClick={() => setTab(i)}
                  className={`cursor-pointer rounded-xl bg-gray-900 p-4 flex justify-between border-2 ${tab === i ? 'border-blue-800' : 'border-gray-900'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="text-slate-200">
                      {item.title}
                    </div>
                    {tab === i && <div className="text-slate-400 text-sm">
                      {item.caption}
                    </div>}
                  </div>
                  <div className="min-w-6">
                    <Image src={tab === i ? "/images/circle-minus.svg" : "/images/circle-plus.svg"}
                      width={22} height={22} alt="plus" />
                  </div>
                </div>)
              )}
            </div>
          </div>
        </div>
        <Image src={items[tab].image} width={708} height={600} alt={items[tab].image}
          className="flex-1" />
      </div>
    </div>
  )
}