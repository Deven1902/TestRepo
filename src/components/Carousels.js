import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousels.css";
import Img1 from './Img1.jpg'
import Img2 from './Img2.jpg'
import Img3 from './Img3.jpg'
import Img4 from './Img4.jpg'

function Carousels() { 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{textAlign: "center"}}> 
    <h1 >#Poster_Gal</h1>
<Carousel activeIndex={index} onSelect={handleSelect} className="">
      <Carousel.Item>
        <img
          className="img_carousel"
          src={Img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carousel"
          src={Img3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img_carousel"
          src={Img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;