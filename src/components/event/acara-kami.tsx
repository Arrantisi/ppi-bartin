import { acaraKamiProps } from "@/lib/data/acara-kami-data";
import { Badge } from "../ui/badge";

const AcaraKami = () => {
  const { description, header, tagline } = acaraKamiProps;

  return (
    <div className="w-full bg-primary-700 pt-44 pb-32 mb-14">
      <section className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-5">
          <Badge variant={"shadow"}>
            <span className="size-2 rounded-full bg-primary-700" /> {tagline}
          </Badge>
          <h2 className="text-5xl font-semibold text-center max-w-2xl text-background">
            {header}
          </h2>
          <p className="max-w-2xl font-light text-sm text-center text-background/70">
            {description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcaraKami;
