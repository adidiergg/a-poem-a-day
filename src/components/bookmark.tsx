import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { Poem } from "~/lib/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { set } from "zod";

enum Status {
  saved = "saved",
  success = "success",
  pending = "pending",
  error = "error",
}

type BookMarkProps = {
  poem: Poem;
};

type BookMark = {
  id: number;
  title: string;
  author: string;
} | null;

export const BookMark = ({ poem }: BookMarkProps) => {
  const { id, title, author } = poem;
  const [value, setValue, removeValue] = useLocalStorage<BookMark>(
    String(id),
    null,
  );
  const [status, setStatus] = useState<Status>(Status.pending);
  console.log("value", value);
  const addBookMark = () => {
    setValue({ id, title, author });
    setStatus(Status.saved);
  };

  const removeBookMark = () => {
    removeValue();
    setStatus(Status.success);
  };

  useEffect(() => {
    if (value) {
      setStatus(Status.saved);
    } else {
      setStatus(Status.success);
    }
  }, []);

  return (
    <>
      {status === Status.success && (
        
        <Icons.bookmark
          className=" size-12 cursor-pointer rounded-full fill-transparent  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary "
          onClick={addBookMark}
        />
      )}
      {status === Status.saved && (
        <Icons.bookmark_save
          className=" size-12 cursor-pointer rounded-full fill-transparent  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary "
          onClick={removeBookMark}
        />
      )}
    </>
  );
};
