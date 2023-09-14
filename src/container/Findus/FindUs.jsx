import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg3 app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Где нас найти</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans_g">г. Новороссийск, пр. Дзержинского, 221Б</p>
        <p className="p__cormorant" style={{ color: '#D9184B', margin: '2rem 0' }}>Часы открытия</p>
        <p className="p__opensans_g">Будние дни: 14:00 - 21:00</p>
        <p className="p__opensans_g">Выходные дни: 10:00 - 22:00</p>
      </div>
      <a href='https://yandex.ru/maps/-/CCU1i0fgkA'><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Посмотреть на карте</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.arena} alt="arena_img" />
    </div>
  </div>
);

export default FindUs;