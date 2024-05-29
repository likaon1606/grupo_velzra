import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slideImages from './slideImages';
import './carouselClients.css';

const CarouselClients = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay
      infiniteLoop
      centerMode
      centerSlidePercentage={33.33}
      interval={2000}
    >
      {slideImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselClients;
