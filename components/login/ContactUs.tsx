import { Button } from "@radix-ui/themes";

export default function HaveQuestions() {
  return (
    <div className="py-10 sm:py-16 mx-4 lg:mx-auto max-w-screen-lg">
      <div className="flex justify-between items-center p-6 bg-gray-900 rounded-2xl gap-6 max-sm:flex-col">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium">Have questions?</div>
          <div className="font-light">Get in touch with our team. We will respond within 24 hours.</div>
        </div>
        <div className="flex flex-col max-sm:w-full sm:w-[182px]">
          <Button color="gray" variant="outline" size="3" radius="large">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}