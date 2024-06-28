import { Skeleton } from "~/components/ui/skeleton"

export function SkeletonPoemPost(){
    return (
        <Skeleton className="z-0 flex h-full w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  lg:w-4/5 xl:w-4/5 " />
    );
}