import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {
    const[ToggleMenu,setToggleMenu]=useState(false)
    return (
        <header className="flex bg-primary">
            <a href="/" className="logo">Gayathri M</a>
            <nav className="hidden md:block">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            { ToggleMenu && <nav className="block md:hidden ">
                <ul onClick={()=>setToggleMenu(!ToggleMenu)} className=" flex-col mobile-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="#resume">Resume</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={()=>setToggleMenu(!ToggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'>
                </Bars3Icon></button>
        </header>
    );
}
