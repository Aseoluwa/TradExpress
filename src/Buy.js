/** @format */

import React from "react";
import "./Buy&sell.css";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className='BSdiv'>
      <h3>Buy/Sell Instantly</h3>
      <div>
        <div className='BSbtn'>
          <Link className='Buybtn' to='/Buy'>
            Buy
          </Link>
          <Link className='Sellbtn' to='/Sell1'>
            Sell
          </Link>
        </div>
        <div>
          <div className='BSOPTIONS'>
            <h5 className='currency'>Coin to Buy</h5>
            <select>
              <option value='volvo'>Bitcoin (BTC)</option>
              <option value='saab'>Eherium (ETH)</option>
              <option value='fiat'>Tether (USDT)</option>
              <option value='audi'>Binance Coin (BNB)</option>
              {/* <option value='audi'>USD Coin (USDC)</option> */}
            </select>
          </div>
          <div className='BSOPTIONS'>
            <h5 className='currency'>Currency </h5>
            <select className='PP2'>
              <option>Naira (NGN) </option>
              <option> Dollars ($)</option>
              <option>Pounds (£)</option>
            </select>
          </div>
          <div className='BSOPTIONS'>
            <h5 className='currency'>Amount</h5>
            <input type='number' placeholder='NGN | 3,000,000.00'></input>
          </div>
          <button className='Bsbtn'>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
