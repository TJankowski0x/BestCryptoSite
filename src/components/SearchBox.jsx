import React from 'react';
import { Link } from 'react-router-dom';
const SearchBox = ({ coin }) => {
    return (
        <li className="search-res-box">
            <Link to={`/${coin.id}`} className="search-link">
                <div className="search-res-name">
                    <img src={coin.thumb} alt={`${coin.name}-image`} className="search-logo" />
                    <h2 className="search-res-title">{coin.name}</h2>
                </div>
            </Link>
        </li>
    );
};

export default SearchBox;
