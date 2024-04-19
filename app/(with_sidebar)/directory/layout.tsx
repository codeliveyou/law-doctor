import Appbar from "@/components/directory/Appbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      <div className="h-full max-sm:pt-16">
        {children}
      </div>
    </>
  )
}