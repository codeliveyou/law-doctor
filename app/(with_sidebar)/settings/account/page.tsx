import About from "@/components/settings/About";
import Account from "@/components/settings/Account";
import Footer from "@/components/settings/Footer";
import General from "@/components/settings/General";
import Header from "@/components/settings/Header";
import System from "@/components/settings/System";
import { Separator } from "@radix-ui/themes";

export default function AccountPage() {
  return (
    <div className="lg:max-w-[800px] mx-auto px-4">
      <div className="flex flex-col gap-6 bg-gray-900 sm:sticky top-0 pt-8">
        <Header page="account" />
      </div>
      <div className="flex flex-col gap-8 flex-1 py-6">
        <Account />
        <General />
        <System />
        <About />
        <Footer />
      </div>
    </div>
  )
}