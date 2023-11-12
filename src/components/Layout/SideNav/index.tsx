import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HomeIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'

export default function SideNav() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);
    // const Menus = [
    //     { title: "Home", src: "Home" },
    //     { title: "Setting", src: "Setting" },
    // ];
    

    return (
        <div
            className={` ${isOpen ? "w-72" : "w-20 "} h-screen relative duration-300 bg-purple-700`}
        >
            <span 
                onClick={toggleSidebar} 
                className="flex justify-center items-center cursor-pointer bg-purple-700 text-white h-10 w-10 rounded-full absolute top-8 right-0 border-4 border-white"
                style={{transform: "translate(50%, -50%)", zIndex: "999"}}
            >
                &times;
            </span>
            <header className="w-full h-16">
                <h3>Sidebar</h3>
            </header>
            <nav className="flex flex-col justify-between  p-5">
                <ul className="w-full flex flex-col gap-4">
                    <li>
                        <NavLink className="w-full flex items-center gap-3 text-white" to={"/home"}>
                            <HomeIcon className=" w-8"/>
                            Início
                        </NavLink>
                    </li>
                </ul>
                <NavLink className="w-full flex items-center gap-3 text-white" to={"/home"}>
                    <Cog6ToothIcon className=" w-8"/>
                    Configurações
                </NavLink>
                
            </nav>
        </div>
    )
}