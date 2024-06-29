import type { Poem } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";

type PoemProps = {
  poem: Poem;
};

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const PostPoem = ({ poem }: PoemProps) => {
  const { title, author, content, createdAt } = poem;

  return (
    <>
      <div className="flex max-h-svh  w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 ">
        <div className="flex basis-full flex-col justify-between  p-16 gap-4">
          <h1 className="text-md  text-right italic text-primary/90 lg:text-lg">
            {createdAt.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h1>

          <h1 className="mt-1 text-center text-2xl font-bold text-primary/90 lg:text-2xl">
            {title}
          </h1>
          <div className="border-l-4 border-primary/90 px-4 ">
            <Markdown
              className={cn(
                "truncate mb-4 mt-1 text-center text-lg text-primary/80",
                fontGaramond.className,
              )}
            >
              {content}
            </Markdown>
          </div>

          <span className="text-md italic text-primary/90 lg:text-xl">
            {author}
          </span>
        </div>
      </div>
    </>
  );
};
