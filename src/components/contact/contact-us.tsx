import { contactPropsType } from "@/types";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconMailBolt,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

const contactProps: contactPropsType = {
  tagline: "Ada pertanyaan? Hubungi kami!",
  header: "Kontak PPI Bartın",
  description:
    "PPI Bartın siap menerima pertanyaan, saran, atau informasi lebih lanjut seputar kegiatan dan program kami. Silakan hubungi kami melalui media sosial atau email di bawah ini.",
  socialMedia: [
    {
      icon: IconBrandInstagramFilled, // ganti sesuai icon library
      link: "https://www.instagram.com/ppibartin/",
    },
    {
      icon: IconBrandFacebookFilled,
      link: "https://www.facebook.com/ppibartin",
    },
    {
      icon: IconMailBolt,
      link: "mailto:ppibartin@example.com",
    },
    {
      icon: IconPhone,
      link: "tel:+905300000000",
    },
  ],
};

const ContactuS = () => {
  const { description, header, socialMedia, tagline } = contactProps;

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-xl md:max-w-3xl mx-auto px-2">
      <Badge variant={"shadow"}>
        <span className="size-2 bg-primary-700 rounded-full mr-1" />
        {tagline}
      </Badge>
      <h2 className="text-5xl font-semibold text-center">{header}</h2>
      <p className="text-center text-sm max-w-4xl">{description}</p>
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
    </div>
  );
};

export default ContactuS;
