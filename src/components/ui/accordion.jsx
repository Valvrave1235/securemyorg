import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon, PlusIcon } from 'lucide-react'; // Assuming you use Heroicons for icons
import { cn } from "@/lib/utils"
// Define Accordion components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ ...props }, ref) => (


  <AccordionPrimitive.Item
    ref={ref}
    className ="bg-[#19191B] border  border-[#343B46] mb-5 rounded-xl" // Tailwind classes for styling
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "bg-[#19191B] flex justify-between items-center w-full text-left text-white py-5 px-6 transition-all  [&[data-state=open]>svg]:hidden rounded-xl",
        className
      )}
      {...props}>
      {children}
   
        <PlusIcon className="h-5 w-5 text-white" />
      
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
// AccordionTrigger.displayName = "AccordionTrigger";
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    // Apply the animations for accordion content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-[#19191B] rounded-xl"
    {...props}
  >
    <div className={cn("pb-4 px-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName


// AccordionContent.displayName = AccordionPrimitive.Content.displayName


// Export your components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
