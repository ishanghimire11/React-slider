import PropTypes from "prop-types";
import imageArray from "./images";

function Slider(props) {
  const { activeIndex } = props;

  const sliderStyle = {
    backgroundImage: `url(${imageArray[activeIndex].url})`,
  };


  return <div className="slider-image-container" style={sliderStyle} />;
}

Slider.propTypes = {
  activeIndex: PropTypes.number,
};

export default Slider;
