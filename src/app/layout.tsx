import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { Source_Sans_3 as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

//import { EB_Garamond as FontSans } from "next/font/google";

//EB Garamond
const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Poema del día",
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
      <body>
       
          <TRPCReactProvider>
            <div className="relative flex min-h-screen flex-col  justify-center 
      bg-primary   before:pointer-events-none before:absolute before:inset-0 before:block before:h-full 
      before:w-full before:bg-[url('/images/background-pattern.svg')] before:bg-repeat before:opacity-5">
              {children}
            </div>
            <Toaster />
          </TRPCReactProvider>
        
      </body>
    </html>
  );
}
