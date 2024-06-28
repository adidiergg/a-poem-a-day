import Image from "next/image";
import { Great_Vibes as FontGreatVibes, Great_Vibes } from "next/font/google";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { api } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { Posts } from "../_components/posts";
import { Daily } from "../_components/daily";

const fontGreatVibes = FontGreatVibes({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
 
  return (
    <div className="container relative h-[calc(100vh)]  px-0   lg:grid lg:grid-cols-2">
      <div className="relative flex-col p-10  text-background lg:flex lg:h-full lg:justify-center ">
        <Image
          src="/images/home.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-primary/75  to-primary/100 " />
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <h1 className="text-center text-4xl font-bold lg:text-5xl">
            Poema del día
          </h1>
          <p className="text-center text-lg lg:text-xl">
            Un poema al día, alegra el alma y la vida
          </p>

          <Daily/>
        </div>

        

      </div>

      <div className="overflow-y-scroll  bg-background ">
        <div
          className="relative  flex min-h-screen	 w-full flex-col items-center gap-6 overflow-y-visible p-8 py-16 before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/images/background-pattern.svg')] 
      before:bg-repeat before:opacity-5 
     "
        >
          <h1 className="text-center text-3xl font-light text-primary/95  lg:text-3xl">
            Poemas recientes...
          </h1>

          <Posts/>

        </div>
      </div>
    </div>
  );
}
