"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

export const SiteLogoTheme = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" aria-label="Home">
      <Image
        priority
        aria-hidden
        src={theme === "light" ? "/logo-dark.svg" : "/logo-white.svg"}
        alt="Logo"
        width={40}
        height={40}
        className="h-6 w-auto"
      />
    </Link>
  );
};

export const SiteLogo = () => {
  return (
    <Link href="/" aria-label="eFishery">
      <Image
        priority
        aria-hidden
        src="/logo.webp"
        alt="Logo"
        width={160}
        height={160}
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
};

export const SiteLogoMobile = () => {
  return (
    <SheetClose asChild>
      <Link href="/" aria-label="eFishery">
        <Image
          priority
          aria-hidden
          src="/logo.webp"
          alt="Logo"
          width={160}
          height={160}
          className="h-8 w-auto md:h-10"
        />
      </Link>
    </SheetClose>
  );
};
