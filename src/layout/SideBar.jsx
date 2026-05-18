


export default function SideBar() {
    
    
    return (
        <aside className="h-screen w-64 bg-[#1e140f] border-r border-stone-800 pt-6 pb-6 px-4 flex flex-col justify-start space-y-6 hidden md:flex">
         <p className=" text-xs font-bold uppercase tracking-wider text-amber-500/80 mb-4">
                    Café Locations
                </p>
        
         <nav className="space-y-1 flex flex-col gap-5 ">
            
                   <a href="#location-one" className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-amber-500 text-[#1e140f] transition duration-200">
                        <span>City Center</span>
                    </a>
                    
                    <a href="#location-two" className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-amber-500 text-[#1e140f] transition duration-200">
                        <span>Garden City Mall</span>
                    </a>
                    
                    <a href="#location-three" className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-amber-500 text-[#1e140f] transition duration-200">
                        <span>Two Rivers Mall</span>
                    </a>
                    
                    <a href="#location-four" className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl bg-amber-500 text-[#1e140f] transition duration-200">
                        <span>Galleria Mall</span>
                    </a>

           </nav>
           </aside>
    )
}