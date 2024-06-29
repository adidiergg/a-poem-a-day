import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Source_Sans_3 as FontSans } from "next/font/google";
import { SiteHeader } from "./_components/site-header";
import { Toaster } from "react-hot-toast";

//import { EB_Garamond as FontSans } from "next/font/google";

//EB Garamond
const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Poem daily",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen antialiased", fontSans.variable)}
    >
      <body className="bg-primary before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/images/background-pattern.svg')] 
      before:bg-repeat before:opacity-5 ">
       
          <TRPCReactProvider>
            <SiteHeader />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <Toaster />
          </TRPCReactProvider>
        
      </body>
    </html>
  );
}
