import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blue Waters Executive Cottages | Brackley Beach, PEI",
  description:
    "Blue Waters Executive Cottages offers a peaceful PEI stay near Brackley Beach with bay views, pool and hot tub access, and easy access to Charlottetown.",
  openGraph: {
    title: "Blue Waters Executive Cottages",
    description: "Quiet coastal stays near Brackley Beach, PEI.",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Waters Executive Cottages",
    description: "Quiet coastal stays near Brackley Beach, PEI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("antialiased", "font-sans")}
    >
      <body>{children}</body>
    </html>
  );
}
