import { Timeline } from "@/components/ui/timeline";
import { timelineProps } from "@/lib/data/timeline-data";
import Image from "next/image";
import { Badge } from "../ui/badge";

const TimelineComponents = () => {
  return (
    <div className="relative w-full overflow-clip max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto my-32">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10 flex flex-col items-center space-y-4">
        <Badge variant={"shadow"}>
          <span className="size-2 rounded-full bg-primary-700 mr-1" /> Acara yg
          akan datang
        </Badge>
        <h2 className="text-lg md:text-4xl xl:text-5xl  mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm text-center">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <Timeline
        data={timelineProps.timelines.map((item) => ({
          title: item.title,
          content: (
            <div key={item.id}>
              <p className="mb-8 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {item.content.map(({ src, alt }, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                  />
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default TimelineComponents;
