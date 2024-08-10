import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonPostsHome() {
  return (
    <div className="relative flex  flex-col w-full gap-6">
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2 bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
      </Skeleton>
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2  bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
      </Skeleton>
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2  bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 ">
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
        <div className="basis-1/2 w-full  bg-primary/20"> </div>
      </Skeleton>
    </div>
  );
}
