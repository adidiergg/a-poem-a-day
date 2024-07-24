import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { EB_Garamond as FontGaramond } from "next/font/google";
import { Icons } from "./icons";

export function SkeletonPoem() {
  return (
    <Skeleton className="z-0 flex h-full  w-full rounded-lg bg-background/40  ">
      <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
        <div className="flex flex-row justify-between">
          <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />

          <div className="flex flex-row gap-1">
            <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />
            <div className="size-12 rounded-full  bg-primary/20 p-2  font-bold" />
          </div>
        </div>

        <div className="w-full h-64 lg:basis-full rounded-sm bg-primary/20"> </div>
      </div>
    </Skeleton>
  );
}
