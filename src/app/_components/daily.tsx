"use client"
import { api} from "~/trpc/react";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn} from "~/lib/utils";
import Markdown from "react-markdown";
import { Spinner } from "~/components/spinner";
import Link from "next/link";
import { SkeletonPoemPost } from "~/components/skeleton_poem_post";
const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });


export const Daily = ()=>{
    const { data,isLoading,isError} = api.poem.getLatest.useQuery();
    const { id,title,content,author } = data ?? {};
    if(isLoading) return <SkeletonPoemPost/>
    
    return (
        <>
        { data ? 
        <div className="z-0 flex w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 ">
        <div className="flex flex-col p-8 md:px-12">
          <div className="border-l-4 border-primary/90 px-4">
          <Markdown  className={cn(
                "mb-4 mt-1  text-lg text-primary/80 lg:text-lg",
                fontGaramond.className,
              )}>{content?.split("\n").slice(0,8).join("\n")}</Markdown>
          </div>
          <Link href={`/poems/${encodeURIComponent(String(id))}`} >
          <h1 className="mt-1 text-2xl font-bold text-primary/90 hover:text-primary lg:text-2xl">
            { title}
          </h1>
          </Link>
          <span className="text-md  italic text-primary/90">
            { author }
          </span>
        </div>
      </div>:
      null
            }
    </>
    );
}