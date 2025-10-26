import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AnimatedGroup } from "../motion-primitive/animated-group";
import type { Variants } from "framer-motion";
import BentoGrid from "../bento-grid";
import { blogProps } from "@/lib/data/blog-data";

const transitionVariantsItem: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const Blogs = () => {
  const { buttonText, buttonUrl, description, heading, tagline } = blogProps;

  return (
    <section className="my-32 px-3 md:px-0">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.5,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: -12,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1.5,
                  },
                },
              },
            }}
          >
            <Badge variant="shadow" className="mb-6">
              <span className="size-1.5 rounded-full bg-primary mr-1" />
              {tagline}
            </Badge>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: { visible: { transition: { delayChildren: 0.8 } } },
              ...transitionVariantsItem,
            }}
          >
            <h2 className="mb-3 text-3xl font-display text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
              {heading}
            </h2>
          </AnimatedGroup>
          <AnimatedGroup
            variants={{
              container: { visible: { transition: { delayChildren: 1 } } },
              ...transitionVariantsItem,
            }}
          >
            <p className="mb-8 font-light tracking-wide text-muted-foreground/80 md:text-base lg:max-w-2xl lg:text-md text-center">
              {description}
            </p>
          </AnimatedGroup>

          <div className="w-full flex justify-center">
            <Link
              href={buttonUrl || "not-found"}
              target="_blank"
              className="group flex items-center gap-2 text-sm py-0.5 px-2 hover:text-primary-800 transition-colors duration-200"
            >
              {buttonText}
              <ArrowRight className=" size-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
      <BentoGrid />
    </section>
  );
};

export default Blogs;
