import {
  IconAd,
  IconBrandWhatsappFilled,
  IconSaladFilled,
} from "@tabler/icons-react";
import { AnimatedGroup } from "./motion-primitive/animated-group";
import { Card, CardContent, CardHeader } from "./ui/card";
import { TypeBento } from "@/types";

const bento: TypeBento = {
  bento1: [
    {
      title: "Kegiatan Mahasiswa",
      description:
        "Dokumentasi dan informasi seputar kegiatan mahasiswa Indonesia di Bartın — mulai dari acara sosial, budaya, hingga akademik.",
      content: (
        <div className="h-56 bg-primary/10 rounded-xl flex items-center justify-center">
          <span>📸 Galeri Kegiatan</span>
        </div>
      ),
    },
    {
      title: "Layanan & Bantuan",
      description:
        "PPI Bartın siap membantu mahasiswa baru maupun lama dalam adaptasi kehidupan di Bartın — mulai dari administrasi, tempat tinggal, hingga informasi kampus.",
      content: (
        <div className="h-56 bg-primary/10 rounded-xl flex items-center justify-center">
          <span>🤝 Dukungan Mahasiswa</span>
        </div>
      ),
    },
  ],
  bento2: [
    {
      icon: IconAd,
      colorBgIcon: "bg-blue-400",
      title: "Informasi Kampus",
      description:
        "Temukan berbagai informasi penting tentang universitas di Bartın dan cara beradaptasi dengan sistem akademik di Turki.",
    },
    {
      icon: IconSaladFilled,
      colorBgIcon: "bg-green-400",
      title: "Kegiatan Sosial",
      description:
        "Kami rutin mengadakan kegiatan sosial dan budaya untuk mempererat hubungan antar mahasiswa Indonesia di Bartın.",
    },
    {
      icon: IconBrandWhatsappFilled,
      colorBgIcon: "bg-amber-400",
      title: "Komunitas & Komunikasi",
      description:
        "Terhubung melalui grup WhatsApp, media sosial, dan forum diskusi sesama pelajar Indonesia di Bartın.",
    },
  ],
};

const BentoGrid = () => {
  return (
    <div className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto flex flex-col justify-center items-center gap-2 py-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-2">
        <AnimatedGroup
          variants={{
            item: {
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.3, duration: 1.5 },
              },
            },
          }}
        >
          <Card>
            <CardHeader>{bento.bento1[0].content}</CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h2 className="font-display text-2xl">
                  {bento.bento1[0].title}
                </h2>
                <p className="font-light text-sm text-base-500/70">
                  {bento.bento1[0].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
        <AnimatedGroup
          variants={{
            item: {
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", bounce: 0.3, duration: 1.5 },
              },
            },
          }}
        >
          <Card>
            <CardHeader>{bento.bento1[1].content}</CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h2 className="font-display text-2xl">
                  {bento.bento1[1].title}
                </h2>
                <p className="font-light text-sm text-base-500/70">
                  {bento.bento1[1].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
        {bento.bento2.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <span className={`p-3 ${item.colorBgIcon} rounded-full w-fit`}>
                <item.icon className="size-7" />
              </span>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-start space-y-2">
                <h2 className="font-display text-xl tracking-wide">
                  {item.title}
                </h2>
                <p className="font-light text-sm tracking-wide text-base-500/70">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
