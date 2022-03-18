/** @format */

import React from "react";
import "./Home.css";
import Apple from "./Images/Group 68 (1).svg";
import Google from "./Images/Group 69 (1).svg";

const Home1 = () => {
  return (
    <div>
      <div className='Background'>
        <div className='H1text'>
          <h2>Buy, sell and manage your Crypto on TradExpress.</h2>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN.
          </p>
          <a href='./Welcome'>
            <button className='Home1btn'>Get Started</button>
          </a>
        </div>
        <div></div>

        <div className='Homeimg'>
          <a href='https://www.apple.com/store'>
            <img className='Appleimg' src={Apple} alt='' />
          </a>
          <a href=''>
            <img className='Googleimg' src={Google} alt='' />
          </a>
        </div>
        {/* <div className='circle'></div>
        <div className='circle1'></div> */}
      </div>
    </div>
  );
};

export default Home1;
