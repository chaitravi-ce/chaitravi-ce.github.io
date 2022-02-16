import React from "react";
import '../styles/Navbar.css'
import DarkMode from './DarkMode';

const NavBar = () => {

    return(
        <div className='navbar'>
            <div className='name'>
                <h4>Chaitravi Chalke</h4>
            </div>
            <nav className='navMenu'>
                <a href="#home">Home</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
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