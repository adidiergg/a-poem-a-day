"use client";
import { useEffect } from "react";
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { SkeletonDailyPoem } from "~/components/skeleton_daily_poem";
import { Spinner } from "~/components/spinner";
import { api } from "~/trpc/react";
import { Posts } from "~/app/_components/posts";
import { useParams } from "next/navigation";
import {number, z} from "zod";
import { SkeletonPoem } from "~/components/skelenton_poem";

export default function PoemPage() {
  const {id} = useParams<{ id: string }>()
  const isNumber = z.string().regex( /^\d+$/ );
  if(isNumber.safeParse(id).success === false){
    return <div className="text-red-700">not found</div>;
  }
  const { data, isLoading, isError } = api.poem.getById.useQuery({ id: Number(id) });
  

  if (isLoading) return <SkeletonPoem />;
  if (isError) return <div>error</div>;
  if (data === null) return <div className="text-red-700">not found</div>;
  return (
    <>
        {data ? <PostPoem poem={data} /> : <SkeletonPoem />}
    </>
  );
}
