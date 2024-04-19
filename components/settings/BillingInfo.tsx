import Image from "next/image";

export default function BillingInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-xl">Billing Information</div>
      <div className="flex flex-col gap-3 bg-gray-800 p-4 rounded-2xl">
        <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
          <div className="flex gap-2">
            <Image src="/images/user.svg" width={20} height={20} alt="user" />
            <div className="text-indigo-200 text-sm">Name</div>
          </div>
          <div className="text-sm ms-1">Jimmy Kim</div>
        </div>
        <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
          <div className="flex gap-2">
            <Image src="/images/map.svg" width={20} height={20} alt="map" />
            <div className="text-indigo-200 text-sm">Address</div>
            <div className="text-sm ms-1">jacky.kim@orthos.ai</div>
          </div>
          <div className="flex gap-2 select-none">
            <Image src="/images/pencil.svg" width={18} height={18} alt="pencil" />
            <div className="text-indigo-300 text-sm max-sm:hidden">Edit</div>
          </div>
        </div>
      </div>
    </div>
  )
}