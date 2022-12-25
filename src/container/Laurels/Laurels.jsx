import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard =({award: {imgUrl, title, subtitle}}) => (
  <div className="laurels-awards-card">
    <img src={imgUrl} alt="" />
    <div className="laurels-awards-card-content">
      <p className="p-cormorant" style={{color: '#dcca87'}}>{title}</p>
      <p className="p-cormorant">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='background wrapper section-padding' id='awards'>
    <div className="wrapper-info">
      <SubHeading title="Awards & Recognition"/>
      <h1 className="headtext-cormorant">Our Laurels</h1>
      <div className="laurels-awards">
        {data.awards.map((award) => <AwardCard key={award.title} award={award}/>)}
      </div>
    </div>
    <div className="wrapper-image">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
