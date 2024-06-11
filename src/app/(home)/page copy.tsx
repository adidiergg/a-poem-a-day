import Link from "next/link";
import Image from "next/image";
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
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="relative  flex flex-col items-center mx-auto lg:flex-row-reverse  lg:max-w-5xl  xl:max-w-6xl">
      <div className="w-screen h-64 lg:w-1/2 lg:h-auto">
        <img
          src="/images/home.jpg"
          className="w-full h-full object-cover"
          
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Hero"
        />
        <div className="relative inset-0  bg-gradient-to-t from-background to-black/30 lg:to-black/10" />
      </div>
     
      <div className="max-w-lg bg-white rounded-xl md:max-w-2xl md:z-10 md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h1 className="text-3xl md:text-2xl text-[#43766C] font-semibold">✨ Poema del Día ✨</h1>
            <p className="mt-4 text-lg">
            Cada día es una nueva oportunidad para descubrir la magia de la poesía. Déjate inspirar por las palabras y los sentimientos del poema de hoy, cuidadosamente seleccionado para iluminar tu jornada.
            </p>
            <div className="flex flex-row gap-3">
            <Button className="grow mt-8">Iniciar sesión</Button>
            <Button className="grow mt-8">Suscribirme</Button>
            </div>
          </div>
      </div>
      
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
