import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardWrapper from "../common/CardWrapper";
import { FaQuora } from "react-icons/fa";
import { faqData } from "@/common/data";

export function AccordionCard() {
  return (
    <CardWrapper className="flex bg-cream-100 shadow-sm  hover:shadow-md cursor-pointer hover:bg-cream-100 max-w-5xl mx-auto lg:py-8 lg:px-10">
      <Accordion type="single" collapsible className=" w-full">
        {faqData.map((data, i) => (
          <AccordionItem key={i} value={data.ques}>
            <AccordionTrigger className="">
              <div className="lg:text-lg sm:text-base text-[14.5px] flex items-center gap-x-3 py-1">
                <span>
                  <FaQuora className="text-[#d4af37]" />
                </span>
                {data.ques}
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-gold-50 sm:px-7 sm:py-4 rounded-xl text-sm font-normal ">
              {data.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardWrapper>
  );
}
