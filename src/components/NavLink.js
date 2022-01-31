import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavLink.css';

const SideDrawer = props => {
    let drawerClasses = "side-drawer";

    if(props.show) {
        drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/">Skills</NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default SideDrawer