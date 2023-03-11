import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Whitebox = (text, value) => {
    return (
        <div className="whitebox">
            <p>{}</p>
            <p>{}</p>
        </div>
    );
};

const Pricebox = (text, value) => {
    // if (value > 0) {
    // } else {
    // }
};

const CryptoDetails = () => {
    const { cryptoID } = useParams();
    const {
        data: cryptoInfo,
        isLoading,
        isError
    } = useQuery('cryptoDetails', () => {
        return Axios.get(
            `https://api.coingecko.com/api/v3/coins/${cryptoID}?community_data=false&sparkline=true`
        ).then((res) => res.data);
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <div className="detailspage">
            <div className="tagparent">
                <img src="image" alt="image" />
                <h1>{cryptoInfo.name}</h1>
                <div className="headpricebox">
                    <h2></h2>
                </div>
            </div>
            <div className="bigboxparent">
                <h2>Basic Data</h2>
                <p>{cryptoInfo.market_data.current_price.usd}</p>
                <Whitebox text="Price" value={cryptoInfo.market_data.current_price.usd} />
            </div>
            <div className="">
                <h2>Price Data</h2>
                <Pricebox
                    text="Last Hour"
                    value="price_change_percentage_1h_in_currency"></Pricebox>
                <Pricebox
                    text="Last 24h"
                    value="price_change_percentage_24h_in_currency"></Pricebox>
                <Pricebox text="Last 7d" value="price_change_percentage_7d_in_currency"></Pricebox>
            </div>
            <div>
                <h2>Supply Data</h2>
            </div>
        </div>
    );
};

export default CryptoDetails;

// <Whitebox text="Volume" value="total_volume"></Whitebox>
// <Whitebox text="Market Cap" value="market_cap"></Whitebox>
// <Whitebox text="Trading Value 24h" value="trading_value"></Whitebox>
// <Whitebox text="Max Supply" value="max_supply"></Whitebox>
// <Whitebox text="Total Supply" value="total_supply"></Whitebox>
// <Whitebox text="Circulating Supply" value="circulating_supply"></Whitebox>
