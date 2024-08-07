import { Posts } from "~/app/_components/posts";
import { Suspense } from "react";

export  default function ExplorePage() {

    return (
        <Suspense>
            <Posts />
        </Suspense>
    );
}