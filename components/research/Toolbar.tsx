import { Badge, Button, Dialog } from "@radix-ui/themes";
import Image from "next/image";
import LawSource from "./LawSource";

export default function ({ disableNewChat }: { disableNewChat?: boolean }) {
  return (
    <div className="flex justify-between px-6 py-8 max-sm:hidden bg-gray-900 sticky top-0 z-10">
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="inline-flex rounded gap-2 px-3 bg-gray-800 h-8 items-center cursor-pointer">
            <Image src="/images/database.svg" width={20} height={20} alt="database" />
            <div className="text-slate-200 text-sm font-medium">Law Sources</div>
            <Badge color="bronze">All</Badge>
          </div>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <LawSource CloseWrapper={Dialog.Close} />
        </Dialog.Content>
      </Dialog.Root>
      <Button color="gray" variant="soft" highContrast disabled={disableNewChat} radius="large">
        <Image src={disableNewChat ? "/images/chat-plus-disabled.svg" : "/images/chat-plus.svg"}
          width={20} height={20} alt="chat-plus" />
        New Chat
      </Button>
    </div>
  )
}