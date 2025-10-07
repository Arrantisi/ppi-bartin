import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AnimatedGroup } from "../motion-primitive/animated-group";
import type { Variants } from "framer-motion";
import BentoGrid from "../bento-grid";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

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

const Blogs = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
}: Blog7Props) => {
  return (
    <section className="py-32 px-3 md:px-0">
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
            <Badge variant="outline" className="mb-6">
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
              href={buttonUrl}
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
