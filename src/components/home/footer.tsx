import { FooterProps } from "@/types";
import Image from "next/image";

//!!! isi content di variable prop ⇣
const Footer = ({
  tagline = "Menyatukan Mahasiswa Indonesia di Bartın.",
  supportTagline = "Belajar, Berkarya, dan Berkolaborasi bersama PPI Bartın.",
  menuItems = [
    {
      title: "Tentang Kami",
      links: [
        { text: "Profil PPI Bartın", url: "#" },
        { text: "Struktur Organisasi", url: "#" },
        { text: "Program & Kegiatan", url: "#" },
        { text: "Kontak", url: "/contact" },
      ],
    },
    {
      title: "Ikuti Kami",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/ppibartin/" },
        { text: "Facebook", url: "https://www.facebook.com/ppibartin" },
        { text: "YouTube", url: "https://www.youtube.com/@ppibartin" },
      ],
    },
  ] as unknown as FooterProps["menuItems"],
  copyright = "© 2025 Perhimpunan Pelajar Indonesia Bartın. All rights reserved.",
  bottomLinks = [
    { text: "Kebijakan Privasi", url: "#" },
    { text: "Syarat & Ketentuan", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className="py-16 bg-primary-700">
      <div className="mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl px-4 md:px-0">
        <footer>
          <div className="grid grid-cols-2 md:grid-cols-5">
            <div className="col-span-3 mb-14 md:mb-8 lg:mb-0 space-y-1">
              <h1 className="mt-4 font-bold tracking-wide text-background text-xl md:text-2xl">
                {tagline}
              </h1>
              <h2 className="text-background/80 tracking-wide text-lg md:text-xl">
                {supportTagline}
              </h2>

              <div className="mt-14 flex items-center gap-2">
                <div className="bg-background rounded-full p-2 w-fit flex items-center gap-2">
                  <Image
                    src={"/icon-bartindo.png"}
                    alt="icon-bartindo"
                    height={100}
                    width={100}
                    className="size-12 md:size-14 rounded-full"
                  />
                </div>
                <h1 className="font-bold text-4xl md:text-5xl text-background">
                  Bartındo
                </h1>
              </div>
            </div>
            {menuItems?.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-lg text-background ">
                  {section.title}
                </h3>
                <ul className="text-background space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-background/70 font-thin text-background/80"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-background mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
