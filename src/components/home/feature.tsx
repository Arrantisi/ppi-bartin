import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

type FeatureProps = {
  badge: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonLearn: {
    label: string;
    href: string;
  };
};

const feature1: FeatureProps = {
  badge: "Platform",
  title: "Blocks built with Shadcn & Tailwind",
  description:
    "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt: "placeholder hero",
  buttonLearn: {
    label: "Get Started",
    href: "https://shadcnblocks.com",
  },
};
const feature2: FeatureProps = {
  badge: "Intelligence",
  title: "Spend Smarter, Save Every Time",
  description:
    "Use instant insights to get the best price on software, stop redundant spend before it happens, and make every dollar go further",
  imageSrc:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt: "placeholder hero",
  buttonLearn: {
    label: "Learn More",
    href: "https://shadcnblocks.com",
  },
};

const Feature = () => {
  return (
    <div className="bg-primary-400/20 w-full py-32 px-3 md:px-0">
      <div className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto space-y-32">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-2">
            <Badge variant={"secondary"}>
              <div className="size-1.5 rounded-full bg-primary-500" />{" "}
              <span className="font-extralight text-xs ml-1">
                {feature1.badge}
              </span>
            </Badge>
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              {feature1.title}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {feature1.description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link
                href={feature1.buttonLearn.href}
                target="_blank"
                className="p-4 rounded-xl ring ring-black flex items-center gap-2 group"
              >
                {feature1.buttonLearn.label}{" "}
                <IconArrowRight className="size-4 group-hover:translate-x-2 group-hover:mr-2 transition-all duration-300" />
              </Link>
            </div>
          </div>
          <Image
            src={feature1.imageSrc}
            alt={feature1.imageAlt}
            height={400}
            width={400}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Image
            src={feature2.imageSrc}
            alt={feature2.imageAlt}
            height={400}
            width={400}
            className="max-h-96 w-full rounded-md object-cover"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-2">
            <Badge variant={"secondary"}>
              <div className="size-1.5 rounded-full bg-primary-500" />{" "}
              <span className="font-extralight text-xs ml-1">
                {feature2.badge}
              </span>
            </Badge>
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              {feature2.title}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {feature2.description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link
                href={feature2.buttonLearn.href}
                target="_blank"
                className="p-4 rounded-xl border border-black flex items-center gap-2 group"
              >
                {feature2.buttonLearn.label}{" "}
                <IconArrowRight className="size-4 group-hover:translate-x-2 group-hover:mr-2 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
