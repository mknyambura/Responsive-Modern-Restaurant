import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='background wrapper section-padding' id='contact'>
    <div className="wrapper-info">
      <SubHeading title="Contact"/>
      <h1 className="headtext-cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="wrapper-content">
        <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p-cormorant" style={{ color: '#dcca87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom-button" style={{ marginTop: '2rem' }} type='button'>Visit Us</button>
    </div>
    <div className="wrapper-image">
      <img src={images.findus} alt=""/>
    </div>
  </div>
);

export default FindUs;
