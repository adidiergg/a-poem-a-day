import Link from "next/link";
import { Icons } from "~/components/icons";

export function SiteHeader() {
  return (
    <header className="fixed  top-0 z-10 w-full p-1 px-3">
      <div className=" flex h-12  items-center ">
        <div className="flex flex-1 items-center justify-between">
          <div className="">
            <Link className="mr-6 flex items-center space-x-2" href="/ ">
              <Icons.logo className="size-12 cursor-pointer fill-transparent  text-background hover:text-background/80 "/>
            </Link>
          </div>

          <nav className="z-10">
            <Link href="/bookmarks">
              <Icons.bookmark className="size-12 cursor-pointer fill-transparent  text-background hover:text-background/80  " />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
