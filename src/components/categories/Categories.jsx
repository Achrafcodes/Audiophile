import React from 'react';
import SlideImage from '../Slider/Slider';
import Image1 from '../hero/Home/main-banner-1.jpg';
import Image2 from '../hero/Home/main-banner.jpg';
import Mac from '../hero/Home/catbanner-01.jpg';

import Watch from '../hero/Home/catbanner-02.jpg';
import TAb from '../hero/Home/catbanner-03.jpg';
import casque from '../hero/Home/catbanner-04.jpg';
import Imges from '../Slider/Imges';
// src/components/Categories.js
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/ProductSlice';

// Import the category images

function Categories() {
  // Get the dispatch function
  let navigate = useNavigate();
  // Create a function to handle category clicks
  const handleCategoryClick = categoryName => {
    // Dispatch the selectCategory action with the selected category name
    navigate('/productlist');
  };

  return (
    <div>
      {/* Render the category images and names */}
      <div className="category" onClick={() => handleCategoryClick('Laptops')}>
        <img src={Mac} alt="Laptops" />
        <p>Laptops</p>
      </div>
      <div className="category" onClick={() => handleCategoryClick('Watches')}>
        <img src={Watch} alt="Watches" />
        <p>Watches</p>
      </div>
      <div className="category" onClick={() => handleCategoryClick('Tablets')}>
        <img src={TAb} alt="Tablets" />
        <p>Tablets</p>
      </div>
      <div
        className="category"
        onClick={() => handleCategoryClick('Earphones')}
      >
        <img src={casque} alt="Earphones" />
        <p>Earphones</p>
      </div>
    </div>
  );
}

export default Categories;
