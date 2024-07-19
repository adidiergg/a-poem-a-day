import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { Poem } from "~/lib/types";

enum Status {
    success = "success",
    pending = "pending",
    error = "error",
}

type BookMarkProps = {
    poem: Poem,
}

export const BookMark = ({poem}:BookMarkProps) => {
    const {id,title,author} = poem;
    const [status,setStatus] = useState<Status>(Status.pending);


    useEffect(() => {
        setStatus(Status.success);
    })

    return (
        <>
            {status === Status.success && (
                <Icons.bookmark className=" size-12 cursor-pointer rounded-full fill-transparent  font-bold text-primary/90 hover:bg-primary/10 hover:text-primary " />
            )}
        </>
    )
}