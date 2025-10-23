import AccordionComponent from "../accordion";
import { Badge } from "../ui/badge";

type TypeAccordiontIitems = {
  id: string;
  title: string;
  content: string;
}[];

type AskType = {
  badge: string;
  title: string;
  description: string;
  accrodiont: TypeAccordiontIitems;
};

//!!! isi content di variable prop ⇣
const askProps: AskType = {
  badge: "Pertanyaan",
  title: "Frequently asked questions",
  description:
    "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  accrodiont: [
    {
      id: "1",
      title: "What makes Origin UI different?",
      content:
        "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
    },
    {
      id: "2",
      title: "How can I customize the components?",
      content:
        "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
    },
    {
      id: "3",
      title: "Is Origin UI optimized for performance?",
      content:
        "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
    },
    {
      id: "4",
      title: "How accessible are the components?",
      content:
        "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
    },
    {
      id: "5",
      title: "learn blank light laid danger prize needed?",
      content:
        "object wonderful sure else trade silly learn blank light laid danger enemy inch prize needed solve dog year even your average am zoo advice",
    },
    {
      id: "6",
      title: "safe move give spin?",
      content:
        "verb piano rod successful spent same take attention brick surprise twelve life quietly cotton golden live street get grown occasionally yellow arrange vote changing",
    },
    {
      id: "7",
      title: " hungry peace police neighborhood off local may?",
      content:
        "continued every shout making grass flew fierce drew vessels quite still disappear guess half farmer trunk came result troops statement birds soldier stretch climate",
    },
  ],
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
        <AccordionComponent items={askProps.accrodiont} />
      </div>
    </div>
  );
};

export default Ask;
