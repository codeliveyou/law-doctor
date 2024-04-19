"use client"

import { useState } from "react";
import Image from "next/image";
import { Badge, Separator, Switch } from "@radix-ui/themes";

const sources = [
  "Central Level",
  "Regional Level",
  "Cooperation Agreement",
  "Higher Education Level",
  "International Instruments",
  "Colonial Era",
  "Monograph",
  "Articles/Magazines",
  "Judgment/Jurisprudence",
]

export default function ({ CloseWrapper, onClose }: { CloseWrapper?: any, onClose?: Function }) {
  const [lawSources, setLawSources] = useState(sources.map(s => ({
    title: s,
    selected: true
  })))

  function setCheck(ith: number, state: boolean) {
    setLawSources(lawSources.map(
      (src, i) => i === ith ? {
        ...src,
        selected: state
      } : src)
    )
  }

  const selectedCount = lawSources.filter(s => s.selected).length;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div className="inline-flex rounded gap-2 px-2 bg-gray-800 h-8 items-center">
          <Image src="/images/database.svg" width={20} height={20} alt="database" />
          <div className="text-slate-200 text-sm font-medium">Law Sources</div>
          <Badge color="bronze">
            {
              selectedCount === lawSources.length
                ? "All"
                : selectedCount + "/" + lawSources.length
            }
          </Badge>
        </div>
        {
          CloseWrapper
            ? <CloseWrapper>
              <Image src="/images/icon-close.svg" width={24} height={24} alt="close" />
            </CloseWrapper>
            : <Image src="/images/icon-close.svg" width={24} height={24} alt="close" onClick={() => onClose && onClose()} />
        }
      </div>

      <div className="flex flex-col">
        {
          lawSources.map((src, i) => <div key={src.title}>
            {
              i !== 0 && <Separator size="4" className="my-4" />
            }
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="text-slate-200 text-sm">{src.title}</div>
              </div>
              <Switch checked={src.selected} radius="full" onCheckedChange={state => setCheck(i, state)} />
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}