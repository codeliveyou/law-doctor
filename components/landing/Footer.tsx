import { Separator } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div style={{
      background: "radial-gradient(55.75% 182.95% at 50% 0%, rgba(19, 46, 134, 0.20) 0%, rgba(16, 29, 70, 0.00) 58.19%)"
    }}>
      <div className="py-10 px-6 lg:px-28">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between max-sm:flex-col gap-6">
            <Image src="/images/logo.svg" width={140} height={24} alt="orthos-logo" />
            <div className="flex sm:gap-14 max-sm:justify-between">
              <div className="text-slate-200 text-sm">
                <Link href="/acceptable-use-policy">Safety</Link>
              </div>
              <div className="text-slate-200 text-sm">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="text-slate-200 text-sm">
                <Link href="/terms-of-service">Terms of Service</Link>
              </div>
            </div>
          </div>
          <Separator size="4" />
          <div className="flex justify-between max-sm:flex-col gap-6">
            <div className="text-indigo-200 text-sm">Copyright © 2024 Orthos. All rights reserved.</div>
            <div className="flex gap-6">
              <Image src="/images/linkedin.svg" width={20} height={20} alt="linkedin-icon" />
              <Image src="/images/discord.svg" width={20} height={20} alt="linkedin-icon" />
              <Image src="/images/twitter.svg" width={20} height={20} alt="linkedin-icon" />
              <Image src="/images/github.svg" width={20} height={20} alt="linkedin-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}