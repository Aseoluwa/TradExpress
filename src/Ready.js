/** @format */

import React from "react";
import "./Ready.css";
import apple from "./Images/Group 68.svg";
import google from "./Images/Group 69.svg";
import comments from "./Images/Union 1.svg";
import Quote from "./Images/Group 8699.svg";
import Passport from "./Images/Ase-Pp.jpg";
import passport2 from "./Images/Adun.jpg";
import passport3 from "./Images/tg.jpg";

const Ready = () => {
  return (
    <div>
      <div className='ready'>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h4>Create your account for free and start trading today!</h4>
        <button className='readybtn'>Get Started</button>
        <div className='icons'>
          <img className='apple' src={apple} alt='' />
          <img className='google' src={google} alt='' />
        </div>
      </div>

      {/* customers review */}
      <div className='customerr'>
        <div >
          <h3 className="hhh"><b>Customer's Review</b></h3>
          <div className='customerdiv'>
            <div className='cust1'>
              <img className='comment-section' src={comments} alt='' />
              <img className='quote' src={Quote} alt='' />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
              <img className='pp' src={Passport} alt='' />
            </div>
            <div className='cust2'>
              <img className='comment-section' src={comments} alt='' />
              <img className='quote' src={Quote} alt='' />
              <p>
                They have the best rate compared to other platforms with fast
                payout.
              </p>
              <img className='pp2' src={passport2} alt='' />
            </div>
            <div className='cust3'>
              <img className='comment-section' src={comments} alt='' />
              <img className='quote' src={Quote} alt='' />
              <p>
                Easy to fund and withdraw coins or cash on their platform, I
                will definitely trade with them again.
              </p>
              <img className='pp3' src={passport3} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
