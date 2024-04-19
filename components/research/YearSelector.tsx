"use client"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export default function ({ from, to }: {
  from: number
  to: number
}) {
  const [searchTxt, setSearchTxt] = useState("")
  const [year, setYear] = useState(from)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="2" color="gray" radius="large">
          <div className="flex justify-between flex-1 items-center gap-1">
            <div>{year}</div>
            <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="arrow" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content color="gray">
        <TextField.Root type="number" placeholder="Search Year" className="max-w-32 mb-2"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          autoFocus
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
        {
          [...Array(to - from + 1)]
            .map((it, i) => i + from)
            .filter(y => y.toString().includes(searchTxt))
            .map(y => <DropdownMenu.Item key={y}
              onClick={() => setYear(y)}>
              {y}
            </DropdownMenu.Item>
            )
        }
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}