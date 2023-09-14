import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Подписывайтесь на наши соцсети</h1>
      <p className="p__opensans_w">Чтобы никогда не пропускать наши новые события!</p>
    </div>
  </div>
);

export default Newsletter;