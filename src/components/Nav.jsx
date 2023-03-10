import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiBitcoin } from 'react-icons/bi';
import { MdOutlineHouse } from 'react-icons/md';
const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left-container">
                    <div className="nav-logo">
                        <MdOutlineHouse />
                        <BiBitcoin />
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
