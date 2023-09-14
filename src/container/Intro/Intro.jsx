import React from 'react';
import { images } from '../../constants';

import './Intro.css';

const Intro = () => (
  <div className="app__nerf-image">
    <img src={images.nerf} alt="nerf__img" />
  </div>
);

export default Intro;