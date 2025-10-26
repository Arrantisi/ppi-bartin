import { TypeHeroProps } from "@/types";

export const heroProps: TypeHeroProps = {
  badge: "🇮🇩 Perhimpunan Pelajar Indonesia di Turki",
  heading: "PPI Bartın",
  description:
    "Wadah kebersamaan mahasiswa Indonesia di kota Bartın, Turki. Kami hadir untuk mempererat silaturahmi, mendukung kegiatan akademik, sosial, dan budaya bagi seluruh pelajar Indonesia di Bartın.",
  buttons: {
    primary: {
      text: "Kenali Kami Lebih Dekat",
      url: "/tentang", // arahkan ke halaman tentang organisasi
    },
    secondary: {
      text: "Ikuti Kegiatan Kami",
      url: "/kegiatan", // bisa diganti ke Instagram/agenda kegiatan
    },
  },
  image: {
    src: "/icon-bartindo.png",
    alt: "Logo dan semangat kebersamaan PPIT Bartın",
  },
};
