import type { Metadata } from "next";
import { fontDisplay, fontBody } from "@/lib/fonts";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "eFishery - Solusi Budidaya Ikan dan Udang | eFishery Indonesia",
  description:
    "eFishery, startup Aqua-Tech pertama di Asia, yang konsisten membangun ekosistem Akuakultur berkelanjutan dengan teknologi yang membantu budidaya ikan dan udang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "font-body antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
