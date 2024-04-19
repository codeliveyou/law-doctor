import Image from "next/image"

export default function ToastContent({
  message,
  type = "success",
}: {
  message: string,
  type?: string
}) {
  if (type === "success")
    return (
      <div className="flex gap-2">
        <Image src="/images/green-info.svg" width={16} height={16} alt="info" />
        <div>{message}</div>
      </div>
    )
}