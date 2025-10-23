import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";

type TypeItems = {
  id: string;
  title: string;
  content: string;
}[];

const AccordionComponent = ({ items }: { items: TypeItems }) => {
  return (
    <div className="max-w-5xl mx-auto p-3 my-16">
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="my-2">
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              {item.title}
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
