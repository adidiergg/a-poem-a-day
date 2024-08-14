import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { Icons } from "./icons";

export function SkeletonPoem() {
  return (
    <Skeleton className="z-0 flex rounded-none min-h-[calc(100svh-96px)]  w-full bg-background/40  ">
      <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
        <div className="flex flex-row justify-start">
          <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />
        </div>

        <div className="h-full w-full rounded-none bg-primary/20 lg:basis-full">
          {" "}
        </div>
        <div className="flex flex-row justify-end">
         

          <div className="flex flex-row gap-1">
            <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />
            <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
