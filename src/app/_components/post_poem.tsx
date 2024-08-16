import { useEffect, useRef } from "react";
import { api } from "~/trpc/react";
import type { Poem, Visited } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { useRouter } from "next/navigation";
import { AudioPlayer } from "~/components/audio-player";
import { BtnBookMark } from "~/components/btn-bookmark";
import { Tag } from "~/components/tag";
import { Download } from "~/components/download";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { Share } from "~/components/share";

type PoemProps = {
  poem: Poem;
};

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const PostPoem = ({ poem }: PoemProps) => {
  const { id, title, author, content, tags } = poem;

  const router = useRouter();
  const [value, setValue] = useLocalStorage<Visited[]>("visited", []);

  const ref = useRef<HTMLDivElement>(null);
  const { mutate } = api.poem.addView.useMutation();
  useEffect(() => {
    mutate({ id });
  }, []);

  useEffect(() => {
    const isVisited = value.findIndex((obj) => obj.id === id);
    if (isVisited === -1) {
      setValue([...value, { id }]);
    }

    if (value.length > 9) {
      setValue((preValue) => preValue.slice(1));
    }
  }, []);

  return (
    <>
      <div className="flex  min-h-[calc(100vh-96px)]  w-full  bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
        <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
          <div className="menu flex flex-row justify-between">
            <Icons.back
              className="size-12  cursor-pointer rounded-full fill-current p-2  text-primary/90 hover:bg-primary/10 hover:text-primary"
              aria-hidden="true"
              onClick={() => router.back()}
            />

            <Download id={id} ref={ref} />
          </div>

          <div ref={ref} className="flex flex-col gap-3 py-8">
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

            <p className="text-center text-lg italic text-primary/90">
              {author}
            </p>
          </div>

          <div className="flex flex-row  flex-wrap gap-1">
            {tags.map((tag) => (
              <Tag key={tag.tag.id} id={tag.tag.id} tag={tag.tag.name} />
            ))}
          </div>
          <div className="menu flex flex-row justify-end">
            <div className="flex flex-row gap-1">
              <BtnBookMark bookmark={{ id }} />
              <Share />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
