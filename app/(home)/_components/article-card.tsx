import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-dropdown-menu";
import { ChevronRight, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ArticleCard = () => {
  return (
    <div className="group grid overflow-hidden rounded-2xl border transition duration-500">
      {/* # */}
      <div className="relative isolate flex flex-col">
        {/* ### */}
        <figure className="aspect-h-3 aspect-w-4 z-0 grid w-full place-content-center overflow-hidden">
          <Image
            src="/manfaat-ikan-nila-768x768.webp"
            alt="Image"
            width={768}
            height={768}
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </figure>

        {/* ### */}
        <div className="absolute inset-0 z-10 flex items-end justify-start gap-1 p-4">
          <Badge variant="default" className="bg-foreground font-normal">
            Ikan
          </Badge>
          <Badge variant="default" className="bg-foreground font-normal">
            Articles
          </Badge>
        </div>
      </div>

      {/* # */}
      <div className="grid gap-4 p-4">
        {/* ## */}
        <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition duration-500 group-hover:text-primary md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consequuntur mollitia quidem.
        </h3>

        {/* ## */}
        <div className="flex justify-between">
          {/* ### */}
          <Button asChild variant="link" className="h-max w-max px-0">
            <Link href="/" aria-label="Link">
              Baca
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* ### */}
          <div className="flex gap-2">
            <MessageSquare className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
