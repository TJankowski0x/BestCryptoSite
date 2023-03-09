import React from 'react';
import { useQuery } from 'react-query';
import Axios from 'axios';

const Home = () => {
    // const [marketData, setMarket] = useState(false)

    const {
        data: marketData,
        isLoading,
        isError,
        refetchOnWindowFocus
    } = useQuery('marketInfo', () => {
        return Axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        ).then((res) => res.data);
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
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
                            <th>Change 24h</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketData.slice(0, 10).map((coin) => {
                            return (
                                <tr>
                                    <td>{coin.market_cap_rank}</td>
                                    <td>{coin.name}</td>
                                    <td>{`$${coin.current_price.toFixed(3)}`}</td>
                                    <td>{coin.price_change_percentage_24h.toFixed(2) + '%'}</td>
                                    <td>{`$${coin.market_cap}`}</td>
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
