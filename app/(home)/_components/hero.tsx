import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="z-10 w-full px-4 pb-24 pt-48">
      <div className="container">
        <div className="flex flex-col gap-12 md:w-2/3">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">
            Tumbuh Bersama Lebih dari 70.000 Pembudidaya di 280 Kota/Kabupaten
            di Indonesia
          </h1>

          {/* # */}
          <div className="flex gap-4">
            <Button asChild variant="primary">
              <Link href="/" aria-label="Selengkapnya">
                Selengkapnya
              </Link>
            </Button>

            <Button asChild variant="link" className="text-white">
              <Link href="/" aria-label="Apa itu eFishery?">
                <PlayCircle className="mr-2 h-6 w-6" />
                Apa itu eFishery?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
