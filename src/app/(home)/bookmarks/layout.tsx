interface BookMarkLayoutProps {
  children: React.ReactNode;
}

export default function BookMarkLayout({ children }: BookMarkLayoutProps) {
  return (
    <div className=" flex-column relative flex justify-center px-8  py-16">
      <div className="w-full lg:w-1/3">{children}</div>
    </div>
  );
}
