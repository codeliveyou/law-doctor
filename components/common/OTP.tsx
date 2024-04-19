"use client"
import { TextField } from "@radix-ui/themes";
import { LegacyRef, RefObject, useRef } from "react";

export default function () {
  const refs = [
    useRef() as LegacyRef<HTMLInputElement>,
    useRef() as LegacyRef<HTMLInputElement>,
    useRef() as LegacyRef<HTMLInputElement>,
    useRef() as LegacyRef<HTMLInputElement>,
    useRef() as LegacyRef<HTMLInputElement>,
    useRef() as LegacyRef<HTMLInputElement>,
  ]

  function focus(nth: number) {
    return function () {
      const ref = refs[nth] as RefObject<HTMLInputElement>;
      ref.current?.focus();
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1">
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[0]} onInput={focus(1)} autoFocus />
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[1]} onInput={focus(2)} />
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[2]} onInput={focus(3)} />
      </div>
      <div className="text-slate-400">-</div>
      <div className="flex gap-1">
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[3]} onInput={focus(4)} />
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[4]} onInput={focus(5)} />
        <TextField.Root max={9} type="number" size="3" className="input-otp" ref={refs[5]} />
      </div>
    </div>
  )
}