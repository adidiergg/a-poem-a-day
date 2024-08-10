interface ExploreLayoutProps {
    children: React.ReactNode;
}

export default  function ExploreLayout({children}: ExploreLayoutProps) {
    return (
        <div className="relative flex flex-col  items-center px-0">
            
            <div className="w-full lg:w-3/5">
                <div className="py-16 px-4">
                    {children}
                </div>
            </div>
        </div>
    );

}