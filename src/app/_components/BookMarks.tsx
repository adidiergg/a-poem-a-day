import { useEffect, useState } from "react";
import { PostBookMark } from "./post_bookmark";
import { api } from "~/trpc/react";

export const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const { data: poems, isLoading, isError } = api.poem.getBookMarks.useQuery({bookmarks});
 
  const handleStorage = (e: StorageEvent) => {
    setBookmarks(Object.keys(localStorage));
  }

  useEffect(() => {
    window.addEventListener('storage',handleStorage);
    return () => {
        window.removeEventListener('storage',handleStorage);
    }
  })


  useEffect(() => {
    setBookmarks(Object.keys(localStorage));
  }, []);

  return (
    <div className="relative flex  w-full flex-col items-center gap-6 lg:w-1/3">
      <h1 className="text-center text-xl font-semibold text-background">
        Guardados
      </h1>
      {bookmarks.length ? (
        bookmarks.map((bookmark)=>{
            return <PostBookMark key={bookmark} id={bookmark}/>;
        })
      ):
        null  
    }
    </div>
  );
};
