/** @format */

import React from "react";
import "./Footer.css";
import twi from "./Images/Icon awesome-twitter.svg";
import tele from "./Images/Icon awesome-telegram.svg";
import whatapp from "./Images/Icon ionic-logo-whatsapp.svg";
import fb from "./Images/Icon awesome-facebook.svg";
import footerend from "./Images/Group 78.svg";

const Footer = () => {
  return (
    <div>
      <div className='footbg'>
        <div className='Products'>
          <h4>Products</h4>
          <ul>
            <li>Bitcon</li>
            <li>Alt</li>
            <li>Flat</li>
            <li>Refill</li>
            <li>P2P</li>
          </ul>
        </div>
        <div className='Learn'>
          <h4>Learn</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className='Contact'>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href='support@tradeexpress.com'>support@tradeexpress.com</a>{" "}
            </li>

            <li>
              <a href='hello@tradeexpress.com'>hello@tradeexpress.com</a>{" "}
            </li>
          </ul>
          <div>
            <img className='logoicons' src={twi} alt='' />
            <img className='logoicons' src={tele} alt='' />
            <img className='logoicons' src={whatapp} alt='' />
            <img className='logoicons' src={fb} alt='' />
          </div>
        </div>
        <div className='Company'>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Rates</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className='Legal'>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Anti-Money Laundering</li>
            <li>Rates</li>
            <li>Mobile</li>
          </ul>
        </div>
      </div>
      <div className='footerend'>
        <img className="footerimg" src={footerend} alt='' />
      </div>
    </div>
  );
};

export default Footer;
