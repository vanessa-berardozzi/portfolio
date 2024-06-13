import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Lato} from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


const lato = Lato ({
  subsets: ["latin"],
  variable: "--font-caption",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vanessa Berardozzi's portfolio", 
  description: "Back-end developer ",
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
          GeistSans.variable, lato.variable,GeistMono.variable, 'font-sans h-full bg-background text-foreground' 
        )
      }> 
        {children}
      </body>

    </html>
  );
} 
