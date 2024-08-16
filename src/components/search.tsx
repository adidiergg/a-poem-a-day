import { useSearchParams } from "next/navigation";
import { Icons } from "./icons";

export const Search = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex w-full px-2 py-1 items-center  flex-row space-x-2 bg-background border-l-8 border-primary  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <Icons.search className="size-12 p-2 text-primary cursor-pointer"/>
      <input className="basis-full py-1 font-medium text-lg bg-transparent focus:outline-none" placeholder="Buscar"/>
      
    </div>
  );
};
