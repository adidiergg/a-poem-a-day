"use client";
import { api } from "~/trpc/react";
import { Suggestion } from "./suggestion";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";
import { Visited } from "~/lib/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export const Recommendations = () => {
  const [value] = useLocalStorage<Visited[]>("visited",[])

  const { data, isLoading, isError } = api.poem.getRecommendations.useQuery({visited:value});
  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;
  console.log(data)
  return (
    <div className="flex w-full flex-col items-center gap-6">
      {data?.length ? (
        data.map((poem) => {
            return <Suggestion poem={poem.poemRecommend} key={poem.poemRecommend.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}
    </div>
  );
};
/*
{data?.length ? (
        data.map((poem) => {
            return <Suggestion poem={poem} key={poem.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}


*/