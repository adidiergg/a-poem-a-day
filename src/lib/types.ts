import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

type RouterOutput =inferRouterOutputs<AppRouter>;

type allPoemsOutput = RouterOutput["poem"]["all"];
type getBookMarksOutput = RouterOutput["poem"]["getBookMarks"]

export type Poem = allPoemsOutput[number];

interface BookMarkSaved {
    id: string;
}

export type BookMark = getBookMarksOutput[number] | BookMarkSaved;;
