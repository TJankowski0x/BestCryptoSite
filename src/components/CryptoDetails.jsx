import React from 'react'
const CryptoDetails = () => {
    return(
        <div className="detailspage">
            <div className="tagparent">
                <img src="" alt="logobtc"/>
                <h1>name</h1>
                <div className="headpricebox">
                    <h2></h2>
                </div>
            </div>
            <div className="bigboxparent">
                <h2>Basic Data</h2>
                <div className="whitebox">
                    <p>Price</p>
                    <p>current_price</p>
                </div>
                <div className="whitebox">
                    <p>Volume</p>
                    <p>total_volume</p>
                </div>
                <div className="whitebox">
                    <p>Market Cap</p>
                    <p>market_cap</p>
                </div>
                <div className="whitebox">
                    <p>Trading Value 24h</p>
                    <p></p>
                </div>
            </div>
            <div className="">
                <h2>Price Data</h2>
                <div className="pricebox">
                    <p>Last Hour</p>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div className="pricebox">
                    <p>Last 24h</p>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div className="pricebox">
                    <p>Last 7d</p>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
            <div>
                <h2>Supply Data</h2>
                <div className="whitebox">
                    <p>Max Supply</p>
                    <p>max_supply</p>
                </div>
                <div className="whitebox">
                    <p>Total Supply</p>
                    <p>total_supply</p>
                </div>
                <div className="whitebox">
                    <p>Circulating Supply</p>
                    <p>circulating_supply</p>
                </div>
            </div>
        </div>

)}

export default CryptoDetails