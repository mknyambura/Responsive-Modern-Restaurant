import React from 'react';

import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p-cormorant">{title}</p>
    <img src={images.spoon} className="spoon-image" alt="" />
  </div>
);

export default SubHeading;
