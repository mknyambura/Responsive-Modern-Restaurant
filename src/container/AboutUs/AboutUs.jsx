import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div id='about' className='aboutus background flex-center section-padding'>
    <div className="aboutus-overlay flex-center">
      <img src={images.G} alt="" />
    </div>
    {/* About Us  */}
    <div className="aboutus-content flex-center">
      <div className="aboutus-content-about">
        <h1 className="headtext-cormorant">About Us</h1>
        <img src={images.spoon} alt="" className='spoon-image' />
        <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom-button'>Know More</button>
      </div>
      {/* Knife Image  */}
      <div className="aboutus-content-knife flex-center">
        <img src={images.knife} alt="" />
      </div>
      {/* Our History  */}
      <div className="aboutus-content-history">
        <h1 className="headtext-cormorant">Our History</h1>
        <img src={images.spoon} alt="" className='spoon-image' />
        <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom-button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
