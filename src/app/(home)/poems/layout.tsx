interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemLayouy({ children }: PoemLayoutProps) {
  return (
    <>
      <div
        className=" relative flex min-h-screen justify-center 
      bg-background p-8 py-16 before:pointer-events-none before:absolute before:inset-0 before:block before:h-full 
      before:w-full before:bg-[url('/images/background-pattern.svg')] before:bg-repeat before:opacity-5"
      >
        {children}
      </div>
    </>
  );
}
