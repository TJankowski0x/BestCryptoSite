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
                        <NavLink to={'/'} className="nav-link">
                            <MdOutlineHouse
                                className="icon"
                                style={{ height: '50px', width: '50px', aspectRatio: '1/1' }}
                            />
                        </NavLink>
                        <NavLink className="nav-link">
                            <BiBitcoin
                                className="icon"
                                style={{ height: '50px', width: '50px', aspectRatio: '1/1' }}
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="nav-right-container">
                    <div className="nav-links-container">
                        <NavLink to={'/'} className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to={'/'} className="nav-link">
                            Bitcoin
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
