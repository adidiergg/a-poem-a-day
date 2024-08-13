import Link from "next/link";
import React from "react";
import { BtnBookMark } from "~/components/btn-bookmark";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { BookMark } from "~/lib/types";

type PostBookMarkProps = {
  bookmark: BookMark;
};

export const PostBookMark = ({ bookmark }: PostBookMarkProps) => {
  return (
    <div className="z-0 flex min-h-32  w-full flex-col gap-2  border-l-8 border-primary bg-background p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
      <div className="flex flex-row items-center justify-between gap-1 ">
        <Link href={`/poems/${bookmark.id}`}>
          <h1 className="text-sm  font-bold text-primary/90 hover:text-primary">
            {bookmark.title}
          </h1>
        </Link>
        <BtnBookMark bookmark={bookmark} />
      </div>

      <div className="flex flex-col">
        <p className="text-xs  italic text-primary/90">{bookmark.author}</p>
      </div>
    </div>
  );
};
