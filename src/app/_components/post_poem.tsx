import { useEffect } from "react";
import { api } from "~/trpc/react";
import type { Poem } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { useRouter } from "next/navigation";
import { AudioPlayer } from "~/components/audio-player";
import { BtnBookMark } from "~/components/btn-bookmark";

type PoemProps = {
  poem: Poem;
};

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const PostPoem = ({ poem }: PoemProps) => {
  const { id, title, author, content, createdAt } = poem;

  const router = useRouter();

  const { mutate } = api.poem.addView.useMutation();
  useEffect(() => {
    mutate({ id });
  }, []);

  return (
    <>
      <div className="z-0 flex h-full  w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
        <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
          <div className="flex flex-row justify-between">
            <Icons.back
              className="size-12  cursor-pointer rounded-full fill-current p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
              aria-hidden="true"
              onClick={() => router.back()}
            />

            <div className="flex flex-row gap-1">
              <AudioPlayer title={title} content={content} author={author} />
              <BtnBookMark bookmark={poem} />
            </div>
          </div>

          
          

          <div className="overflow-y-scroll">
            <h1 className="mt-1 text-center text-2xl font-bold text-primary/90 lg:text-2xl">
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
          </div>
          
          <span className="text-md lg:text-md text-center italic text-primary/90">
            {author}
          </span>
          
        </div>
      </div>
    </>
  );
};

