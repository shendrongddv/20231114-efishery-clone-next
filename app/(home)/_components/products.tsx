import { Button } from "@/components/ui/button";
import { dataProducts } from "@/config/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-24">
      <div className="container">
        <ul className="grid gap-4 md:grid-cols-2 md:gap-8">
          {dataProducts?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#F5F5F5] md:flex-row md:items-stretch md:justify-between"
            >
              {/* Col */}
              <div className="flex h-full flex-col items-start gap-2 px-4 py-6 md:w-8/12">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-sm">{item.desc}</p>

                <Button
                  asChild
                  variant="link"
                  className="h-max rounded-none px-0"
                >
                  <Link href={item.link.url} aria-label={item.link.label}>
                    {item.link.label}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
