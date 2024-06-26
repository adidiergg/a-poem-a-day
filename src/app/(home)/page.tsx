"use client";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes as FontGreatVibes, Great_Vibes } from "next/font/google";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { CreatePost } from "~/app/_components/create-post";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
//import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { cn } from "~/lib/utils";
import { useSession } from "next-auth/react";

const fontGreatVibes = FontGreatVibes({ weight: ["400"], subsets: ["latin"] });
const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });
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

          <div className="z-0 flex w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 ">
            <div className="flex flex-col p-8 md:px-12">
              <div className="border-l-4 border-primary/90 px-4">
                <p
                  className={cn(
                    "mb-4 mt-1  text-lg text-primary/80 lg:text-lg",
                    fontGaramond.className,
                  )}
                >
                  Hay tanta soledad en este oro.
                  <br />
                  La luna de las noches no es la luna
                  <br />
                  que vio el primer Adán. Los largos siglos
                  <br />
                  de la vigilia humana la han colmado
                  <br />
                  de antiguo llanto. Mírala. Es tu espejo.
                  <br />
                </p>
              </div>
              <h1 className="mt-1 text-2xl font-bold text-primary/90  lg:text-2xl">
                {" "}
                La luna{" "}
              </h1>
              <span className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </span>
            </div>
          </div>
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

          <div className="z-0 flex  w-full flex-col rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 p-8 md:px-12">
            <div className="flex flex-row gap-3 justify-between">
              <div className="basis-5/6 overflow-hidden">
              <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt accusamus aliquam sit tenetur? Et minus ipsum qui non nobis delectus distinctio. Sapiente, unde necessitatibus nobis voluptatem reiciendis vitae? Architecto!{" "}
              </h1>
              </div>
              <div className="basis-1/6 ">
              <h1 className="text-right  font-md lg:font-lg italic text-primary/90">
                24/10/2024
              </h1>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </p>
              
            </div>
          </div>

          <div className="z-0 flex  w-full flex-col rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 p-8 md:px-12">
            <div className="flex flex-row gap-3 justify-between">
              <div className="basis-5/6 overflow-hidden">
              <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt accusamus aliquam sit tenetur? Et minus ipsum qui non nobis delectus distinctio. Sapiente, unde necessitatibus nobis voluptatem reiciendis vitae? Architecto!{" "}
              </h1>
              </div>
              <div className="basis-1/6 ">
              <h1 className="text-right  font-md lg:font-lg italic text-primary/90">
                24/10/2024
              </h1>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </p>
              
            </div>
          </div>


          <div className="z-0 flex  w-full flex-col rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 p-8 md:px-12">
            <div className="flex flex-row gap-3 justify-between">
              <div className="basis-5/6 overflow-hidden">
              <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt accusamus aliquam sit tenetur? Et minus ipsum qui non nobis delectus distinctio. Sapiente, unde necessitatibus nobis voluptatem reiciendis vitae? Architecto!{" "}
              </h1>
              </div>
              <div className="basis-1/6 ">
              <h1 className="text-right  font-md lg:font-lg italic text-primary/90">
                24/10/2024
              </h1>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </p>
              
            </div>
          </div>

          <div className="z-0 flex  w-full flex-col rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 p-8 md:px-12">
            <div className="flex flex-row gap-3 justify-between">
              <div className="basis-5/6 overflow-hidden">
              <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt accusamus aliquam sit tenetur? Et minus ipsum qui non nobis delectus distinctio. Sapiente, unde necessitatibus nobis voluptatem reiciendis vitae? Architecto!{" "}
              </h1>
              </div>
              <div className="basis-1/6 ">
              <h1 className="text-right  font-md lg:font-lg italic text-primary/90">
                24/10/2024
              </h1>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </p>
              
            </div>
          </div>

          <div className="z-0 flex  w-full flex-col rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 p-8 md:px-12">
            <div className="flex flex-row gap-3 justify-between">
              <div className="basis-5/6 overflow-hidden">
              <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere incidunt accusamus aliquam sit tenetur? Et minus ipsum qui non nobis delectus distinctio. Sapiente, unde necessitatibus nobis voluptatem reiciendis vitae? Architecto!{" "}
              </h1>
              </div>
              <div className="basis-1/6 ">
              <h1 className="text-right  font-md lg:font-lg italic text-primary/90">
                24/10/2024
              </h1>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-md lg:font-lg italic text-primary/90">
                Jorge Luis Borges
              </p>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
