import { Badge } from "@radix-ui/themes";
import Image from "next/image";

export default function () {
  return (
    <div className="py-20 sm:py-32 mx-6 lg:mx-auto lg:max-w-screen-lg relative">
      <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mt-20 sm:-mt-[150px] lg:ms-96 sm:ms-48 ms-10"
        style={{
          background: "radial-gradient(50% 50%, rgba(5, 94, 181, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%)"
        }}
      ></div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-4 items-center">
          <Badge size="3">More About Orthos</Badge>
          <div className="text-slate-200 text-3xl font-clash text-center">
            Orthos is an Advanced AI Model empowering organizations to navigate complex legal and regulatory landscapes with ease
          </div>
        </div>
        <div className="flex justify-between gap-10 lg:gap-16 flex-col sm:flex-row">
          <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
            <div className="p-2">
              <Image src="/images/ai-chip.svg" width={64} height={64} alt="AI chip" className="w-16 h-16" />
            </div>
            <div className="font-sans text-2xl text-slate-200">
              AI-powered Legal Navigation
            </div>
            <div className="text-slate-400">
              We simplify legal and regulatory complexities for law firms and businesses using advanced AI
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
            <div className="p-2">
              <Image src="/images/rocket.svg" width={64} height={64} alt="AI chip" className="w-16 h-16" />
            </div>
            <div className="font-sans text-2xl text-slate-200">
              Automate Legal Tasks, Reduce Errors
            </div>
            <div className="text-slate-400">
              Our software automates routine legal tasks like contracts and research, freeing up lawyers for complex work
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:items-center max-sm:text-center">
            <div className="p-2">
              <Image src="/images/balancer.svg" width={64} height={64} alt="AI chip" className="w-16 h-16" />
            </div>
            <div className="font-sans text-2xl text-slate-200">
              Mitigate Risk, Ensure Compliance
            </div>
            <div className="text-slate-400">
              Orthos identifies and prioritizes legal risks using AI, reducing errors and ensuring regulatory compliance
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}