"use client";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  IconChevronUp,
  IconUsersGroup,
  IconUserSquareRounded,
  IconWorld,
} from "@tabler/icons-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12",
            isScrolled &&
              "max-w-4xl rounded-2xl border backdrop-blur-md lg:px-5 ring ring-white/50 mt-5"
          )}
        >
          <div className="relative flex items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center gap-2"
              >
                <IconWorld className="size-5" />
                <span>perhimpunan perkumpulan mahasiswa turki</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <ul className="flex gap-8 text-sm">
              <li>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href={"#"}
                      className="text-muted-foreground hover:text-accent-foreground flex duration-150 items-center gap-2 group"
                    >
                      <span>Tentang Kami</span>{" "}
                      <IconChevronUp className="size-5 group-hover:rotate-180 transition-all duration-500" />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <Link
                        href={"#"}
                        className="rounded-md hover:bg-primary-300/30 transition-all duration-150 flex items-center gap-2 p-1"
                      >
                        <IconUsersGroup className="size-4" />{" "}
                        <span className="text-xs font-light">Tentang kami</span>
                      </Link>
                      <Link
                        href={""}
                        className="rounded-md hover:bg-primary-300/30 transition-all duration-150 flex items-center gap-2 p-1"
                      >
                        <IconUserSquareRounded className="size-4" />{" "}
                        <span className="text-xs font-light">
                          jelajahi kami
                        </span>
                      </Link>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-muted-foreground hover:text-accent-foreground flex duration-150 "
                >
                  <span>Acara</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-muted-foreground hover:text-accent-foreground flex duration-150"
                >
                  <span>Forum</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-muted-foreground hover:text-accent-foreground flex duration-150"
                >
                  <span>Kontak</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
