/** @format */

import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import iconops from "./Images/Icon awesome-check-circle.svg";

const Login = () => {
  return (
    <div className='Logindiv'>
      <h4>Welcome Back!</h4>
      <input className='Log1' type='text' placeholder='Username' />
      <input className='Log2' type='text' placeholder='Password' />
      <div className='logimg'>
        <div className='logimg1'>
          <img src={iconops} alt='' />
          <p>
            <b>Remember Password</b>
          </p>
        </div>

        <a href='./Login.js'>
          <b>Forgot Password?</b>
        </a>
      </div>
      <Link  to='/Login'>
        <button className='logbtn'>Log In</button>
      </Link>

      <p className='logp'>
        <b>
          New User? <a href='./Login.js'>Click here</a>
        </b>
      </p>
    </div>
  );
};

export default Login;
