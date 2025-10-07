import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "../motion-primitive/text-effect";
import { AnimatedGroup } from "../motion-primitive/animated-group";
import type { Variants } from "framer-motion";

interface Hero1Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const transitionVariants: { item: Variants } = {
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.5, duration: 1.5 },
    },
  },
};

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="relative py-32 px-3 md:px-0">
      <div className="-z-10 bg-primary-200/70 h-full w-[40%] absolute right-0 top-0" />
      <div className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto ">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimatedGroup
              variants={{
                item: {
                  hidden: { opacity: 0, y: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", bounce: 0.5, duration: 1.5 },
                  },
                },
              }}
            >
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            </AnimatedGroup>

            <TextEffect
              as="h1"
              preset="fade-in-blur"
              speedSegment={0.3}
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
            >
              {heading}
            </TextEffect>
            <TextEffect
              as="span"
              preset="fade"
              speedSegment={0.3}
              className="text-muted-foreground mb-8 max-w-xl lg:text-xl"
            >
              {description}
            </TextEffect>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: { transition: { delayChildren: 1.5 } },
                  },
                  ...transitionVariants,
                }}
              >
                {buttons.primary && (
                  <Button
                    asChild
                    variant={"secondary"}
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
              </AnimatedGroup>
              <AnimatedGroup
                variants={{
                  container: {
                    visible: { transition: { delayChildren: 2 } },
                  },
                  ...transitionVariants,
                }}
              >
                {buttons.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto group"
                  >
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ArrowRight className="size-4 group-hover:translate-x-2 transition-all duration-300 group-hover:mr-2" />
                    </a>
                  </Button>
                )}
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: { visible: { transition: { delayChildren: 1 } } },
              item: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", bounce: 0.5, duration: 1.5 },
                },
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="max-h-96 w-full rounded-md object-cover"
            />
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
