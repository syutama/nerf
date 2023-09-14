import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#D9184B' }}>{title}</p>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__wrapper app__bg2 section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Our Features" />
      <h1 className="headtext__cormorant">Почему нерф</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.elite20} alt="elite20_img" />
    </div>
  </div>
);

export default Laurels;