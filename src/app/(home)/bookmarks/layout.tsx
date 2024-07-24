


interface BookMarkLayoutProps{
    children : React.ReactNode
}

export default function BookMarkLayout({children}: BookMarkLayoutProps){
    return (
        <div
        className=" relative flex min-h-screen justify-center px-8 py-16"
      >
        {children}
      </div>
    );

}