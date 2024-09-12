import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

export const metadata= {
  title: "Vanessa Berardozzi's portfolio",
  description: "Back-end developper ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className= {
        cn(
          GeistSans.variable,GeistMono.variable, 'font-sans h-full bg-background text-foreground'
        )
      }>
         {children}
        <Analytics />
      </body>

    </html>
  );
}
