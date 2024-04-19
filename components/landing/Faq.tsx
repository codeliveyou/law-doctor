"use client"

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import Image from 'next/image';
import './faq.css';

const AccordionDemo = () => (
  <Accordion.Root className="FaqAccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="FaqAccordionItem" value="item-1">
      <AccordionTrigger className="text-slate-200 font-medium text-base">
        Is there a free trial available?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="FaqAccordionItem" value="item-2">
      <AccordionTrigger className="text-slate-200 font-medium">
        Can I change my plan later?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="FaqAccordionItem" value="item-3">
      <AccordionTrigger className="text-slate-200 font-medium">
        What is your cancellation policy?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="FaqAccordionItem" value="item-4">
      <AccordionTrigger className="text-slate-200 font-medium">
        Can other info be added to an invoice?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="FaqAccordionItem" value="item-5">
      <AccordionTrigger className="text-slate-200 font-medium">
        How does billing work?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="FaqAccordionItem" value="item-6">
      <AccordionTrigger className="text-slate-200 font-medium">
        How do I change my account email?
      </AccordionTrigger>
      <AccordionContent className="text-indigo-200 text-sm leading-tight">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: { children: React.ReactNode, className?: string }, forwardedRef: React.LegacyRef<HTMLButtonElement>) => (
    <Accordion.Header className="FaqAccordionHeader">
      <Accordion.Trigger
        className={classNames('FaqAccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <Image src="/images/circle-plus.svg" width={24} height={24} alt="expand-icon" className="expand-icon" />
        <Image src="/images/circle-minus.svg" width={24} height={24} alt="collapse-icon" className="collapse-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: { children: React.ReactNode, className?: string }, forwardedRef: React.LegacyRef<HTMLDivElement>) => (
    <Accordion.Content
      className={classNames('FaqAccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="FaqAccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default function () {
  return (
    <div className="py-20 sm:py-32 lg:max-w-screen-lg lg:mx-auto mx-6">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <div className="text-slate-200 text-3xl leading-9 font-clash">
            Frequently asked questions
          </div>
          <div className="text-indigo-200">
            Everything you need to know about the product and billing.
          </div>
        </div>
        <AccordionDemo />
      </div>
    </div>
  )
};