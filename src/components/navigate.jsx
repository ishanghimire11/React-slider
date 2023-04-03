import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import imageArray from "./images";

function Navigate(props) {
  const {
    handleNext, handlePrevious, activeIndex, setActiveIndex,
  } = props;

  const handleIndexNavigation = (index) => setActiveIndex(index);

  return (
    <div className="navigation-container">
      <button className="arrow-button left-arrow" onClick={handlePrevious} type="button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <span>
        {imageArray.map((image, index) => (
          <button
            key={image.id}
            className={`index ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleIndexNavigation(index)}
          >
            {image.id}
          </button>
        ))}
      </span>

      <button className="arrow-button right-arrow" onClick={handleNext} type="button">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

Navigate.propTypes = {
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func,
};

export default Navigate;
