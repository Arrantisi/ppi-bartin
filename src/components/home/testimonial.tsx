import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { testimonial } from "@/lib/data/testimonial-data";

const Testimonial = () => {
  const { author, background, quote } = testimonial;

  return (
    <div className="mx-3 md:mx-0 mt-64 mb-32">
      <div className="relative mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl h-fit py-4 md:py-0 md:h-[500px]">
        <Image
          src={background.src}
          alt={background.alt}
          height={400}
          width={800}
          className="absolute top-0 h-full w-full shadow-md rounded-4xl -z-10"
        />

        <div className="flex flex-col items-center text-center text-white h-full justify-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src={author.avatar.src} alt={author.avatar.alt} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">{author.name}</p>
              <p className="text-sm md:text-base text-white/50">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
