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
  const [value, setValue, removeValue] = useLocalStorage<BookMark>(
    String(bookmark?.id),
    null,
  );
  const [status, setStatus] = useState<Status>(Status.pending);
  //console.log("value", value);
  const addBookMark = () => {
    setValue(bookmark);
  };


  const removeBookMark = () => {
    removeValue();
  };

  useEffect(() => {
    if (value) {
      setStatus(Status.saved);
    } else {
      setStatus(Status.success);
    }
  }, []);


  useEffect(() => {
    if (value) {
      setStatus(Status.saved);
    } else {
      setStatus(Status.success);
    }
   
  }, [value]);

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
