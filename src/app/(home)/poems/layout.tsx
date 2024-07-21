interface PoemsLayoutProps {
  children: React.ReactNode;
}

export default function PoemsLayout({ children }: PoemsLayoutProps) {
  return (
    <>
      <div
        className="flex-1 justify-center items-center"
      >
        {children}
      </div>
    </>
  );
}
