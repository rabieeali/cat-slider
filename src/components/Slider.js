import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from "./ImageSlider";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((res) => res.json())
      .then((json) => setSlides(json));
  }, []);

  const handleRight = () => {
    const current = cursor + 1 < slides.length ? cursor + 1 : 0;
    setCursor(current);
  };
  const handleLeft = () => {
    const current = cursor - 1 < 0 ? slides.length - 1 : cursor - 1;
    setCursor(current);
  };
  return (
    <div className="container">
      <div className="row mt-5 text-center m-auto">
        <div style={{ marginTop: "150px" }} className="col">
          <ArrowLeft handleClick={handleLeft} />
        </div>
        <div className="col">
          <ImageSlider data={slides[cursor]} />
        </div>
        <div style={{ marginTop: "150px" }} className="col">
          <ArrowRight handleClick={handleRight} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
