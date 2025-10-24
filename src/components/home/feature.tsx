"use client";

import {
  Icon3dCubeSphere,
  IconAdCircleOff,
  IconAdjustmentsDollar,
  IconGardenCart,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent } from "../ui/tabs";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { FeatureProp } from "@/types";

//!!! isi content di variable prop ⇣
const prop: FeatureProp = {
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
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-heading mb-2">Program Orientasi</h2>
            <p>
              Kami menyediakan sesi orientasi tahunan agar mahasiswa baru lebih
              siap menghadapi kehidupan kampus dan budaya Turki.
            </p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "2",
      icon: IconAdCircleOff,
      title: "Kegiatan Sosial",
      desription: "Ajang mempererat hubungan antar pelajar Indonesia.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-heading mb-2">Event & Volunteer</h2>
            <p>
              Ikuti kegiatan sosial, bakti masyarakat, dan acara budaya untuk
              memperkuat rasa kebersamaan.
            </p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "3",
      icon: IconAdjustmentsDollar,
      title: "Bantuan Mahasiswa",
      desription:
        "Kami membantu mahasiswa dalam hal administrasi, akomodasi, dan adaptasi awal.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-heading mb-2">Support Center</h2>
            <p>
              Hubungi tim PPI Bartın jika kamu butuh bantuan terkait dokumen,
              tempat tinggal, atau informasi penting lainnya.
            </p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "4",
      icon: IconGardenCart,
      title: "Kegiatan Akademik",
      desription: "Diskusi, pelatihan, dan berbagi ilmu antar mahasiswa.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-heading mb-2">Forum Akademik</h2>
            <p>
              Kami mendukung pengembangan akademik melalui sesi belajar bersama
              dan workshop tematik.
            </p>
          </CardContent>
        </Card>
      ),
    },
  ],
};

const Feature = () => {
  const [activeValue, setActiveValue] = useState("1");

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto my-32 px-3">
      <div className="space-y-3 flex flex-col items-center md:items-start">
        <Badge variant={"shadow"}>
          <span className="size-2 rounded-full bg-red-500 mr-1" />
          {prop.badge}
        </Badge>
        <div className="flex flex-col md:flex-row justify-between space-y-4">
          <h2 className="max-w-3xl text-3xl text-center md:text-left md:text-5xl font-semibold tracking-wide">
            {prop.title}
          </h2>

          <Button>lebih lanjut lagi</Button>
        </div>
      </div>

      {/* tabs */}
      <div className=" flex flex-col w-full md:flex-row mt-8 gap-10">
        {/* bagian kanan */}
        <div className="w-full md:w-2/5">
          <Accordion
            type="single"
            collapsible
            value={activeValue}
            onValueChange={(val) => setActiveValue(val || activeValue)}
          >
            {prop.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={cn(
                  "border-none rounded-2xl transition-all duration-300 hover:shadow p-2 px-4 hover:bg-gradient-to-bl from-black/5 to-white my-2 group",
                  activeValue === item.id &&
                    "shadow bg-gradient-to-tl from-black/5 to-white"
                )}
              >
                <AccordionTrigger className="hover:no-underline text-lg font-semibold tracking-wide">
                  <div
                    className={cn(
                      "flex items-center gap-5 text-black/50 group-hover:text-black",
                      activeValue === item.id && "text-black"
                    )}
                  >
                    <item.icon className="size-6" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="ml-10 font-light text-sm text-accent-foreground">
                  {item.desription}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* bagian kiri */}
        <Tabs value={activeValue} className="w-full md:w-3/5">
          {prop.items.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Feature;
