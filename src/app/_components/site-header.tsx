"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "~/components/icons";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
export function SiteHeader() {
  const [styles, setStyles] = useState("bg-transparent");

  const pathname = usePathname();

  /*
  const changeColor = () =>{
    if(window.scrollY > 16){
      setStyles('bg-primary')
    }else{
      setStyles('bg-transparent')
    }
  }
  useEffect(() =>{
    window.addEventListener('scroll',changeColor);
    return () => {
      window.removeEventListener('scroll',changeColor);
    }

  })
  */

  return (
    <header
      className={cn(
        "fixed top-0 z-10 w-full   px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_7px_8px]",
        "bg-zinc-900",
      )}
    >
      <div className=" flex h-12  items-center ">
        <div className="flex flex-1 items-center justify-between">
          <div className="">
            <Link className="mr-6 flex items-center space-x-2" href="/ ">
              <Icons.logo className="size-12 cursor-pointer fill-transparent  text-background hover:text-background/80 " />
            </Link>
          </div>

          <nav className="z-10 flex flex-row">
            <div
              className={
                pathname === "/explore" ? "border-b-2 border-background" : ""
              }
            >
              <Link href="/explore">
                <Icons.explore className="size-12 cursor-pointer fill-transparent text-background hover:text-background/90" />
              </Link>
            </div>
            <div
              className={
                pathname === "/bookmarks" ? "border-b-2 border-background" : ""
              }
            >
              <Link href="/bookmarks">
                <Icons.bookmark className="size-12 cursor-pointer fill-transparent  text-background hover:text-background/90  " />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
