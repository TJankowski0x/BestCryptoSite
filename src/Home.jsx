import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { Axios } from 'axios';



const Home = () => {
    const [marketData, setMarket] = useState(false)

    const { data, isLoading } = useQuery('marketInfo', () => {
      return Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(
        (res) => res.data
      );
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="home">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>Volume</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}