import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">NERF ARENA</h1>
      <p className="p__opensans_r" style={{ margin: '1rem 0', width: 325 }}>Битва Настоящих Героев</p>
      <p className="p__opensans_g" style={{ margin: '1rem 0', width: 250, height: 50 }}>Место, где каждый найдет развлечение по вкусу</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" style={{ maxWidth: 500 }}/>
    </div>
  </div>
);

export default Header;