"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  type Icon,
  IconMenu2,
  IconUsersGroup,
  IconUserSquareRounded,
  IconWorld,
} from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Variants } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { buttonVariants } from "./ui/button";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/accordion";
import { AnimatedGroup } from "./motion-primitive/animated-group";
import { AccordionItem } from "@radix-ui/react-accordion";
import { useState, useEffect } from "react";

type MenuItem = {
  title: string;
  url: string;
  Icon?: Icon;
  items?: MenuItem[];
};

type NavPropsType = {
  logo: {
    Icon: Icon;
    title: string;
  };
  menu?: MenuItem[];
};

const NavProps: NavPropsType = {
  logo: {
    Icon: IconWorld,
    title: "perhimpunan perkumpulan mahasiswa turki",
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
    },
    {
      title: "forum",
      url: "/forum",
    },
    {
      title: "kontak",
      url: "/kontak",
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full px-2 top-0 duration-300",
          menuState && "-top-20 duration-300"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-1 max-w-6xl px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              "max-w-2xl lg:max-w-5xl rounded-2xl border backdrop-blur-md lg:px-5 ring ring-white/50 mt-3"
          )}
        >
          <div className="relative flex items-center justify-between gap-6 py-2 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center gap-3"
              >
                <NavProps.logo.Icon className="size-5" />
                <span className="capitalize max-w-60 md:max-w-full">
                  {NavProps.logo?.title}
                </span>
              </Link>
            </div>

            <div className="hidden lg:block">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="bg-transparent">
                  {NavProps.menu?.map((item) => renderMenuItems(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="block lg:hidden">
              <Drawer open={menuState} onOpenChange={setMenuState}>
                <DrawerTrigger
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                  })}
                >
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
                          <IconWorld className="size-6" />
                          <span className="font-display text-xl">
                            PPI Bartin
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
      </nav>
    </header>
  );
};

const renderMenuItems = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink
              key={subItem.title}
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem
      key={item.title}
      className={navigationMenuTriggerStyle()}
    >
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMenuListMobile = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem value={item.title} key={item.title}>
        <AccordionTrigger className="capitalize p-2 text-[15px] leading-6 hover:no-underline hover:bg-secondary/20">
          {item.title}
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
    <Link href={item.url} className={navigationMenuTriggerStyle()}>
      <div className="flex items-center gap-4 min-w-60 hover:bg-primary-500/20 p-2 rounded-md">
        <Icon className="size-4 " />
        <span className="font-normal text-sm">{item.title}</span>
      </div>
    </Link>
  );
};

export default Navbar;
