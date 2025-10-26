import { footerPropsType } from "@/types";

export const footerProps: footerPropsType = {
  tagline: "Menyatukan Mahasiswa Indonesia di Bartın.",
  supportTagline: "Belajar, Berkarya, dan Berkolaborasi bersama PPI Bartın.",
  menuItems: [
    {
      title: "Tentang Kami",
      links: [
        { text: "Profil PPI Bartın", url: "#" },
        { text: "Struktur Organisasi", url: "#" },
        { text: "Program & Kegiatan", url: "#" },
        { text: "Kontak", url: "/contact" },
      ],
    },
    {
      title: "Ikuti Kami",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/ppibartin/" },
        { text: "Facebook", url: "https://www.facebook.com/ppibartin" },
        { text: "YouTube", url: "https://www.youtube.com/@ppibartin" },
      ],
    },
  ] as unknown as footerPropsType["menuItems"],
  copyright:
    "© 2025 Perhimpunan Pelajar Indonesia Bartın. All rights reserved.",
  bottomLinks: [
    { text: "Kebijakan Privasi", url: "#" },
    { text: "Syarat & Ketentuan", url: "#" },
  ],
};
