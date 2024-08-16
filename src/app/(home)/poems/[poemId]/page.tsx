"use client";
import { PostPoem } from "~/app/_components/post_poem";
import { useParams } from "next/navigation";


export default function PoemPage() {
  const { poemId } = useParams<{ poemId: string }>();  
  return (
    <>
      <PostPoem id={poemId} />
    </>
  );
}
