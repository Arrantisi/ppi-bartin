import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { addressProps } from "@/lib/data/address-data";

const Address = () => {
  const { content, header, description, tagline, socialMedia } = addressProps;

  return (
    <section className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto my-32">
      <div className="grid md:grid-cols-2 items-center gap-4 h-full mx-2 md:mx-0">
        <div className="flex flex-col space-y-5 mb-14 items-start h-full">
          <Badge variant={"shadow"}>
            <span className="size-2 bg-primary-700 rounded-full" />
            {tagline}
          </Badge>
          <h2 className="text-4xl font-semibold max-w-md">{header}</h2>
          <p>{description}</p>
        </div>
        <Card className="h-[300px] w-full">
          <CardContent className="space-y-4">
            {content.map((item, idx) => (
              <div key={idx}>
                <h1>{item.title}</h1>
                <p>{item.desription}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-3">
              {socialMedia.map((item, idx) => (
                <Button
                  key={idx}
                  variant={"whiteShadow"}
                  className="size-12 rounded-full"
                >
                  <Link href={item.link}>
                    <item.icon className="size-8" />
                  </Link>
                </Button>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Address;
