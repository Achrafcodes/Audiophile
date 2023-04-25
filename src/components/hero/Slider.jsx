import React, { useState, useEffect } from 'react';
import './slideStyle.css';
import SlideImage from './SlideImage';
/**
 * A slider component that displays a series of images and
 * associated captions in a sliding carousel.
 * tf
 * @param {Array} images - An array of image URLs to be displayed in the slider.
 * @param {Array} captions - An array of captions to be displayed with each image.
 * @param {number} interval - The interval (in milliseconds) at which the slider
 * should automatically advance to the next image.
//  */
function Slider({ images, captions, interval = 10000 }) {
  // State variables to keep track of the current image index and caption
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // A useEffect hook to update the slider at the specified interval
  useEffect(() => {
    // Set up an interval that updates the image and caption every `interval` milliseconds
    const intervalId = setInterval(() => {
      // Calculate the index of the next image and caption
      const nextIndex = (currentImageIndex + 1) % images.length;

      // Update the state variables with the new index and caption
      setCurrentImageIndex(nextIndex);
    }, interval);

    // Clean up the interval when the component is unmounted or when dependencies change
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, interval]);

  // Render the slider
  return (
    <div className="slidesContainer">
      <div className="containerStyle">
        {/* Map over the images array and create a SlideImage component for each image */}
        {images.map((image, index) => (
          <SlideImage
            key={index}
            image={image}
            caption={captions[currentImageIndex]}
            isVisible={currentImageIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
