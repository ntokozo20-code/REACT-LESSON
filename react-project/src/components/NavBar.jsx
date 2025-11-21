import React from "react";

function NavBar() {
    return (
        <div className="flex items-center p-4 bg-white-200">
            <div className="text-2xl font-bold ">Portfolio</div>
            <div className="flex-1"></div>
            <ul className="hidden md:flex items-center gap-6">
                <li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Home</li>
                <li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">About</li>
                <li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Services</li>
                <li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Contact</li>
            </ul>    
            <div className="flex-1"></div>
            <button className="hidden md:block px-5 py-2 bg-orange-500 text-white rounded-full">
            Contact Me
            </button>
        </div>
        
    )
}
export default NavBar;