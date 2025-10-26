import { addressPropsType } from "@/types";
import {
  IconBrandInstagramFilled,
  IconBrandFacebookFilled,
  IconMailBolt,
  IconPhone,
} from "@tabler/icons-react";

export const addressProps: addressPropsType = {
  tagline: "Alamat & Kontak",
  header: "Terhubung Bersama PPI Bartın",
  description:
    "Hubungi kami untuk pertanyaan seputar kegiatan, program, atau bergabung menjadi bagian dari komunitas mahasiswa Indonesia di Bartın. Kami siap membantu dan berbagi informasi terkini.",
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
