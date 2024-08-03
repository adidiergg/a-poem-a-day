
interface BookMarkLayoutProps{
    children : React.ReactNode
}

export default function BookMarkLayout({children}: BookMarkLayoutProps){
    return (
        <div
        className=" relative flex flex-column lg:flex-row justify-center  px-8 py-16"
      >
        <div className="basis-1/3">
        {children}
        </div>
      </div>
    );

}