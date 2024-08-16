"use client";
import { useEffect } from "react";
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { api } from "~/trpc/react";
import { Posts } from "~/app/_components/posts";
import { useParams } from "next/navigation";
import { SkeletonPoem } from "~/components/skelenton_poem";
import { useRouter } from "next/navigation";
import { Icons } from "~/components/icons";
import { NotFound } from "~/components/not-found";

export default function PoemPage() {
  const { poemId } = useParams<{ poemId: string }>();

  //const { data, isLoading, isError } = api.poem.getById.useQuery({ id:poemId });

  //if (isLoading) return <SkeletonPoem />;
  //if (isError) return <NotFound message="Error de conexión"/>;
  //if (data === null) return <NotFound message="Contenido no disponible"/>;
  return (
    <>
      <PostPoem id={poemId} />
    </>
  );
}
