import React, { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';

const Search = ({ coinList }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => e.preventDefault();
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.length > 0) {
            const results = coinList.data.filter((coin) =>
                coin.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchResults(results);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
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
                    autoComplete="off"
                    onChange={handleSearchInputChange}
                    onKeyDown={handleOnKeyDown}
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setShowResults(true)}
                />
                <button className="search-button">
                    <RxMagnifyingGlass />
                </button>
            </form>
            {showResults && (
                <ul className="results-list">
                    {searchResults.slice(0, 5).map((coin) => {
                        return (
                            <Link to={`/${coin.id}`} className="name-link">
                                <li className="result-item">{coin.name}</li>
                            </Link>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default Search;
