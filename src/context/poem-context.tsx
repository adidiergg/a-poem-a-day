import { createContext,RefObject } from "react";

export const PoemContext = createContext<RefObject<HTMLDivElement> | null>(null);