import React from 'react';
import Slider from './Slider';
import Image1 from './Home/main-banner-1.jpg';
import Image2 from './Home/main-banner.jpg';

function App() {
  const images = [Image1, Image2];
  const captions = [
    '< Code smarter, not harder. Browse our collection of must-have coding tools and gear at our developer shop today />',
    '< Upgrade your coding game with our developer shop. Shop now for the latest hardware and software essentials />'
  ];

  return (
    <div className="App">
      <Slider images={images} captions={captions} />
    </div>
  );
}

export default App;
