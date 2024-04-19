import Sidebar from "@/components/common/Sidebar";
import "../colors.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sm:px-4 sm:py-8 flex gap-6 w-screen h-screen">
      <div className="flex-initial bg-gray-900 rounded-2xl flex max-sm:hidden overflow-y-auto">
        <Sidebar collapsable />
      </div>
      <div className="flex-1 bg-gray-900 sm:rounded-2xl overflow-auto">
        {children}
      </div>
    </div>
  )
}