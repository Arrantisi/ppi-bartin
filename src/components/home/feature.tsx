"use client";

import {
  Icon3dCubeSphere,
  IconAdCircleOff,
  IconAdjustmentsDollar,
  IconGardenCart,
  type Icon,
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
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type TypeItem = {
  id: string;
  icon: Icon;
  title: string;
  desription: string;
  content: ReactNode;
};

type TypeProp = {
  badge: string;
  title: string;
  items: TypeItem[];
};

//!!! isi content di variable prop ⇣
const prop: TypeProp = {
  badge: "Features",
  title: "Feed solutions for all development and no-code tools.",
  items: [
    {
      id: "1",
      icon: Icon3dCubeSphere,
      title: "What makes Origin UI different?",
      desription: "Origin UI focuses on developer experience and performance.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Notifications Section
            </h2>
            <p>Enable or disable email, push, and in-app notifications.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "2",
      icon: IconAdCircleOff,
      title: "What makes Origin UI different?",
      desription: "Origin UI focuses on developer experience and performance.",
      content: (
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Setting</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Notifications Section
            </h2>
            <p>Enable or disable email, push, and in-app notifications.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "3",
      icon: IconAdjustmentsDollar,
      title: "What makes Origin UI different?",
      desription: "Origin UI focuses on developer experience and performance.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Notifications Section
            </h2>
            <p>Enable or disable email, push, and in-app notifications.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "4",
      icon: IconGardenCart,
      title: "What makes Origin UI different?",
      desription: "Origin UI focuses on developer experience and performance.",
      content: (
        <Card className="h-full">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Notifications Section
            </h2>
            <p>Enable or disable email, push, and in-app notifications.</p>
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
