
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ContentCarousel = ({ contentItems }) => {
  return (
    <Carousel

      showThumbs={false} 
      showStatus={false} 
      showArrows={true} 
      autoPlay={true}
      interval={5000}
    >
      {contentItems.map((content, index) => (
        <div key={index} className="text-center ">
          {content}
        </div>
      ))}
    </Carousel>
  );
};

export default ContentCarousel;
