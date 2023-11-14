import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="px-4">
      <div className="container flex flex-col items-center gap-8 overflow-hidden rounded-2xl bg-slate-100 pt-16">
        {/* Row */}
        <h2 className="text-center text-2xl font-semibold text-foreground max-md:px-4 md:w-4/5 md:text-5xl">
          Siap untuk Menciptakan Dampak Positif? Ayo Gabung bersama Kami
        </h2>

        {/* Row */}
        <Button asChild variant="link" className="-mt-4">
          <Link href="/" aria-label="Cari lowongan">
            Cari lowongan
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        {/* Row */}
        <figure className="w-full md:w-3/5">
          <Image
            src="/career-entry-hifi-1.webp"
            alt="Image"
            width={572}
            height={348}
            className="h-auto w-full translate-y-6"
          />
        </figure>
      </div>
    </section>
  );
};

export default JoinUs;
