import React from 'react';
import Slider from './Slider';
import Image1 from './Home/main-banner-1.jpg';
import Image2 from './Home/main-banner.jpg';

function App() {
  const images = [Image1, Image2, Image2];
  const captions = ['Imagedsfadfds 1 text', 'Image 2 dsfsdtext'];

  return (
    <div className="App">
      <Slider images={images} captions={captions} />
    </div>
  );
}

export default App;
