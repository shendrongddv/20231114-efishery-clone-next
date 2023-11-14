import { Button } from "@/components/ui/button";
import { dataArticles } from "@/config/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ArticleCard } from "./article-card";

const Blog = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="text-center text-2xl font-semibold text-foreground md:w-4/5 md:text-5xl">
          Jelajahi Berita Terbaru di Dunia Akuakultur
        </h2>

        {/* Row */}
        <ul className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3">
          {dataArticles?.map((item) => (
            <li key={item.id}>
              <ArticleCard />
            </li>
          ))}
        </ul>

        {/* Row */}
        <Button asChild variant="link" className="-mt-4">
          <Link href="/" aria-label="Lihat semua resource">
            Lihat semua resource
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Blog;
