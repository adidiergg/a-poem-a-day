"use client"
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { SkeletonPoemPost } from "~/components/skeleton_poem_post";
import { Spinner } from "~/components/spinner";
import { api } from "~/trpc/react";
 interface PoemPageProps {
    params: {
        id: string
    }
 }

export default  function PoemPage({params}: PoemPageProps){
    const id = decodeURIComponent(params.id);
    const { data,isLoading,isError} = api.poem.getById.useQuery({id});
    if(isLoading) return <Spinner size={100}/>
    if(isError) return <div>error</div>
    if(data===null) return <div>not found</div>
    return (
        <>
            { data ?
                <PostPoem poem={data} />
            :
                null
            }
           
        </>
    );
}