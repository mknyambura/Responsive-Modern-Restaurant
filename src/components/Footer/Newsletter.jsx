import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className="newsletter-heading">
      <SubHeading title="Newsletter"/>
      <h1 className="headtext-cormorant">Subscribe To Our Newsletter</h1>
      <p className="p-opensans">And never miss our latest updates!</p>
    </div>
    <div className="newsletter-input flex-center">
      <input type="email" placeholder='Enter Your Email Address' id="" />
      <button className='custom-button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
