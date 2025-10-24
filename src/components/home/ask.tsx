import { AskType } from "@/types";
import AccordionComponent from "../accordion";
import { Badge } from "../ui/badge";

//!!! isi content di variable prop ⇣
const askProps: AskType = {
  badge: "Pertanyaan",
  title: "Pertanyaan yang Sering Diajukan",
  description:
    "Temukan jawaban atas pertanyaan umum seputar kegiatan, program, dan informasi penting PPI Bartın.",
  accrodiont: [
    {
      id: "1",
      title: "Apa itu PPI Bartın?",
      content:
        "PPI Bartın adalah organisasi mahasiswa Indonesia di Bartın yang bertujuan mempererat hubungan antar mahasiswa dan menyelenggarakan kegiatan akademik serta sosial.",
    },
    {
      id: "2",
      title: "Bagaimana cara bergabung dengan PPI Bartın?",
      content:
        "Mahasiswa Indonesia yang sedang menempuh studi di Bartın bisa mendaftar melalui formulir online atau menghubungi pengurus aktif kami.",
    },
    {
      id: "3",
      title: "Apa saja program yang dijalankan PPI Bartın?",
      content:
        "Kami memiliki program sosial, pendidikan, budaya, dan pengembangan kapasitas mahasiswa, termasuk seminar, workshop, dan kegiatan rekreasi.",
    },
    {
      id: "4",
      title: "Bagaimana cara mendapatkan informasi terbaru PPI Bartın?",
      content:
        "Informasi terbaru bisa diperoleh melalui website resmi, media sosial kami, atau bergabung dengan grup komunikasi mahasiswa Indonesia di Bartın.",
    },
    {
      id: "5",
      title: "Apakah ada biaya untuk menjadi anggota?",
      content:
        "Tidak ada biaya pendaftaran. Namun untuk beberapa kegiatan tertentu, mungkin ada iuran atau kontribusi sukarela untuk mendukung pelaksanaan acara.",
    },
    {
      id: "6",
      title: "Apakah PPI Bartın hanya untuk mahasiswa aktif?",
      content:
        "Ya, keanggotaan terbuka untuk mahasiswa Indonesia yang sedang menempuh studi di Bartın. Alumni tetap bisa berpartisipasi dalam beberapa kegiatan tertentu.",
    },
    {
      id: "7",
      title: "Bagaimana cara menjadi relawan kegiatan PPI Bartın?",
      content:
        "Kamu bisa mendaftar melalui pengumuman kegiatan yang kami sebarkan di media sosial atau melalui kontak langsung pengurus.",
    },
    {
      id: "8",
      title: "Apakah PPI Bartın bekerja sama dengan organisasi lain?",
      content:
        "Ya, PPI Bartın sering bekerja sama dengan universitas, komunitas lokal, dan organisasi mahasiswa Indonesia lainnya untuk menyelenggarakan acara dan program sosial.",
    },
  ],
};

const Ask = () => {
  return (
    <div className="mx-auto max-w-xl md:max-w-3xl xl:max-w-6xl py-32">
      <div className="w-full flex flex-col items-center space-y-4">
        <Badge variant={"shadow"}>
          <span className="size-1.5 rounded-full bg-secondary-500" />
          <p className="font-light text-xs">{askProps.badge}</p>
        </Badge>
        <h2 className="mb-3 text-3xl font-display text-center text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          {askProps.title}
        </h2>
        <p className="mb-8 font-light tracking-wide text-muted-foreground/80 md:text-base lg:max-w-2xl lg:text-md text-center">
          {askProps.description}
        </p>
      </div>
      <div>
        <AccordionComponent items={askProps.accrodiont} />
      </div>
    </div>
  );
};

export default Ask;
