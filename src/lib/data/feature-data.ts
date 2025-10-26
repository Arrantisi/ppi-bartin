import { FeatureProp } from "@/types";
import {
  Icon3dCubeSphere,
  IconAdCircleOff,
  IconAdjustmentsDollar,
  IconGardenCart,
} from "@tabler/icons-react";

export const featureProps: FeatureProp = {
  badge: "Program Kami",
  title:
    "Kegiatan, dukungan, dan inisiatif untuk mahasiswa Indonesia di Bartın.",
  items: [
    {
      id: "1",
      icon: Icon3dCubeSphere,
      title: "Orientasi Mahasiswa Baru",
      desription:
        "Panduan dan bantuan bagi mahasiswa baru untuk beradaptasi di Bartın.",
      content: {
        header: "Event & Volunteer",
        description:
          " Ikuti kegiatan sosial, bakti masyarakat, dan acara budaya untuk memperkuat rasa kebersamaan",
      },
    },
    {
      id: "2",
      icon: IconAdCircleOff,
      title: "Kegiatan Sosial",
      desription: "Ajang mempererat hubungan antar pelajar Indonesia.",
      content: {
        header: "Event & Volunteer",
        description:
          " Ikuti kegiatan sosial, bakti masyarakat, dan acara budaya untuk memperkuat rasa kebersamaan",
      },
    },
    {
      id: "3",
      icon: IconAdjustmentsDollar,
      title: "Bantuan Mahasiswa",
      desription:
        "Kami membantu mahasiswa dalam hal administrasi, akomodasi, dan adaptasi awal.",
      content: {
        header: "Event & Volunteer",
        description:
          " Ikuti kegiatan sosial, bakti masyarakat, dan acara budaya untuk memperkuat rasa kebersamaan",
      },
    },
    {
      id: "4",
      icon: IconGardenCart,
      title: "Kegiatan Akademik",
      desription: "Diskusi, pelatihan, dan berbagi ilmu antar mahasiswa.",
      content: {
        header: "Event & Volunteer",
        description:
          " Ikuti kegiatan sosial, bakti masyarakat, dan acara budaya untuk memperkuat rasa kebersamaan",
      },
    },
  ],
};
