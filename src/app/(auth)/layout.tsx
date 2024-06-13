interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <main className="flex-1">
        <div className="absolute container h-full grid px-0">
          <div
            className=" relative mx-auto flex h-full w-full flex-col items-center 
      bg-background before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/images/background-pattern.svg')] 
      before:bg-repeat before:opacity-5 justify-center"
          >
            <div className="z-0 flex  w-5/6 sm:w-3/4  md:w-3/5 lg:w-1/3  rounded-lg bg-background shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
