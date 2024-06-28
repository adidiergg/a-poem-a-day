"use client"
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { api } from "~/trpc/react";
 interface PoemPageProps {
    params: {
        id: string
    }
 }

export default  function PoemPage({params}: PoemPageProps){
    const id = decodeURIComponent(params.id);
    const { data,isLoading,isError} = api.poem.getById.useQuery({id});
    
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