"use client"

import { Button, Dialog, DropdownMenu } from "@radix-ui/themes";
import Image from "next/image";
import { toast } from "react-toastify";
import ToastContent from "../common/ToastContent";

export default function General() {
  function deleteAllChat() {
    toast.success(<ToastContent message="All chat conversations have been permanently deleted." />)
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-xl">General</div>
      <div className="flex flex-col gap-6 bg-gray-800 p-4 rounded-2xl">
        <div className="flex flex-col gap-3">
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl items-center">
            <div className="flex gap-2 items-start">
              <Image src="/images/color.svg" width={20} height={20} alt="color" />
              <div className="flex flex-col">
                <div className="text-sm">Colour Scheme</div>
                <div className="text-xs text-indigo-200 max-sm:hidden">Set the appearance of Orthos</div>
              </div>
            </div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className="flex gap-2 select-none">
                  <Image src="/images/moon.svg" width={16} height={16} alt="moon" />
                  <div className="text-indigo-300 text-sm font-medium">Dark Mode</div>
                  <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="arrow" />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <div>Dark Mode</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div>Light Mode</div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl items-center">
            <div className="flex gap-2 items-start">
              <Image src="/images/translation-sm.svg" width={20} height={20} alt="translation" />
              <div className="flex flex-col">
                <div className="text-sm">Change Language</div>
                <div className="text-xs text-indigo-200 max-sm:hidden">Set the mail language of Orthos</div>
              </div>
            </div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div className="flex gap-2 select-none">
                  <div className="text-indigo-300 text-sm font-medium">English</div>
                  <Image src="/images/dropdown-arrow.svg" width={16} height={16} alt="arrow" />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <div>English</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div>Indonesian</div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl items-center">
            <div className="flex gap-2 items-start">
              <Image src="/images/trash.svg" width={20} height={20} alt="trash" />
              <div className="flex flex-col">
                <div className="text-sm">Delete All Chats</div>
                <div className="text-xs text-indigo-200 max-sm:hidden">Delete all the chats up until now</div>
              </div>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="text-red-400 text-sm select-none">Delete Everything</div>
              </Dialog.Trigger>

              <Dialog.Content size="2" maxWidth="400px" className="!rounded-xl">
                <div className="flex flex-col gap-4">
                  <Image src="/images/alert-circle.svg" width={48} height={48} alt="alert" />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold">Your entire chat history will be permanently deleted</div>
                    <div className="text-indigo-200 text-sm">All chat conversations will be permanently and irreversibly deleted, are you sure?</div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <div className="flex-1 flex flex-col">
                      <Dialog.Close>
                        <Button color="gray" variant="soft" highContrast onClick={deleteAllChat} radius="large">Confirm</Button>
                      </Dialog.Close>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <Dialog.Close>
                        <Button radius="large">Cancel</Button>
                      </Dialog.Close>
                    </div>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </div>
  )
}