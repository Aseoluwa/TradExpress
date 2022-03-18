/** @format */

// import React from "react";
import React, { useState, useEffect } from "react";
import "./crypto.css";

function Crypto() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https:///api.coinlore.net/api/tickers/?start=0&limit=5")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  });
  return (
    <div className='crypto'>
      {/* <h2> useEffect Basics</h2> */}
      {/* <h2> {data} </h2>
        <button onClick={ ()=> setData('Boss')}>Click It</button> */}
      {data.map((datum) => {
        const { id, symbol, price_usd, percent_change_24h } = datum;
        return (
          <div className='appsub' key={id}>
            <div className='percent'>
              <h3>{symbol}/NGN</h3>
              <h3>{percent_change_24h}%</h3>
            </div>

            <h3>{price_usd}$</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Crypto;
