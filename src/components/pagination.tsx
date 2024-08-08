import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";
import next from "next";
import { Icons } from "./icons";
import { cn } from "~/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export const Pagination = ({ totalPages, page }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prevPage = page - 1 >= 2 ? page - 1 : 1;
  const nextPage = page + 1 <= totalPages ? page + 1 : totalPages;

  const changePage = useCallback(
    (value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", value.toString());
      return params.toString();
    },
    [searchParams],
  );

  console.log(
    totalPages === page || totalPages - page < 5 ? page - 5 : page,
    totalPages === page || totalPages - page < 5 ? page : page + 5,
  );

  return (
    <div className="flex w-full flex-row items-center justify-center gap-1">
      {page !== 1 && (
        <>
          <Link href={`${pathname}?${changePage(prevPage)}`}>
            <Icons.prev
              className={
                "size-10 rounded-md bg-background fill-primary p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              }
            />
          </Link>
          <Link href={`${pathname}?${changePage(1)}`}>
            <div
              className={
                "flex h-10 w-10 items-center justify-center rounded-md  bg-background fill-primary p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              }
            >
              <span className="font-medium">{1}</span>
            </div>
          </Link>
        </>
      )}
      { page !== totalPages-1 && (
      <div className="flex flex-row gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(
            totalPages === page ? page - 4 : page-1,
            totalPages === page ? page : page + 4,
          )
          .map((page) => {
            return (
              <Link key={page} href={`${pathname}?${changePage(page)}`}>
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-md  bg-background fill-primary p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]")
                  }
                >
                  <span className="font-medium">{page}</span>
                </div>
              </Link>
            );
          })}
      </div>
      )}

      {page !== totalPages && (
        <>
          <Link href={`${pathname}?${changePage(totalPages)}`}>
            <div
              className={
                "flex h-10 w-10 items-center justify-center rounded-md  bg-background fill-primary p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              }
            >
              <span className="font-medium">{totalPages}</span>
            </div>
          </Link>

          <Link href={`${pathname}?${changePage(nextPage)}`}>
            <Icons.next
              className={
                "size-10 rounded-md  bg-background fill-primary p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              }
            />
          </Link>
        </>
      )}
    </div>
  );
};
