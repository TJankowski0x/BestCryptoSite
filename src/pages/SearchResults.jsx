import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const SearchResults = () => {
    const { searchValue } = useParams();
    console.log(searchValue);
    const [searchResults, setSearchResults] = useState([]);
    const { data, isLoading, isError } = useQuery('search', () => {
        Axios.get(`/api/api/v3/search?query=${searchValue}`).then((res) =>
            setSearchResults(res.data.coins)
        );
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <div className="search-results">
            <ul>
                {searchResults.slice(0, 5).map((coin) => {
                    return <li>{coin.name}</li>;
                })}
            </ul>
        </div>
    );
};
export default SearchResults;
