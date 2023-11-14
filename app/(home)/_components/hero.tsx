import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url(/home-hero-hifi-1.webp)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container">
        <div className="flex flex-col gap-8 md:w-4/5">
          <h1 className="text-3xl font-semibold text-white md:text-6xl">
            Tumbuh Bersama Lebih dari 70.000 Pembudidaya di 280 Kota/Kabupaten
            di Indonesia
          </h1>

          {/* # */}
          <div className="flex gap-1">
            <Button asChild>
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
