import { Skeleton } from "~/components/ui/skeleton"

export function SkeletonPoemPost(){
    return (
        <Skeleton className="z-0 flex w-full lg:w-1/2 gap-2 h-64 flex-col rounded-lg bg-background/40 p-4 py-8  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:px-12">
             <div className="basis-full rounded-sm w-full bg-primary/40"> </div>
             <div className="basis-1/3 rounded-sm w-full bg-primary/40"> </div>
        </Skeleton>
    );
}