"use client";

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
import { featureProps } from "@/lib/data/feature-data";

const Feature = () => {
  const { badge, items, title } = featureProps;

  const [activeValue, setActiveValue] = useState("1");

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto my-32 px-3">
      <div className="space-y-3 flex flex-col items-center md:items-start">
        <Badge variant={"shadow"}>
          <span className="size-2 rounded-full bg-red-500 mr-1" />
          {badge}
        </Badge>
        <div className="flex flex-col md:flex-row justify-between space-y-4">
          <h2 className="max-w-3xl text-3xl text-center md:text-left md:text-5xl font-semibold tracking-wide">
            {title}
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
            {items.map((item) => (
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
          {items.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="text-lg font-heading mb-2">
                    {item.content.header}
                  </h2>
                  <p>{item.content.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Feature;
