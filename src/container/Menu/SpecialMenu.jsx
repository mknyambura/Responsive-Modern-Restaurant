import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="special-menu flex-center section-padding" id="menu">
    <div className="special-menu-title">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className='headtext-cormorant'>Today's Special</h1>
    </div>
    {/* Wine  */}
    <div className="special-menu-menu">
      <div className="special-menu-menu-wine flex-center">
        <p className='special-menu-menu-heading'>Wine & Beer</p>
        <div className="special-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      {/* Image  */}
      <div className="special-menu-menu-image">
        <img src={images.menu} alt="" />
      </div>
      {/* Cocktails  */}
      <div className="special-menu-menu-cocktails flex-center">
        <p className='special-menu-menu-heading'>cocktails</p>
        <div className="special-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
      
      <div style={{marginTop: '15px'}}>
        <button className="custom-buttom" type='button'>View More</button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
