"use client";
import { api } from "~/trpc/react";
import { Post } from "./post";
import { Spinner } from "~/components/spinner";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";


export const Posts = () => {
  const { data: poems, isLoading, isError } = api.poem.all.useQuery();
  
  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;
  return (
    <>
        { poems?.length ? 
         poems.map((poem) =>{
            return <Post poem={poem} key={poem.id} />
         })
        :
        <h1>no hay</h1>
        
        }
        
    </>
  );
};
