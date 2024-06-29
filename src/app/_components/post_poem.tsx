import type { Poem } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/icons";
import { useRouter } from "next/navigation";

type PoemProps = {
  poem: Poem;
};

const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const PostPoem = ({ poem }: PoemProps) => {
  const { title, author, content, createdAt } = poem;
  const router = useRouter()
  return (
    <>
      <div className="z-0 flex h-fit w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 ">
        <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
          <Icons.back  className="mb-4 size-8 font-bold text-primary/90 hover:text-primary cursor-pointer"
            aria-hidden="true" onClick={() => router.back()}/>
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
          <div className="border-l-4 border-primary/90 px-4">
            <Markdown
              className={cn(
                "mb-4 mt-1 text-center text-lg text-primary/80 lg:text-lg",
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
