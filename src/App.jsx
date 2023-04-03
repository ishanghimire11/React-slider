/* eslint-env-browser */
import { useState } from "react";
import Slider from "./components/slider";
import Navigate from "./components/navigate";
import imageArray from "./components/images";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    const isFirstIndex = activeIndex === 0;
    const newIndex = isFirstIndex ? imageArray.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const isLastIndex = activeIndex === imageArray.length - 1;
    const newIndex = isLastIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="App">
      <Navigate
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Slider activeIndex={activeIndex} />
    </div>
  );
}

export default App;
