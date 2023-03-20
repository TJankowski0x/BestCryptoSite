import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchBox from '../components/SearchBox';
const SearchResults = () => {
    const { searchValue } = useParams();
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
                    //console.log(coin);
                    return <SearchBox coin={coin} />;
                })}
            </ul>
        </div>
    );
};
export default SearchResults;
