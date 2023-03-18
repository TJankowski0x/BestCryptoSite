import React, { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => e.preventDefault();
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${searchValue}`);
        }
    };

    return (
        <>
            <form className="search home-input" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleSearchInputChange}
                    onKeyDown={handleOnKeyDown}
                />
                <button className="search-button">
                    <RxMagnifyingGlass />
                </button>
            </form>
        </>
    );
};

export default Search;
