interface ExploreLayoutProps {
    children: React.ReactNode;
}

export default  function ExploreLayout({children}: ExploreLayoutProps) {
    return (
        <div className="relative flex flex-col px-0 lg:flex-row">
            <div className="basis-2/5">
            
            </div>
            <div className="basis-3/5">
                <div className="py-16 p-8">
                    {children}
                </div>
            </div>
        </div>
    );

}