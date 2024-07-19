interface PoemLayoutProps {
  children: React.ReactNode;
}

export default function PoemLayout({ children }: PoemLayoutProps) {
  return (
    <>
      <div
        className="flex-1"
      >
        {children}
      </div>
    </>
  );
}
