import React from 'react';

const Table = () => {
    return (
        <div className="table">
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bitcoin</td>
                        <td>$50,000</td>
                        <td>$1,000,000,000</td>
                        <td>$100,000,000</td>
                        <td>10%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
