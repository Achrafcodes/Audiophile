import React from 'react';
import Slider from '../Slider/Slider';
import Image1 from './Home/main-banner-1.jpg';
import Image2 from './Home/main-banner.jpg';
import Mac from './Home/catbanner-01.jpg';
import Watch from './Home/catbanner-02.jpg';
import TAb from './Home/catbanner-03.jpg';
import casque from './Home/catbanner-04.jpg';
import Imges from '../Slider/Imges';
import Hero from './Home/Hero';
function Landing() {
  const images = [Image1, Image2];
  const captions = [
    '< Code smarter, not harder. Browse our collection of must-have coding tools and gear at our developer shop today />',
    '< Upgrade your coding game with our developer shop. Shop now for the latest hardware and software essentials />'
  ];

  return (
    <div className="  hero">
      <Hero />
      <div className="Landing">
        <Slider images={images} captions={captions} />
        <div className="images">
          <Imges image={Mac} name="laptops" />
          <Imges image={Watch} name="watches" />
          <Imges image={TAb} name="Tablettes" />
          <Imges image={casque} name="earPhone" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
