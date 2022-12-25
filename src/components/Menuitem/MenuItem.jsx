import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='menu-item'>
    <div className="menu-item-head">
      <div className="menu-item-name">
        <p className="p-cormorant" style={{color: '#dcca87'}}>{title}</p>
      </div>
      <div className="menu-item-dash-dash"/>
      <div className="menu-item-price">
        <p className="p-cormorant">{price}</p>
      </div>
    </div>
    <div className="menu-tem-subheading">
      <p className="p-opensans" style={{color: '#aaa'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
