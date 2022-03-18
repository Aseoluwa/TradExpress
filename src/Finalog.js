/** @format */

import React from "react";
import Mail from "./Images/mailing.svg";
import "./Finalog.css";

const Finalog = () => {
  return (
    <div className='finalpg'>
      <p className='headerf'>You're Almost In!</p>
      <h3>Welcome Aseoluwa</h3>

      <div>
        <img className='finalimg' src={Mail} alt='' />
      </div>
      <p className='fp2'>
        <b>
          {" "}
          An activation link has been sent to{" "}
          <a href=''>Ireti4tech@gmail.com </a> Please click on the link to
          verify your email and activate your TradExpress account.
        </b>
      </p>
      <button href='./Welcome.js'>Continue</button>
      <div className='finalft'>
        <p>
          <b>
            Didn't get an email? Kindly click
            <a href='./Finalog.js'> resend email</a> Wrong email supplied?
            <a href='./Finalog.js'> Edit email address</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Finalog;
