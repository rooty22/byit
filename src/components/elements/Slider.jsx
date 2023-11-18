import React from 'react'
import { Carousel } from 'react-bootstrap';

// Import Image
const Slid1 = '/media/slid1.jpg'
const Slid2 = '/media/slid2.jpg'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
            <h2>منصة البيت للرعاية الطبية المنزلية</h2>
            <h4>نرعاك_من_البيت</h4>
        </Carousel.Caption>
        <img
        className="d-block w-100"
        src={Slid1}
        alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
            <h2>منصة البيت للرعاية الطبية المنزلية</h2>
            <h4>نرعاك_من_البيت</h4>
        </Carousel.Caption>
        <img
        className="d-block w-100"
        src={Slid2}
        alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider
