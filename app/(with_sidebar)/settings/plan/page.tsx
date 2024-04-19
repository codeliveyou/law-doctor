import BillingInfo from "@/components/settings/BillingInfo";
import CurrentPlan from "@/components/settings/CurrentPlan";
import Footer from "@/components/settings/Footer";
import Header from "@/components/settings/Header";
import UpgradePlan from "@/components/settings/UpgradePlan";
import { Separator } from "@radix-ui/themes";

export default function PlanPage() {
  return (
    <div className="lg:max-w-[800px] mx-auto px-4">
      <div className="flex flex-col gap-6 bg-gray-900 sm:sticky top-0 pt-8">
        <Header page="plan" />
      </div>
      <div className="flex flex-col gap-8 flex-1 py-6">
        <CurrentPlan />
        <UpgradePlan />
        <BillingInfo />
        <Footer />
      </div>
    </div>
  )
}