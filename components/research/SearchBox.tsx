"use client"

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  const [text, setText] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/research/details")
    }
  }

  return (
    <TextField.Root placeholder="What you want to research?"
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="border hover:border-slate-600 border-gray-800 group"
      style={{ boxShadow: 'none' }}
      size="3" variant="surface" radius="large">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      {
        text && (
          <TextField.Slot pr="3" onClick={() => setText("")} >
            <Image src="/images/text-remove.svg" width={16} height={16} alt="remove"
              className="cursor-pointer hidden group-hover:block group-focus:block" />
          </TextField.Slot>
        )
      }
    </TextField.Root>
  )
}