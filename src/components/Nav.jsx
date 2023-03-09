import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left-container">
                    <div className="nav-logo">
                        <img src="" alt="logo" className="logo" />
                        <img src="" alt="logo" className="logo" />
                    </div>
                </div>
                <div className="nav-right-container">
                    <div className="nav-links-container">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink>Bitcoin</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
