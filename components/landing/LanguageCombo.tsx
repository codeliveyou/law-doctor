import { Button, DropdownMenu } from "@radix-ui/themes";
import Image from "next/image";

export default function () {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" color="gray" highContrast>
          <Image src="/images/en.svg" width={15} height={15} alt="en" />
          EN
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="solid" color="gray">
        <DropdownMenu.Item>
          <Image src="/images/en.svg" width={15} height={15} alt="en" />
          EN
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Image src="/images/indonesia.png" width={15} height={15} alt="ind" />
          IND
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}