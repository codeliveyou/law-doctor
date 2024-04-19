import Image from "next/image";

export default function EnterpriseBadge() {
  return (
    <div>
      <div className="px-2 py-0.5 bg-[#FEB193] bg-opacity-20 rounded-[3px] items-center gap-1 inline-flex">
        <Image src="/images/stars.svg" width={12} height={12} alt="stars" />
        <div className="text-[#FED6C5] text-xs font-medium text-opacity-80">Enterprise</div>
      </div>
    </div>
  )
}