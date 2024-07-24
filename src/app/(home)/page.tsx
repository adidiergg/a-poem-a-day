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
    <div className="relative flex flex-col px-0 lg:flex-row">
      <div className="flex  basis-2/3 flex-col p-10 py-16 text-background  lg:sticky lg:top-0 lg:h-screen lg:justify-center ">
        {/* <Image
          src="/images/home.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/75  to-primary/100 " /> */}
        <div className="relative  flex flex-col  items-center justify-center gap-3">
          <h1 className="text-center text-4xl font-bold lg:text-5xl">
            Poema del día
          </h1>
          <p className="text-center text-lg lg:text-xl">
            Un poema al día, alegra el alma y la vida
          </p>

          <Daily />
        </div>
      </div>

      <div className="basis-1/3">
        <div className="relative  flex min-h-screen	 w-full flex-col items-center gap-3 p-8 py-16">
          <Posts />
        </div>
      </div>
    </div>
  );
}
