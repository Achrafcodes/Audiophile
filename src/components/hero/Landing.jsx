import React from 'react';
import Banner from './Banners';
import catbanner from './Home/catbanner-01.jpg';
import WatchBanner from './Home/catbanner-02.jpg';
import EarpodBanner from './Home/catbanner-03.jpg';
import PhoneBanner from './Home/catbanner-04.jpg';

import './Landing.css';
function Landing() {
  return (
    <div className="hero">
      <div className="main-banner">
        <h1>testoo</h1>
      </div>
      <ul className="image-list">
        <li>
          <Banner backgroundImage={catbanner} h1="hello world" />
        </li>
        <li>
          {' '}
          <Banner backgroundImage={catbanner} h1="hello world" />
        </li>
        <li>
          {' '}
          <Banner backgroundImage={catbanner} h1="hello world" />
        </li>
        <li>
          {' '}
          <Banner backgroundImage={catbanner} h1="hello world" />
        </li>
      </ul>
    </div>
  );
}

export default Landing;
