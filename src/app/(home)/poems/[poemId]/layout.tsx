import React, {  } from "react";
import { set } from "zod";
import { Posts } from "~/app/_components/posts";
import { Recommendations } from "~/app/_components/recommendations";

interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemPage({ children }: PoemLayoutProps) {
  return (
    <div className="relative flex flex-col  px-0 lg:flex-row">
      <div className="flex basis-2/3 flex-col justify-center px-4 py-16 lg:h-full">
        {children}
      </div>
      <div className="basis-1/3">
        <div className="px-4 lg:py-16">
          <Recommendations  />
        </div>
      </div>
    </div>
  );
}
