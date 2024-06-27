"use client";
import { api } from "~/trpc/react";
import { Post } from "./post";


export const Poems = () => {
  const { data: poems, isLoading, isError } = api.poem.all.useQuery();

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
