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
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { cn } from "~/lib/utils";


const fontGreatVibes = FontGreatVibes({ weight:["400"],subsets: ['latin'] });
const fontGaramond = FontGaramond({ weight:["400"],subsets: ['latin'] });
export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="container relative h-[calc(100vh)]  lg:grid   lg:grid-cols-2 px-0">
      
      <div className="relative h-64 lg:h-full flex-col  p-10 text-background lg:flex lg:justify-center ">
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
          <h1 className="text-4xl lg:text-6xl font-bold text-center">Poema del día</h1>
          <p className="text-lg lg:text-xl text-center">Un poema al día, alegra el alma y la vida</p>
         
          
        <div className="flex bg-background rounded-lg w-full lg:w-4/5 xl:w-4/5  z-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
          <div className="flex flex-col p-8 md:px-12">
            <div className="px-4 border-l-4 border-primary/90">
            <p className={cn("mt-1 mb-4  text-lg lg:text-lg text-primary/80",fontGaramond.className)} >
            Hay tanta soledad en este oro.<br/>
            La luna de las noches no es la luna<br/>
            que vio el primer Adán. Los largos siglos<br/>
            de la vigilia humana la han colmado<br/>
            de antiguo llanto. Mírala. Es tu espejo.<br/>
            </p>
            </div>
            <h1 className="mt-1 text-2xl lg:text-2xl text-primary/90  font-bold"> La luna </h1>
            <span className="font-md lg:font-lg italic text-primary/90">Jorge Luis Borges</span>
            
            

          </div>
      </div>

          </div>
      </div>

      <div className=" mx-auto flex items-center lg:justify-center h-full w-full flex-col 
      bg-background relative before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full 
      before:bg-[url('/images/background-pattern.svg')] before:bg-repeat before:opacity-5">
          <div className="invisible lg:visible flex bg-background rounded-lg h-3/5 w-full lg:w-3/5 xl:w-3/5  z-0 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <div className="flex-1 flex flex-col justify-between p-8 md:px-12">
              <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-2xl text-center text-primary/90">¡Únete a Nosotros! 🌟</h1>

                <Input
                  
                  placeholder="Nombre"
                  type="text"
                />
                <Input
                
                  placeholder="Email"
                  type="email"
                />
                <Button className="w-full">Enviar</Button>
              </div>


              <div className="flex flex-col gap-1">
                <p className="text-primary/90 font-semibold">¿Ya tienes una cuenta?</p>
               <Button  variant="outline" >Iniciar sesion</Button>
              </div>
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
