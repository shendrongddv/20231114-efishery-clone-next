"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "../site-logo";
import { MenuToggle } from "./menu-toggle";
import { cn } from "@/lib/utils";

const TOP_OFFSET = 66;

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center px-4 transition duration-500",
        showBackground ? "h-16 bg-white" : "h-20 bg-transparent",
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          {/* SiteLogo */}
          <SiteLogo />

          {/* Nav */}

          {/* LanguageSwitcher */}
          <MenuToggle showBackground={showBackground} />
        </div>
      </div>
    </header>
  );
};

export default Header;
