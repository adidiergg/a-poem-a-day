import { Skeleton } from "./ui/skeleton";

interface SkeletonIconProps {
    children: React.ReactNode;
}

export function SkeletonIcon({children}:SkeletonIconProps){
    return (
        <Skeleton>
            {children}
        </Skeleton>
    );
}