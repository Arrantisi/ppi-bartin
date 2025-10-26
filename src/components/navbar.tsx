"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  type Icon,
  IconCalendarCheck,
  IconDeviceVisionPro,
  IconMenu2,
  IconUsersGroup,
  IconUserSquareRounded,
} from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Variants } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/accordion";
import { AnimatedGroup } from "./motion-primitive/animated-group";
import { AccordionItem } from "@radix-ui/react-accordion";
import { useState } from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";

type MenuItem = {
  title: string;
  url: string;
  Icon?: Icon;
  items?: MenuItem[];
};

type NavPropsType = {
  logo: {
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
};

const NavProps: NavPropsType = {
  logo: {
    src: "/icon-bartindo.png",
    alt: "logo bartindo",
    title: "Bartındo",
  },
  menu: [
    {
      url: "",
      title: "tentang kami",
      items: [
        {
          url: "/aboutUs",
          Icon: IconUsersGroup,
          title: "tentang kami - inside",
        },
        {
          url: "/jelajahi",
          Icon: IconUserSquareRounded,
          title: " jelajahi kami - society",
        },
      ],
    },
    {
      title: "acara",
      url: "/acara",
      items: [
        {
          url: "/timeline",
          title: "Timeline Acara",
          Icon: IconDeviceVisionPro,
        },
        {
          url: "/acara-kami",
          title: "Acara kami",
          Icon: IconCalendarCheck,
        },
      ],
    },
    {
      title: "contact",
      url: "/contact",
    },
  ],
};

const drawerVariants: Variants = {
  hidden: {
    y: "100%",
    rotateX: 5,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      mass: 0.8,
    },
  },
};

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handle = () => {
      const current = window.scrollY || window.pageYOffset;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // at the very top, always show
          if (current <= 0) {
            setVisible(true);
          } else if (current > lastScroll.current) {
            // scrolling down
            setVisible(false);
          } else if (current < lastScroll.current) {
            // scrolling up
            setVisible(true);
          }

          lastScroll.current = current;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handle, { passive: true });

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header>
      <AnimatedGroup
        as={"nav"}
        variants={{
          item: {
            hidden: { opacity: 0, y: -30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", bounce: 0.5, duration: 1.5 },
            },
          },
        }}
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full px-2 top-0 transition-transform duration-300",
          // when not visible, translate up and hide
          visible
            ? "top-0 duration-300 transition-all"
            : "-top-15 duration-500 transition-all"
        )}
      >
        <div className="mx-auto mt-1 max-w-6xl px-6 transition-all duration-500 lg:px-12 text-shadow-2xs">
          <div className="relative flex items-center justify-between gap-6 py-4 lg:gap-0">
            {/* when desktop */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center gap-1"
              >
                <div className="rounded-full size-11 bg-background flex items-center justify-center">
                  <Image
                    src={NavProps.logo.src}
                    alt={NavProps.logo.alt}
                    width={40}
                    height={40}
                    className="size-9 rounded-full"
                  />
                </div>
                <span className="hidden md:block capitalize md:max-w-full text-2xl font-heading font-bold ml-1">
                  {NavProps.logo?.title}
                </span>
              </Link>
            </div>
            {/* props link */}
            <div className="hidden lg:block absolute rounded-xl backdrop-blur-lg inset-0 size-fit m-auto shadow p-1">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {NavProps.menu?.map((item) => renderMenuItems(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div></div>

            {/* when mobiile */}
            <div className="block lg:hidden">
              <Drawer open={menuState} onOpenChange={setMenuState}>
                <DrawerTrigger className="p-2 backdrop-blur-2xl shadow size-9 rounded-full flex items-center">
                  <IconMenu2 />
                </DrawerTrigger>
                <DrawerContent className="max-w-[500px] rounded-lg mx-auto">
                  <AnimatedGroup
                    variants={drawerVariants}
                    className="mx-auto w-full max-w-[400px]"
                  >
                    <AnimatedGroup variants={itemVariants}>
                      <DrawerHeader>
                        <DrawerTitle className="flex items-center gap-2">
                          <Image
                            src={NavProps.logo.src}
                            alt={NavProps.logo.alt}
                            width={40}
                            height={40}
                            className="size-9 rounded-full"
                          />
                          <span className="font-display text-xl">
                            {NavProps.logo.title}
                          </span>
                        </DrawerTitle>
                      </DrawerHeader>
                    </AnimatedGroup>
                    <div>
                      <Accordion
                        type="single"
                        collapsible
                        className="flex flex-col"
                      >
                        <div className="flex flex-col mb-8 space-y-2">
                          {NavProps.menu?.map((item) =>
                            renderMenuListMobile(item)
                          )}
                        </div>
                      </Accordion>
                    </div>
                  </AnimatedGroup>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </AnimatedGroup>
    </header>
  );
};

const renderMenuItems = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="hover:text-black/60 focus:text-black/60 data-[state=open]:hover:text-black/60">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink
              key={subItem.title}
              asChild
              className="hover:bg-none"
            >
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink href={item.url} className="hover:bg-none">
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMenuListMobile = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem value={item.title} key={item.title}>
        <AccordionTrigger className="capitalize p-2 text-[15px] leading-6 hover:no-underline hover:bg-secondary/20">
          {item.title}
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionContent>
          {item.items.map((subItem) => (
            <SubMenuLink item={subItem} key={subItem.title} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="border-t hover:bg-secondary/20 rounded-sm p-2"
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  const { Icon } = item;
  if (!Icon) return null;

  return (
    <Link href={item.url}>
      <div className="flex items-center gap-4 min-w-60 hover:bg-primary-500/20 p-2 rounded-md">
        <Icon className="size-4 " />
        <span className="font-normal text-sm">{item.title}</span>
      </div>
    </Link>
  );
};

export default Navbar;
