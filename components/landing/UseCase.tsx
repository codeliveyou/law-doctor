import { Badge } from "@radix-ui/themes"
import Image from "next/image"

const useCaseList = [
  {
    title: "Legal Research",
    content: "Cut through the legal maze. Our AI-powered research tools deliver the insights you need, fast"
  },
  {
    title: "Due Diligence",
    content: "Make informed decisions. We leverage AI to provide in-depth due diligence, mitigating risks and ensuring clarity"
  },
  {
    title: "Contract Management and Review",
    content: "Orthos automates contract creation, reviews for risks, and analyzes trends to optimize your legal agreements",
    coming_soon: true
  },
  {
    title: "Legal Document Automation",
    content: "We have trained our AI to automate the creation of various legal documents like NDAs, disclaimers, and standard business letters",
    coming_soon: true
  },
  {
    title: "Legal Knowledge Management",
    content: "With use AI-powered knowledge base to store and organize legal information, making it readily accessible to lawyers and clients",
    coming_soon: true
  },
  {
    title: "Litigation",
    content: "Orthos cuts through litigation complexities with AI-powered tools for a swifter path to success"
  },
  {
    title: "Advisory Services",
    content: "Get expert guidance, affordably. Orthos powered advisory services provide strategic legal insights",
    coming_soon: true
  },
  {
    title: "Compliance Management",
    content: "Orthos' AI proactively monitors regulations, identifies compliance risks, and sends alerts for a stress-free legal landscape",
    coming_soon: true
  },
  {
    title: "Legal Risk Assessment & Prediction",
    content: "Orthos uses AI to analyze legal data, predict potential risks, and recommend mitigation strategies based on historical patterns",
    coming_soon: true
  },
  {
    title: "Legal Pricing and Cost Estimation",
    content: "Use our tool to provide clients with upfront cost estimates for legal services based on specific needs and case complexity",
    coming_soon: true
  },
]

export default function () {
  return (
    <div className="pt-20 sm:pt-32">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="flex-1 flex justify-end">
          <div className="flex gap-16 flex-col lg:max-w-[512px] mx-6 lg:m-0">
            <div className="flex flex-col gap-4 max-sm:text-center">
              <div>
                <Badge size="3">Use Cases</Badge>
              </div>
              <div className="font-clash text-3xl text-slate-200">
                Orthos handles every legal cases that you can imagine
              </div>
              <div className="text-indigo-200">
                Streamline your legal journey. Orthos tackles all your needs,
                from crafting researching your complex law and regulations,
                ironclad contracts to ensuring seamless compliance
              </div>
            </div>
            <div className="w-full max-lg:hidden">
              <Image width={300} height={1} alt="law image"
                src="/images/photo-law.png" className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-start bg-gray-900 p-16 max-sm:px-6 max-sm:py-10 rounded-l-2xl gap-5">
            <div className="flex flex-col gap-8">
              {
                useCaseList.slice(0, 5).map((it, i) =>
                  <div key={i} className="flex gap-2 flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      {it.title}
                    </div>
                    {it.coming_soon && <div>
                      <Badge variant="outline" color="gray" className="font-normal">Coming Soon!</Badge>
                    </div>}
                    <div className="text-slate-400 text-sm leading-tight">
                      {it.content}
                    </div>
                  </div>
                )
              }
            </div>
            <div className="flex flex-col gap-8">
              {
                useCaseList.slice(5).map((it, i) =>
                  <div key={i} className="flex gap-2 flex-col">
                    <div className="text-slate-200 text-lg font-medium">
                      {it.title}
                    </div>
                    {it.coming_soon && <div>
                      <Badge variant="outline" color="gray" className="font-normal">Coming Soon!</Badge>
                    </div>}
                    <div className="text-slate-400 text-sm leading-tight">
                      {it.content}
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}