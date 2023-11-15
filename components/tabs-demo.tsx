import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataSolutions } from "@/config/data";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TabsDemo() {
  return (
    <Tabs
      defaultValue={dataSolutions[0].id.toString()}
      className="mx-auto flex w-full flex-col items-center gap-12 md:w-4/5"
    >
      {/* # */}
      <TabsList className="grid h-max w-full grid-cols-2 gap-2 bg-primary-foreground md:flex md:w-max">
        {dataSolutions?.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id.toString()}
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "col-span-1 last:col-span-2",
              }),
            )}
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* # */}
      {dataSolutions?.map((item) => (
        <TabsContent
          key={item.id}
          value={item.id.toString()}
          className="w-full"
        >
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
            {/* Col */}
            <div className="md:w-5/12">
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
                <h3 className="text-2xl font-semibold text-foreground md:text-4xl">
                  {item.desc}
                </h3>

                <Button asChild variant="primary">
                  <Link href={item.link.url} aria-label={item.link.label}>
                    {item.link.label}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Col */}
            <div className="md:w-6/12">
              <div className="">
                <Image
                  src={`/${item.media.image}`}
                  alt={item.title}
                  width={572}
                  height={348}
                  className="m-auto h-auto w-full"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
