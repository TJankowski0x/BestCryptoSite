import React from 'react';
const Whitebox = (text, value) => {
    <div className='whitebox'>
        <p>{text}</p>
        <p>{value + "$"}</p>
    </div>
}

const Pricebox = (text, value) => {
    if(value>0){
        document.querySelectorAll(".pricebox").style.backgroundColor = "#86efac";
        document.querySelectorAll(".lastp").style.color = "green";
        <div className='pricebox'>
            <p>{text}</p>
            <p className='lastp'>{value.toFixed(2) + "%"}</p>
        </div>
    }
    else{
        document.querySelectorAll(".pricebox").style.backgroundColor = "#fca5a5";
        document.querySelectorAll(".lastp").style.color = "red";
        <div className='pricebox'>
            <p>{text}</p>
            <p className='lastp'>{"+" + value.toFixed(2) + "%"}</p>
        </div>
    }
}

const CryptoDetails = () => {
    const {
        data: marketData,
        isLoading,
        isError,
        refetchOnWindowFocus
    } = useQuery(
        'coinInfo',
        () => {
            return Axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
            ).then((res) => res.data);
        },
        {
            refetchInterval: 60000
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return(
        <div className="detailspage">
            <div className="tagparent">
                <img src="image" alt="image"/>
                <h1>name</h1>
                <div className="headpricebox">
                    <h2></h2>
                </div>
            </div>
            <div className="bigboxparent">
                <h2>Basic Data</h2>
                <Whitebox text="Price" value="current_price"></Whitebox>
                <Whitebox text="Volume" value="total_volume"></Whitebox>
                <Whitebox text="Market Cap" value="market_cap"></Whitebox>
                <Whitebox text="Trading Value 24h" value="trading_value"></Whitebox>
            </div>
            <div className="">
                <h2>Price Data</h2>
                <Pricebox text="Last Hour" value="price_change_percentage_1h_in_currency"></Pricebox>
                <Pricebox text="Last 24h" value="price_change_percentage_24h_in_currency"></Pricebox>
                <Pricebox text="Last 7d" value="price_change_percentage_7d_in_currency"></Pricebox>
            </div>
            <div>
                <h2>Supply Data</h2>
                <Whitebox text="Max Supply" value="max_supply"></Whitebox>
                <Whitebox text="Total Supply" value="total_supply"></Whitebox>
                <Whitebox text="Circulating Supply" value="circulating_supply"></Whitebox>
            </div>
        </div>

)}

export default CryptoDetails