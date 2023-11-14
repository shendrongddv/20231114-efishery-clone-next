import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, Facebook } from "lucide-react";
import Image from "next/image";
import { NavFooter } from "@/config/site";

const Footer = () => {
  return (
    <footer>
      {/* Row */}
      <div className="bg-[#026C52] px-4 py-24 text-white">
        <div className="container flex w-full flex-col gap-8 md:flex-row md:justify-between">
          {/* Col */}
          <div className="flex flex-col gap-2 md:w-3/12">
            <Link href="/" aria-label="eFishery" className="">
              <Image
                src="/efishery-logo-white.png"
                alt="eFishery"
                width={500}
                height={500}
                className="h-10 w-auto"
              />
            </Link>

            <h4 className="mt-2 font-semibold">
              PT Multidaya Teknologi Nusantara
            </h4>
            <address className="text-sm not-italic text-white/80">
              Jl. Malabar No.37, Samoja, Kec. Batununggal, Kota Bandung, Jawa
              Barat 40273
            </address>
          </div>

          {NavFooter?.map((item) => (
            <div key={item.id} className="md:flex-1">
              <h4 className="font-semibold text-white">{item.group}</h4>

              <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-1">
                {item.links?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      aria-label={item.label}
                      className="text-sm text-white/80 hover:text-white hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Row */}
      <div className="px-4 py-6">
        <div className="container flex items-center justify-between gap-4">
          {/* Col */}
          <Button variant="outline" className="w-max">
            ID
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>

          {/* Col */}
          <div className="flex gap-2">
            <Button
              asChild
              variant="default"
              size="icon"
              className="rounded-full bg-[#026C52] hover:bg-[#026C52]/80"
            >
              <Link href="/" aria-label="Link">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="icon"
              className="rounded-full bg-[#026C52] hover:bg-[#026C52]/80"
            >
              <Link href="/" aria-label="Link">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="icon"
              className="rounded-full bg-[#026C52] hover:bg-[#026C52]/80"
            >
              <Link href="/" aria-label="Link">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              size="icon"
              className="rounded-full bg-[#026C52] hover:bg-[#026C52]/80"
            >
              <Link href="/" aria-label="Link">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Row */}
      <div className="bg-[#026C52] px-4 py-6 text-sm text-white/80">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex gap-4">
            <Link
              href="/"
              aria-label="Privacy Policy"
              className="hover:text-white hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              aria-label="Terms & Conditions"
              className="hover:text-white hover:underline hover:underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Col */}
          <span>© 2023 eFishery, Inc</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
