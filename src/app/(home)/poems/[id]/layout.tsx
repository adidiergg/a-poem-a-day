"use client";
import React, { useEffect,useRef, useState } from "react";
import { set } from "zod";
import { Posts } from "~/app/_components/posts";
import { PoemContext } from "~/context/poem-context";


interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemPage({ children }: PoemLayoutProps) {

  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <div  className="relative flex flex-col  px-0 lg:flex-row">
      <div ref={ref} className="flex basis-2/3 flex-col justify-center px-8 py-16 lg:h-fit ">
        <PoemContext.Provider value={ref}>
        {children}
        </PoemContext.Provider>
      
      </div>
      <div className="basis-1/3">
        <div className="relative  flex min-h-screen	 w-full flex-col items-center gap-3  p-8 py-16">
          <Posts />
        </div>
      </div>
    </div>
  );
}
