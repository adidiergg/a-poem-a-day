"use client"
import { api} from "~/trpc/react";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn} from "~/lib/utils";
import Markdown from "react-markdown";
import { Spinner } from "~/components/spinner";
import Link from "next/link";
import { SkeletonDailyPoem } from "~/components/skeleton_daily_poem";
import { Tag } from "~/components/tag";
const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });


export const Daily = ()=>{
    const { data,isLoading} = api.poem.getPoemOfDay.useQuery();
    const { id,title,content,author } = data ?? {};
    if(isLoading) return <SkeletonDailyPoem/>
    
    return (
        <>
        { data ? 
        <div className="z-0 flex w-full  lg:max-w-prose  bg-background  border-l-8 border-primary  ">
        <div className="flex flex-col p-8 md:px-12 gap-1">
          <div className="px-4">
          <Markdown  className={cn(
                "mb-4 mt-1  text-lg text-primary/80 lg:text-lg",
                fontGaramond.className,
              )}>{content?.split("\n").slice(0,12).join("\n")}</Markdown>
          </div>
          <Link href={`/poems/${encodeURIComponent(String(id))}`} >
          <h1 className="mt-1 text-xl font-bold text-primary/90 hover:text-primary lg:text-xl">
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