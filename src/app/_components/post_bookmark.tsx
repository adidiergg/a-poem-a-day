import Link from "next/link";
import React from "react";
import { BtnBookMark } from "~/components/btn-bookmark";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { BookMark } from "~/lib/types";

type PostBookMarkProps = {
    id: string;
}

export const PostBookMark = ({id}:PostBookMarkProps) => {

  const [value] = useLocalStorage<BookMark>(id, null);
  return (
    <div className="z-0 flex min-h-32  w-full flex-col gap-2 rounded-lg bg-background p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
      <div className="flex flex-row justify-between gap-1 ">
      <Link href={`/poems/${value?.id}`}>
        <h1 className="  text-lg  font-bold text-primary/90 hover:text-primary">
          {value?.title}
        </h1>
      </Link>
      <BtnBookMark bookmark={value} />
       
      </div>

      <div className="flex flex-col">
        <p className="text-sm  italic text-primary/90">{value?.author}</p>
      </div>
    </div>
  );
};
