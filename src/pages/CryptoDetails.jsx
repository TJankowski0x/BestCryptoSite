import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const BoxInfo = (props) => {
    return (
        <div className="white-box-details">
            <p className="white-box-p">{props.text}</p>
            <p className="white-box-p">{props.whiteInfo}</p>
        </div>
    );
};

const CryptoDetails = () => {
    const { cryptoID } = useParams();
    const {
        data: cryptoInfo,
        isLoading,
        isError
    } = useQuery('cryptoDetails', () => {
        return Axios.get(
            `https://api.coingecko.com/api/v3/coins/${cryptoID}?community_data=false&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        ).then((res) => res.data);
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    const styles = {
        colorgreen: {
            backgroundColor:
                cryptoInfo.market_data.price_change_percentage_1h_in_currency.usd > 0
                    ? 'green'
                    : 'red'
        }
    };

    return (
        <div className="details-container">
            <div className="head-info">
                <img src={cryptoInfo.image.large} alt="coinlogo" />
                <div className="crypto-name">
                    <h1>{cryptoInfo.name}</h1>
                </div>
                <div className="head-box">
                    <div className="head-price">
                        <h2>{`$${cryptoInfo.market_data.current_price.usd.toLocaleString(
                            undefined,
                            {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }
                        )}`}</h2>
                    </div>
                </div>
            </div>
            <div className="rest-data">
                <div className="left-info">
                    <div className="basic-data">
                        <p className="header">Basic Data</p>
                        <BoxInfo
                            text="Market Cap Rank"
                            whiteInfo={`#${cryptoInfo.market_cap_rank}`}
                        />
                        <BoxInfo
                            text="Market Cap"
                            whiteInfo={`$${cryptoInfo.market_data.market_cap.usd.toLocaleString()}`}
                        />
                        <BoxInfo
                            text="Trading Volume 24h"
                            whiteInfo={`$${cryptoInfo.market_data.total_volume.usd.toLocaleString()}`}
                        />
                        <BoxInfo
                            text="All-time high"
                            whiteInfo={`$${cryptoInfo.market_data.ath.usd}`}
                        />
                    </div>
                    <div className="bot-box">
                        <div className="price-data">
                            <p className="header">Price Data</p>
                            <BoxInfo
                                style={styles.colorgreen}
                                text="Last 1h"
                                whiteInfo={
                                    cryptoInfo.market_data.price_change_percentage_1h_in_currency
                                        .usd > 0
                                        ? '+' +
                                          cryptoInfo.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                              2
                                          )
                                        : cryptoInfo.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                              2
                                          ) + '%'
                                }
                            />
                            <BoxInfo
                                style={{
                                    backgroundColor:
                                        cryptoInfo.market_data
                                            .price_change_percentage_24h_in_currency.usd > 0
                                            ? 'green'
                                            : 'red'
                                }}
                                text="Last 1h"
                                whiteInfo={
                                    cryptoInfo.market_data.price_change_percentage_24h_in_currency
                                        .usd > 0
                                        ? '+' +
                                          cryptoInfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                              2
                                          ) +
                                          '%'
                                        : cryptoInfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                              2
                                          ) + '%'
                                }
                            />
                            <BoxInfo
                                style={`${
                                    cryptoInfo.market_data.price_change_percentage_7d_in_currency
                                        .usd > 0
                                        ? { backgroundColor: 'green' }
                                        : { backgroundColor: 'red' }
                                }`}
                                text="Last 7d"
                                whiteInfo={
                                    cryptoInfo.market_data.price_change_percentage_7d_in_currency
                                        .usd > 0
                                        ? '+' +
                                          cryptoInfo.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                              2
                                          ) +
                                          '%'
                                        : cryptoInfo.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                              2
                                          ) + '%'
                                }
                            />
                        </div>
                        <div className="supply-data">
                            <p className="header">Supply Data</p>
                            <BoxInfo
                                text="Max Supply"
                                whiteInfo={cryptoInfo.market_data.max_supply}
                            />
                            <BoxInfo
                                text="Circulating Supply"
                                whiteInfo={cryptoInfo.market_data.circulating_supply}
                            />
                            <BoxInfo
                                text="Total Supply"
                                whiteInfo={cryptoInfo.market_data.total_supply}
                            />
                        </div>
                    </div>
                </div>
                <div className="right-info">
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{ __html: cryptoInfo.description.en }}></div>
                </div>
            </div>
        </div>
    );
};

export default CryptoDetails;
