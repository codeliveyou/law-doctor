import Image from "next/image";
import Toolbar from "@/components/research/Toolbar";
import SearchBox from "@/components/research/SearchBox";

export default function () {
  return (
    <>
      <Toolbar disableNewChat />
      <div className="lg:max-w-[800px] xl:max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col gap-6 w-100 max-sm:pt-32 pb-8">
          <div className="text-center text-slate-200 text-3xl font-clash leading-9">
            Know anything, instantly.<br />
            Research made easy
          </div>

          <SearchBox />

          <div className="flex gap-4 max-md:flex-col">
            <div className="flex-1 flex flex-col gap-2.5 bg-gray-800 rounded-xl p-4">
              <div className="flex gap-1.5">
                <Image src="/images/lightbulb.svg" width={16} height={16} alt="lightbulb" />
                <div className="text-slate-600 text-sm font-medium">Cut through the legalese</div>
              </div>
              <div className="text-slate-400 text-sm leading-tight">
                Our powerful search engine simplifies complex legal issues, making them easy to understand
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2.5 bg-gray-800 rounded-xl p-4">
              <div className="flex gap-1.5">
                <Image src="/images/lightbulb.svg" width={16} height={16} alt="lightbulb" />
                <div className="text-slate-600 text-sm font-medium">Get clear answers, now</div>
              </div>
              <div className="text-slate-400 text-sm leading-tight">
                Find immediate answers to your legal questions, tailored specifically to your situation
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2.5 bg-gray-800 rounded-xl p-4">
              <div className="flex gap-1.5">
                <Image src="/images/lightbulb.svg" width={16} height={16} alt="lightbulb" />
                <div className="text-slate-600 text-sm font-medium">Empower your legal journey</div>
              </div>
              <div className="text-slate-400 text-sm leading-tight">
                Navigate the legal system with confidence. Orthos guides you to your legal goals
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}