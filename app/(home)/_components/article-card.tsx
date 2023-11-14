import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ArticleCard = () => {
  return (
    <div className="group grid gap-4 rounded-2xl p-4 transition duration-500 hover:bg-slate-100">
      {/* # */}
      <figure className="aspect-h-3 aspect-w-4 grid w-full place-content-start overflow-hidden rounded-xl">
        <Image
          src="/manfaat-ikan-nila-768x768.webp"
          alt="Image"
          width={768}
          height={768}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>

      {/* # */}
      <h3 className="line-clamp-2 text-lg font-semibold md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        consequuntur mollitia quidem.
      </h3>

      {/* # */}
      <Button asChild variant="link" className="h-max w-max px-0">
        <Link href="/" aria-label="Link">
          Baca selengkapnya
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
