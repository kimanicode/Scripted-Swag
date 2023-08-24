import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ContentCarousel = ({ contentItems }) => {
  return (
    <Carousel showThumbs={true} showStatus={false} showArrows={true}>
      {contentItems.map((content, index) => (
        <div key={index} className="text-center ">
          {content}
        </div>
      ))}
    </Carousel>
  );
};

export default ContentCarousel;
