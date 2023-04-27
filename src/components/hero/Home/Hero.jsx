import React from 'react';
import uli1 from '../Home/undraw_coding_re_iv62.svg';
import uli2 from '../Home/undraw_coding_re_iv62.svg';
import uli3 from '../Home/undraw_programming_re_kg9v.svg';
export default function Hero() {
  return (
    <div>
      {' '}
      <div className="main-landing">
        <div className="texts">
          <h1 className="tittle">
            Power Up Your Projects with the{' '}
            <span className="span">Best Developer Tools and Resources</span>
          </h1>{' '}
          <p className="discription">
            Find the electronics and gadgets you need to take your coding skills
            to the next level at our developer store. From laptops to keyboards
            to monitors, we've got you covered. Shop now and get ready to code
            like a pro!
          </p>
          <button>Shop now</button>
        </div>
        {/* <img className="hero-imgs" src={uli1} alt="" />
        {/* <img className="hero-imgs" src={uli2} alt="" /> */}
        <img className="hero-imgs" src={uli3} alt="" />
      </div>
    </div>
  );
}
