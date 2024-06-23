import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import im1 from "../asset/1im.jpg";
import im2 from "../asset/2im.jpg";
import im3 from "../asset/3im.jpg";

function UncontrolledExample() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 180000); // 3 minutes in milliseconds

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgStyle = {
    height: "20vw", // Maintain aspect ratio
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im1}
          alt="First slide"
          style={imgStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
          style={imgStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
          style={imgStyle}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
