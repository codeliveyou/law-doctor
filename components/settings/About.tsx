import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-xl">About</div>
      <div className="flex flex-col gap-6 bg-gray-800 p-4 rounded-2xl">
        <div className="flex gap-3 max-sm:flex-col">
          <div className="bg-gray-900 px-3 py-2 flex-1 flex justify-between rounded-xl items-center select-none border-[1px] border-gray-900 hover:border-blue-800">
            <div className="flex gap-2">
              <Image src="/images/question.svg" width={16} height={16} alt="question" />
              <div className="text-sm">Help Center & FAQ</div>
            </div>
            <Image src="/images/chevron-right.svg" width={16} height={16} alt="go" />
          </div>
          <div className="bg-gray-900 px-3 py-2 flex-1 flex justify-between rounded-xl items-center select-none border-[1px] border-gray-900 hover:border-blue-800">
            <div className="flex gap-2">
              <Image src="/images/feedback.svg" width={16} height={16} alt="feedback" />
              <div className="text-sm">Give us a feedback</div>
            </div>
            <Image src="/images/chevron-right.svg" width={16} height={16} alt="go" />
          </div>
          <div className="bg-gray-900 px-3 py-2 flex-1 flex justify-between rounded-xl items-center select-none border-[1px] border-gray-900 hover:border-blue-800">
            <div className="flex gap-2">
              <Image src="/images/privacy.svg" width={16} height={16} alt="privacy" />
              <div className="text-sm">Privacy & Terms</div>
            </div>
            <Image src="/images/chevron-right.svg" width={16} height={16} alt="go" />
          </div>
        </div>
      </div>
    </div>
  )
}