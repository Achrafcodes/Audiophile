function SlideImage({ image, caption, isVisible }) {
  return (
    <div
      className="SlideImage"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <img src={image} alt="" className="imageStyle" />
      <div className="CaptionsStyle">
        <h1>{caption}</h1>
      </div>
    </div>
  );
}
// test
export default SlideImage;
