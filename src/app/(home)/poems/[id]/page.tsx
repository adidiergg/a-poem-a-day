"use client";
import { useEffect } from "react";
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { SkeletonPoemPost } from "~/components/skeleton_poem_post";
import { Spinner } from "~/components/spinner";
import { api } from "~/trpc/react";
import { Posts } from "~/app/_components/posts";
interface PoemPageProps {
  params: {
    id: string;
  };
}

export default function PoemPage({ params }: PoemPageProps) {
  const id = decodeURIComponent(params.id);
  const { data, isLoading, isError } = api.poem.getById.useQuery({ id });
  const { mutate } = api.poem.addView.useMutation();
  useEffect(() => {
    mutate({ id });
  }, []);

  if (isLoading) return <Spinner size={40} />;
  if (isError) return <div>error</div>;
  if (data === null) return <div>not found</div>;
  return (
    <div className="relative flex flex-col  px-0 lg:flex-row">
      <div className="flex basis-2/3 flex-col justify-center px-8 pb-8 pt-16 lg:sticky lg:top-0 lg:h-screen">
        {data ? <PostPoem poem={data} /> : null}
      </div>
      <div className="basis-1/3">
        <div className="relative  flex min-h-screen	 w-full flex-col items-center gap-6 overflow-y-visible p-8 py-16">
          <Posts />
        </div>
      </div>
    </div>
  );
}
