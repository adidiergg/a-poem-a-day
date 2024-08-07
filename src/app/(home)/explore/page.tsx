import { Posts } from "~/app/_components/posts";
import { Suspense } from "react";





export  default function ExplorePage() {

    return (
        <>
         <Suspense fallback={<div>Loading...</div>}>
            <Posts />
         </Suspense>
        </>
    );
}