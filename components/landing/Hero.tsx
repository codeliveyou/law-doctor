import { Badge, Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div style={{
      background: "radial-gradient(23% 50% at 17% 50%, rgba(5, 94, 181, 0.3) 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}>
      <div className="pt-24 sm:pt-36 pb-10 mx-6 lg:mx-auto max-w-screen-lg">
        <div className="flex justify-between gap-10 flex-col md:flex-row">
          <div className="flex gap-2 flex-col md:w-[330px] flex-initial">
            <div className="text-slate-200 text-4xl sm:text-6xl font-sans text-balance">
              Make the complex, easier!
            </div>
            <div className="text-indigo-200">
              Revolutionize your legal research and advice with our advanced AI
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:w-[620px] flex-initial">
            <div className="rounded-[20px] p-4 bg-gray-900 border border-slate-600 flex-1">
              <div className="flex flex-col gap-8 m-1">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <Image src="/images/research.svg" width={24} height={24} alt="Research Icon" />
                    <Badge>With Semantic Search</Badge>
                  </div>
                  <div className="text-slate-200 text-2xl font-medium font-sans">Research</div>
                  <div className="text-indigo-200 text-sm">
                    Use smart search to understand your intent and deliver highly relevant results, going beyond just keywords
                  </div>
                </div>
                <Button>
                  <Link href="/#form">Speak with Orthos</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-[20px] p-4 bg-gray-900 border border-slate-600 flex-1">
              <div className="flex flex-col gap-8 m-1">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <Image src="/images/tryorthos.svg" width={24} height={24} alt="Try Orthos" />
                    <Badge>NEW!</Badge>
                  </div>
                  <div className="text-slate-200 text-2xl font-medium font-sans">Try Orthos AI</div>
                  <div className="text-indigo-200 text-sm">
                    Your AI Law Partner, helping you in your day to day research, synthesis, and analysis tasks.
                  </div>
                </div>
                <Button color="gray" variant="outline">
                  <Link href="/#form">Contact Our Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}