"use client"

import { useState } from "react";
import OTP from "../common/OTP";
import { Button, Separator, TextField } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const [enterOTP, setEnterOTP] = useState(false);

  return (
    <div className="flex flex-col gap-6 sm:w-[440px]">
      {
        enterOTP
          ? <>
            <div className="p-6 bg-gray-900 rounded-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-medium">Start Changing the World</div>
                <div className="text-slate-400 text-sm">Log in to enter Orthos.ai</div>
              </div>
              <div className="flex flex-col gap-3">
                <div>Please check the one time code sent to:</div>
                <div className="flex justify-between">
                  <div className="text-slate-400 text-sm">+62 812 3456 7890</div>
                  <div className="text-indigo-300 text-sm select-none flex items-center gap-2">
                    <Image src="/images/pencil.svg" width={18} height={18} alt="pencil" />
                    Edit
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-indigo-200 font-medium">Enter OTP</div>
                <OTP />
                <div className="flex justify-between mt-1">
                  <div className="text-slate-400 text-sm">Can't find it?</div>
                  <div className="text-indigo-300 text-sm select-none">Try again</div>
                </div>
              </div>
              <Button color="blue" size="3" onClick={() => setEnterOTP(true)}>Proceed</Button>
              <div className="text-center text-xs">
                By proceeding further, I automatically accept the <br />
                <Link href="#" className="text-indigo-300">Terms & Conditions</Link>
              </div>
            </div>
          </>
          : <>
            <div className="flex flex-col gap-4">
              <div className="p-6 bg-gray-900 rounded-2xl flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="text-xl font-medium">Start Changing the World</div>
                  <div className="text-slate-400 text-sm">Log in to enter Orthos.ai</div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-indigo-200 font-medium">Email ID</label>
                  <TextField.Root type="email" placeholder="Enter your email address" size="3" radius="medium" />
                </div>
                <Button color="blue" size="3" onClick={() => setEnterOTP(true)}>Proceed</Button>
              </div>
              <div className="flex gap-3 items-center">
                <Separator size="4" />
                <div className="text-slate-400">or</div>
                <Separator size="4" />
              </div>
              <div className="bg-gray-900 rounded-lg flex gap-3 justify-center p-3 border border-slate-800 hover:bg-gray-800 select-none active:bg-gray-700">
                <Image src="/images/google.svg" width={20} height={20} alt="google" />
                <div className="text-sm">Continue with Google</div>
              </div>
            </div>
          </>
      }
    </div>
  )
}