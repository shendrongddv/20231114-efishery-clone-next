"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const SiteLogo = () => {
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
