import Link from "next/link";

import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { NavHeader } from "@/config/site";
import { LucideIcon } from "lucide-react";

export const NavMobile = () => {
  return (
    <ul className="grid">
      {NavHeader?.map((item) => (
        <li key={item.id}>
          {item.sublink === true ? (
            <Accordion type="single" collapsible className="w-full">
              <NavAccordion
                label={item.label}
                url={item.url}
                desc={item.desc}
                icon={item.icon}
              >
                <ul className="grid gap-1">
                  {item.links?.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        label={item.label}
                        url={item.url}
                        desc={item.desc}
                        icon={item.icon}
                      />
                    </li>
                  ))}
                </ul>
              </NavAccordion>
            </Accordion>
          ) : (
            <NavLink
              label={item.label}
              url={item.url}
              desc={item.desc}
              icon={item.icon}
            />
          )}
        </li>
      ))}
    </ul>
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
    <SheetClose asChild>
      <Button
        asChild
        variant="ghost"
        className="w-full justify-start rounded-none text-base font-medium text-foreground"
      >
        <Link href={url} aria-label={label}>
          {/* <Icon className="mr-2 h-4 w-4 text-primary" /> */}
          {label}
        </Link>
      </Button>
    </SheetClose>
  );
};

// NavAccordion
type NavAccordionProps = {
  label: string;
  url: string;
  desc?: string;
  icon: LucideIcon;
  children: React.ReactNode;
};
const NavAccordion = ({
  label,
  url,
  desc,
  icon: Icon,
  children,
}: NavAccordionProps) => {
  return (
    <AccordionItem value="item-1" className="border-none p-0">
      <AccordionTrigger className="justify-start px-4 py-2 text-base font-medium text-foreground hover:no-underline">
        <Icon className="mr-2 h-5 w-5 rounded bg-primary p-0.5 text-white" />
        {label}
      </AccordionTrigger>
      <AccordionContent className="pb-0">{children}</AccordionContent>
    </AccordionItem>
  );
};
