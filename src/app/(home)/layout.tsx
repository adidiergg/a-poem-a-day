import { SiteHeader } from "../_components/site-header";


interface AppLayoutProps {
    children: React.ReactNode
}


export default function AppLayout({children}: AppLayoutProps){
    return (
        <>
            <SiteHeader />
            <main className="flex-1 lg:px-8">
                {children}
            </main>
            
        </>
    );
}