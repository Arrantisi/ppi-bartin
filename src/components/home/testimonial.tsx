import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

const testimonial: TestimonialProps = {
  quote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  author: {
    name: "Customer Name",
    role: "Role",
    avatar: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
      alt: "Customer Name",
    },
  },
};

const Testimonial = () => {
  return (
    <div className="mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl py-32">
      <div className="flex flex-col items-center text-center">
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
            <p className="text-muted-foreground text-sm md:text-base">
              {testimonial.author.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
