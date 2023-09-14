import React from 'react';
import { SlSocialVkontakte, SlSocialInstagram } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg3 section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Свяжитесь с нами</h1>
        <p className="p__opensans_g">г. Новороссийск, пр. Дзержинского, 221Б</p>
        <p className="p__opensans_g">8-918-053-63-63</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant">NERF ARENA</h1>
        <img src={images.logo} style={{ maxWidth: 100, maxHeight: 100 }} alt="footer_logo" />
        <p className="p__opensans_w">Место, где каждый найдет развлечение по вкусу.</p>
        <div className="app__footer-links_icons">
          <a href = 'https://vk.com/nerfnovoros'><SlSocialVkontakte style={{ minWidth: 30, minHeight: 30, marginBottom: 5 }} /></a>
          <a href = 'https://www.instagram.com/nerfnovoros/'><SlSocialInstagram /></a>
          <a href = 'https://wa.me/79180536363'><FaWhatsapp style={{ minWidth: 26, minHeight: 26, marginBottom: 7 }}/></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Часы открытия</h1>
        <p className="p__opensans_g">Будние дни:</p>
        <p className="p__opensans_g">14:00 -21:00</p>
        <p className="p__opensans_g">Выходные дни:</p>
        <p className="p__opensans_g">10:00 -22:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans_g">© 2022-2023, NERF клуб «Битва Героев»</p>
    </div>

  </div>
);

export default Footer;