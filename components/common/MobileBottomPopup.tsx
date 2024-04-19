export default function Popup({
  children, show, setShow
}: {
  children: React.ReactNode,
  show: boolean,
  setShow: Function
}) {
  return (
    <>
      <div className={`fixed left-0 top-0 w-screen h-screen bg-gray-950 bg-opacity-60 z-50 ${show || "hidden"}`} onClick={() => setShow(false)}></div>
      <div className={`fixed left-0 bottom-0 flex flex-col figma-shadow px-4 pb-4 w-full bg-gray-900 rounded-t-xl sm:hidden z-50 justify-center items-center transition-transform ${show ? "translate-y-0" : "translate-y-full"}`}>
        <div className="w-10 h-1 bg-slate-500 rounded-[33px] mt-2 mb-6" />
        <div className="max-h-[calc(100vh-110px)] w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  )
}