import React from 'react';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import Raspiska_NERF from './Raspiska_NERF.docx';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const handleDownload = () => {
    saveAs(Raspiska_NERF, 'Raspiska_NERF.docx');
  };
  return(
  <div className="app__aboutus app__bg1 flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.bat} alt="bat_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Что такое нерф</h1>
        <p className="p__opensans_g">NERF - это принципиально новая стрелялка, которая отличается от пейнтбола и лазертага высоким уровнем безопасности. Поэтому играть могут дети от пяти лет.
О безопасности игры можно не волноваться, поскольку пульки не оставляют после себя синяков и следов краски, которые очень проблематично выводить из ткани.
Для того, чтобы ребенок мог играть у нас, необходимо либо сопровождение взрослого, либо же письменное разрешение.</p>
        <button type="button" className="custom__button" onClick={handleDownload}>Письменное разрешение</button>
      </div>

      <div className="app__aboutus-space flex__center">
        <p style={{ width: 146 }}></p>
      </div>

      <div className="app__aboutus-content_features">
        <h1 className="headtext__cormorant">Особенности игры</h1>
        <p className="p__opensans_g">Можно выбрать сценарий, по которому играть. Предлагаем как легкие задания для тех, кто только начинает, так и миссии повышенной сложности.
Для того, чтобы еще больше погрузиться в игру и гарантировать высокий уровень безопасности, мы предлагаем специальную амуницию. Обязательный элемент - маска, которую ребенок не снимает до окончания схватки.
Игру контролирует опытный инструктор.</p>
        <Link to="/scripts">
        <button type="button" className="custom__button">Сценарии игры</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;