import { type Icon } from "@tabler/icons-react";
import { ReactNode } from "react";

//?? ======================================== hero type ======================================== ??//
export type TypeHeroProps = {
  badge: string;
  heading: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
};

//?? ======================================== blog type ======================================== ??//
export type BlogProps = {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
};

export type TypeBento = {
  bento1: {
    title: string;
    description: string;
    content: ReactNode;
  }[];
  bento2: {
    icon: Icon;
    colorBgIcon: string;
    title: string;
    description: string;
  }[];
};

//?? ======================================== feature type ======================================== ??//
export type FeatureProp = {
  badge: string;
  title: string;
  items: {
    id: string;
    icon: Icon;
    title: string;
    desription: string;
    content: ReactNode;
  }[];
};

//?? ======================================== testimonial type ======================================== ??//
export type TestimonialProps = {
  background: {
    src: string;
    alt: string;
  };
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
};

//?? ======================================== ask type ======================================== ??//
export type AskType = {
  badge: string;
  title: string;
  description: string;
  accrodiont: {
    id: string;
    title: string;
    content: string;
  }[];
};

//?? ======================================== footer type ======================================== ??//
export type FooterProps = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  supportTagline?: string;
  menuItems?: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
};

//?? ======================================== contact type ======================================== ??//
export type contactPropsType = {
  tagline: string;
  header: string;
  description: string;
  socialMedia: {
    link: string;
    icon: Icon;
  }[];
};

//?? ======================================== address type ======================================== ??//
export type addressPropsType = {
  tagline: string;
  header: string;
  image: {
    url: string;
    alt: string;
  };
  content: {
    title: string;
    desription: string;
  }[];
};
