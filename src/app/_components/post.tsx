import type { Poem } from "~/lib/types";

type PoemProps = {
  poem: Poem;
};

export const Post = ({ poem }: PoemProps) => {
  const { id, title, author, content, createdAt } = poem;

  return (
    <div className="z-0 flex  w-full flex-col rounded-lg bg-background p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 lg:w-4/5 xl:w-4/5">
      <h1 className="font-md  lg:font-lg text-right italic text-primary/90">
        {createdAt.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>

      <h1 className="truncate   text-lg  font-semibold text-primary/90  lg:text-xl">
        {title}
      </h1>

      <div className="flex flex-col">
        <p className="font-md lg:font-lg italic text-primary/90">{author}</p>
      </div>
    </div>
  );
};
