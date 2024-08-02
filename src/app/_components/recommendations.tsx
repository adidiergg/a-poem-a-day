"use client";
import { api } from "~/trpc/react";
import { Suggestion } from "./suggestion";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";

export const Recommendations = () => {
  const { data, isLoading, isError } = api.poem.all.useQuery();
  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {data?.length ? (
        data.map((poem) => {
            return <Suggestion poem={poem} key={poem.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}
    </div>
  );
};
