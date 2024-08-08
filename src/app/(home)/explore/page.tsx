import { Posts } from "~/app/_components/posts";
import { Suspense } from "react";

const ExplorePage = () => {
    return (
        <Suspense>
            <Posts />
        </Suspense>
    );
}
export default ExplorePage;