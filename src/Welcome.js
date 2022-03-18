/** @format */

import React from "react";
import "./Welcomeform.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className='Welcomediv'>
      <h3>Welcome!</h3>
      <div>
        <div className='bot'>
          <Link className='bot1' to='/Welcome'>
            Individual
          </Link>
          <Link className='bot2' to='/Form1'>
            Business
          </Link>
        </div>

        <div className='inputdiv'>
          <input
            className='input1'
            type='text'
            name='username'
            placeholder='Username'
          />
          <input
            className='input1'
            type='text'
            name='username'
            placeholder='Full Name'
          />
          <input
            className='input1'
            type='text'
            name='username'
            placeholder='Email'
          />
          <input
            className='input1'
            type='text'
            name='username'
            placeholder='Phone Number'
          />
          <input
            className='input1'
            type='text'
            name='username'
            placeholder='Referral Code (optional)'
          />
          <p className='p1'>
            <b>
              By clicking the Sign Up button below, you agree to TradExpress{" "}
              <a href=''>terms and service</a>
            </b>
          </p>
          <div>
            <Link to='./Final'>
              <button className='signupbtn'>Sign Up</button>
            </Link>
          </div>
          <div>
            <p className='p2'>
              <b>
                Already have an account ? <a href=''>Click here</a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
