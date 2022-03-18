/** @format */

import React from "react";
import "./Home2.css";
import wallet from "./Images/Group 52.svg";
import mobile from "./Images/Group 52.svg";
import mobile2 from "./Images/Group 28.svg";

const Home2 = () => {
  return (
    <div className='Home2bg'>
      <div className='HomeText'>
        <h3>
          <b>Why do people get involved with Cryptocurrencies?</b>
        </h3>
      </div>
      <div className='easypaydiv'>
        <div className='easypay'>
          <div>
            <img className='img' src={wallet} alt='' />
          </div>
          <div>
            <h4>Easy Mode Of Payment</h4>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
        </div>
        <div className='easypay2'>
          <img className='img' src={wallet} alt='' />
          <h4>Financial Freedom</h4>
          <p>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className='easypay3'>
          <img className='img' src={wallet} alt='' />
          <h4>Investment</h4>
          <p>
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
      <div className='btn'>
        <button className='btntx'>Learn More</button>
      </div>
      {/* section2 */}

      <div className='section2'>
        <h3>Buy and Sell your Cryptocurrency in 3 simple steps</h3>
        <div>
          <div className='creatdiv'>
            <div className='creataccttext'>
              <h4>1</h4>
              <h3>Create a free Account</h3>
            </div>
            <p>
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
            <div>
              <img className='create' src={mobile} alt='' />
            </div>
          </div>
          {/* deposite section  */}
          <div className='creatdiv2'>
            <div className='creataccttext2'>
              <h4>2</h4>
              <h3>Deposite</h3>
            </div>
            <p>
              Choose your preferred deposit option like bank transfer,
              credit/debit card or send digital asset directly to your wallet
              for easy funding/withdrawal.
            </p>
            <div>
              <img className='create2' src={mobile} alt='' />
            </div>
          </div>

          {/* By and sell section */}
          <div className='creatdiv3'>
            <div className='creataccttext3'>
              <h4>3</h4>
              <h3> Buy/ Sell Crypto</h3>
            </div>
            <p>
              Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
              wallet or send it easily to friends and family.
            </p>
            <div>
              <img className='create3' src={mobile2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
