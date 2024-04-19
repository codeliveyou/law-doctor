"use client"

import { Slide, ToastContainer } from "react-toastify";

const contextClass = {
  success: "bg-[#12281F] text-[#44FEA5]",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

export default function Toast_Container() {
  return (
    <ToastContainer
      toastClassName={(context) =>
        contextClass[context?.type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3 flex-1"}
      icon={false}
      position="top-center"
      transition={Slide}
      closeButton={false}
      hideProgressBar
      autoClose={3000}
    />
  )
}