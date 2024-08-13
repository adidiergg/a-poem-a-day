"use client";
import { useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { Suggestion } from "./suggestion";
import { SkeletonPostsHome } from "~/components/skeleton_post_home";
import { Visited } from "~/lib/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { cn } from "~/lib/utils";
import { useParams } from "next/navigation";

enum recommendationsStatus {
  "forYou",
  "relantionship",
  "loading",
}

export const Recommendations = () => {
  const [value] = useLocalStorage<Visited[]>("visited", []);
  const { poemId } = useParams<{ poemId: string }>();
  const [status, setStatus] = useState<recommendationsStatus>(
    recommendationsStatus.forYou,
  );

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex w-full flex-row items-center gap-3">
        {(status === recommendationsStatus.forYou ||
          status === recommendationsStatus.relantionship) && (
          <>
            <button
              className={cn(
                "block  basis-1/2  px-2 py-1 text-xl text-background",
                status === recommendationsStatus.forYou &&
                  "border-b-2 border-background",
              )}
              onClick={() => setStatus(recommendationsStatus.forYou)}
            >
              <span>Para ti</span>
            </button>

            {poemId && (
              <button
                className={cn(
                  "block  basis-1/2  px-2 py-1 text-xl text-background",
                  status === recommendationsStatus.relantionship &&
                    "border-b-2 border-background",
                )}
                onClick={() => setStatus(recommendationsStatus.relantionship)}
              >
                <span>Poemas relacionados</span>
              </button>
            )}
          </>
        )}
      </div>
      {status === recommendationsStatus.forYou && <ForYou />}
      {status === recommendationsStatus.relantionship && <Relationship />}
    </div>
  );
};

const ForYou = () => {
  const [value] = useLocalStorage<Visited[]>("visited", []);

  const { data, isLoading, isError } = api.poem.getRecommendations.useQuery({
    visited: value,
  });

  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;

  return (
    <>
      {data?.length ? (
        data.map((poem) => {
          return <Suggestion poem={poem} key={poem.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}
    </>
  );
};

const Relationship = () => {
  const [value] = useLocalStorage<Visited[]>("visited", []);
  const { poemId } = useParams<{ poemId: string }>();

  const { data, isLoading, isError } = api.poem.getRelationshipsPoem.useQuery({
    id: poemId,
  });

  if (isLoading) return <SkeletonPostsHome />;
  if (isError) return <h1>Error de conexión</h1>;

  return (
    <>
      {data?.length ? (
        data.map((poem) => {
          return <Suggestion poem={poem} key={poem.id} />;
        })
      ) : (
        <h1 className="text-center text-xl font-semibold text-background">
          No hay poemas disponibles
        </h1>
      )}
    </>
  );
};
