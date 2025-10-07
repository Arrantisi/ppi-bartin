import AccordionComponent from "../accordion";
import { Badge } from "../ui/badge";

type AskType = {
  badge: string;
  title: string;
  description: string;
};

const askProps: AskType = {
  badge: "Pertanyaan",
  title: "Frequently asked questions",
  description:
    "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
};

const Ask = () => {
  return (
    <div className="mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl py-32">
      <div className="w-full flex flex-col items-center space-y-4">
        <Badge variant={"outline"}>
          <span className="size-1.5 rounded-full bg-secondary-500" />
          <p className="font-light text-xs">{askProps.badge}</p>
        </Badge>
        <h2 className="mb-3 text-3xl font-display text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          {askProps.title}
        </h2>
        <p className="mb-8 font-light tracking-wide text-muted-foreground/80 md:text-base lg:max-w-2xl lg:text-md text-center">
          {askProps.description}
        </p>
      </div>
      <div>
        <AccordionComponent />
      </div>
    </div>
  );
};

export default Ask;
