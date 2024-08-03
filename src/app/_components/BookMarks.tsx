import { useEffect, useState } from "react";
import { PostBookMark } from "./post_bookmark";
import { api } from "~/trpc/react";
import { BookMark } from "~/lib/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { set } from "zod";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";

export const BookMarks = () => {
  const [value] = useLocalStorage<BookMark[]>("bookmarks", []);
  const { data, isLoading, isError } = api.poem.getBookMarks.useQuery({
    bookmarks: value,
  });

  if(isLoading) return <SkeletonPostsHome />
  if(isError) return <h1>Error de conexion</h1>

  return (
    <div className="relative flex  w-full flex-col items-center gap-6 lg:w-1/3">
      <h1 className="text-center text-xl font-semibold text-background">
        Guardados
      </h1>

      {data &&
        data.map((bookmark) => {
          console.log("bookmark", bookmark);
          return <PostBookMark key={bookmark.id} bookmark={bookmark} />;
        })}
    </div>
  );
};

/*
 {value.length
        ? value.map((bookmark) => {
            return <PostBookMark key={bookmark.id} bookmark={bookmark} />;
          })
        : null}
{bookmarks.length ? (
        bookmarks.map((bookmark)=>{
            return <PostBookMark key={bookmark} id={bookmark}/>;
        })
      ):
        null  
    }

*/
