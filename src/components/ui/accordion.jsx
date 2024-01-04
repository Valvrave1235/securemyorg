import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("[&[data-state=open]]:bg-[#19191B] border-[#343B46] [&[data-state=open]]:border [&[data-state=open]]:rounded-xl font-bold", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 bg-[#19191B] text-xl text-start font-bold border-[#343B46] my-3 px-6 py-6 rounded-xl border  items-center justify-between transition-all [&[data-state=open]]:border-0  [&[data-state=open]]:pb-2 [&[data-state=open]>svg]:hidden",
        className
      )}
      {...props}>
      {children}
      <Plus className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden bg-[#19191B]  text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2 text-stone-300"
    {...props}>
    <div className={cn("pb-4 px-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
