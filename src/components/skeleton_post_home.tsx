import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonPostsHome() {
  return (
    <>
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2 rounded-lg bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 lg:w-4/5 xl:w-4/5">
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
      </Skeleton>
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2 rounded-lg bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 lg:w-4/5 xl:w-4/5">
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
      </Skeleton>
      <Skeleton className="z-0 flex  h-32 w-full flex-col items-end gap-2 rounded-lg bg-background/40 p-4 py-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12 lg:w-4/5 xl:w-4/5">
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
        <div className="h-12 w-full rounded-sm bg-primary/40"> </div>
      </Skeleton>
    </>
  );
}
