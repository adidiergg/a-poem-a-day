import Link from "next/link";
import { Tag } from "~/components/tag";
import type { Posts } from "~/lib/types";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { cn } from "~/lib/utils";
type PoemProps = {
  post: Posts;
};
const fontGaramond = FontGaramond({ weight: ["400"], subsets: ["latin"] });

export const Post = ({ post }: PoemProps) => {
  const { id, title, author, tags } = post;

  return (
    <div className="z-0 flex min-h-32  w-full flex-col gap-2  border-l-8 border-primary bg-background p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
      
      <Link href={`/poems/${encodeURIComponent(id)}`}>
        <h1 className="  text-sm  font-bold text-primary/90 hover:text-primary">
          {title}
        </h1>
      </Link>
      
      <div className="flex flex-col">
        <p className="text-xs  italic text-primary/90">{author}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-1">
        {tags.map((tag) => (
          <Tag key={tag.tag.id} id={tag.tag.id} tag={tag.tag.name} />
        ))}
      </div>
    </div>
  );
};
