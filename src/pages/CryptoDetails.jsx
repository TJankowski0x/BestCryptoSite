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
        <div className="details-container">
            <div className="head-info">
                <div className="crypto-name">
                    <h1>{cryptoInfo.name}</h1>
                </div>
                <div className="head-price">
                    <h2>{cryptoInfo.market_data.current_price.usd}</h2>
                </div>
            </div>
            <div className="rest-data">
                <div className="left-info">
                    <div className="basic-data">
                        <BoxInfo
                            text="Price"
                            whiteInfo={`$${cryptoInfo.market_data.current_price.usd.toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }
                            )}`}
                        />
                        <BoxInfo
                            text="Market Cup"
                            whiteInfo={`$${cryptoInfo.market_data.market_cap.usd.toLocaleString()}`}
                        />
                        <BoxInfo
                            text="Total volume"
                            whiteInfo={`$${cryptoInfo.market_data.total_volume.usd.toLocaleString()}`}
                        />
                        <BoxInfo />
                        <BoxInfo />
                    </div>
                </div>
                <div className="right-info">
                    <div className="exchanges"></div>
                </div>
            </div>
        </div>
    );
};

export default CryptoDetails;
