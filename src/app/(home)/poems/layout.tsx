interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemLayouy({ children }: PoemLayoutProps) {
  return (
    <>
      <div
        className=" relative flex min-h-screen justify-center  p-8 py-16  "
      >
        {children}
      </div>
    </>
  );
}
