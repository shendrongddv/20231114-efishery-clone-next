import { NavHeader } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown } from "lucide-react";

export const NavDesktop = ({ showBackground }: { showBackground: boolean }) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-1">
        {NavHeader?.map((item) => (
          <li key={item.id}>
            {item.sublink === true ? (
              <Popover>
                <PopoverTrigger
                  asChild
                  className="[&[data-state=open]>svg]:rotate-180"
                >
                  <Button
                    variant="ghost"
                    size="default"
                    className={cn("", showBackground ? "" : "text-white")}
                  >
                    {item.label}
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="max-w-xs rounded-xl p-1">
                  <ul className="grid gap-2">
                    {item.links?.map((subitem) => (
                      <li key={subitem.id}>
                        <Button
                          asChild
                          variant="ghost"
                          size="default"
                          className="w-full justify-start"
                        >
                          <Link href={subitem.url} aria-label={subitem.label}>
                            {subitem.label}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            ) : (
              <Button
                asChild
                variant="ghost"
                size="default"
                className={cn("", showBackground ? "" : "text-white")}
              >
                <Link href={item.url} aria-label={item.label}>
                  {item.label}
                </Link>
              </Button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
