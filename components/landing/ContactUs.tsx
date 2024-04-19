import { Separator } from "@radix-ui/themes";
import WaitListForm from "./WaitListForm";
import Image from "next/image";

export default function () {
  return (
    <div className="relative overflow-x-hidden" id="form">
      <div className="absolute w-[700px] h-[700px] opacity-30 -z-10" style={{
        background: "radial-gradient(40% 40%, #055EB5 0%, #0000 100%)"
      }}></div>
      <div className="py-20 sm:py-32 lg:max-w-screen-lg lg:mx-auto mx-6">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-2">
                <div className="text-slate-200 text-3xl font-clash leading-9">
                  Legal can be simple, Get a demo
                </div>
                <div className="text-slate-400 text-sm leading-tight">
                  Immerse yourself in our seamless solution, experience simplicity and advanced AI firsthand
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-start justify-end shrink-0">
                    <Image src="/images/sales-graph.svg" width={36} height={36} alt="sales-graph" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      Unlock Your Business Potential
                    </div>
                    <div className="text-slate-400 text-sm">
                      Unleash your competitive edge and achieve maximum results
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-start justify-end shrink-0">
                    <Image src="/images/stand-out.svg" width={36} height={36} alt="sales-graph" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      Breakthrough Innovation Awaits
                    </div>
                    <div className="text-slate-400 text-sm">
                      Innovative solutions propelling you to unparalleled greatness
                    </div>
                  </div>
                </div>
                <Separator size="4" />
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-start justify-end shrink-0">
                    <Image src="/images/hand-up.svg" width={36} height={36} alt="sales-graph" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      Harness the Power of AI Innovation
                    </div>
                    <div className="text-slate-400 text-sm">
                      Empower business breakthroughs with AI at your command
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-start justify-end shrink-0">
                    <Image src="/images/pricing.svg" width={36} height={36} alt="sales-graph" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      We Offer Transparent Pricing
                    </div>
                    <div className="text-slate-400 text-sm">
                      Embrace our ethical pricing philosophy, designed with fairness
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-900 rounded-2xl flex flex-col gap-6 p-6">
              <div className="text-gray-200 text-lg font-inter">
                Gain a Confident Edge: Unrivaled Legal, Regulatory, and Compliance Solutions
              </div>
              <WaitListForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}