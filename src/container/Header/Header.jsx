import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='header wrapper section-padding' id='home'>
    <div className="wrapper-info">
      <SubHeading 
        title="Chase the new flavor"/>
      <h1 className="header-h1">The Key to Fine Dining</h1>
      <p className="p-opensans" style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className="custom-button">Explore Menu</button>
    </div>
    <div className="wrapper-image">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
