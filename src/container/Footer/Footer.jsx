import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='footer section-padding' id='login'>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
