"use client"

import { Button, Dialog, TextField } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import OTP from "../common/OTP";

export default function Account() {
  const [enterOTP, setEnterOTP] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium text-xl">Account</div>
      <div className="flex flex-col gap-6 bg-gray-800 p-4 rounded-2xl">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-sans">Hi there, Jacky</div>
          <div className="text-sm text-indigo-200">Your profile is not complete yet</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <div className="flex gap-2">
              <Image src="/images/user.svg" width={20} height={20} alt="user" />
              <div className="text-indigo-200 text-sm">Name</div>
              <div className="text-sm ms-1">Jacky Kim</div>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="flex gap-2 select-none">
                  <Image src="/images/pencil.svg" width={18} height={18} alt="pencil" />
                  <div className="text-indigo-300 text-sm">Edit</div>
                </div>
              </Dialog.Trigger>

              <Dialog.Content size="2" maxWidth="400px" className="!rounded-xl">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-xl">What should we call you?</div>
                    <div className="text-xs">Update your name</div>
                  </div>
                  <TextField.Root />
                  <div className="flex justify-end gap-2">
                    <Dialog.Close>
                      <Button color="gray" variant="soft" highContrast>Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Update</Button>
                    </Dialog.Close>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <div className="flex gap-2">
              <Image src="/images/mail.svg" width={20} height={20} alt="user" />
              <div className="text-indigo-200 text-sm">Email</div>
              <div className="text-sm ms-1">jacky.kim@orthos.ai</div>
            </div>
            <div className="text-indigo-300 text-sm select-none">Verify</div>
          </div>
          <div className="bg-gray-900 p-3 flex justify-between rounded-xl">
            <div className="flex gap-2">
              <Image src="/images/phone.svg" width={20} height={20} alt="phone" />
              <div className="text-indigo-200 text-sm">Phone number</div>
              <div className="text-sm ms-1"></div>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className="flex gap-2 select-none">
                  <Image src="/images/plus.svg" width={18} height={18} alt="plus" />
                  <div className="text-indigo-300 text-sm">Add</div>
                </div>
              </Dialog.Trigger>

              <Dialog.Content size="2" maxWidth="400px" className="!rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-xl">Add Phone Number</div>
                    <div className="text-xs">Secure your account by adding phone number</div>
                  </div>
                  {
                    enterOTP
                      ? <>
                        <div className="flex flex-col gap-1">
                          <div>Please check the one time code sent to:</div>
                          <div className="flex justify-between">
                            <div className="text-slate-400 text-sm">+62 812 3456 7890</div>
                            <div className="text-indigo-300 text-sm select-none">Change Number</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-indigo-200 font-medium">Enter OTP</div>
                          <OTP />
                        </div>
                        <div className="flex justify-between">
                          <div className="text-slate-400 text-sm">Can't find it?</div>
                          <div className="text-indigo-300 text-sm select-none">Try again</div>
                        </div>
                      </>
                      : <>
                        <div className="flex flex-col gap-2">
                          <div className="text-indigo-200 font-medium">Phone Number</div>
                          <TextField.Root type="number" placeholder="e.g. 8123456789" />
                        </div>
                      </>
                  }
                  <div className="flex gap-4">
                    <div className="flex-1 flex flex-col">
                      <Dialog.Close>
                        <Button color="gray" variant="soft" highContrast radius="large">Cancel</Button>
                      </Dialog.Close>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <Button onClick={() => setEnterOTP(true)} disabled={enterOTP} radius="large">Add Number</Button>
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