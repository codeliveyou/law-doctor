"use client"

import { Button, ChevronDownIcon, Separator } from "@radix-ui/themes";
import Image from "next/image";
import React, { useState } from "react";
import LanguageCombo from "./LanguageCombo";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./header.css";
import Link from "next/link";

const AccordionDemo = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-3" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger className="text-slate-200 font-medium text-base">
        Product
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Custom content here
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger className="text-slate-200 font-medium">
        Use Cases
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Custom content here
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger className="text-slate-200 font-medium">
        Company
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        <div className="flex flex-col gap-3">
          <div>About Us</div>
          <Separator size="4" />
          <div>Careers</div>
          <Separator size="4" />
          <div>Security</div>
        </div>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: { children: React.ReactNode, className?: string }, forwardedRef: React.LegacyRef<HTMLButtonElement>) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" width={12} height={12} color />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: { children: React.ReactNode, className?: string }, forwardedRef: React.LegacyRef<HTMLDivElement>) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default function () {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 w-full z-40">
      <div className="sm:mx-10 md:mx-20 px-6 py-4 bg-neutral-900 sm:bg-slate-800 rounded-b-[20px] flex justify-between items-center max-sm:h-16">
        <Image src="/images/logo.svg" width={140} height={24} alt="logo-image"
          className="w-[94px] sm:w-[140px]"
        />
        <Link className="text-slate-200 max-sm:hidden cursor-pointer hover:underline" href="/blog">Read our Blog</Link>
        <div className="flex gap-4 sm:gap-6 items-center">
          <div className="max-sm:hidden">
            <LanguageCombo />
          </div>
          <div className={`w-[138px] h-8 px-3 bg-slate-200 hover:bg-slate-300 rounded justify-center items-center gap-2 inline-flex ${showMenu && "hidden"}`}>
            <div className="text-blue-800 text-sm font-medium select-none">
              <Link href="#form">Get Early Access</Link>
            </div>
          </div>
          <Image src={showMenu ? "/images/cross.svg" : "/images/hamburger.svg"}
            className="sm:hidden"
            width={24} height={24} alt="hamburger"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      <div className={`absolute p-4 pb-20 top-16 left-0 w-screen h-screen bg-neutral-900 ${showMenu || "hidden"}`}>
        <div className="flex flex-col gap-4 justify-between h-full">
          <Button color="gray" variant="soft" size="3">Read our Blog</Button>
          {/* <AccordionDemo /> */}

          <div className="h-10 px-4 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
            <div className="text-blue-800 text-base font-medium leading-normal">
            <Link href="#form">Get Early Access</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}