import { usePathname, useSearchParams } from "next/navigation";
import { Icons } from "./icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export const Search = () => {
  
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const ref = useRef<HTMLInputElement>(null);
  const searchParam = searchParams.get("search");
  const search_query = searchParam === null ? "" : searchParam;

  const initialSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("page");
        params.set("search",search);
        params.toString();
        if (search === ""){
            params.delete("search");
        }
        router.push(`${pathname}?${params.toString()}`);
  }

  const clearSearch =() => {
    setSearch("");
    ref.current?.focus();
  }

  useEffect(() => {
    setSearch(search_query);
  },[searchParams]);

  

  return (
    <div className="flex w-full px-2 py-1 items-center  flex-row space-x-2 bg-background border-l-8 border-primary  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <input ref={ref} value={search} onChange={e => setSearch(e.target.value)} className="basis-full py-1 px-3 font-medium text-lg bg-transparent focus:outline-none" placeholder="Buscar" onKeyDown={(e) => {if (e.key === "Enter"){initialSearch()} }}/>
      { search!=="" &&   <Icons.close onClick={clearSearch} className="size-12 p-2 text-primary rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary"/>}
      <Icons.search onClick={initialSearch} className="size-12 p-2 text-primary rounded-full cursor-pointer hover:bg-primary/10 hover:text-primary"/>

    </div>
  );
};
