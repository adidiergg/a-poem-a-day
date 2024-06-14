import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";


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
                    <ul className="flex flex-row items-center gap-3 text-background bg-primary/90 rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                        <li className="px-6 py-4">
                            <Link href="/signin">
                            <span className="font-semibold">Iniciar sesion</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
               </div>

            
            </div>
        </header>
    );
}