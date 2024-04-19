import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button, Link } from "@radix-ui/themes";
import Image from "next/image";

export default function () {
  return (
    <div className="bg-cover lg:mx-6 rounded-b-2xl" style={{
      backgroundImage: "linear-gradient(to bottom, #0F141BFF, #00000080), url('/images/overlay.jpg')"
    }}>
      <div className="pt-[160px] pb-[80px] lg:pb-[120px] h-[900px] mx-6 lg:mx-auto max-w-screen-lg">
        <div className="flex justify-between h-full flex-col">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="flex-1 flex gap-4">
              <div className="min-w-[54px] min-h-[54px]">
                <Image src="/images/unlock-fast.svg" alt="microchip" width={54} height={54} />
              </div>
              <div className="flex gap-3 flex-col">
                <div className="text-slate-200">Unlock legal insights, instantly  maintaining the source of truth</div>
                <Link href="#form" underline="always">
                  <div className="flex gap-1 items-center">
                    <span>Know More</span>
                    <ArrowRightIcon />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="min-w-[54px] min-h-[54px]">
                <Image src="/images/goal-dollar.svg" alt="microchip" width={55} height={54} />
              </div>
              <div className="flex gap-3 flex-col">
                <div className="text-slate-200">Focus on high-value work; we handle your tedious research </div>
                <Link href="#form" underline="always">
                  <div className="flex gap-1 items-center">
                    <span>Explore our Products</span>
                    <ArrowRightIcon />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="min-w-[54px] min-h-[54px]">
                <Image src="/images/cup-ok.svg" alt="microchip" width={55} height={54} />
              </div>
              <div className="flex gap-3 flex-col">
                <div className="text-slate-200">Become a revolution in legal sector and lead the future</div>
                <Link href="#form" underline="always">
                  <div className="flex gap-1 items-center">
                    <span>Start with Orthos</span>
                    <ArrowRightIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-slate-200 font-clash text-3xl font-medium">
              Revolutionize your legal operations with Orthos
            </div>
            <div>
              <Button variant="outline" color="gray" radius="large">
                <Link href="#form">Try Now</Link>
                <ArrowTopRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}