import Appbar from "@/components/settings/Appbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      <div className="max-sm:pt-16">
        {children}
      </div>
    </>
  )
}