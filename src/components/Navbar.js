import React, { useState } from "react";
import '../styles/Navbar.css'
import DarkMode from './DarkMode';
import SideDrawer from "./NavLink";

const NavBar = () => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const handleDrawerToggleClick = () => {
        setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
    };

    return(
        <div className='navbar'>
            {/* <SideDrawer show={sideDrawerOpen} /> */}
            <div className='name'>
                <h4>Chaitravi Chalke</h4>
            </div>
            <nav className='navMenu'>
                <a href="/">Home</a>
                <a href="/experience">Experience</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                {/* <a href="#">Contact</a> */}
                <div className="dot"></div>
            </nav>
            <div className='toggle'>
                <DarkMode />
            </div>    
        </div>
    );
}

export default NavBar;