"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TextEffect } from "../motion-primitive/text-effect";
import { AnimatedGroup } from "../motion-primitive/animated-group";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "../ui/background-lines";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { heroProps } from "@/lib/data/hero-data";

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

const Hero1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { badge, buttons, description, heading } = heroProps;

  return (
    <section
      className={cn(
        "h-screen relative pt-32 md:py-[340px] px-3 md:px-0 bg-gradient-to-tr from-primary-400 to-primary/50 duration-300",
        isScrolled && "m-1.5 md:m-6 duration-300 transition-all rounded-2xl"
      )}
    >
      <BackgroundLines svgOptions={{ duration: 5 }} className="bg-transparent">
        <div className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto ">
          <div className="grid items-center gap-8">
            <div className="flex flex-col items-center text-center h-full">
              <AnimatedGroup
                variants={{
                  item: {
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.5,
                      },
                    },
                  },
                }}
              >
                <Badge variant="shadow">
                  {badge}
                  <ArrowUpRight className="ml-2 size-4" />
                </Badge>
              </AnimatedGroup>
              <div className="flex items-center my-6 gap-5">
                <AnimatedGroup
                  variants={{
                    item: {
                      hidden: { opacity: 0, y: -20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.5,
                          duration: 1.5,
                        },
                      },
                    },
                  }}
                >
                  <Avatar className="size-16">
                    <AvatarImage
                      src={heroProps.image.src}
                      alt={heroProps.image.alt}
                    />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                </AnimatedGroup>
                <TextEffect
                  as="h1"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  className="text-pretty text-4xl font-bold lg:text-6xl"
                >
                  {heading}
                </TextEffect>
              </div>
              <TextEffect
                as="span"
                preset="fade"
                speedSegment={0.3}
                className="text-muted-foreground mb-8 max-w-xl md:max-w-5xl lg:text-xl"
              >
                {description}
              </TextEffect>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
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
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export { Hero1 };
