import Image from "next/image";

export default function ProfessionalBadge() {
  return (
    <div>
      <div className="px-2 py-0.5 bg-[#2250FE] bg-opacity-20 rounded-[3px] items-center gap-1 inline-flex">
        <Image src="/images/star.svg" width={12} height={12} alt="star" />
        <div className="text-[#99A2FF] text-xs font-medium">Professional</div>
      </div>
    </div>
  )
}