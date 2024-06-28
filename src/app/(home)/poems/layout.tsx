

interface PoemLayoutProps {
    children: React.ReactNode
}

export default function PoemLayouy({children}:PoemLayoutProps){
    return (
        <>
      <main className="flex-1">
        <div className="absolute container h-full grid px-0">
          <div
            className=" relative mx-auto flex h-full w-full flex-col items-center 
      bg-background before:pointer-events-none before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-[url('/images/background-pattern.svg')] 
      before:bg-repeat before:opacity-5 p-8 py-16"
          >
            
            {children}
            
          </div>
        </div>
      </main>
    </>
    );
}