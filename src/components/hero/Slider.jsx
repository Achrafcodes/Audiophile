import React, { useState, useEffect } from 'react';
import './slideStyle.css';
/**
 * A slider component that displays a series of images and
 * associated captions in a sliding carousel.
 *
 * @param {Array} images - An array of image URLs to be displayed in the slider.
 * @param {Array} captions - An array of captions to be displayed with each image.
 * @param {number} interval - The interval (in milliseconds) at which the slider
 * should automatically advance to the next image.
 */
function Slider({ images, captions, interval = 5000 }) {
  // State variables to keep track of the current image index and caption
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCaption, setCurrentCaption] = useState(captions[0]);

  // A useEffect hook to update the slider at the specified interval
  useEffect(() => {
    // Set up an interval that updates the image and caption every `interval` milliseconds
    const intervalId = setInterval(() => {
      // Calculate the index of the next image and caption
      const nextIndex = (currentImageIndex + 1) % images.length;

      // Update the state variables with the new index and caption
      setCurrentImageIndex(nextIndex);
      setCurrentCaption(captions[nextIndex]);
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, interval, captions]);

  // The style object for the image container element
  const containerStyle = {
    display: 'flex',
    width: `${images.length}00%`, // Set the width to fit all images
    transform: `translateX(-${currentImageIndex}00%)`, // Slide to the current image
    transition: 'transform 1s ease-in-out' // Add a transition for the sliding animation
  };
  console.log(images);
  // The style object for the caption element
  return (
    <div className="slidesContainer">
      {images.map(image => {
        return <img style={containerStyle} src={image} alt="" />;
      })}
      {captions.map(cap => {
        return <h1 className="dark">{cap}</h1>;
      })}{' '}
    </div>
  );
}

export default Slider;
