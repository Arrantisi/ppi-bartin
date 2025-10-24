import { addressPropsType } from "@/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const addressProps: addressPropsType = {
  tagline: "Alamat & Kontak",
  header: "Terhubung Bersama PPI Bartın",
  image: {
    url: "/contact.jpg",
    alt: "contact-address",
  },
  content: [
    {
      title: "Alamat",
      desription:
        "Kemerköprü sitmayanı cad Mah. 905 Nolu Sok No 1 Daire 7 çetin. Apr",
    },
    {
      title: "Email",
      desription: "ppi-bartin@gmail.com",
    },
    {
      title: "Phone",
      desription: "+90 802 482 89 12",
    },
  ],
};

const Address = () => {
  const { content, header, image, tagline } = addressProps;

  return (
    <section className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto my-32">
      <div className="flex flex-col space-y-3 items-center mb-14">
        <Badge variant={"shadow"}>
          <span className="size-2 bg-primary-700 rounded-full" />
          {tagline}
        </Badge>
        <h2 className="text-4xl font-semibold ">{header}</h2>
      </div>
      <div className="grid md:flex items-center gap-4 h-full mx-2 md:mx-0">
        <Image
          src={image.url}
          alt={image.alt}
          height={500}
          width={500}
          className="h-[300px] w-full rounded-2xl shadow"
        />
        <Card className="h-[300px] w-full">
          <CardContent className="space-y-4">
            {content.map((item, idx) => (
              <div key={idx}>
                <h1>{item.title}</h1>
                <p>{item.desription}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Address;
