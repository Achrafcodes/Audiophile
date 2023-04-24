import React, { useState, useEffect } from 'react';

function ImageSlider({ images, slideInterval }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, []);

  const imgStyle = {
    width: `${100 / images.length}%`,
    transition: 'transform 1s ease',
    transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`
  };

  return (
    <div className="imgContainer" style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex' }}>
        {images.map((image, index) => (
          <img src={image} alt="" style={imgStyle} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
