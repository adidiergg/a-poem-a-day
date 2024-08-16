import { useSearchParams } from "next/navigation";
import { Icons } from "./icons";

export const Search = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex w-full px-4 py-1  flex-row space-x-2 bg-background  ring-2 ring-primary shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <input className="basis-full py-1 px-2 bg-transparent focus:outline-none" placeholder="Buscar"/>
      <Icons.explore className="size-12"/>
    </div>
  );
};
