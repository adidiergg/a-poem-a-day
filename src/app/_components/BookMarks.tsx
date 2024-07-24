import { useEffect, useState } from "react";
import { Posts } from "./posts";
import { PostBookMark } from "./post_bookmark";
import { number } from "zod";

export const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

 
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
    <div className="relative flex min-h-screen w-full flex-col items-center gap-6  py-8   lg:w-1/3">
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
