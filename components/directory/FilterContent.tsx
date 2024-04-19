import { Button, Checkbox, Radio, Select, Separator } from "@radix-ui/themes";
import YearSelector from "../research/YearSelector";

export default function () {
  return (
    <>
      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-slate-200 text-sm font-medium">Sort by</div>
          <div className="text-indigo-200 text-xs">Sort the results by newest or relevant</div>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <label className="flex gap-2 items-center">
            <Radio name="sort" value="newest" />
            Newest
          </label>
          <label className="flex gap-2 items-center">
            <Radio name="sort" value="relevant" />
            Relevant
          </label>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-slate-200 text-sm font-medium">Legal Status</div>
          <div className="text-indigo-200 text-xs">Choose the legal status of law</div>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <label className="flex gap-2 items-center">
            <Checkbox />
            Not Revoked / Changed
          </label>
          <label className="flex gap-2 items-center">
            <Checkbox />
            Revoked
          </label>
          <label className="flex gap-2 items-center">
            <Checkbox />
            Has Been Changed
          </label>
          <label className="flex gap-2 items-center">
            <Checkbox />
            Partially Revoked
          </label>
          <label className="flex gap-2 items-center">
            <Checkbox />
            Partially Revoked & Revoked
          </label>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-slate-200 text-sm font-medium">Effective year</div>
          <div className="text-indigo-200 text-xs">Range of year the law published</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 flex flex-col">
            <YearSelector from={1999} to={2012} />
          </div>
          <div className="text-slate-400 text-sm">-</div>
          <div className="flex-1 flex flex-col">
            <YearSelector from={1999} to={2012} />
          </div>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-slate-200 text-sm font-medium">Choose Initiator</div>
          <div className="text-indigo-200 text-xs">Select the organization who initiated</div>
        </div>
        <Select.Root size="2" name="orgType">
          <Select.Trigger radius="large" placeholder="Select One" />
          <Select.Content>
            <Select.Item value="org1">Organization 1</Select.Item>
            <Select.Item value="org2">Organization 2</Select.Item>
            <Select.Item value="org3">Organization 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <Separator size="4" />
      <div className="flex p-4 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-slate-200 text-sm font-medium">Language</div>
          <div className="text-indigo-200 text-xs">Select the language you want to read</div>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <label className="flex gap-2 items-center">
            <Radio name="language" value="English" />
            English
          </label>
          <label className="flex gap-2 items-center">
            <Radio name="language" value="Indonesian" />
            Indonesian
          </label>
        </div>
      </div>
      <Separator size="4" />
      <div className="p-4 flex flex-col">
        <Button disabled>Apply</Button>
      </div>
    </>
  )
}