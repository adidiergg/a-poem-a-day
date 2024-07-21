"use client";
import React, { useEffect } from "react";
import { Post } from "~/app/_components/post";
import { PostPoem } from "~/app/_components/post_poem";
import { SkeletonDailyPoem } from "~/components/skeleton_daily_poem";
import { Spinner } from "~/components/spinner";
import { api } from "~/trpc/react";
import { Posts } from "~/app/_components/posts";
import { useParams } from "next/navigation";
import {number, z} from "zod";


interface PoemLayoutProps {
    children: React.ReactNode
}

export default function PoemPage({children}: PoemLayoutProps) {
  
  return (
    <div className="relative flex flex-col  px-0 lg:flex-row">
      <div className="flex basis-2/3 flex-col justify-center px-8 pb-8 pt-16 lg:sticky lg:top-0 lg:h-screen">
        {children}
      </div>
      <div className="basis-1/3">
        <div className="relative  flex min-h-screen	 w-full flex-col items-center gap-6 overflow-y-visible p-8 py-16">
          <Posts />
        </div>
      </div>
    </div>
  );
}
