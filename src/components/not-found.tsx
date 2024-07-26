import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icons } from "~/components/icons";


type NotFoundProps = {
    message: string;
}

export const NotFound = ({message}:NotFoundProps) => {
  const router = useRouter();

  return (
    <div className="z-0 flex h-full  w-full rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
      <div className="flex basis-full flex-col justify-between gap-4 p-8 md:px-12">
        <div className="flex flex-row justify-between">
          <Icons.back
            className="size-12  cursor-pointer rounded-full fill-current p-2 font-bold text-primary/90 hover:bg-primary/10 hover:text-primary"
            aria-hidden="true"
            onClick={() => router.back()}
          />

          <div className="flex flex-row gap-1"></div>
        </div>

        <div className="grow flex flex-col justify-center items-center">
          <div className="relative lg:h-1/2 lg:w-1/2 h-64 w-64">
            <Image
              src="/images/error.png"
              alt="Error 404"
              fill
              objectFit="contain"
            />
          </div>
          <h1 className="text-center text-3xl  font-light text-primary/90 lg:text-2xl">
            { message }
          </h1>
        </div>
      </div>
    </div>
  );
};
