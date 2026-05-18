import React from 'react'
// import './NavBar.css'


export default function NavBar() {    
    return (
        <nav className="w-full bg-[#1e140f] border-b border-stone-800 shadow-md p-5">
         <ul className="w-full flex justify-between items-center list-none m-0 p-0 max-w-7xl mx-auto">           
            <li className="w-1/3 text-left"><a href="/home"
            className="text-stone-300 font-medium tracking-wide  text-sm md:text-base"
            >Home</a></li>
            <li className="w-1/3 text-center"><a href="/shop"
            className="text-stone-300 font-medium tracking-wide  text-sm md:text-base"
            >Shop</a></li>
            <li className="w-1/3 text-right"><a href="/admin-portal"
            className="text-amber-500 font-medium tracking-wide  text-sm md:text-base"
            >Admin Portal</a></li>
           
        </ul>

       </nav>
    )
}