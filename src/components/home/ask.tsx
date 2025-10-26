import AccordionComponent from "../accordion";
import { Badge } from "../ui/badge";
import { askProps } from "@/lib/data/ask-data";

const Ask = () => {
  const { badge, title, description, accrodiont } = askProps;

  return (
    <div className="mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl py-32">
      <div className="w-full flex flex-col items-center space-y-4">
        <Badge variant={"shadow"}>
          <span className="size-1.5 rounded-full bg-secondary-500" />
          <p className="font-light text-xs">{badge}</p>
        </Badge>
        <h2 className="mb-3 text-3xl font-display text-center text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          {title}
        </h2>
        <p className="mb-8 font-light tracking-wide text-muted-foreground/80 md:text-base lg:max-w-2xl lg:text-md text-center">
          {description}
        </p>
      </div>
      <div>
        <AccordionComponent items={accrodiont} />
      </div>
    </div>
  );
};

export default Ask;
