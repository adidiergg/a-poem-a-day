import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;

type allPoemsOutput = RouterOutput["poem"]["all"];

export type Poem = allPoemsOutput[number];

export type BookMark = { id: string, title?: string, author?: string } ;
export type Visited  = { id: string }; 
