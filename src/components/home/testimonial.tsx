import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TestimonialProps } from "@/types";

//!!! isi content di variable prop ⇣
const testimonial: TestimonialProps = {
  background: {
    src: "/testimonial.png",
    alt: "testimonial",
  },
  quote:
    "PPI Bartın bukan sekadar organisasi, tapi keluarga kedua bagi mahasiswa Indonesia di Bartın. Di sini kita saling bantu, belajar, dan tumbuh bersama.",
  author: {
    name: "Ketua PPI Bartın",
    role: "Periode 2025/2026",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
};

const Testimonial = () => {
  return (
    <div className="mx-3 md:mx-0">
      <div className="relative mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl my-32 h-fit py-4 md:py-0 md:h-[500px]">
        <Image
          src={testimonial.background.src}
          alt={testimonial.background.alt}
          height={400}
          width={800}
          className="absolute top-0 h-full w-full shadow-md rounded-4xl -z-10"
        />

        <div className="flex flex-col items-center text-center text-white h-full justify-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage
                src={testimonial.author.avatar.src}
                alt={testimonial.author.avatar.alt}
              />
              <AvatarFallback>{testimonial.author.name}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">
                {testimonial.author.name}
              </p>
              <p className="text-sm md:text-base text-white/50">
                {testimonial.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
