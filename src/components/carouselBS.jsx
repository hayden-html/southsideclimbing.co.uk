import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} touch={true} 
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/carousel-1.jpg"
          alt="A young white adult reaching for a hold on a rock, the sea and the rest of portland in the background"
        />
                <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/carousel-2.jpg"
          alt="A young white adult reaching for a hold on a rock, the sea and the rest of portland in the background"
        />
                <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

<Carousel.Item>
        <img
          className="d-block w-100"
          src="/media/carousel-3.jpg"
          alt="A young white adult reaching for a hold on a rock, the sea and the rest of portland in the background"
        />
                <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}