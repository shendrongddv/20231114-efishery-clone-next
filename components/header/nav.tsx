import { NavHeader } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown, LucideIcon } from "lucide-react";
import { SheetClose } from "../ui/sheet";

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
                <PopoverContent className="hidden max-w-xs rounded-lg p-1 md:flex">
                  <ul className="grid">
                    {item.links?.map((subitem) => (
                      <li key={subitem.id}>
                        <NavLink
                          label={subitem.label}
                          url={subitem.url}
                          desc={subitem.desc}
                          icon={subitem.icon}
                        />
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

// NavLink
type NavLinkProps = {
  label: string;
  url: string;
  desc?: string;
  icon: LucideIcon;
};

const NavLink = ({ label, url, desc, icon: Icon }: NavLinkProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className="flex h-max w-full items-start justify-start gap-2 whitespace-normal p-2"
    >
      <Link href={url} aria-label={label}>
        <Icon className="mr-2 h-6 w-6 text-primary" />
        <div className="flex flex-col items-start">
          {label}
          <p className="text-xs font-normal text-muted-foreground">{desc}</p>
        </div>
      </Link>
    </Button>
  );
};
