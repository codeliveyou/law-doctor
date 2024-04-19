import { Separator } from "@radix-ui/themes";
import Image from "next/image";
import LoginForm from "./LoginForm";

function USP({ classname }: {
  classname?: string
}) {
  return (
    <div className={`flex flex-col gap-6 ${classname}`}>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-end justify-end shrink-0">
          <Image src="/images/rocket-sm.svg" width={36} height={36} alt="sales-graph" />
        </div>
        <div className="flex flex-col">
          <div className="text-slate-200 text-lg font-medium">
            Power of AI in hands
          </div>
          <div className="text-slate-400 text-sm">
            You will be the pioneer of your business innovation
          </div>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-blue-700 bg-opacity-20 rounded-full flex items-end justify-end shrink-0">
          <Image src="/images/stand-out.svg" width={36} height={36} alt="sales-graph" />
        </div>
        <div className="flex flex-col">
          <div className="text-slate-200 text-lg font-medium">
            Stand out from rest
          </div>
          <div className="text-slate-400 text-sm">
            With our solutions hit your maximum potentials
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginMain() {
  return (
    <>
      <div className="flex justify-center">
        <Image src="/images/login-header-bg.svg" width={1440} height={122} alt="bg" />
      </div>
      <div className="pt-10 sm:pt-15 pb-10 mx-4 lg:mx-auto max-w-screen-lg">
        <div className="flex justify-between max-sm:flex-col gap-10">
          <div className="flex flex-col md:w-[330px] flex-initial gap-12">
            <div className="flex flex-col gap-8 max-sm:items-center">
              <Image src="/images/logo.svg" width={140} height={24} alt="logo" className="w-[186px]" />
              <div className="text-slate-200 text-3xl sm:font-medium font-clash max-sm:text-center">
                Make the legalities, easier
              </div>
            </div>
            <USP classname="max-sm:hidden" />
          </div>

          <LoginForm />
          <div className="sm:hidden pt-10">
            <USP />
          </div>
        </div>
      </div>
    </>
  )
}