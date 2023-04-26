import React from 'react';
import Slider from './Slider';
import Image1 from './Home/main-banner-1.jpg';
import Image2 from './Home/main-banner.jpg';
import Mac from './Home/catbanner-01.jpg';
import Watch from './Home/catbanner-02.jpg';
import TAb from './Home/catbanner-03.jpg';
import casque from './Home/catbanner-04.jpg';
import Imges from './Imges';
function Landing() {
  const images = [Image1, Image2];
  const captions = [
    '< Code smarter, not harder. Browse our collection of must-have coding tools and gear at our developer shop today />',
    '< Upgrade your coding game with our developer shop. Shop now for the latest hardware and software essentials />'
  ];

  return (
    <div className="hero">
      <div className="Landing">
        <Slider images={images} captions={captions} />
        <div className="images">
          <Imges image={Mac} name="laptops" />
          <Imges image={Watch} name="watches" />
          <Imges image={TAb} name="Tablettes" />
          <Imges image={casque} name="earPhone" />
        </div>
      </div>
      <div className=" texts">
        <h1 className="tittle">
          "Power Up Your Projects with the{' '}
          <span className="span">Best Developer Tools and Resources</span>"
        </h1>{' '}
        <p className="discription">
          Find the electronics and gadgets you need to take your coding skills
          to the next level at our developer store. From laptops to keyboards to
          monitors, we've got you covered. Shop now and get ready to code like a
          pro!
        </p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Landing;
