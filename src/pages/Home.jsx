import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Axios from 'axios';
import Search from '../components/Search';

const fetchMarketData = () => {
    return Axios.get(
        '/api/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h'
    );
};

const fetchAllCoins = () => {
    return Axios.get('/api/api/v3/coins/list');
};

const Home = () => {
    const [allCoins, setAllCoins] = useState(false);
    const { data: allCoinsData } = useQuery('allCoinsData', fetchAllCoins);
    useEffect(() => {
        if (allCoinsData) {
            setAllCoins(allCoinsData.data);
        }
    }, [allCoinsData]);
    const { data: marketData, isLoading, isError } = useQuery('marketData', fetchMarketData);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    if (isError) {
        return <div className="error">Error...</div>;
    }

    return (
        <div className="home">
            <div className="home-header">
                <p className="home-title">Top cryptocurrencies right now</p>
                <Search coinList={allCoinsData ? allCoinsData : []} />
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Change 1h</th>
                            <th>Change 24h</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketData.data.slice(0, 10).map((coin) => {
                            return (
                                <tr>
                                    <td>{coin.market_cap_rank}</td>

                                    <Link to={`/${coin.id}`} className="name-link">
                                        <td>
                                            {coin.name + ' (' + coin.symbol.toUpperCase() + ')'}
                                        </td>
                                    </Link>
                                    <td>{`$${coin.current_price.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}`}</td>
                                    <td
                                        style={{
                                            color:
                                                coin.price_change_percentage_1h_in_currency > 0
                                                    ? 'green'
                                                    : 'red'
                                        }}>
                                        {coin.price_change_percentage_1h_in_currency > 0
                                            ? '+' +
                                              coin.price_change_percentage_1h_in_currency.toFixed(
                                                  2
                                              ) +
                                              '%'
                                            : coin.price_change_percentage_1h_in_currency.toFixed(
                                                  2
                                              ) + '%'}
                                    </td>
                                    <td
                                        style={{
                                            color:
                                                coin.price_change_percentage_24h > 0
                                                    ? 'green'
                                                    : 'red'
                                        }}>
                                        {coin.price_change_percentage_24h > 0
                                            ? '+' +
                                              coin.price_change_percentage_24h.toFixed(2) +
                                              '%'
                                            : coin.price_change_percentage_24h.toFixed(2) + '%'}
                                    </td>
                                    <td>{`$${coin.market_cap.toLocaleString()}`}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
