"use client";
import { api } from "~/trpc/react";
import { Post } from "./post";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";
import { useSearchParams } from "next/navigation";
import { Pagination } from "~/components/pagination";

export const Posts = () => {
  const searchParams = useSearchParams();
  const pageParam = +[searchParams.get("page")];
  const page = Number.isNaN(pageParam) || pageParam <= 0 ? 1 : pageParam;
  const { data, isLoading, isError } = api.poem.getPoems.useQuery({ page });

  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;
  return (
    <div className="relative flex w-full flex-col items-center gap-6">
      {data?.results?.length ? (
        data.results.map((poem) => {
          return <Post post={poem} key={poem.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}

      {!!data?.results?.length && (
        <Pagination currentPage={page} totalPages={data?.totalPages} />
      )}
    </div>
  );
};
