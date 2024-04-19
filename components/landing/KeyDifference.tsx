"use client"

import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: 'Engineered for maximum time optimization',
    caption: 'Expertly engineered to streamline efficiency, our innovative solutions empower unprecedented time optimization'
  },
  {
    title: 'Fast, reliable and accurate',
    caption: 'Using the power of AI to perform previously tedious tasks'
  },
  {
    title: 'One-stop access to your every legal queries',
    caption: 'Unveil a world of comprehensive legal expertise at your fingertips, seamlessly accessible'
  },
  {
    title: 'Advice solutions with expertise',
    caption: 'Unlock tailored counsel from industry pioneers, empowering your success with unparalleled expertise'
  },
]

export default function () {
  const [tab, setTab] = useState(0);

  return (
    <div className="py-20 sm:py-32 mx-6 lg:mx-auto max-w-screen-lg">
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex gap-10 flex-col flex-1">
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
        <div className="flex justify-center items-center bg-slate-800 flex-1 min-h-36 rounded-xl">
          Image here
        </div>
      </div>
    </div>
  )
}