import Appbar from "@/components/research/Appbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      {children}
    </>
  )
}