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
            <div className='nav-link'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='toggle'>
                <DarkMode />
            </div>    
        </div>
    );
}

export default NavBar;