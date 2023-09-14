import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans_w"><Link to="/">Главная</Link></li>
        <li className="p__opensans_w"><Link to="/price">Прайс</Link></li>
        <li className="p__opensans_w"><Link to="/scripts">Сценарии</Link></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/login" className="p__opensans_w">Логин</a>
        <a href="/registration" className="p__opensans_w">Регистрация</a>
        <div />
        <a href="/profile" className="p__opensans_w">Личный кабинет</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiHamburgerMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Главная</Link></li>
              <li><Link to="/price" onClick={() => setToggleMenu(false)}>Прайс</Link></li>
              <li><Link to="/scripts" onClick={() => setToggleMenu(false)}>Сценарии</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
