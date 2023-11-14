import { Button } from "@/components/ui/button";
import { dataProducts } from "@/config/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-24">
      <div className="container">
        <ul className="grid gap-12 md:grid-cols-2 md:gap-8">
          {dataProducts?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col gap-4 md:flex-row-reverse md:items-center md:justify-between md:gap-8 md:even:flex-row"
            >
              {/* Col */}
              <div className="md:w-5/12">
                <figure className="mx-auto aspect-1 w-1/2 overflow-hidden rounded-2xl bg-primary md:w-full">
                  <Image
                    src={`/${item.media.image}`}
                    alt={item.title}
                    width={252}
                    height={304}
                    className="mx-auto h-full w-auto translate-y-5 transition duration-500 group-hover:scale-110"
                  />
                </figure>
              </div>

              {/* Col */}
              <div className="md:w-7/12">
                <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="line-clamp-4 text-sm">{item.desc}</p>

                  <Button asChild variant="link">
                    <Link href="/" aria-label="Pelajari selengkapnya">
                      Pelajari selengkapnya
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Col */}
              {/* <div className="grid h-full place-content-end md:w-5/12">
                <figure className="w-full border">
                  <Image
                    src={`/${item.media.image}`}
                    alt={item.title}
                    width={252}
                    height={304}
                    className="mx-auto h-auto"
                  />
                </figure>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
