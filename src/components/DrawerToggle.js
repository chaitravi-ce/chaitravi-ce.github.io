import React from 'react';
import '..styles/DrawerToggle.css';

const DrawerToggleButton = props => {
    return (
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
      </button>
    );
}

export default DrawerToggleButton
