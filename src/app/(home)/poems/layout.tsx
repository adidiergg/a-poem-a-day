interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemLayouy({ children }: PoemLayoutProps) {
  return (
    <>
      <div
        className=" relative flex h-screen p-8 justify-center 
      bg-primary   before:pointer-events-none before:absolute before:inset-0 before:block before:h-full 
      before:w-full before:bg-[url('/images/background-pattern.svg')] before:bg-repeat before:opacity-5 "
      >
        {children}
      </div>
    </>
  );
}
