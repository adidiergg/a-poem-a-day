import Link from "next/link";


export function SiteHeader() {

    
    return (
        <header className="fixed  bottom-0 lg:top-0 lg:h-24 z-10 w-full">
            <div className="container flex h-24  items-center ">
                <div className="flex flex-1 items-center justify-center lg:justify-between">
                <div className="">
            
                    <Link className="mr-6 flex items-center space-x-2" href="/ ">
                        
                    </Link>

                </div>

                <nav className="z-10 ">
                    
                </nav>
               </div>

            
            </div>
        </header>
    );
}