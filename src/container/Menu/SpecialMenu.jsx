import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Choose that fits you" />
      <h1 className="headtext__cormorant">PRICE</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Пакеты и мероприятия</p>
        <div className="app__specialMenu_menu_items">
          {data.games.map((game, index) => (
            <MenuItem key={game.title + index} title={game.title} price={game.price} info={game.info} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.spiderman} alt="spiderman__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Дополнительные товары и услуги</p>
        <div className="app__specialMenu_menu_items">
          {data.services.map((service, index) => (
            <MenuItem key={service.title + index} title={service.title} price={service.price} info={service.info} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <Link to="/price">
      <button type="button" className="custom__button">Посмотреть все</button>
      </Link>
    </div>
  </div>
);

export default SpecialMenu;