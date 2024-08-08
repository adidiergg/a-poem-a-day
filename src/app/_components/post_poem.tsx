import {  useEffect,useRef } from "react";
import { api } from "~/trpc/react";
import type { Poem } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { useRouter } from "next/navigation";
import { AudioPlayer } from "~/components/audio-player";
import { BtnBookMark } from "~/components/btn-bookmark";
import { Tag } from "~/components/tag";
import { Download } from "~/components/download";


type PoemProps = {
  poem: Poem;
};

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const PostPoem = ({ poem }: PoemProps) => {
  const { id, title, author, content, tags } = poem;

  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);
  const { mutate } = api.poem.addView.useMutation();
  useEffect(() => {
    mutate({ id });
  }, []);

  return (
    <>
      <div className="z-0 flex  min-h-[calc(100vh-96px)]  w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
        <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
          <div className="menu flex flex-row justify-between">
            <Icons.back
              className="size-12  cursor-pointer rounded-full fill-current p-2  text-primary/90 hover:bg-primary/10 hover:text-primary"
              aria-hidden="true"
              onClick={() => router.back()}
            />

            <div className="flex flex-row gap-1">
              <Download id={id} ref={ref} />  
              <AudioPlayer title={title} content={content} author={author} />
              <BtnBookMark bookmark={{id}} />
            </div>
          </div>

          <div ref={ref} className="flex flex-col py-8 gap-3" >
            <h1 className="text-center text-xl font-bold text-primary/90">
              {title}
            </h1>
            
            <Markdown
              className={cn(
                "mb-4 mt-1 text-center text-lg text-primary/80 lg:text-lg",
                fontGaramond.className,
              )}
            >
              {content}
            </Markdown>

            <p className="text-lg text-center italic text-primary/90">
              {author}
            </p>
          </div>

          <div className="tag flex flex-row flex-wrap gap-1">
            {tags.map((tag) => (
              <Tag key={tag.tag.id} id={tag.tag.id} tag={tag.tag.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
