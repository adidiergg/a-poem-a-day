import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";
import next from "next";
import { Icons } from "./icons";
import { cn } from "~/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prevPage = currentPage - 1 >= 2 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : totalPages;

  const changePage = useCallback(
    (value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", value.toString());
      return params.toString();
    },
    [searchParams],
  );

  console.log( currentPage-2 === -1 ? 0 : currentPage-2 === 0 ? 0: currentPage-2 === 1 ? 0: currentPage-2 ,
    currentPage+2 === totalPages+2 ? currentPage : currentPage+2 === totalPages+1 ? currentPage-1 : currentPage===totalPages? currentPage: currentPage+2 );

  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-3 flex-wrap">
      {currentPage !== 1 && (
        <div className="flex flex-row">
          <Link href={`${pathname}?${changePage(1)}`}>
            <Icons.first_page
              className={
                "size-8 lg:size-12 rounded-md  border-2 border-background/5 bg-primary text-background p-2"
              }
            />
          </Link>

          <Link href={`${pathname}?${changePage(prevPage)}`}>
            <Icons.prev
              className={
                "size-8 lg:size-12 rounded-md  border-2 border-background/5 bg-primary fill-background p-2"
              }
            />
          </Link>
        </div>
      )}
      
        <div className="flex flex-row gap-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              currentPage-2 === -1 ? 0 : currentPage-2 === 0 ? 0: currentPage-2 === 1 ? 0: currentPage-3,
              currentPage+2 === totalPages+2 ? currentPage : currentPage+2 === totalPages+1 ? currentPage+1 : currentPage===totalPages? currentPage: currentPage+2 ,
            )
            .map((page) => {
              return (
                <Link key={page} href={`${pathname}?${changePage(page)}`}>
                  <div
                    className={cn(
                      "flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-md  p-2",
                      currentPage === page
                        ? "border-2 border-background/5 bg-primary text-background"
                        : "border-2 border-primary bg-background text-primary",
                    )}
                  >
                    <span className="font-medium">{page}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      
      {currentPage !== totalPages && (
        <div className="flex flex-row">
          <Link href={`${pathname}?${changePage(nextPage)}`}>
            <Icons.next
              className={
                "size-8 lg:size-12 rounded-md  border-2 border-background/5 bg-primary fill-background p-2"
              }
            />
          </Link>
          <Link href={`${pathname}?${changePage(totalPages)}`}>
            <Icons.last_page
              className={
                "size-8 lg:size-12 rounded-md  border-2 border-background/5 bg-primary text-background p-2"
              }
            />
          </Link>
        </div>
      )}
    </div>
  );
};
