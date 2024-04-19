import { Button, Dialog, DropdownMenu } from "@radix-ui/themes";
import Image from "next/image";

export default function System() {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-xl">System</div>
      <div className="flex flex-col gap-6 bg-gray-800 p-4 rounded-2xl">
        <div className="flex flex-col gap-3">
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl items-center">
            <div className="flex gap-2 items-start">
              <Image src="/images/logout.svg" width={20} height={20} alt="logout" />
              <div className="text-sm">Do you wish to logout?</div>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="text-red-400 text-sm select-none">Logout</div>
              </Dialog.Trigger>

              <Dialog.Content size="2" maxWidth="400px" className="!rounded-xl">
                <div className="flex flex-col gap-4">
                  <Image src="/images/warning-circle.svg" width={48} height={48} alt="warning" />
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-bold">Are you sure you want to logout?</div>
                    <div className="text-indigo-200 text-sm">Confirming this action will securely end your current session, requiring you to re-authenticate</div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <div className="flex-1 flex flex-col">
                      <Dialog.Close>
                        <Button color="gray" variant="soft" highContrast radius="large">Confirm</Button>
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