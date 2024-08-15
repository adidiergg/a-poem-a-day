import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { Poem } from "~/lib/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { set } from "zod";
import { BookMark } from "~/lib/types";
enum Status {
  saved = "saved",
  success = "success",
  pending = "pending",
  error = "error",
}

type BookMarkProps = {
  bookmark: BookMark;
};

export const BtnBookMark = ({ bookmark }: BookMarkProps) => {
  const [value, setValue, removeValue] = useLocalStorage<BookMark[]>(
    "bookmarks",
    [],
  );
  const [status, setStatus] = useState<Status>(Status.pending);
  const addBookMark = () => {
    const newBookMark = [...value, bookmark]
    setValue(newBookMark);
  };


  const removeBookMark = () => {
    const removeBookMark = value.filter((obj) => obj.id !== bookmark.id).map((obj) => obj);
    setValue(removeBookMark);
  };

  useEffect(() => {
    const isBookMarked = value.findIndex((obj) => obj.id === bookmark.id);
    if (isBookMarked!==-1) {
      setStatus(Status.saved);
    } else {
      setStatus(Status.success);
    }
  }, [value]);


  return (
    <>
      {status === Status.success && (
        <Icons.bookmark
          className=" size-12 cursor-pointer rounded-full fill-transparent   text-primary/90 hover:bg-primary/10 hover:text-primary "
          onClick={addBookMark}
        />
      )}
      {status === Status.saved && (
        <Icons.bookmark
          className=" size-12 cursor-pointer rounded-full fill-primary  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary "
          onClick={removeBookMark}
        />
      )}
    </>
  );
};
