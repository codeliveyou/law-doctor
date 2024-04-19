import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Checkbox, DropdownMenu, TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import YearSelector from "./YearSelector";
import { MouseEventHandler, useState } from "react";

function CheckboxDropdownItem(
  { children, check, setCheck }: {
    children: React.ReactNode,
    check: boolean,
    setCheck: Function
  }
) {
  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setCheck(!check);
  }

  return (
    <DropdownMenu.Item onClick={onClick}>
      <Checkbox color="blue" checked={check} />
      {children}
    </DropdownMenu.Item>
  )
}

const AllLegalStatus = [
  "Not Revoked / Changed",
  "Revoked",
  "Has Been Changed",
  "Partially Revoked",
  "Partially Revoked & Revoked"
]
const AllLanguage = [
  "English",
  "Indonesian"
]

export default function FilterSorter({
  legalStatus, setLegalStatus, language, setLanguage
}: {
  legalStatus: string[],
  setLegalStatus: Function,
  language: string[],
  setLanguage: Function
}) {
  function addRemoveLegalStatus(e: string) {
    return (checked: boolean) => {
      if (checked)
        setLegalStatus([...legalStatus, e])
      else
        setLegalStatus(legalStatus.filter(it => it !== e))
    }
  }

  function addRemoveLanguage(e: string) {
    return (checked: boolean) => {
      if (checked)
        setLanguage([...language, e])
      else
        setLanguage(language.filter(it => it !== e))
    }
  }

  return (
    <div className="flex justify-between max-lg:flex-col">
      <div className="flex gap-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="2" color="gray" radius="large">
              {
                legalStatus.length === 0 && "Legal Status" ||
                legalStatus.length === 1 && legalStatus[0] ||
                legalStatus.length === AllLegalStatus.length && "All Legal Status" ||
                legalStatus.length > 1 && `${legalStatus.length} Legal Statuses Applied`
              }
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content color="gray">
            {
              AllLegalStatus.map(it =>
                <CheckboxDropdownItem key={it} check={legalStatus.includes(it)} setCheck={addRemoveLegalStatus(it)}>
                  {it}
                </CheckboxDropdownItem>
              )
            }
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="2" color="gray" radius="large">
              {
                language.length === 0 && "Language" ||
                language.length === 1 && language[0] ||
                language.length === AllLanguage.length && "All Languages" ||
                language.length > 1 && `${AllLanguage.length} Legal Statuses Applied`
              }
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content color="gray">
            {
              AllLanguage.map(it =>
                <CheckboxDropdownItem
                  key={it}
                  check={language.includes(it)}
                  setCheck={addRemoveLanguage(it)}
                >
                  {it}
                </CheckboxDropdownItem>
              )
            }
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <div className="flex gap-4 max-lg:py-2 justify-end">
        <div className="flex gap-3 items-center">
          <div className="text-slate-400 text-sm">Effective year:</div>
          <div className="flex gap-1 items-center">
            <div className="max-w-20">
              <YearSelector from={2007} to={2012} />
            </div>
            <div className="text-slate-400 text-sm">-</div>
            <div className="max-w-20">
              <YearSelector from={2007} to={2012} />
            </div>
          </div>
        </div>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" size="2" color="gray" radius="large">
              Sort by
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content color="gray">
            <DropdownMenu.Item>Relevant</DropdownMenu.Item>
            <DropdownMenu.Item>Date Created</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div >
  )
}