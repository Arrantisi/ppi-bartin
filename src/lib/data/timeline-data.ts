import { timelinePropsType } from "@/types";

export const timelineProps: timelinePropsType = {
  tagline: "Acara yang akan datang",
  header: "Agenda Seru Bersama PPI Bartın",
  description:
    "Berikut beberapa acara menarik yang akan diselenggarakan oleh PPI Bartın. Jangan lewatkan kesempatan untuk berpartisipasi dan mempererat kebersamaan antar mahasiswa Indonesia di Bartın!",

  timelines: [
    {
      id: "1",
      title: "Desember 2025",
      description:
        "✨ *Bartindo Culture Day 2025* — Perayaan tahunan budaya Indonesia yang menampilkan tari tradisional, kuliner khas nusantara, serta pameran seni mahasiswa Indonesia di Bartın. Acara ini terbuka untuk umum dan diharapkan menjadi wadah memperkenalkan budaya Indonesia kepada masyarakat Turki.",
      content: [
        { src: "/icon-bartindo.png", alt: "foto acara budaya" },
        { src: "/icon-bartindo.png", alt: "foto acara budaya" },
        { src: "/icon-bartindo.png", alt: "foto acara budaya" },
        { src: "/icon-bartindo.png", alt: "foto acara budaya" },
      ],
    },
    {
      id: "2",
      title: "Januari 2026",
      description:
        "🎓 *Seminar Karier dan Beasiswa* — Sebuah forum inspiratif bersama alumni PPI Bartın dan mahasiswa berprestasi untuk berbagi pengalaman mengenai beasiswa, peluang studi lanjut, dan pengembangan karier di dalam maupun luar negeri.",
      content: [
        { src: "/icon-bartindo.png", alt: "foto seminar karier" },
        { src: "/icon-bartindo.png", alt: "foto seminar karier" },
        { src: "/icon-bartindo.png", alt: "foto seminar karier" },
        { src: "/icon-bartindo.png", alt: "foto seminar karier" },
      ],
    },
    {
      id: "3",
      title: "Februari 2026",
      description:
        "🏃‍♂️ *Bartın Fun Run & Charity Day* — Acara olahraga santai sekaligus kegiatan sosial penggalangan dana untuk membantu sesama. Peserta dapat berlari, berjalan santai, atau sekadar menikmati suasana kebersamaan di taman kota Bartın.",
      content: [
        { src: "/icon-bartindo.png", alt: "foto charity run" },
        { src: "/icon-bartindo.png", alt: "foto charity run" },
        { src: "/icon-bartindo.png", alt: "foto charity run" },
        { src: "/icon-bartindo.png", alt: "foto charity run" },
      ],
    },
  ],
};
