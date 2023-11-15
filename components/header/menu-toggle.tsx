import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { SiteLogoMobile } from "../site-logo";
import { LanguageSwitcher } from "../language-switcher";

import { NavMobile } from "./nav-mobile";

export const MenuToggle = ({ showBackground }: { showBackground: boolean }) => {
  return (
    <Sheet>
      {/* # */}
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant={!showBackground ? "default" : "secondary"} size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      {/* # */}
      <SheetContent
        side="left"
        className="block h-full w-4/5 border-none p-0 md:hidden"
      >
        <div className="flex h-full flex-col">
          {/* # */}
          <div className="flex justify-start p-4">
            <SheetClose asChild>
              <SiteLogoMobile />
            </SheetClose>
          </div>

          {/* # */}
          <nav>
            <NavMobile />
          </nav>

          {/* # */}
          <div className="mt-auto flex items-center justify-between gap-4 p-4">
            {/* Col */}
            <LanguageSwitcher />

            {/* Col */}
            <span className="text-sm text-muted-foreground">
              © 2023 eFishery, Inc
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
