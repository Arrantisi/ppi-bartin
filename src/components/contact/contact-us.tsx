import React from "react";
import { Badge } from "../ui/badge";
import { contactProps } from "@/lib/data/contact-us-data";

const ContactuS = () => {
  const { description, header, tagline } = contactProps;

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-xl md:max-w-3xl mx-auto px-2 mt-48 mb-20">
      <Badge variant={"shadow"}>
        <span className="size-2 bg-primary-700 rounded-full mr-1" />
        {tagline}
      </Badge>
      <h2 className="text-5xl font-semibold text-center">{header}</h2>
      <p className="text-center text-sm max-w-4xl">{description}</p>
    </div>
  );
};

export default ContactuS;
