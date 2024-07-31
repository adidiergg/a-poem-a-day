import Link from "next/link";
import { Tag } from "~/components/tag";
import type { Poem } from "~/lib/types";
type PoemProps = {
  poem: Poem;
};

export const Post = ({ poem }: PoemProps) => {
  const { id, title, author, tags } = poem;

  return (
    <div className="z-0 flex min-h-32  w-full flex-col rounded-lg bg-background gap-2 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
      <Link href={`/poems/${encodeURIComponent(id)}`}>
        <h1 className="  text-sm  font-bold text-primary/90 hover:text-primary">
          {title}
        </h1>
      </Link>
      <div className="flex flex-col">
        <p className="text-xs  italic text-primary/90">{author}</p>
      </div>
      <div className="flex flex-row gap-1 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag.tag.id} id={tag.tag.id} tag={tag.tag.name}  />
        ) )}
      </div>
    </div>
  );
};
