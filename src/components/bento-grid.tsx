import {
  type Icon,
  IconAd,
  IconBrandWhatsappFilled,
  IconSaladFilled,
} from "@tabler/icons-react";
import { AnimatedGroup } from "./motion-primitive/animated-group";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ReactNode } from "react";

type bento1Type = {
  title: string;
  description: string;
  content: ReactNode;
}[];

type bento2Type = {
  icon: Icon;
  colorBgIcon: string;
  title: string;
  description: string;
}[];

type TypeBento = {
  bento1: bento1Type;
  bento2: bento2Type;
};

const bento: TypeBento = {
  bento1: [
    {
      title: "Expense Management",
      description:
        "Automated expense management software built into your corporate card, reimbursements, and more",
      content: (
        <div className="h-56 bg-primary/10 rounded-xl flex items-center justify-center">
          <span>content 1</span>
        </div>
      ),
    },
    {
      title: "Management Expense",
      description:
        "Eight society mother fewer not duck tropical moon library pick knowledge uilt into your corporate",
      content: (
        <div className="h-56 bg-primary/10 rounded-xl flex items-center justify-center">
          <span>content 1</span>
        </div>
      ),
    },
  ],
  bento2: [
    {
      icon: IconAd,
      colorBgIcon: "bg-amber-400",
      title: "Accounts Payable",
      description:
        "Streamline and automate your payments to vendors and suppliers",
    },
    {
      icon: IconSaladFilled,
      colorBgIcon: "bg-rose-400",
      title: "Procurement",
      description:
        "Simplify your purchasing process with efficient and integrated solutions",
    },
    {
      icon: IconBrandWhatsappFilled,
      colorBgIcon: "bg-lime-400",
      title: "Accounting Automation",
      description:
        "Automate repetitive tasks to enhance accuracy and efficiency in accounting",
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
